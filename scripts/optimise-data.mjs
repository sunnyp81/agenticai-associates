// One-shot script: applies AI-citation + semantic-SEO rewrites to data files.
// Per Apr 24 audit: TL;DR-first intros, question-form section headings,
// definedTerm blocks, FAQ population for missing services.
//
// Run from repo root: node scripts/optimise-data.mjs
// Idempotent — re-runs do not duplicate.

import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(import.meta.dirname, '..');
const WWD_PATH = path.join(ROOT, 'src/data/what-we-do.json');
const IND_PATH = path.join(ROOT, 'src/data/industries.json');

const wwd = JSON.parse(fs.readFileSync(WWD_PATH, 'utf8'));
const ind = JSON.parse(fs.readFileSync(IND_PATH, 'utf8'));

// ─────────────────────────────────────────────────────────────────────
// SERVICE REWRITES (what-we-do.json)
// ─────────────────────────────────────────────────────────────────────

const serviceRewrites = {
  'agentic-ai': {
    intro: `<p><strong>Agentic AI is a class of AI systems that take sequences of actions autonomously to complete multi-step business tasks</strong> — using tools, querying data, making decisions, and verifying their own work, rather than waiting for a human prompt at every step. We build agentic systems for UK mid-market businesses that deliver measurable workflow outcomes inside 90 days.</p><p>Most pilots ship a working agent in production within 8–12 weeks. We start every engagement with an <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> (£6,500, 3 weeks) to scope the highest-ROI workflow before any build work.</p>`,
    sections: [
      { heading: 'What is agentic AI, and how is it different from chatbots?', body: null },
      { heading: 'How do you build production-grade agentic systems?', body: null },
      { heading: 'Where does agentic AI deliver the most ROI?', body: null },
      { heading: 'How do you keep agentic systems safe and auditable?', body: null },
    ],
    definedTerm: {
      term: 'Agentic AI',
      definition: 'A class of AI systems that take sequences of actions autonomously to complete multi-step business tasks — using tools, querying data, making decisions, and verifying their own work — rather than waiting for a human prompt at every step.',
      sameAs: [
        'https://en.wikipedia.org/wiki/Intelligent_agent',
      ],
    },
    faq: [
      {
        question: 'What is agentic AI in plain English?',
        answer: 'Agentic AI describes AI systems that act autonomously — they read data, use tools, make decisions, and verify results across multi-step workflows, rather than just answering one prompt at a time. A chatbot answers a single question. An agent triages 200 inbox enquiries, looks up CRM records, drafts replies, and routes the difficult ones to a human reviewer — without you asking each time.',
      },
      {
        question: 'How long does an agentic AI project take to deliver?',
        answer: 'Most pilots ship a working agent in production within 8–12 weeks. We start with a 3-week AI Readiness Assessment (£6,500) to scope the highest-ROI workflow, then a Phase 2 build at £850 per day for 3–6 months for embedded delivery.',
      },
      {
        question: 'How do you stop agentic systems from going rogue or making bad decisions?',
        answer: 'Every agent we build ships with three controls: (1) tight tool scoping so the agent can only call the APIs you approve, (2) human-in-the-loop checkpoints on irreversible actions like sending external emails or making payments, and (3) eval harnesses that score every agent decision against a labelled test set before and after deployment. We do not deploy agents with full autonomy on customer-facing or financial actions without explicit sign-off.',
      },
      {
        question: 'What ROI should I expect from agentic AI?',
        answer: 'Realistic ROI for inbox triage, document extraction, or vendor-onboarding agents is 40–70% reduction in human handling time within the first 90 days post-launch. We benchmark every project against a baseline measured during the assessment phase, so you can attribute the saving to the agent rather than guess.',
      },
      {
        question: 'Is my business ready for agentic AI?',
        answer: 'You are ready if you have a repetitive multi-step process that involves looking up data, applying rules, and producing an output — and that process has clear definitions of "right" and "wrong" outcomes. You are not ready if the workflow depends on tacit human judgement that has never been written down. Our AI Readiness Assessment maps both sides of that line.',
      },
      {
        question: 'Can agentic AI work with our existing tools and systems?',
        answer: 'Yes. Agents we build integrate over standard APIs (REST, GraphQL), file-based connectors (S3, SharePoint, Google Drive), and direct database connections (Postgres, SQL Server). We have integrated agents with Salesforce, HubSpot, NetSuite, Microsoft Dynamics, Xero, and most major ITSM and EHR systems used in UK mid-market.',
      },
    ],
  },

  'ai-readiness-assessment': {
    intro: `<p><strong>An AI Readiness Assessment is a fixed-fee, 3-week engagement that audits your data, processes, team capability, and governance posture, then delivers a board-ready roadmap of the highest-ROI AI use cases ranked by feasibility and impact.</strong> The fee is £6,500. The deliverable is a written diagnostic plus a 90-minute walkthrough with the leadership team.</p><p>Most AI projects fail because nobody checked whether the business was ready before writing the proposal. The Assessment is the answer to that — and it is always our Phase 1 entry point before any <a href="/what-we-do/agentic-ai/">agentic AI</a>, <a href="/what-we-do/ai-automation/">automation</a>, or <a href="/what-we-do/generative-ai/">generative AI</a> build work.</p>`,
    sections: [
      { heading: 'What does an AI Readiness Assessment actually cover?', body: null },
      { heading: 'How does the 3-week assessment work, week by week?', body: null },
      { heading: 'Which businesses get the most value from this assessment?', body: null },
      { heading: 'What deliverables do you walk away with?', body: null },
    ],
    definedTerm: {
      term: 'AI Readiness Assessment',
      definition: 'A 3-week fixed-fee diagnostic that audits a business\'s data, processes, team capability, and governance posture, then delivers a ranked roadmap of the highest-ROI AI use cases. Costs £6,500 and produces a written deliverable plus a leadership walkthrough.',
    },
    faq: null,
  },

  'ai-strategy': {
    intro: `<p><strong>AI strategy is a written plan that maps your business priorities to specific, sequenced AI investments — defining what to build, when, why, and what success looks like in pounds and hours saved.</strong> We deliver AI strategies as a fixed-scope 4–6 week engagement, output to board level, with explicit ROI projections and risk registers per initiative.</p><p>Most AI projects fail because there was never a real plan, just a tool selection. We start every strategy engagement with an <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> (£6,500, 3 weeks) to ground the plan in actual operational reality before strategy work begins.</p>`,
    sections: [
      { heading: 'Why do you need an AI strategy before building anything?', body: null },
      { heading: 'How does our AI strategy process work?', body: null },
      { heading: 'Who is this AI strategy engagement for?', body: null },
      { heading: 'What strategy deliverables do you walk away with?', body: null },
    ],
    definedTerm: {
      term: 'AI Strategy',
      definition: 'A written plan that maps a business\'s priorities to specific sequenced AI investments — defining what to build, when, why, and what success looks like in measurable terms. Typically delivered as a fixed-scope 4–6 week engagement at board level.',
    },
    faq: null,
  },

  'ai-automation': {
    intro: `<p><strong>AI automation is the use of machine learning, large language models, and rules engines to take repetitive multi-step processes off humans and run them end-to-end with measurable accuracy and audit trails.</strong> Typical projects pay back inside 6 months and reduce human handling time on the targeted workflow by 40–70%.</p><p>Most businesses lose thousands of hours each year on tasks that machines can handle faster and more accurately. We help you identify the right processes to automate, then build, deploy, and monitor solutions that stick. Engagements start with an <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> (£6,500, 3 weeks) to rank candidate workflows by feasibility and ROI.</p>`,
    sections: [
      { heading: 'What does AI automation actually look like in practice?', body: null },
      { heading: 'How do you deliver AI automation projects end-to-end?', body: null },
      { heading: 'How do you scale AI automation across an organisation?', body: null },
      { heading: 'What are the most common AI automation use cases in UK mid-market?', body: null },
    ],
    definedTerm: {
      term: 'AI Automation',
      definition: 'The use of machine learning, large language models, and rules engines to take repetitive multi-step business processes off humans and run them end-to-end with measurable accuracy and full audit trails. Typical UK mid-market projects pay back inside 6 months.',
    },
    faq: [
      {
        question: 'What kinds of business processes are good candidates for AI automation?',
        answer: 'Processes that are repetitive, rules-based, involve structured or semi-structured data, and have a defined "correct" output. Strong candidates include invoice processing, customer enquiry triage, document extraction (KYC, contracts, claims), data entry between systems, and report generation. Weak candidates are processes that require nuanced human judgement on novel situations.',
      },
      {
        question: 'How long does an AI automation project take to deliver?',
        answer: 'Most automation projects ship a working production system inside 8–12 weeks for a single workflow. The 3-week AI Readiness Assessment (£6,500) defines scope first; Phase 2 build runs at £850 per day for embedded delivery.',
      },
      {
        question: 'What ROI is realistic from AI automation?',
        answer: 'For document-heavy workflows (claims, invoices, KYC) we typically see 40–70% reduction in handling time and 90%+ first-pass accuracy within the first 90 days. Pure-rules processes can hit 95%+ automation rates. Workflows with high judgement content land lower (20–40%) but free human time for higher-value work.',
      },
      {
        question: 'Will AI automation replace my staff?',
        answer: 'No, almost never. The economic case for automation in UK mid-market is reclaiming time from constrained teams who already cannot keep up with volume — not headcount reduction. We design automation to handle the high-volume / low-judgement portion so humans can focus on exceptions, customer relationships, and growth work.',
      },
      {
        question: 'How do you handle errors and exceptions in automated workflows?',
        answer: 'Every automation we build includes (1) confidence-scored outputs so low-confidence cases are routed to humans, (2) full audit logging of every decision the system made and why, (3) regression test suites that catch model or rule drift before it reaches production, and (4) alerting when error rates exceed defined thresholds.',
      },
      {
        question: 'What systems can your AI automation integrate with?',
        answer: 'We build over standard interfaces: REST APIs, webhooks, file-based connectors (SFTP, S3, SharePoint, Drive), direct database access (Postgres, SQL Server, MySQL), and message queues (RabbitMQ, SQS). Common integrated platforms include Salesforce, HubSpot, NetSuite, Microsoft Dynamics, Xero, Sage, ServiceNow, and Zendesk.',
      },
    ],
  },

  'generative-ai': {
    intro: `<p><strong>Generative AI is a class of machine learning models that produce new content — text, code, images, audio, or structured data — in response to a prompt, by predicting plausible outputs from patterns learnt across very large training datasets.</strong> The most common business use cases are retrieval-augmented question answering, document drafting, content production pipelines, and code-generation copilots.</p><p>The biggest risk in generative AI is not technology choice — it is solution-fit. Teams spend six figures fine-tuning a model when retrieval-augmented generation would have delivered better results in three weeks. Our generative AI engagements always start with an <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> (£6,500, 3 weeks) to identify the highest-value use cases and right-size the architecture before any build. We work across OpenAI, Anthropic Claude, Google Gemini, Llama, Mistral, and open-weights models. Pilots ship in 6–10 weeks with full evaluation harnesses, content safety filters, and production observability.</p>`,
    sections: [
      { heading: 'What is generative AI, and how is it different from agentic AI?', body: null },
      { heading: 'How do RAG systems work, and when should you use them?', body: null },
      { heading: 'How do you build content and workflow pipelines with generative AI?', body: null },
      { heading: 'How do you cut generative AI costs without losing output quality?', body: null },
      { heading: 'What are the most common generative AI use cases in UK mid-market?', body: null },
    ],
    definedTerm: {
      term: 'Generative AI',
      definition: 'A class of machine learning models that produce new content — text, code, images, audio, or structured data — in response to a prompt, by predicting plausible outputs from patterns learnt across very large training datasets. Common business uses include retrieval-augmented question answering, document drafting, and code generation.',
      sameAs: ['https://en.wikipedia.org/wiki/Generative_artificial_intelligence'],
    },
    faq: [
      {
        question: 'What is the difference between generative AI and agentic AI?',
        answer: 'Generative AI produces content (text, images, code) in response to a single prompt. Agentic AI uses generative models as a component but adds tool use, multi-step planning, memory, and self-verification to complete multi-step business tasks autonomously. A copywriter is generative; a research analyst is agentic.',
      },
      {
        question: 'When should you use RAG (retrieval-augmented generation) instead of fine-tuning?',
        answer: 'Use RAG when your knowledge changes frequently, when answers must be traceable to source documents, or when the underlying corpus is large and updates often (policies, product docs, research libraries). Use fine-tuning when you need consistent style, format, or domain vocabulary that prompting cannot reliably reproduce. RAG ships in 3–6 weeks; fine-tuning is typically 8–12 weeks plus ongoing dataset maintenance.',
      },
      {
        question: 'Which large language model should I use — OpenAI, Anthropic, Google, or open-weights?',
        answer: 'It depends on three axes: data residency requirements, cost per million tokens at your expected volume, and task suitability. We benchmark candidate models against your actual workload during the assessment phase, so model selection is data-driven rather than vendor-led. UK businesses with data-residency constraints often run open-weights models (Llama 3, Mistral) on UK-hosted infrastructure.',
      },
      {
        question: 'How do you stop generative AI from hallucinating or producing wrong answers?',
        answer: 'Three layers: (1) RAG architecture so answers cite specific source passages a user can verify, (2) eval harnesses that score every output against a labelled test set before deployment and catch regressions in production, and (3) confidence-scored outputs so the system can defer to a human when uncertainty is high. We never ship a generative system without a written eval suite.',
      },
      {
        question: 'How long does a generative AI project take to deliver?',
        answer: 'RAG knowledge systems typically ship in 6–8 weeks. Content production pipelines (e.g. report drafting, summarisation) ship in 4–6 weeks. Multi-modal applications take longer (10–14 weeks) due to evaluation complexity. All projects start with the 3-week AI Readiness Assessment to right-size the architecture.',
      },
      {
        question: 'What does generative AI cost to run in production?',
        answer: 'Highly variable. A RAG system answering 10,000 queries per month on Claude Haiku or GPT-4o-mini typically costs £80–£300/month in model fees plus infrastructure. A heavy content pipeline producing thousands of long-form documents per month can run into thousands. We size cost per use case during the assessment and design for cost-efficiency from day one.',
      },
    ],
  },

  'ai-governance': {
    intro: `<p><strong>AI governance is the set of policies, controls, and audit mechanisms that make AI systems safe, fair, compliant, and explainable across their full lifecycle</strong> — from data sourcing through model selection, deployment, monitoring, and decommissioning. For UK businesses, governance covers GDPR, the EU AI Act (where applicable), sector regulators (FCA, ICO, MHRA), and internal risk frameworks.</p><p>AI without governance is a liability. We help UK businesses build governance frameworks that turn AI from a board-level risk into a board-level capability. Engagements typically start with an <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> (£6,500, 3 weeks) which includes a governance gap analysis as standard.</p>`,
    sections: [
      { heading: 'Why does AI governance matter right now for UK businesses?', body: null },
      { heading: 'What does our AI governance framework actually cover?', body: null },
      { heading: 'How do you audit AI systems for bias and fairness?', body: null },
      { heading: 'What does proportionate AI governance look like for SMEs?', body: null },
    ],
    definedTerm: {
      term: 'AI Governance',
      definition: 'The set of policies, controls, and audit mechanisms that make AI systems safe, fair, compliant, and explainable across their full lifecycle — from data sourcing through model selection, deployment, monitoring, and decommissioning. UK governance covers GDPR, EU AI Act, sector regulators, and internal risk frameworks.',
      sameAs: ['https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/'],
    },
    faq: [
      {
        question: 'What does AI governance cover in a UK business?',
        answer: 'Six domains: (1) data lineage and consent under GDPR, (2) model selection and supplier risk, (3) bias and fairness testing across protected characteristics, (4) explainability and decision logging, (5) monitoring for drift and degradation in production, and (6) human oversight and override pathways. We deliver governance as a written framework with named owners, review cadences, and audit trails.',
      },
      {
        question: 'Does the EU AI Act apply to UK businesses?',
        answer: 'Yes, if you place AI systems on the EU market or use them on EU subjects. Even if you do not, the EU AI Act has become a de-facto reference standard, and UK guidance from the ICO and sector regulators is converging on similar principles around risk classification, transparency, and human oversight.',
      },
      {
        question: 'How do you test an AI system for bias?',
        answer: 'We construct test sets stratified by the protected characteristics relevant to the use case (age, gender, ethnicity, postcode-derived deprivation index, etc.), then measure differential performance — false-positive rates, false-negative rates, calibration error — across each stratum. We document material disparities, the root cause analysis, and the mitigation applied. Bias auditing is repeated quarterly post-deployment.',
      },
      {
        question: 'How do you make AI decisions explainable to non-technical stakeholders?',
        answer: 'Three approaches matched to risk level: (1) for low-risk decisions, structured logging of inputs/outputs is sufficient; (2) for medium-risk decisions, feature attribution methods (SHAP, LIME) produce per-decision explanations; (3) for high-risk decisions affecting individuals (lending, hiring, healthcare), we use inherently interpretable models or require human review on every output.',
      },
      {
        question: 'How much does AI governance cost an SME?',
        answer: 'Proportionate governance for an SME typically costs £8,000–£25,000 to set up (one-off framework + first audit) plus 1–3 days per quarter for ongoing review. We design governance to match actual risk, not enterprise-scale paranoia — most SMEs do not need a Chief AI Ethics Officer, they need clear policies, named owners, and quarterly bias audits.',
      },
      {
        question: 'What happens if our AI system makes a wrong decision that harms a customer?',
        answer: 'You need three things in place before that happens: (1) a written incident response process, (2) decision logs detailed enough to reconstruct what the system did and why, and (3) a documented human review and remediation pathway. We build all three into the governance framework, alongside contractual clauses with model suppliers covering liability for systemic model failures.',
      },
    ],
  },
};

