#!/usr/bin/env node
// Weekly LLM citation tracker for agenticai.associates — free tier.
//
// What it does:
//   Probes Gemini (Google's LLM) with Google Search grounding enabled, then
//   checks whether agenticai.associates appears in the grounded sources or
//   the generated answer. Writes a dated markdown report.
//
// Why Gemini with grounding:
//   - Free tier: no credit card, ~15 RPM / 1M TPM is plenty for weekly probes
//   - Google Search grounding returns the exact URLs Gemini is willing to cite
//   - Google AI Overviews use closely related retrieval — Gemini citation
//     correlates well with AI Overview visibility
//   - ChatGPT uses Bing, Perplexity uses its own index — this is specifically
//     the Google/AIO signal and should be read as one of three LLM surfaces
//
// Setup (one-off, free):
//   1. Go to https://aistudio.google.com/apikey
//   2. Create API key (no credit card required)
//   3. export GEMINI_API_KEY=...
//   4. node scripts/llm-citation-tracker.mjs
//
// Bing/ChatGPT signal (also free, manual):
//   Use the gsc-sunnypat81 or bing-webmaster MCP to pull query data for
//   agenticai.associates — shows which queries Bing is already showing the
//   site for, which is the closest proxy to ChatGPT citation opportunity.

import fs from 'node:fs';
import path from 'node:path';

const DOMAIN = 'agenticai.associates';
const REPORT_DIR = 'G:/My Drive/SEO/ai-citations';
const TODAY = new Date().toISOString().slice(0, 10);
const MODEL = 'gemini-2.0-flash';

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

const KEY = process.env.GEMINI_API_KEY;

function citedIn(text, domain) {
  if (!text) return false;
  return text.toLowerCase().includes(domain.toLowerCase());
}

async function probe(query) {
  if (!KEY) return { skip: true, reason: 'no GEMINI_API_KEY' };
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${KEY}`;
  const body = {
    contents: [{ role: 'user', parts: [{ text: query }] }],
    tools: [{ google_search: {} }],
  };
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const text = await res.text();
      return { skip: true, reason: `HTTP ${res.status}: ${text.slice(0, 120)}` };
    }
    const json = await res.json();
    const cand = json?.candidates?.[0];
    const answer = cand?.content?.parts?.map((p) => p.text).filter(Boolean).join('\n') || '';
    const meta = cand?.groundingMetadata || {};
    const chunks = (meta.groundingChunks || []).map((c) => c?.web?.uri).filter(Boolean);
    const queries = meta.webSearchQueries || [];
    const citedInAnswer = citedIn(answer, DOMAIN);
    const citedInSources = chunks.some((u) => citedIn(u, DOMAIN));
    return {
      skip: false,
      citedInAnswer,
      citedInSources,
      answerSnippet: answer.slice(0, 240).replace(/\s+/g, ' '),
      sources: chunks.slice(0, 10),
      fanOut: queries.slice(0, 5),
    };
  } catch (e) {
    return { skip: true, reason: e.message };
  }
}

async function main() {
  if (!fs.existsSync(REPORT_DIR)) fs.mkdirSync(REPORT_DIR, { recursive: true });

  const rows = [];
  let cited = 0;
  let probed = 0;

  for (let i = 0; i < QUERIES.length; i++) {
    const q = QUERIES[i];
    process.stdout.write(`[${i + 1}/${QUERIES.length}] ${q} ... `);
    const r = await probe(q);
    const cell = r.skip
      ? `SKIP (${r.reason})`
      : r.citedInAnswer || r.citedInSources ? 'CITED' : 'not cited';
    if (!r.skip) probed++;
    if (!r.skip && (r.citedInAnswer || r.citedInSources)) cited++;
    rows.push({ query: q, r, cell });
    console.log(cell);
    // Free tier is ~15 RPM; pace ourselves generously
    if (i < QUERIES.length - 1) await new Promise((res) => setTimeout(res, 4500));
  }

  const lines = [];
  lines.push(`# LLM Citation Tracker — ${DOMAIN}`);
  lines.push('');
  lines.push(`**Date:** ${TODAY}`);
  lines.push(`**Model:** ${MODEL} (with Google Search grounding)`);
  lines.push(`**Queries probed:** ${probed} / ${QUERIES.length}`);
  lines.push(`**Citations:** ${cited} / ${probed}`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push('| Query | Result |');
  lines.push('| --- | --- |');
  for (const row of rows) lines.push(`| ${row.query} | ${row.cell} |`);
  lines.push('');
  lines.push('## Per-query detail');
  lines.push('');
  for (const row of rows) {
    if (row.r.skip) continue;
    lines.push(`### ${row.query}`);
    lines.push('');
    lines.push(`**Cited:** answer=${row.r.citedInAnswer} sources=${row.r.citedInSources}`);
    lines.push('');
    if (row.r.answerSnippet) {
      lines.push(`> ${row.r.answerSnippet}`);
      lines.push('');
    }
    if (row.r.fanOut?.length) {
      lines.push(`**Gemini's sub-queries (fan-out):**`);
      row.r.fanOut.forEach((q) => lines.push(`- ${q}`));
      lines.push('');
    }
    if (row.r.sources?.length) {
      lines.push(`**Grounded sources:**`);
      row.r.sources.forEach((u, i) => {
        const mark = citedIn(u, DOMAIN) ? ' ← US' : '';
        lines.push(`${i + 1}. ${u}${mark}`);
      });
      lines.push('');
    }
  }

  const out = path.join(REPORT_DIR, `${DOMAIN}_${TODAY}.md`);
  fs.writeFileSync(out, lines.join('\n'), 'utf8');
  console.log(`\nReport: ${out}`);
  console.log(`Citations: ${cited} / ${probed}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
