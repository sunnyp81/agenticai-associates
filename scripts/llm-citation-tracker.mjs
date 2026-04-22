#!/usr/bin/env node
// Weekly LLM citation tracker for agenticai.associates
//
// What it does:
//   Probes Perplexity and Bing web search for buyer-intent queries, records
//   whether agenticai.associates appears in the results, and writes a dated
//   markdown report to G:/My Drive/SEO/ai-citations/.
//
// Why Perplexity + Bing:
//   - Perplexity returns its live citation set — the same signal ChatGPT uses
//   - Bing is ChatGPT's retrieval backend, so Bing rank ~= future ChatGPT citation
//   - ChatGPT has no public API for citation probing
//
// Usage:
//   export PERPLEXITY_API_KEY=pplx-...         (https://perplexity.ai/settings/api)
//   export BING_SEARCH_KEY=...                  (Bing Web Search v7; optional)
//   node scripts/llm-citation-tracker.mjs
//
// No keys: script still runs, flags missing probes as SKIP, writes what it has.

import fs from 'node:fs';
import path from 'node:path';

const DOMAIN = 'agenticai.associates';
const REPORT_DIR = 'G:/My Drive/SEO/ai-citations';
const TODAY = new Date().toISOString().slice(0, 10);

const QUERIES = [
  'best UK agentic AI consultancy',
  'best UK AI consultancy for IoT telecoms automation',
  'AI consultant UK for SaaS churn and retention',
  'AI consultant UK fintech KYC automation',
  'AI consultant UK insurance claims automation',
  'AI consultant UK logistics fleet automation',
  'AI consultant UK energy utilities smart meter analytics',
  'AI consultant UK pharma regulatory documents',
  'AI consultant UK construction bid automation',
  'AI consultant UK hospitality revenue management',
  'AI consultant UK media publishing editorial automation',
  'AI consultant UK professional services proposal automation',
  'AI consultant UK automotive dealer F&I compliance',
  'AI consultant UK charities fundraising operations',
  'agentic AI vs RPA UK',
  'agentic AI vs chatbots UK',
  'in-house AI team vs consultancy UK cost',
  'build vs buy AI agents enterprise',
  'what does an AI readiness assessment cost UK',
];

const PERPLEXITY_KEY = process.env.PERPLEXITY_API_KEY;
const BING_KEY = process.env.BING_SEARCH_KEY;

function citedIn(text, domain) {
  if (!text) return false;
  return text.toLowerCase().includes(domain.toLowerCase());
}

async function probePerplexity(query) {
  if (!PERPLEXITY_KEY) return { skip: true, reason: 'no PERPLEXITY_API_KEY' };
  try {
    const res = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${PERPLEXITY_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'sonar',
        messages: [
          { role: 'system', content: 'Be precise and concise. Return your answer with the source links you would cite.' },
          { role: 'user', content: query },
        ],
      }),
    });
    if (!res.ok) return { skip: true, reason: `HTTP ${res.status}` };
    const json = await res.json();
    const answer = json?.choices?.[0]?.message?.content || '';
    const citations = json?.citations || [];
    const citedInAnswer = citedIn(answer, DOMAIN);
    const citedInSources = citations.some((c) => citedIn(c, DOMAIN));
    return {
      skip: false,
      citedInAnswer,
      citedInSources,
      answerSnippet: answer.slice(0, 200).replace(/\n/g, ' '),
      citations: citations.slice(0, 10),
    };
  } catch (e) {
    return { skip: true, reason: e.message };
  }
}