let touched = 0;
for (const [slug, patch] of Object.entries(serviceRewrites)) {
  const page = wwd.pages.find((p) => p.slug === slug);
  if (!page) {
    console.warn(`[skip] ${slug} not found`);
    continue;
  }
  page.intro = patch.intro;
  page.definedTerm = patch.definedTerm;
  // Apply heading rewrites — preserve existing body, only update heading.
  patch.sections.forEach((s, i) => {
    if (page.sections[i]) page.sections[i].heading = s.heading;
  });
  // Only set FAQ if patch.faq is provided (non-null) AND existing FAQ is empty/short.
  if (patch.faq) page.faq = patch.faq;
  touched++;
  console.log(`✓ ${slug}: intro+headings+definedTerm${patch.faq ? '+faq' : ''}`);
}

// hub copy
wwd.hub.intro = `<p><strong>We deliver AI for UK mid-market businesses across five service lines: AI Readiness Assessment, AI Strategy, agentic AI, AI automation, generative AI, and AI governance.</strong> Every engagement starts with the AI Readiness Assessment — a fixed-fee 3-week diagnostic at £6,500 that maps the highest-ROI use cases to your data, processes, and team capability before any build work.</p><p>Phase 2 build engagements run at £850 per day for embedded delivery (typically 3–6 months per workflow). Phase 3 ongoing governance and optimisation is £10,000 per month. Pricing is fixed, scoped, and stated up front — no billable-hour surprises.</p>`;

// ─────────────────────────────────────────────────────────────────────
// INDUSTRY REWRITES — healthcare headings + hub fix
// ─────────────────────────────────────────────────────────────────────

const healthcare = ind.pages.find((p) => p.slug === 'healthcare');
if (healthcare) {
  const newHeadings = [
    'How does AI automation reduce clinical admin burden?',
    'What insights can AI surface from NHS patient data?',
    'How do you keep healthcare AI compliant with NHS DSPT and GDPR?',
    'How does AI forecasting improve patient flow and capacity planning?',
    'What are the most common AI use cases in UK healthcare?',
  ];
  healthcare.solutionSections.forEach((s, i) => {
    if (newHeadings[i]) s.heading = newHeadings[i];
  });
  healthcare.definedTerm = {
    term: 'NHS Data Security and Protection Toolkit (DSPT)',
    definition: 'The DSPT is an annual self-assessment that all NHS organisations and any organisation that handles NHS patient data must complete. It evidences compliance with the National Data Guardian\'s 10 data security standards and is the baseline accreditation for AI vendors deploying in NHS settings.',
    sameAs: ['https://www.dsptoolkit.nhs.uk/'],
  };
  console.log('✓ healthcare: question headings + DSPT definedTerm');
}

// industries hub: fix 12-vs-actual contradiction + add definitional opener
const actualCount = ind.pages.length;
ind.hub.intro = `<p><strong>Agentic AI Associates delivers AI consultancy across ${actualCount} UK industries</strong> — including healthcare, legal, finance, retail, manufacturing, and education — each with sector-specific data, regulators, and ROI patterns. AI that works in retail forecasting will not work in NHS triage without major adjustment, which is why we specialise rather than generalise.</p><p>Every engagement starts with an <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> (£6,500, 3 weeks) that maps your sector\'s regulatory and operational reality to the highest-ROI use cases before any build work begins.</p>`;

// FAQ contradiction fix — Q1 currently claims "12 sectors", make it match actual count.
if (ind.hub.faq && ind.hub.faq.length > 0) {
  const q1 = ind.hub.faq[0];
  if (q1 && /\b12\b|\btwelve\b/i.test(q1.answer)) {
    q1.answer = q1.answer.replace(/\b12\s+sectors?\b/gi, `${actualCount} UK sectors`).replace(/\btwelve\s+sectors?\b/gi, `${actualCount} UK sectors`);
    console.log(`✓ industries hub FAQ Q1: 12→${actualCount}`);
  }
}

// ─────────────────────────────────────────────────────────────────────
// WRITE BACK
// ─────────────────────────────────────────────────────────────────────

fs.writeFileSync(WWD_PATH, JSON.stringify(wwd, null, 2) + '\n');
fs.writeFileSync(IND_PATH, JSON.stringify(ind, null, 2) + '\n');
console.log(`\nWrote ${touched} service rewrites + hub + healthcare.`);