async function probeBing(query) {
  if (!BING_KEY) return { skip: true, reason: 'no BING_SEARCH_KEY' };
  try {
    const url = `https://api.bing.microsoft.com/v7.0/search?q=${encodeURIComponent(query)}&mkt=en-GB&count=10`;
    const res = await fetch(url, { headers: { 'Ocp-Apim-Subscription-Key': BING_KEY } });
    if (!res.ok) return { skip: true, reason: `HTTP ${res.status}` };
    const json = await res.json();
    const results = json?.webPages?.value || [];
    let rank = -1;
    for (let i = 0; i < results.length; i++) {
      if (citedIn(results[i].url, DOMAIN)) { rank = i + 1; break; }
    }
    return {
      skip: false,
      rank: rank > 0 ? rank : null,
      top5: results.slice(0, 5).map((r, i) => `${i + 1}. ${r.url}`),
    };
  } catch (e) {
    return { skip: true, reason: e.message };
  }
}

async function main() {
  if (!fs.existsSync(REPORT_DIR)) fs.mkdirSync(REPORT_DIR, { recursive: true });

  const rows = [];
  let perplexityCites = 0;
  let bingRanked = 0;
  let probed = 0;

  for (const q of QUERIES) {
    process.stdout.write(`[${QUERIES.indexOf(q) + 1}/${QUERIES.length}] ${q} ... `);
    const [pplx, bing] = await Promise.all([probePerplexity(q), probeBing(q)]);

    const pplxCell = pplx.skip
      ? `SKIP (${pplx.reason})`
      : pplx.citedInAnswer || pplx.citedInSources ? 'CITED' : 'not cited';
    const bingCell = bing.skip
      ? `SKIP (${bing.reason})`
      : bing.rank ? `rank ${bing.rank}` : 'not in top 10';

    if (!pplx.skip && (pplx.citedInAnswer || pplx.citedInSources)) perplexityCites++;
    if (!bing.skip && bing.rank) bingRanked++;
    if (!pplx.skip || !bing.skip) probed++;

    rows.push({ query: q, pplx, bing, pplxCell, bingCell });
    console.log(`pplx=${pplxCell} | bing=${bingCell}`);
  }

  const lines = [];
  lines.push(`# LLM Citation Tracker — ${DOMAIN}`);
  lines.push('');
  lines.push(`**Date:** ${TODAY}`);
  lines.push(`**Queries probed:** ${QUERIES.length}`);
  lines.push(`**Perplexity citations:** ${perplexityCites} / ${QUERIES.length}`);
  lines.push(`**Bing top-10 ranks:** ${bingRanked} / ${QUERIES.length}`);
  lines.push('');
  lines.push('## Summary table');
  lines.push('');
  lines.push('| Query | Perplexity | Bing |');
  lines.push('| --- | --- | --- |');
  for (const r of rows) lines.push(`| ${r.query} | ${r.pplxCell} | ${r.bingCell} |`);
  lines.push('');
  lines.push('## Perplexity answer snippets and citations');
  lines.push('');
  for (const r of rows) {
    if (r.pplx.skip) continue;
    lines.push(`### ${r.query}`);
    lines.push('');
    lines.push(`**Cited:** answer=${r.pplx.citedInAnswer} sources=${r.pplx.citedInSources}`);
    lines.push('');
    lines.push(`> ${r.pplx.answerSnippet}`);
    lines.push('');
    if (r.pplx.citations?.length) {
      lines.push('**Citations:**');
      r.pplx.citations.forEach((c, i) => lines.push(`${i + 1}. ${c}`));
      lines.push('');
    }
  }
  lines.push('## Bing top-5 per query');
  lines.push('');
  for (const r of rows) {
    if (r.bing.skip) continue;
    lines.push(`### ${r.query}`);
    lines.push('');
    (r.bing.top5 || []).forEach((l) => lines.push(`- ${l}`));
    lines.push('');
  }

  const out = path.join(REPORT_DIR, `${DOMAIN}_${TODAY}.md`);
  fs.writeFileSync(out, lines.join('\n'), 'utf8');
  console.log(`\nReport: ${out}`);
  console.log(`Perplexity ${perplexityCites}/${QUERIES.length} | Bing top-10 ${bingRanked}/${QUERIES.length} | probes run: ${probed}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
