/**
 * optimise-data-longtail.mjs
 *
 * Patches four JSON data files to apply semantic SEO patterns.
 * Idempotent — safe to run multiple times.
 *
 * Files patched:
 *   A: src/data/what-we-do.json  — 5 service pages
 *   B: src/data/industries.json  — 24 new + healthcare
 *   C: src/data/locations.json   — 12 location pages
 *   D: src/data/learn.json       — 16 learn pages
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');

// ─── helpers ──────────────────────────────────────────────────────────────────

function load(rel) {
  return JSON.parse(readFileSync(join(ROOT, rel), 'utf8'));
}

function save(rel, data) {
  writeFileSync(join(ROOT, rel), JSON.stringify(data, null, 2) + '\n', 'utf8');
}

function findPage(pages, slug) {
  return pages.find(p => p.slug === slug);
}

/** Convert a heading string to question form if not already a question. */
function toQuestion(heading) {
  if (!heading || heading.endsWith('?') || heading === 'The Short Answer') {
    return heading;
  }
  return heading + '?'; // caller handles specific rewrites
}

/** Returns true if FAQ already has a pricing question. */
function hasPricingFaq(faq) {
  if (!faq) return false;
  return faq.some(q =>
    /cost|price|pricing|fee|£|phase 1|phase 2|phase 3|how much/i.test(q.question)
  );
}

const PRICING_ANSWER =
  'Phase 1 Diagnostic £6,500 (3 weeks, board-ready roadmap), Phase 2 Build £850/day (embedded delivery, 3–6 months), Phase 3 Retain £10,000/month (1 day/week, rolling).';

// ─── A: what-we-do.json patches ───────────────────────────────────────────────

const WHAT_WE_DO_PATCHES = {
  'data-ai': {
    definedTerm: {
      term: 'Data & AI Infrastructure',
      definition:
        'The pipelines, warehouses, analytics platforms, and ML models organisations build to make AI projects reliable and production-ready.',
      sameAs: ['https://en.wikipedia.org/wiki/Data_engineering'],
    },
    sectionHeadings: [
      'How Should You Design Your Data Strategy and Architecture?',
      'How Do You Build Reliable Data Pipelines and Integrations?',
      'What Can Analytics and Machine Learning Reveal for Your Business?',
      'Why Does Data Governance Matter for AI Success?',
      'What Are the Highest-ROI Data and AI Use Cases?',
    ],
    faq: [
      {
        question: 'How much does data and AI infrastructure consultancy cost?',
        answer:
          'Phase 1 Diagnostic is £6,500 fixed fee (3 weeks) — covers a data maturity audit and prioritised roadmap. Phase 2 Build runs at £850/day embedded, typically 3–6 months. Phase 3 Retain is £10,000/month for ongoing governance and pipeline support.',
      },
      {
        question: 'How quickly can we see value from a data pipeline project?',
        answer:
          'A focused data pipeline pilot typically ships in 8–12 weeks and delivers the first usable analytics within that window. Phase 2 Build then scales across the estate over 3–6 months.',
      },
      {
        question: 'What ROI can we expect from modern data infrastructure?',
        answer:
          'Clients typically see 20–40% reduction in analyst prep time, 30–50% faster time-to-insight for business decisions, and 15–25% working capital release from better demand forecasting — all within the first two quarters after launch.',
      },
      {
        question: 'Who benefits most from a data and AI infrastructure engagement?',
        answer:
          'Mid-market businesses (50–500 employees) that have data spread across multiple SaaS tools and ERP systems, but lack a unified analytics layer. Also organisations that have tried AI projects and hit the data-quality wall before achieving production deployment.',
      },
      {
        question:
          'Which cloud platforms and tools do you work with?',
        answer:
          'We work with Snowflake, Databricks, BigQuery, Azure Synapse, dbt, Fivetran, Airbyte, Airflow, and Dagster. We are vendor-neutral — we recommend the stack that fits your existing infrastructure and team skills, not the one we happen to resell.',
      },
      {
        question: 'Do we need to migrate our existing systems to benefit?',
        answer:
          'Rarely. We build pipelines that sit alongside your existing ERP, CRM, and finance systems rather than replacing them. The goal is to unlock the data already in your systems, not force a costly rip-and-replace project.',
      },
    ],
  },

  'conversational-ai': {
    definedTerm: {
      term: 'Conversational AI',
      definition:
        'Software that understands and generates natural language in dialogue — chatbots, voice assistants, and multi-turn agents — enabling customers and staff to interact with business systems in plain English.',
      sameAs: ['https://en.wikipedia.org/wiki/Chatbot'],
    },
    sectionHeadings: [
      'How Has Conversational AI Moved Beyond Basic Chatbots?',
      'How Do You Deploy Conversational AI Across Multiple Channels?',
      'How Do You Measure the Customer Support Impact of Conversational AI?',
      'How Can Conversational AI Power Internal Knowledge Bases?',
      'What Are the Highest-ROI Conversational AI Use Cases?',
    ],
    faq: [
      {
        question: 'How much does a conversational AI project cost?',
        answer:
          'Phase 1 Diagnostic is £6,500 (3 weeks) and maps your contact-centre platform, knowledge base, and CRM integration before scoping the build. Phase 2 Build runs at £850/day, typically 3–6 months for a production-grade system. Phase 3 Retain is £10,000/month for ongoing optimisation and retraining.',
      },
      {
        question: 'How quickly will a conversational AI system pay for itself?',
        answer:
          'Most clients hit payback within 6–9 months. A typical mid-size contact centre sees 50–70% containment within the first quarter, reducing cost-per-contact by 30–50%. A pilot ships in 6–10 weeks, so the ROI clock starts early.',
      },
      {
        question:
          'What containment rates can we realistically achieve in Year 1?',
        answer:
          'UK retailers typically reach 55–65% containment for high-volume issue types within three months. Financial services firms, where conversations are more regulated, typically reach 40–50% in the first year. Both figures improve as the system learns from live interactions.',
      },
      {
        question: 'Which businesses benefit most from conversational AI?',
        answer:
          'Businesses handling 500+ inbound contacts per week across any channel — telephone, web chat, email, or WhatsApp. Contact centres, ecommerce brands, financial services firms, and HR teams with high-volume repetitive enquiries all see the fastest payback.',
      },
      {
        question:
          'How does conversational AI integrate with our existing contact-centre platform?',
        answer:
          'We work natively with Genesys, NICE, Five9, Zendesk, Intercom, and Salesforce Service Cloud. Integration typically takes 2–4 weeks within Phase 2 Build, and agents always inherit full conversation context when calls escalate.',
      },
      {
        question:
          'How do you handle PCI DSS and UK GDPR compliance in a conversational AI system?',
        answer:
          'Every system we build respects PCI DSS, UK GDPR, FCA fair-treatment principles, and accessibility requirements under the Equality Act 2010 from day one. Sensitive data such as card numbers is masked in transit and never stored in conversation logs.',
      },
    ],
  },

  'ai-training': {
    definedTerm: {
      term: 'AI Training for Business Teams',
      definition:
        'Structured education programmes that build AI literacy, prompt-engineering skills, and operational confidence across business leaders and technical staff.',
      sameAs: ['https://en.wikipedia.org/wiki/Artificial_intelligence'],
    },
    sectionHeadings: [
      'Why Does AI Training That Sticks Require Hands-On Application?',
      'What Workshop Formats Work Best for Different Teams?',
      'What Topics Do Our AI Training Programmes Cover?',
      'How Do You Measure the Impact of AI Training?',
      'What Are the Most Effective AI Training Engagement Patterns?',
    ],
    faq: [
      {
        question: 'How much does AI training for business teams cost?',
        answer:
          'Every engagement opens with a Phase 1 Diagnostic (£6,500 fixed fee, 3 weeks) that includes a team capability audit and training recommendations as part of a board-ready roadmap. Delivery of training cohorts runs within Phase 2 Build at £850/day. Ongoing quarterly refreshers are covered by Phase 3 Retain at £10,000/month.',
      },
      {
        question: 'How long does an AI training programme take to deliver?',
        answer:
          'Executive briefings run as half-day sessions. Cross-functional management cohorts typically take two days. Practitioner upskilling runs over six weeks (90-minute weekly sessions plus assignments). Pilot cohorts launch within 4–8 weeks of the discovery call.',
      },
      {
        question:
          'What productivity improvements should we expect after training?',
        answer:
          'UK organisations we work with see measurable productivity gains within four weeks of cohort training as participants apply techniques to live work. Manager-level cohorts typically commit to specific automation projects within a fortnight; technical cohorts ship their first internal prototype during the programme.',
      },
      {
        question: 'Who is AI training designed for — technical or non-technical staff?',
        answer:
          "Both. We run cohorts at three levels: executive (board and SLT, half-day), management (operations and functional leads, two-day), and practitioner (technical teams, six-week). Each cohort is scoped separately against the audience's literacy and business priorities.",
      },
      {
        question:
          'Can you deliver AI training for specific functions like HR, finance, or marketing?',
        answer:
          'Yes. Bespoke function-specific workshops cover the AI use cases and tools most relevant to each team. HR cohorts focus on recruitment automation and people analytics; finance cohorts on forecasting and anomaly detection; marketing cohorts on content automation and campaign optimisation.',
      },
      {
        question: 'How is your training different from generic AI courses online?',
        answer:
          'Generic courses teach concepts. Our training is workshop-led — every session has participants applying techniques to their actual work problems. We use your data, your tools, and your business challenges so skills transfer directly to the day job rather than staying theoretical.',
      },
    ],
  },

  'ongoing-support': {
    definedTerm: {
      term: 'AI Retainer Support',
      definition:
        'Ongoing advisory, monitoring, and governance service that keeps AI systems performing after launch — covering model retraining, drift detection, and strategic roadmap updates.',
      sameAs: ['https://en.wikipedia.org/wiki/Managed_services'],
    },
    sectionHeadings: [
      'Why Does AI Need Ongoing Support After Launch?',
      'What Does an AI Retainer Support Package Include?',
      'How Does a Flexible Retainer Engagement Work?',
      'What Does Fractional AI Leadership Provide?',
      'What Are the Most Common AI Retainer Patterns?',
    ],
    faq: [
      {
        question: 'How much does ongoing AI retainer support cost?',
        answer:
          'Phase 3 Retain is £10,000/month for one day per week of founder-led advisory — covering governance, model drift monitoring, measurement, and scale-out oversight. Rolling three-month terms, extendable. Smaller 4-day/month maintenance retainers are also available; contact us for a bespoke scope.',
      },
      {
        question: 'How quickly can a retainer start after a Phase 2 Build?',
        answer:
          'A structured handover from the delivery team typically takes 1–2 weeks. We agree service levels, escalation pathways, monthly steering rhythm, and a 12-month improvement roadmap before the retainer formally starts.',
      },
      {
        question:
          'What ROI do businesses see from ongoing AI support versus handling it in-house?',
        answer:
          'UK businesses on retainer typically maintain 95%+ uptime on production AI systems, retrain models on a 4–8 week cycle, and ship 6–12 new automations per year through the retainer relationship — at lower cost than equivalent in-house headcount at senior AI engineer rates.',
      },
      {
        question: 'Who needs a retainer — only businesses with large AI estates?',
        answer:
          'Even businesses with a single production AI system benefit from retainer oversight. Model drift, knowledge base staleness, and cost creep can all undermine a system that worked perfectly at launch. Smaller retainers start at 4 days/month and scale as the AI estate grows.',
      },
      {
        question:
          'Can you provide retainer support for AI systems you did not build?',
        answer:
          'Yes. We audit inherited systems as part of the retainer onboarding, agree a baseline, and then provide ongoing monitoring and improvement. This is particularly useful when in-house teams built the original system and have since moved on.',
      },
      {
        question: 'What is fractional AI leadership and when does it make sense?',
        answer:
          'Fractional Chief AI Officer or VP AI engagements provide senior AI leadership 2–3 days per week without a full-time hire. They make sense for mid-market businesses that need board-level AI strategy, vendor management, and team building but cannot yet justify a six-figure permanent salary.',
      },
    ],
  },

  'applied-ai': {
    definedTerm: {
      term: 'Applied AI',
      definition:
        'The use of machine learning techniques — computer vision, forecasting, NLP, anomaly detection — to solve specific, measurable business problems with quantifiable outcomes.',
      sameAs: ['https://en.wikipedia.org/wiki/Applied_machine_learning'],
    },
    sectionHeadings: [
      'What Business Problems Can Computer Vision Solve?',
      'How Does AI Forecasting and Prediction Work for Your Business?',
      'What Can Natural Language Processing Do Beyond Generative AI?',
      'How Does Anomaly Detection Catch Problems Before They Escalate?',
      'What Are the Highest-ROI Applied AI Use Cases?',
    ],
    faq: [
      {
        question: 'How much does an applied AI project cost?',
        answer:
          'Phase 1 Diagnostic is £6,500 (3 weeks) and maps your data sources, the business decision the model must support, and integration paths to operational systems. Phase 2 Build runs at £850/day with pilots shipping in 8–14 weeks. Phase 3 Retain at £10,000/month covers monitoring, retraining, and roadmap evolution.',
      },
      {
        question: 'How long does an applied AI pilot take to deliver results?',
        answer:
          'Focused pilots ship in 8–14 weeks. Retail demand forecasting shows measurable accuracy improvement within one trading cycle; manufacturing predictive maintenance catches early failure signals within the first quarter; fraud anomaly detection improves precision within weeks of go-live.',
      },
      {
        question:
          'What ROI can applied AI realistically deliver in the first year?',
        answer:
          'UK businesses typically see clear payback within one operational cycle. Retail forecasting clients recover inventory-holding costs within a season. Manufacturing clients see 15–25% reduction in unplanned downtime. Insurance clients improve fraud-catch rates by 20–35% while reducing false positives by 30–50%.',
      },
      {
        question:
          'How much data do we need before applied AI becomes viable?',
        answer:
          'It depends on the technique. Forecasting models need at least 12–18 months of historical data at the required granularity. Computer vision defect-detection models can work with as few as a few hundred labelled images using transfer learning. We assess data requirements during Phase 1 and recommend approaches that fit your data reality.',
      },
      {
        question:
          'How do applied AI models integrate with our existing operational systems?',
        answer:
          'We design integrations that fit your ERP, WMS, MES, or CRM via standard APIs — no rip-and-replace. Model outputs are pushed directly into the systems where decisions are made: reorder recommendations into the buying tool, maintenance alerts into the CMMS, fraud scores into the transaction review queue.',
      },
      {
        question:
          'How do you keep applied AI models accurate over time?',
        answer:
          'Every model we deploy ships with monitoring dashboards, drift detection, and retraining pipelines. We set clear performance thresholds and retraining triggers so accuracy does not silently degrade as your business evolves. Phase 3 Retain covers this on an ongoing basis.',
      },
    ],
  },
};

// ─── industry defined terms ───────────────────────────────────────────────────

const INDUSTRY_DEFINED_TERMS = {
  healthcare: {
    term: 'AI in Healthcare',
    definition:
      'The application of intelligent automation and predictive analytics to clinical and administrative processes in NHS and private healthcare settings.',
  },
  legal: {
    term: 'AI in Legal Services',
    definition:
      'Intelligent automation for document review, contract analysis, compliance monitoring, and matter workflow in UK law firms and in-house teams.',
  },
  retail: {
    term: 'AI in Retail',
    definition:
      'Demand forecasting, personalisation, inventory optimisation, and customer service automation applied to UK retail operations.',
  },
  'supply-chain': {
    term: 'AI in Supply Chain',
    definition:
      'Forecasting, logistics optimisation, and risk monitoring applied across UK supply chain and procurement operations.',
  },
  finance: {
    term: 'AI in Financial Services',
    definition:
      'Regulated AI for KYC, fraud detection, conduct monitoring, and analytics in FCA-supervised UK banks, insurers, and asset managers.',
  },
  education: {
    term: 'AI in Education',
    definition:
      'Administrative automation and predictive analytics for UK schools, colleges, and universities to improve outcomes and reduce teacher workload.',
  },
  ecommerce: {
    term: 'AI in Ecommerce',
    definition:
      'Personalisation, conversion optimisation, and customer service automation for UK online retailers.',
  },
  hr: {
    term: 'AI in HR',
    definition:
      'Recruitment automation, workforce analytics, and employee-experience tools for UK HR teams.',
  },
  'real-estate': {
    term: 'AI in Real Estate',
    definition:
      'Property valuation, lead generation, and transaction automation for UK estate agents, developers, and proptech businesses.',
  },
  manufacturing: {
    term: 'AI in Manufacturing',
    definition:
      'Predictive maintenance, quality control, and supply chain optimisation for UK manufacturers.',
  },
  marketing: {
    term: 'AI in Marketing',
    definition:
      'Content automation, campaign optimisation, and audience analytics for UK marketing teams and agencies.',
  },
  government: {
    term: 'AI in Public Sector',
    definition:
      'Citizen-service automation and data analytics for UK local authorities, central government departments, and arm\'s-length bodies.',
  },
  'iot-connectivity': {
    term: 'AI for IoT & Connectivity',
    definition:
      'Agent-based automation for SIM lifecycle management, fraud detection, and network operations in UK connectivity and M2M providers.',
  },
  saas: {
    term: 'AI for SaaS',
    definition:
      'Agentic onboarding, churn prediction, and product-telemetry analytics for UK software-as-a-service businesses.',
  },
  fintech: {
    term: 'AI in Fintech',
    definition:
      'Regulated AI for KYC, fraud scoring, credit risk, and FCA compliance monitoring in UK fintech companies.',
  },
  insurance: {
    term: 'AI in Insurance',
    definition:
      'Claims automation, underwriting support, and actuarial forecasting for UK insurers and Lloyd\'s market participants.',
  },
  logistics: {
    term: 'AI in Logistics',
    definition:
      'Route optimisation, dispatch automation, and capacity forecasting for UK freight, courier, and transport operators.',
  },
  'energy-utilities': {
    term: 'AI in Energy & Utilities',
    definition:
      'Smart-meter analytics, demand forecasting, and Ofgem compliance monitoring for UK energy and water utilities.',
  },
  'pharma-life-sciences': {
    term: 'AI in Pharma & Life Sciences',
    definition:
      'Document intelligence, clinical data analysis, and MHRA-aligned AI governance for UK pharmaceutical and biotech companies.',
  },
  construction: {
    term: 'AI in Construction',
    definition:
      'Bid automation, programme risk analysis, and HSE compliance monitoring for UK contractors and developers.',
  },
  hospitality: {
    term: 'AI in Hospitality',
    definition:
      'Revenue management automation, guest-experience personalisation, and demand forecasting for UK hotels and restaurants.',
  },
  'media-publishing': {
    term: 'AI in Media & Publishing',
    definition:
      'Editorial automation, audience analytics, and subscription revenue forecasting for UK broadcasters, publishers, and digital media companies.',
  },
  'professional-services': {
    term: 'AI in Professional Services',
    definition:
      'Proposal automation, utilisation analytics, and revenue forecasting for UK consulting, accounting, and advisory firms.',
  },
  automotive: {
    term: 'AI in Automotive',
    definition:
      'Dealer operations, F&I automation, and inventory optimisation for UK motor retail businesses and OEM dealer networks.',
  },
  'charities-nonprofits': {
    term: 'AI for Charities & Nonprofits',
    definition:
      'Fundraising automation, supporter analytics, and grant management for UK charities and third-sector organisations.',
  },
};

// ─── industry FAQ templates ───────────────────────────────────────────────────

function buildIndustryFaq(slug) {
  const faqs = {
    healthcare: [
      {
        question: 'How much does healthcare AI consultancy cost?',
        answer:
          'Phase 1 Diagnostic is £6,500 (3 weeks) and maps your EPR stack, data governance, and highest-value automation candidates. Phase 2 Build runs at £850/day embedded, typically 3–6 months. Phase 3 Retain is £10,000/month for ongoing oversight and model governance.',
      },
      {
        question: 'How long does a healthcare AI pilot take to go live?',
        answer:
          'Phase 1 Diagnostic takes 3 weeks; focused pilots such as discharge summary automation or referral triage typically ship in 8–12 weeks; Phase 2 Build runs 3–6 months for trust-wide rollout.',
      },
      {
        question: 'What ROI can NHS trusts expect from AI automation?',
        answer:
          'NHS trusts we work with reclaim 20–40% of clinical admin time within the first six months. One trust cut admin time per patient by 35% within three months of deploying agentic workflows for discharge summaries and appointment scheduling.',
      },
      {
        question: 'How is patient data kept secure in AI systems?',
        answer:
          'Every system is built to NHS Data Security and Protection Toolkit standards. Patient data stays within your existing infrastructure and complies with UK GDPR and the Caldicott principles. We never train external models on patient data.',
      },
      {
        question: 'Which healthcare AI use case should we start with?',
        answer:
          'The strongest first pilots are clinical documentation (ambient scribes, discharge summaries) and patient flow (appointment scheduling, referral triage). Both deliver measurable admin-hour savings within 8–12 weeks with low clinical risk.',
      },
      {
        question: 'Do you work with private healthcare providers as well as NHS trusts?',
        answer:
          'Yes. We work with private hospitals, dental groups, physiotherapy chains, and telehealth platforms. The same principles apply — reduce admin, improve patient outcomes, and increase operational efficiency — adapted to the private sector regulatory and commercial context.',
      },
    ],
    legal: [
      {
        question: 'How much does legal AI consultancy cost?',
        answer:
          'Phase 1 Diagnostic is £6,500 (3 weeks) and maps your matter management, document store, and PMS integration. Phase 2 Build runs at £850/day embedded. Phase 3 Retain is £10,000/month for ongoing optimisation and SRA compliance monitoring.',
      },
      {
        question: 'How quickly can a law firm see results from AI?',
        answer:
          'Phase 1 Diagnostic takes 3 weeks; contract review or NDA automation pilots typically ship in 6–10 weeks; Phase 2 Build runs 3–6 months for firm-wide rollout.',
      },
      {
        question: 'What time savings can we expect from AI document review?',
        answer:
          'UK firms we work with reduce contract review time by 60–80% and disclosure review by 40–60% within the first quarter. One regional firm cut average NDA turnaround from 4 days to under 6 hours.',
      },
      {
        question: 'How do you handle legal privilege and data security?',
        answer:
          'All solutions are deployed within your existing infrastructure or on UK-hosted private cloud. Client data never leaves your control. Privilege tagging and handling protocols are maintained throughout every AI workflow, designed to SRA data protection requirements and UK GDPR.',
      },
      {
        question: 'Which legal AI use case delivers the fastest payback?',
        answer:
          'Contract lifecycle automation (clause extraction, redlining, NDA turnaround) and disclosure review are consistently the fastest payback use cases — both have clear time-saving metrics partners can defend at the management committee.',
      },
      {
        question: 'What matter management and document systems do you integrate with?',
        answer:
          'We integrate with iManage, NetDocuments, SharePoint, and the major PMS platforms including Elite 3E, Aderant, and Clio. No rip-and-replace is required.',
      },
    ],
    retail: [
      {
        question: 'How much does retail AI consultancy cost?',
        answer:
          'Phase 1 Diagnostic is £6,500 (3 weeks) and maps your EPOS, ERP, and customer data sources. Phase 2 Build runs at £850/day embedded, typically 3–6 months. Phase 3 Retain is £10,000/month for ongoing model governance and seasonal optimisation.',
      },
      {
        question: 'How quickly does retail AI deliver measurable results?',
        answer:
          'Phase 1 Diagnostic takes 3 weeks; demand forecasting and personalisation pilots typically ship in 8–12 weeks; Phase 2 Build runs 3–6 months. Most retailers prove the business case within a single trading season.',
      },
      {
        question: 'What margin improvement can retailers expect from AI?',
        answer:
          'Retailers we work with typically see margin recovery of 1–3 percentage points within two trading cycles after deploying intelligent pricing, replenishment, and personalisation. One UK fashion retailer reduced overstock by 28% while cutting stockouts by 19% in a single season.',
      },
      {
        question: 'How do you handle PCI DSS and customer data compliance?',
        answer:
          'We integrate with Shopify Plus, Salesforce Commerce Cloud, SAP Retail, and Microsoft Dynamics 365 Commerce, and respect PCI DSS and UK GDPR end-to-end. Customer data is processed within your existing infrastructure.',
      },
      {
        question: 'Which retail AI use case should we start with?',
        answer:
          'Demand forecasting and replenishment or personalisation. Both produce measurable margin or revenue lift within a single trading cycle and do not require significant data infrastructure investment to get started.',
      },
      {
        question: 'Can AI help both bricks-and-mortar and online retail?',
        answer:
          'Absolutely. AI is equally valuable for physical retail — optimising store layouts, predicting footfall, managing stock at location level — and for ecommerce personalisation, conversion optimisation, and customer service automation.',
      },
    ],
    'supply-chain': [
      {
        question: 'How much does supply chain AI consultancy cost?',
        answer:
          'Phase 1 Diagnostic is £6,500 (3 weeks) and maps your ERP, WMS, TMS, and customs broker integrations. Phase 2 Build runs at £850/day embedded, typically 3–6 months. Phase 3 Retain is £10,000/month for ongoing demand sensing and supplier risk monitoring.',
      },
      {
        question: 'How quickly can AI improve our forecast accuracy?',
        answer:
          'Phase 1 Diagnostic takes 3 weeks; demand sensing pilots typically ship in 10–14 weeks; Phase 2 Build runs 3–6 months. Most clients prove the business case within a single inventory cycle.',
      },
      {
        question: 'What working capital savings can supply chain AI deliver?',
        answer:
          'UK distributors and manufacturers we work with typically lift forecast accuracy from 60–65% to 80–90% at SKU level within two quarters, cut emergency freight spend by 30–50%, and reduce safety stock by 15–25% without service-level deterioration.',
      },
      {
        question: 'How do you handle post-Brexit customs documentation?',
        answer:
          'AI automates customs documentation, classifies goods using commodity codes, and flags compliance risks before shipments leave. This reduces clearance delays and the risk of HMRC penalties for incorrect declarations.',
      },
      {
        question: 'Which supply chain AI use case delivers the fastest payback?',
        answer:
          'Demand sensing and inventory optimisation consistently deliver the fastest payback — both release working capital and lift service levels measurably within one inventory cycle.',
      },
      {
        question: 'Which ERP and TMS systems do you integrate with?',
        answer:
          'We work with SAP, Oracle, Microsoft Dynamics, Sage, NetSuite, Manhattan, Blue Yonder, Descartes, and Mercury Gate. Our integrations pull data from your existing systems without requiring migration or major IT projects.',
      },
    ],
    finance: [
      {
        question: 'How much does financial services AI consultancy cost?',
        answer:
          'Phase 1 Diagnostic is £6,500 (3 weeks) and covers data lineage, model risk management framework, and existing regulatory commitments. Phase 2 Build runs at £850/day embedded, typically 3–6 months. Phase 3 Retain is £10,000/month for ongoing governance and audit support.',
      },
      {
        question: 'How long does a financial services AI pilot take?',
        answer:
          'Phase 1 Diagnostic takes 3 weeks; KYC, fraud, or conduct monitoring pilots typically ship in 10–14 weeks; Phase 2 Build runs 3–6 months. Most firms prove the business case before scaling across the group.',
      },
      {
        question: 'What efficiency gains can financial services firms expect from AI?',
        answer:
          'Banks, asset managers, and insurers we advise reduce manual control hours by 30–50% within the first six months and shorten KYC onboarding from days to under an hour. Fraud detection models typically improve true-positive rates by 20–35% while reducing false positives by 30–50%.',
      },
      {
        question: 'How do you ensure FCA and PRA compliance for AI systems?',
        answer:
          'We design every solution against SS1/23, the FCA\'s AI guidance, and the Senior Managers and Certification Regime accountability map. Model decisions are auditable, model risk management documentation meets MRM standards, and governance frameworks are built for second-line review.',
      },
      {
        question: 'Which financial services AI use case should we start with?',
        answer:
          'KYC automation and fraud detection consistently deliver the fastest payback with the clearest compliance narrative. Both reduce manual control hours significantly and the ROI is straightforward to defend to the board and the regulator.',
      },
      {
        question: 'Can AI handle the complexity of multi-entity financial regulatory reporting?',
        answer:
          'Yes. Our regulatory reporting automation covers FCA, PRA, and Basel requirements. AI assembles data, validates against schemas, flags anomalies for human review, and produces submission-ready files — cutting reporting cycle time by 40–60% for most clients.',
      },
    ],
    education: [
      {
        question: 'How much does education AI consultancy cost?',
        answer:
          'Phase 1 Diagnostic is £6,500 (3 weeks) and maps your MIS environment, data governance maturity, and highest-impact use cases. Phase 2 Build runs at £850/day embedded. Phase 3 Retain is £10,000/month for ongoing model monitoring and Ofsted evidence support.',
      },
      {
        question: 'How long does an education AI project take to deliver?',
        answer:
          'Phase 1 Diagnostic takes 3 weeks; teacher productivity tool pilots typically ship in 8–12 weeks; Phase 2 Build runs 3–6 months for institution-wide rollout.',
      },
      {
        question: 'What time savings can teachers expect from AI tools?',
        answer:
          'Teachers we work with report reclaiming 3–5 hours per week from lesson planning, first-pass marking, and parent communication drafting. Institutions using our early-warning analytics identify at-risk pupils 6–9 months earlier than with manual review alone.',
      },
      {
        question: 'How is student data protected under GDPR and the Children\'s Code?',
        answer:
          'We process all data within UK-hosted infrastructure and comply with UK GDPR, the Children\'s Code, and DfE data protection standards. Student data is never used to train external models, and every system has explicit human sign-off for sensitive decisions.',
      },
      {
        question: 'Which education AI use case should schools start with?',
        answer:
          'Teacher productivity tools are the strongest first pilot — measurable hours back per week with no data protection risk. Most schools see adoption within weeks because the tools are immediately useful and non-threatening to staff.',
      },
      {
        question: 'Do you work with universities and FE colleges as well as schools?',
        answer:
          'Yes. We work across the full education spectrum. Higher education benefits particularly from student retention analytics, research support tools, and automated administrative workflows. FE colleges gain most from attendance prediction and timetable optimisation.',
      },
    ],
    ecommerce: [
      {
        question: 'How much does ecommerce AI consultancy cost?',
        answer:
          'Phase 1 Diagnostic is £6,500 (3 weeks) and maps your storefront platform, CDP, ad stack, and fulfilment integrations. Phase 2 Build runs at £850/day embedded. Phase 3 Retain is £10,000/month for ongoing model optimisation and seasonal support.',
      },
      {
        question: 'How quickly does ecommerce AI pay for itself?',
        answer:
          'Phase 1 Diagnostic takes 3 weeks; personalisation and lifecycle marketing pilots typically ship in 6–10 weeks; Phase 2 Build runs 3–6 months. Most brands prove ROI within a single peak trading period.',
      },
      {
        question: 'What conversion and revenue uplift can AI deliver for ecommerce brands?',
        answer:
          'UK ecommerce brands we work with typically lift conversion rates 15–30% within the first trading quarter through better personalisation, abandoned-basket recovery, and on-site search relevance. Customer acquisition cost drops 20–40% as predictive bidding shifts spend toward the audiences most likely to convert profitably.',
      },
      {
        question: 'How do you handle GDPR compliance for ecommerce personalisation?',
        answer:
          'All personalisation and analytics pipelines run within your existing infrastructure and comply with UK GDPR. We use first-party data with proper consent, and never pass sensitive customer data to external ad platforms beyond what your existing pixel configurations already send.',
      },
      {
        question: 'Which ecommerce AI use case delivers the fastest ROI?',
        answer:
          'On-site personalisation and lifecycle email/SMS marketing consistently deliver the fastest ROI — both lift revenue measurably within weeks and require minimal infrastructure investment beyond your existing ESP and storefront.',
      },
      {
        question: 'Is AI worthwhile for smaller ecommerce businesses?',
        answer:
          'Yes. Brands doing 500 or more orders per month see clear ROI from automation and personalisation. The tools we deploy are right-sized for your business — you are not paying for enterprise features you do not need.',
      },
    ],
    hr: [
      {
        question: 'How much does HR AI consultancy cost?',
        answer:
          'Phase 1 Diagnostic is £6,500 (3 weeks) and maps your HRIS, ATS, payroll, and engagement survey stack. Phase 2 Build runs at £850/day embedded. Phase 3 Retain is £10,000/month for ongoing people analytics and model governance.',
      },
      {
        question: 'How quickly does HR AI deliver measurable results?',
        answer:
          'Phase 1 Diagnostic takes 3 weeks; recruitment automation pilots typically ship in 8–12 weeks; Phase 2 Build runs 3–6 months. Most HR teams see time-to-hire improvement within the first full recruitment cycle using the new system.',
      },
      {
        question: 'What improvement in hiring and retention can HR teams expect?',
        answer:
          'UK HR teams we work with cut time-to-hire by 30–50% within the first quarter and lift first-year retention by 10–20% through better onboarding personalisation and early-warning attrition modelling.',
      },
      {
        question: 'How do you ensure fairness and EHRC compliance in AI recruitment?',
        answer:
          'Every recruitment automation system is designed against the EHRC AI in recruitment guidance and ICO employment data guidance. Automated scoring is explainable, audit trails are complete, and human decision-makers retain final authority on every hiring decision.',
      },
      {
        question: 'Which HR AI use case should we start with?',
        answer:
          'CV screening and interview scheduling automation delivers the fastest payback for most HR teams — measurable reduction in time-to-hire within weeks, with immediate recruiter capacity release for higher-value relationship-building work.',
      },
      {
        question: 'Can AI predict employee attrition before people hand in their notice?',
        answer:
          'Yes. Our forecasting models predict resignation risk by individual 60–90 days out using behavioural signals from collaboration tools and engagement surveys, with full worker consent and ICO compliance. This gives HR enough lead time to intervene meaningfully.',
      },
    ],
    'real-estate': [
      {
        question: 'How much does real estate AI consultancy cost?',
        answer:
          'Phase 1 Diagnostic is £6,500 (3 weeks) and maps your data sources, CRM integrations, and highest-value automation candidates. Phase 2 Build runs at £850/day embedded. Phase 3 Retain is £10,000/month for ongoing market analytics and model updates.',
      },
      {
        question: 'How long does a real estate AI project take?',
        answer:
          'Phase 1 Diagnostic takes 3 weeks; lead generation and valuation automation pilots typically ship in 8–12 weeks; Phase 2 Build runs 3–6 months for full implementation.',
      },
      {
        question: 'What ROI can estate agents and developers expect from AI?',
        answer:
          'Estate agencies using AI lead qualification and automated valuation tools typically see 20–35% reduction in time-to-instruction and 15–25% improvement in conversion rates from enquiry to instruction within the first two quarters.',
      },
      {
        question: 'How do you handle sensitive property and client data securely?',
        answer:
          'All data is processed within UK-hosted infrastructure and complies with UK GDPR. Client financial data and property valuations remain within your CRM and are never shared with third-party AI platforms without appropriate data processing agreements.',
      },
      {
        question: 'Which real estate AI use case delivers the fastest results?',
        answer:
          'Lead qualification and automated valuation are the strongest first pilots — both deliver measurable impact within the first full trading quarter and require minimal data infrastructure investment.',
      },
      {
        question: 'Can AI help with RICS compliance and property regulation requirements?',
        answer:
          'Yes. Our AI systems include audit trails and explainable decision logs appropriate for RICS-regulated environments. Automated valuation models are always positioned as decision-support tools, not replacements for the surveyor\'s professional judgement.',
      },
    ],
    manufacturing: [
      {
        question: 'How much does manufacturing AI consultancy cost?',
        answer:
          'Phase 1 Diagnostic is £6,500 (3 weeks) and maps your MES, CMMS, ERP, and OT data sources. Phase 2 Build runs at £850/day embedded, typically 3–6 months. Phase 3 Retain is £10,000/month for ongoing model monitoring and OEE improvement.',
      },
      {
        question: 'How quickly does manufacturing AI deliver results?',
        answer:
          'Phase 1 Diagnostic takes 3 weeks; predictive maintenance and quality inspection pilots typically ship in 8–14 weeks; Phase 2 Build runs 3–6 months. Most manufacturers see measurable OEE improvement within the first operational quarter.',
      },
      {
        question: 'What OEE and downtime improvement can manufacturers expect?',
        answer:
          'Manufacturers we work with typically see 15–25% reduction in unplanned downtime within the first six months of deploying predictive maintenance. Quality inspection AI reduces defect escape rates by 20–40%, cutting rework and warranty costs significantly.',
      },
      {
        question: 'How do AI systems integrate with existing OT and MES environments?',
        answer:
          'We work with OPC-UA, MQTT, and the major MES platforms (Siemens Opcenter, Rockwell, Infor). Integration is read-first — we connect to existing sensor and historian feeds without disrupting production systems, then extend to closed-loop control only where risk analysis supports it.',
      },
      {
        question: 'Which manufacturing AI use case should we start with?',
        answer:
          'Predictive maintenance or quality inspection are the strongest first pilots — both have clear before/after metrics (downtime hours, defect rates) that make the business case unambiguous. Both can be delivered without disrupting production during the pilot phase.',
      },
      {
        question: 'How do you handle cybersecurity for AI systems connected to OT networks?',
        answer:
          'We design with network segmentation between IT and OT environments, read-only data access from the OT side, and no direct write-back to production control systems without explicit human approval. Every deployment follows NCSC industrial control system guidance.',
      },
    ],
    marketing: [
      {
        question: 'How much does marketing AI consultancy cost?',
        answer:
          'Phase 1 Diagnostic is £6,500 (3 weeks) and maps your MarTech stack, data sources, and highest-ROI automation candidates. Phase 2 Build runs at £850/day embedded. Phase 3 Retain is £10,000/month for ongoing campaign optimisation and content governance.',
      },
      {
        question: 'How quickly does marketing AI deliver measurable results?',
        answer:
          'Phase 1 Diagnostic takes 3 weeks; content automation and campaign optimisation pilots typically ship in 6–10 weeks; Phase 2 Build runs 3–6 months. Most marketing teams see measurable output-per-headcount improvement within the first quarter.',
      },
      {
        question: 'What productivity gains can marketing teams expect from AI?',
        answer:
          'UK marketing teams using AI content pipelines typically produce 5–10x more content per week with higher consistency and lower revision cycles. Campaign optimisation typically improves ROAS by 20–40% within the first two quarters through better audience targeting and creative testing.',
      },
      {
        question: 'How do you protect brand voice and IP in AI-generated content?',
        answer:
          'Every AI content pipeline includes brand voice guidelines, prompt templates aligned to your style guide, evaluation against quality rubrics, and human approval gates for high-stakes content. We never train models on competitor content or copyright-protected third-party material.',
      },
      {
        question: 'Which marketing AI use case should we start with?',
        answer:
          'Content automation (copy variants, brief writing, social content) and audience analytics are the strongest first pilots — both deliver measurable team-capacity release within weeks and require no complex data infrastructure to get started.',
      },
      {
        question: 'Can AI help with SEO and organic content at scale?',
        answer:
          'Yes. AI content pipelines can produce SEO-optimised drafts at scale across keyword clusters, with brand-voice quality controls and human editorial sign-off. Clients typically see organic traffic improvements within 3–6 months of deploying a structured content programme.',
      },
    ],
    government: [
      {
        question: 'How much does public sector AI consultancy cost?',
        answer:
          'Phase 1 Diagnostic is £6,500 (3 weeks) and maps your data landscape, governance requirements, and highest-value automation candidates. Phase 2 Build runs at £850/day embedded. Phase 3 Retain is £10,000/month for ongoing governance oversight and model monitoring.',
      },
      {
        question: 'How long does a public sector AI project take?',
        answer:
          'Phase 1 Diagnostic takes 3 weeks; citizen-service automation pilots typically ship in 8–12 weeks; Phase 2 Build runs 3–6 months for departmental rollout. Procurement timescales may extend this for larger authorities.',
      },
      {
        question: 'What efficiency gains can local authorities expect from AI?',
        answer:
          'Local authorities we work with typically automate 30–50% of routine citizen service interactions within the first year, freeing staff for complex casework. Document processing automation reduces back-office processing time by 40–60% for standardised application and form workflows.',
      },
      {
        question: 'How do you ensure AI systems meet public sector data governance requirements?',
        answer:
          'Every system is designed against the UK Government AI Framework, ICO guidance, and sector-specific requirements including DSPT for health-adjacent data. Model decisions are auditable and explainable, and all data stays within UK-hosted infrastructure.',
      },
      {
        question: 'Which public sector AI use case should we start with?',
        answer:
          'Document processing automation and citizen-service chatbots are the strongest first pilots — both have clear volume metrics and the ROI is straightforward to justify through business case to section 151 officers.',
      },
      {
        question: 'How do you navigate procurement rules for public sector AI?',
        answer:
          'We are experienced with G-Cloud, Digital Outcomes framework, and direct award thresholds. Phase 1 Diagnostic typically falls within thresholds that avoid full OJEU/Find a Tender process, allowing faster project initiation.',
      },
    ],
    'iot-connectivity': [
      {
        question: 'How much does IoT and connectivity AI consultancy cost?',
        answer:
          'Phase 1 Diagnostic is £6,500 (3 weeks) and maps your BSS/OSS stack, signalling feeds, and team shape. Phase 2 Build runs at £850/day embedded. Phase 3 Retain is £10,000/month for ongoing agent monitoring, model retraining, and compliance oversight.',
      },
      {
        question: 'How quickly does connectivity AI deliver measurable results?',
        answer:
          'Phase 1 Diagnostic takes 3 weeks; SIM lifecycle automation or fraud detection pilots typically ship in 8–12 weeks; Phase 2 Build runs 3–6 months. Full programme scale-out across multiple workflows typically takes 6–12 months.',
      },
      {
        question: 'What operational savings can connectivity providers expect?',
        answer:
          'Connectivity providers using agentic SIM lifecycle automation typically reduce manual operations tickets by 40–60% within the first quarter. Fraud detection models improve roaming fraud catch rates by 30–50% while reducing false positive rates by 40–60% compared to rule-based systems.',
      },
      {
        question: 'How do you handle Ofcom, PECR, and GDPR compliance for AI systems?',
        answer:
          'We build monitoring agents that evaluate marketing consents before a campaign sends, flag data retention overruns against your retention schedule, and produce evidence packs on demand. All data is processed within UK infrastructure under TSA and GDPR requirements.',
      },
      {
        question: 'Which connectivity AI use case should we start with?',
        answer:
          'SIM lifecycle automation or fraud and revenue assurance are the strongest first pilots — both have clear volume metrics and revenue impact that make the business case straightforward to defend to the CFO and regulator.',
      },
      {
        question: 'Do you work with MVNOs as well as full network operators?',
        answer:
          'Yes. The operational surface differs — an MVNO leans heavily on the host network\'s feeds and BSS — but the agentic AI patterns port cleanly. We have worked with UK connectivity businesses across the MVNO, M2M, and IoT aggregator segments.',
      },
    ],
    saas: [
      {
        question: 'How much does SaaS AI consultancy cost?',
        answer:
          'Phase 1 Diagnostic is £6,500 (3 weeks) and maps your product telemetry, CRM, and data warehouse. Phase 2 Build runs at £850/day embedded. Phase 3 Retain is £10,000/month for ongoing churn modelling, product analytics, and agentic onboarding optimisation.',
      },
      {
        question: 'How quickly does AI improve SaaS metrics like churn and activation?',
        answer:
          'Phase 1 Diagnostic takes 3 weeks; onboarding automation and churn prediction pilots typically ship in 6–10 weeks; Phase 2 Build runs 3–6 months. Most SaaS businesses see measurable NRR improvement within two to three cohorts.',
      },
      {
        question: 'What NRR improvement can SaaS businesses expect from AI?',
        answer:
          'SaaS businesses we work with typically improve NRR by 5–12 percentage points within the first year through better onboarding automation, earlier churn detection, and targeted expansion conversations with at-risk accounts. Activation rates for new users typically improve 20–35%.',
      },
      {
        question: 'How do you handle multi-tenant data isolation for AI models?',
        answer:
          'All models are trained with strict tenant isolation — no customer data is used to train models that will serve other tenants. We design for SOC 2 Type II and ISO 27001 postures from the start, with separate model artefacts or feature-level isolation as appropriate to your architecture.',
      },
      {
        question: 'Which SaaS AI use case should we start with?',
        answer:
          'Onboarding automation and churn prediction are the strongest first pilots for most SaaS businesses — both directly protect and expand ARR, and the before/after metrics are clear.',
      },
      {
        question: 'Can AI help us build AI features into our own product?',
        answer:
          'Yes. We help SaaS businesses evaluate which AI capabilities to integrate, choose between build and buy approaches, and design architectures that scale. This covers LLM integration, AI feature strategy, and the evaluation and governance frameworks your enterprise customers will require.',
      },
    ],
    fintech: [
      {
        question: 'How much does fintech AI consultancy cost?',
        answer:
          'Phase 1 Diagnostic is £6,500 (3 weeks) and covers data lineage, model risk posture, and FCA compliance obligations. Phase 2 Build runs at £850/day embedded. Phase 3 Retain is £10,000/month for ongoing model governance, drift monitoring, and regulatory audit support.',
      },
      {
        question: 'How long does a fintech AI pilot take?',
        answer:
          'Phase 1 Diagnostic takes 3 weeks; KYC automation or fraud scoring pilots typically ship in 8–12 weeks; Phase 2 Build runs 3–6 months. We design for the FCA regulatory timeline so nothing ships before second-line sign-off.',
      },
      {
        question: 'What compliance and operational improvements can fintechs expect?',
        answer:
          'Fintechs we work with reduce KYC onboarding time from days to under an hour and improve fraud detection precision by 25–40% while cutting false positive rates by 30–50%. Regulatory reporting automation cuts cycle time by 40–60%.',
      },
      {
        question: 'How do you design AI for FCA regulatory compliance?',
        answer:
          'Every system is designed against SS1/23, the FCA\'s AI guidance, and relevant Consumer Duty obligations. Model decisions are auditable, explainability is built in for regulated outputs, and the governance framework supports the Senior Managers and Certification Regime accountability map.',
      },
      {
        question: 'Which fintech AI use case should we start with?',
        answer:
          'KYC automation and fraud scoring consistently deliver the fastest payback with the clearest regulatory narrative. Both reduce manual operations cost significantly and the ROI is straightforward to defend to the board and the FCA.',
      },
      {
        question: 'Do you work with FCA-authorised firms or pre-authorisation fintechs too?',
        answer:
          'Both. We design AI governance frameworks appropriate to your regulatory stage — whether you are pre-authorisation building for FCA readiness, or an authorised firm meeting ongoing SS1/23 and Consumer Duty obligations.',
      },
    ],
    insurance: [
      {
        question: 'How much does insurance AI consultancy cost?',
        answer:
          'Phase 1 Diagnostic is £6,500 (3 weeks) and maps your claims, policy, and actuarial data sources. Phase 2 Build runs at £850/day embedded. Phase 3 Retain is £10,000/month for ongoing model governance, drift monitoring, and FCA audit support.',
      },
      {
        question: 'How long does an insurance AI project take?',
        answer:
          'Phase 1 Diagnostic takes 3 weeks; claims automation or fraud scoring pilots typically ship in 8–12 weeks; Phase 2 Build runs 3–6 months. Lloyd\'s market participants typically require an additional governance sign-off stage.',
      },
      {
        question: 'What loss ratio and operational improvements can insurers expect?',
        answer:
          'Insurers we work with typically reduce claims processing time by 40–60% through automation, improve fraud detection rates by 20–35%, and cut false positive rates by 30–50%. Underwriting support AI typically improves quote accuracy and reduces referral rates by 15–25%.',
      },
      {
        question: 'How do you ensure FCA compliance and Consumer Duty alignment?',
        answer:
          'Every system is designed against FCA principles, Consumer Duty obligations, and relevant EIOPA guidance. Claims decisions are auditable, pricing model explainability meets FRG standards, and governance frameworks support the Senior Managers and Certification Regime.',
      },
      {
        question: 'Which insurance AI use case should we start with?',
        answer:
          'Claims triage and fraud scoring are the strongest first pilots — both have clear volume metrics and the ROI in loss-ratio improvement is straightforward to quantify and defend to the actuarial function and the board.',
      },
      {
        question: 'Do you work with Lloyd\'s market participants as well as retail insurers?',
        answer:
          'Yes. We work with Lloyd\'s syndicates, MGAs, retail insurers, and brokers. The governance requirements differ between market segments and we design accordingly — Lloyd\'s participants require additional audit trail discipline and managing agent approval pathways.',
      },
    ],
    logistics: [
      {
        question: 'How much does logistics AI consultancy cost?',
        answer:
          'Phase 1 Diagnostic is £6,500 (3 weeks) and maps your TMS, WMS, fleet data, and dispatch systems. Phase 2 Build runs at £850/day embedded. Phase 3 Retain is £10,000/month for ongoing route optimisation, capacity forecasting, and model retraining.',
      },
      {
        question: 'How quickly does logistics AI improve operational metrics?',
        answer:
          'Phase 1 Diagnostic takes 3 weeks; route optimisation and dispatch automation pilots typically ship in 8–12 weeks; Phase 2 Build runs 3–6 months. Most operators see measurable fuel and on-time delivery improvement within the first quarter.',
      },
      {
        question: 'What cost and on-time delivery improvements can logistics operators expect?',
        answer:
          'UK logistics operators we work with typically achieve 10–20% reduction in fuel costs through route optimisation, 15–25% improvement in on-time delivery performance, and 20–35% reduction in empty miles within the first operational year.',
      },
      {
        question: 'How do you handle GDPR and driver data compliance for logistics AI?',
        answer:
          'All driver behaviour, location, and telematics data is processed within UK-hosted infrastructure and complies with UK GDPR and ICO employment data guidance. Worker consent and transparency obligations are designed in from the start, not retrofitted.',
      },
      {
        question: 'Which logistics AI use case should we start with?',
        answer:
          'Route optimisation or capacity forecasting are the strongest first pilots — both have clear fuel and delivery-performance metrics that make the ROI unambiguous within a single quarter.',
      },
      {
        question: 'Can AI help with last-mile delivery optimisation specifically?',
        answer:
          'Yes. Last-mile optimisation — combining dynamic routing, customer time-window preferences, and real-time traffic — typically delivers the largest proportional improvement for parcel carriers and courier networks where last-mile costs represent 40–60% of total delivery cost.',
      },
    ],
    'energy-utilities': [
      {
        question: 'How much does energy and utilities AI consultancy cost?',
        answer:
          'Phase 1 Diagnostic is £6,500 (3 weeks) and maps your smart-meter estate, SCADA data, and Ofgem compliance obligations. Phase 2 Build runs at £850/day embedded. Phase 3 Retain is £10,000/month for ongoing demand forecasting, anomaly monitoring, and regulatory evidence production.',
      },
      {
        question: 'How long does an energy and utilities AI project take?',
        answer:
          'Phase 1 Diagnostic takes 3 weeks; smart-meter analytics or demand forecasting pilots typically ship in 8–12 weeks; Phase 2 Build runs 3–6 months.',
      },
      {
        question: 'What efficiency and compliance improvements can utilities expect from AI?',
        answer:
          'UK utilities we work with typically improve demand forecast accuracy by 15–25 percentage points within two quarters, reduce grid balancing costs by 10–20%, and cut Ofgem compliance reporting time by 40–60% through automated evidence production.',
      },
      {
        question: 'How do you handle Ofgem regulation and data governance for AI systems?',
        answer:
          'Every system is designed against Ofgem reporting requirements, RIIO price control obligations, and smart-meter data access rules under the DCC framework. Model decisions are auditable and explainable to the regulator on demand.',
      },
      {
        question: 'Which energy AI use case should we start with?',
        answer:
          'Smart-meter anomaly detection or demand forecasting are the strongest first pilots — both directly reduce cost and improve grid reliability with clear before/after metrics that the Ofgem price control evidence base can absorb.',
      },
      {
        question: 'Can AI support the energy transition to renewables and grid decarbonisation?',
        answer:
          'Yes. AI plays a critical role in intermittent renewable forecasting, flexibility market optimisation, and EV charging demand prediction. We work with both traditional utilities and pure-play renewable operators navigating the transition.',
      },
    ],
    'pharma-life-sciences': [
      {
        question: 'How much does pharma and life sciences AI consultancy cost?',
        answer:
          'Phase 1 Diagnostic is £6,500 (3 weeks) and maps your data sources, MHRA governance requirements, and highest-value AI use cases. Phase 2 Build runs at £850/day embedded. Phase 3 Retain is £10,000/month for ongoing model governance, validation support, and regulatory evidence management.',
      },
      {
        question: 'How long does a pharma AI project take?',
        answer:
          'Phase 1 Diagnostic takes 3 weeks; document intelligence and clinical data analysis pilots typically ship in 8–14 weeks; Phase 2 Build runs 3–6 months. GxP-regulated systems require additional validation phases that extend timelines accordingly.',
      },
      {
        question: 'What productivity gains can pharma companies expect from document AI?',
        answer:
          'Life sciences companies we work with typically reduce regulatory submission preparation time by 30–50%, cut clinical data review cycles by 20–40%, and improve adverse event triage speed by 40–60% through document intelligence automation.',
      },
      {
        question: 'How do you ensure MHRA and GxP compliance for AI systems?',
        answer:
          'Every system is designed with MHRA AI guidance and GxP validation requirements in mind. We produce IQ/OQ/PQ documentation for regulated systems, design data governance against 21 CFR Part 11 principles, and ensure model decisions are explainable to regulatory inspectors.',
      },
      {
        question: 'Which pharma AI use case should we start with?',
        answer:
          'Document intelligence for regulatory submissions or clinical data extraction are the strongest first pilots — both deliver measurable time savings in processes with clear quality metrics, and neither requires changes to validated manufacturing systems.',
      },
      {
        question: 'Can AI assist with pharmacovigilance and adverse event reporting?',
        answer:
          'Yes. AI triage systems accelerate initial case classification, identify potential signals from narrative reports, and draft MedDRA-coded case reports for pharmacovigilance team review. Human pharmacovigilance professionals retain full sign-off authority on every submission.',
      },
    ],
    construction: [
      {
        question: 'How much does construction AI consultancy cost?',
        answer:
          'Phase 1 Diagnostic is £6,500 (3 weeks) and maps your estimating, programme management, and HSE data sources. Phase 2 Build runs at £850/day embedded. Phase 3 Retain is £10,000/month for ongoing programme risk monitoring and compliance evidence management.',
      },
      {
        question: 'How long does a construction AI project take?',
        answer:
          'Phase 1 Diagnostic takes 3 weeks; bid automation or programme risk pilots typically ship in 8–12 weeks; Phase 2 Build runs 3–6 months.',
      },
      {
        question: 'What margin and programme improvements can contractors expect from AI?',
        answer:
          'Contractors we work with typically reduce estimating time by 30–50% through bid automation, improve programme risk identification accuracy by 20–35%, and reduce HSE incident rates by 15–25% through predictive safety monitoring.',
      },
      {
        question: 'How do you handle HSE compliance and site safety data?',
        answer:
          'All HSE and incident data is processed within UK-hosted infrastructure. Safety monitoring systems are designed as decision-support tools — flagging risks for human review — never as autonomous enforcement. Every system meets CDM 2015 principal contractor obligations.',
      },
      {
        question: 'Which construction AI use case should we start with?',
        answer:
          'Bid automation or programme risk analysis are the strongest first pilots — both have clear time-saving and margin-protection metrics that are straightforward to defend to the commercial director and board.',
      },
      {
        question: 'Can AI help with BIM data and digital twin integration?',
        answer:
          'Yes. We build AI layers on top of BIM environments that enable clash detection, progress monitoring against programme, and automated quantity extraction for interim valuations. Integration with Autodesk, Bentley, and Trimble platforms is straightforward.',
      },
    ],
    hospitality: [
      {
        question: 'How much does hospitality AI consultancy cost?',
        answer:
          'Phase 1 Diagnostic is £6,500 (3 weeks) and maps your PMS, booking platform, and revenue management data. Phase 2 Build runs at £850/day embedded. Phase 3 Retain is £10,000/month for ongoing revenue optimisation, demand forecasting, and guest-experience improvements.',
      },
      {
        question: 'How quickly does hospitality AI improve revenue metrics?',
        answer:
          'Phase 1 Diagnostic takes 3 weeks; revenue management automation and demand forecasting pilots typically ship in 6–10 weeks; Phase 2 Build runs 3–6 months. Most hotels see RevPAR improvement within the first trading quarter.',
      },
      {
        question: 'What RevPAR and occupancy improvement can hotels expect from AI?',
        answer:
          'UK hotels using AI revenue management typically improve RevPAR by 8–15% within the first year through better rate optimisation, channel management, and demand forecasting. Guest-experience personalisation typically lifts NPS scores by 10–20 points and repeat booking rates by 15–25%.',
      },
      {
        question: 'How do you handle guest data privacy under GDPR?',
        answer:
          'All guest data is processed within UK-hosted infrastructure and complies with UK GDPR. Personalisation is based on consented first-party data — preference history, stay patterns, loyalty programme data — and never on sensitive inferred characteristics.',
      },
      {
        question: 'Which hospitality AI use case should we start with?',
        answer:
          'Revenue management automation or demand forecasting are the strongest first pilots — both directly improve profitability with clear before/after metrics that the revenue manager and ownership group can measure within a single trading quarter.',
      },
      {
        question: 'Can AI help restaurants as well as hotels?',
        answer:
          'Yes. Restaurant AI covers demand forecasting for kitchen prep optimisation, menu pricing analysis, reservation management automation, and voice-of-customer analytics from reviews. Both hospitality sub-sectors benefit from the same demand forecasting and personalisation patterns.',
      },
    ],
    'media-publishing': [
      {
        question: 'How much does media and publishing AI consultancy cost?',
        answer:
          'Phase 1 Diagnostic is £6,500 (3 weeks) and maps your content workflow, audience data platform, and subscription stack. Phase 2 Build runs at £850/day embedded. Phase 3 Retain is £10,000/month for ongoing editorial automation support, audience analytics, and IP governance.',
      },
      {
        question: 'How quickly does AI improve media and publishing productivity?',
        answer:
          'Phase 1 Diagnostic takes 3 weeks; editorial automation and audience analytics pilots typically ship in 6–10 weeks; Phase 2 Build runs 3–6 months. Most publishers see measurable content output improvements within the first quarter.',
      },
      {
        question: 'What output and revenue improvements can publishers expect from AI?',
        answer:
          'Publishers we work with typically increase content output by 3–5x per editorial headcount within the first year, improve subscription conversion rates by 15–25% through personalised reader journeys, and improve churn prediction accuracy enough to reduce voluntary churn by 10–20%.',
      },
      {
        question: 'How do you protect intellectual property and editorial standards in AI content?',
        answer:
          'Every AI content pipeline includes strict brand voice guidelines, human editorial sign-off gates for published content, and clear IP ownership frameworks. We never train models on copyright-protected third-party content without appropriate licensing, and all generated content is disclosed where platform rules require it.',
      },
      {
        question: 'Which media AI use case should we start with?',
        answer:
          'Editorial automation (first-draft generation, transcript summarisation, headline testing) and audience analytics are the strongest first pilots — both deliver immediate productivity gains and revenue insight with low risk to editorial standards.',
      },
      {
        question: 'Can AI help with audience subscription and churn modelling?',
        answer:
          'Yes. Subscription revenue forecasting and churn prediction are high-value applications for broadcasters and digital publishers. AI models predict which subscribers are at risk 60–90 days out, enabling targeted retention offers before the renewal decision is made.',
      },
    ],
    'professional-services': [
      {
        question: 'How much does professional services AI consultancy cost?',
        answer:
          'Phase 1 Diagnostic is £6,500 (3 weeks) and maps your project management, billing, and CRM data sources. Phase 2 Build runs at £850/day embedded. Phase 3 Retain is £10,000/month for ongoing utilisation analytics, proposal automation, and revenue forecasting.',
      },
      {
        question: 'How quickly does AI improve professional services performance metrics?',
        answer:
          'Phase 1 Diagnostic takes 3 weeks; proposal automation and utilisation analytics pilots typically ship in 6–10 weeks; Phase 2 Build runs 3–6 months. Most firms see measurable improvements in utilisation rates and bid win rates within two quarters.',
      },
      {
        question: 'What margin and growth improvements can consulting and accounting firms expect?',
        answer:
          'Professional services firms we work with typically improve utilisation rates by 5–10 percentage points through better resource allocation, lift proposal win rates by 15–25% through better targeting and personalisation, and reduce proposal preparation time by 40–60% through automation.',
      },
      {
        question: 'How do you handle client confidentiality in AI systems?',
        answer:
          'All data is processed within your existing infrastructure and never shared with third-party AI platforms without appropriate data processing agreements. We design strict data-access controls so engagement data from one client never influences AI outputs for another.',
      },
      {
        question: 'Which professional services AI use case should we start with?',
        answer:
          'Proposal automation or utilisation analytics are the strongest first pilots — both directly improve revenue or margin with clear before/after metrics, and neither requires changes to existing client-facing delivery processes.',
      },
      {
        question: 'Can AI help professional services firms identify cross-sell opportunities?',
        answer:
          'Yes. AI analyses matter co-occurrence, client revenue patterns, and service uptake across your client base to surface cross-sell and upsell opportunities your relationship managers can act on. This typically improves revenue per client by 10–20% within the first year.',
      },
    ],
    automotive: [
      {
        question: 'How much does automotive AI consultancy cost?',
        answer:
          'Phase 1 Diagnostic is £6,500 (3 weeks) and maps your DMS, CRM, and stock management data sources. Phase 2 Build runs at £850/day embedded. Phase 3 Retain is £10,000/month for ongoing inventory optimisation, F&I analytics, and customer lifecycle management.',
      },
      {
        question: 'How quickly does automotive AI improve dealer performance metrics?',
        answer:
          'Phase 1 Diagnostic takes 3 weeks; inventory optimisation and F&I automation pilots typically ship in 8–12 weeks; Phase 2 Build runs 3–6 months. Most dealer groups see measurable stock turn and F&I penetration improvement within the first trading quarter.',
      },
      {
        question: 'What gross profit and stock turn improvement can dealer groups expect?',
        answer:
          'UK dealer groups using AI inventory optimisation typically improve stock turn by 15–25% and reduce days-to-sale by 10–20 days within the first year. F&I automation typically improves product penetration rates by 10–20 percentage points through better customer matching.',
      },
      {
        question: 'How do you handle FCA consumer credit compliance for automotive AI?',
        answer:
          'Every F&I AI system is designed against FCA consumer credit regulations, Consumer Duty obligations, and the FCA motor finance review findings. Recommendations are transparent, explainable, and always subject to human dealer sign-off before presentation to the customer.',
      },
      {
        question: 'Which automotive AI use case should we start with?',
        answer:
          'Inventory optimisation or F&I penetration analytics are the strongest first pilots — both have clear margin metrics that the dealer principal and group MD can measure within a single trading quarter.',
      },
      {
        question: 'Can AI help dealers with online-to-showroom customer journeys?',
        answer:
          'Yes. AI qualification and lead-scoring tools identify which online enquiries are most likely to convert to showroom visits and purchases, enabling sales teams to prioritise their follow-up. Most dealer groups see online-to-showroom conversion improve by 15–30% within the first quarter.',
      },
    ],
    'charities-nonprofits': [
      {
        question: 'How much does charity and nonprofit AI consultancy cost?',
        answer:
          'Phase 1 Diagnostic is £6,500 (3 weeks) and maps your CRM, fundraising platform, and data governance maturity. Phase 2 Build runs at £850/day embedded. Phase 3 Retain is £10,000/month for ongoing supporter analytics, grant management support, and model governance.',
      },
      {
        question: 'How quickly does AI improve fundraising and supporter engagement?',
        answer:
          'Phase 1 Diagnostic takes 3 weeks; supporter analytics and fundraising automation pilots typically ship in 6–10 weeks; Phase 2 Build runs 3–6 months. Most charities see measurable improvement in individual giving revenue within two to three full campaign cycles.',
      },
      {
        question: 'What fundraising ROI can charities expect from AI?',
        answer:
          'Charities we work with typically improve individual giving revenue by 15–30% through better supporter segmentation and personalised ask strategies, and reduce grant-writing time by 30–50% through automated first-draft generation and eligibility screening.',
      },
      {
        question: 'How do you ensure GDPR compliance for charity supporter data?',
        answer:
          'All supporter data is processed within UK-hosted infrastructure and complies with UK GDPR. Consent management is central to every system — AI models only use data for purposes supporters have explicitly consented to, and consent management is auditable on demand for ICO or Fundraising Regulator review.',
      },
      {
        question: 'Which charity AI use case should we start with?',
        answer:
          'Supporter analytics and fundraising segmentation are the strongest first pilots — both directly improve income with clear before/after metrics and require no changes to existing supporter relationships or fundraising programmes.',
      },
      {
        question: 'Can AI help with grant applications and trust fundraising?',
        answer:
          'Yes. AI tools analyse funder guidelines and your previous successful applications to generate first-draft grant proposals, flag eligibility criteria, and prioritise application opportunities by likelihood of success. Most trusts and charities report significant time savings in their grants team within the first quarter of use.',
      },
    ],
  };

  return faqs[slug] || null;
}

// ─── industry solutionSection heading rewrites ────────────────────────────────

function rewriteIndustrySectionHeading(heading) {
  if (!heading || heading.endsWith('?')) return heading;

  const h = heading.trim();

  // Specific patterns
  if (/^AI Inventory Management/i.test(h)) {
    return h.replace(/^AI Inventory Management in (.+)$/i, 'How Can AI Improve Inventory Management in $1?');
  }
  if (/^Agentic Automation Across/i.test(h)) {
    return h.replace(/^Agentic Automation Across (.+)$/i, 'How Do Agentic Agents Automate $1?');
  }
  if (/^AI-Powered Data Analysis in/i.test(h)) {
    return h.replace(/^AI-Powered Data Analysis in (.+)$/i, 'What Can AI Analytics Reveal for $1?');
  }
  if (/^AI-Powered Analysis of/i.test(h)) {
    return 'What Can AI Analytics Reveal from This Data?';
  }
  if (/^AI Forecasting in/i.test(h)) {
    return h.replace(/^AI Forecasting in (.+)$/i, 'How Does AI Forecasting Work for $1?');
  }
  if (/^Demand and Capacity Forecasting/i.test(h)) {
    return 'How Does AI Demand and Capacity Forecasting Work for Networks?';
  }
  if (/^Highest-ROI AI Use Cases for/i.test(h)) {
    return h.replace(/^Highest-ROI AI Use Cases for (.+)$/i, 'What Are the Highest-ROI AI Use Cases for $1?');
  }
  if (/^High-ROI AI Use Cases/i.test(h)) {
    return h.replace(/^High-ROI AI Use Cases (.+)$/i, 'What Are the Highest-ROI AI Use Cases $1?');
  }
  if (/^Top AI Use Cases for/i.test(h)) {
    return h.replace(/^Top AI Use Cases for (.+)$/i, 'What Are the Highest-ROI AI Use Cases for $1?');
  }
  if (/^Practical AI Use Cases for/i.test(h)) {
    return h.replace(/^Practical AI Use Cases for (.+)$/i, 'What Are the Best AI Use Cases for $1?');
  }
  if (/^Common AI Use Cases in/i.test(h)) {
    return h.replace(/^Common AI Use Cases in (.+)$/i, 'What Are the Most Valuable AI Use Cases in $1?');
  }
  if (/^Common AI Use Cases for/i.test(h)) {
    return h.replace(/^Common AI Use Cases for (.+)$/i, 'What Are the Most Valuable AI Use Cases for $1?');
  }
  if (/^AI Automation in/i.test(h)) {
    return h.replace(/^AI Automation in (.+)$/i, 'How Does AI Automation Work in $1?');
  }
  if (/^AI Compliance Monitoring in/i.test(h)) {
    return h.replace(/^AI Compliance Monitoring in (.+)$/i, 'How Does AI Compliance Monitoring Work in $1?');
  }
  if (/^AI Compliance Monitoring for/i.test(h)) {
    return h.replace(/^AI Compliance Monitoring for (.+)$/i, 'How Does AI Compliance Monitoring Work for $1?');
  }
  if (/^AI Customer Support in/i.test(h)) {
    return h.replace(/^AI Customer Support in (.+)$/i, 'How Can AI Improve Customer Support in $1?');
  }
  if (/^AI Student Support in/i.test(h)) {
    return 'How Can AI Improve Student Support in Education?';
  }
  if (/^AI Employee Support in/i.test(h)) {
    return 'How Can AI Improve Employee Support in HR?';
  }
  if (/^AI Process Improvement in/i.test(h)) {
    return h.replace(/^AI Process Improvement in (.+)$/i, 'How Does AI Drive Process Improvement in $1?');
  }
  if (/^AI Lead Generation in/i.test(h)) {
    return h.replace(/^AI Lead Generation in (.+)$/i, 'How Does AI Improve Lead Generation in $1?');
  }

  // Generic fallback: append ?
  return h + '?';
}

// ─── location intro TL;DR prepend ────────────────────────────────────────────

function prependLocationIntro(slug, existingIntro) {
  const locationNames = {
    london: 'London',
    manchester: 'Manchester',
    birmingham: 'Birmingham',
    leeds: 'Leeds',
    bristol: 'Bristol',
    edinburgh: 'Edinburgh',
    glasgow: 'Glasgow',
    reading: 'Reading',
    leicester: 'Leicester',
    scotland: 'Scotland',
    'northern-ireland': 'Northern Ireland',
    norfolk: 'Norfolk',
  };

  const locationName = locationNames[slug] || slug;
  const tldr = `<strong>Agentic AI Associates serves ${locationName} businesses from our UK base.</strong> `;

  if (existingIntro && existingIntro.includes(`serves ${locationName} businesses from our UK base`)) {
    return existingIntro; // already patched
  }

  return tldr + existingIntro;
}

// ─── location section heading rewrites ───────────────────────────────────────

function rewriteLocationSectionHeading(heading) {
  if (!heading) return heading;

  const h = heading.trim();

  // Strip trailing ? so idempotent rewrites can correct bad earlier runs
  const base = h.endsWith('?') ? h.slice(0, -1).trim() : h;

  // Explicit rewrites keyed on the original noun-phrase text
  const MAP = {
    "London's AI Landscape":              "What Makes London the UK's AI Capital?",
    "AI for London's Key Industries":     "Which Industries Lead AI Adoption in London?",
    "Manchester's Digital Economy and AI":"How Is AI Shaping Manchester's Digital Economy?",
    "AI for Manchester's Key Sectors":    "Which Sectors Lead AI Adoption in Greater Manchester?",
    "Birmingham's Business Landscape and AI Potential": "What AI Potential Does Birmingham's Business Landscape Hold?",
    "AI for the West Midlands Economy":   "How Can AI Strengthen the West Midlands Economy?",
    "Leeds — The North's Digital Powerhouse": "What Makes Leeds the North's Digital Powerhouse?",
    "AI Opportunities Across Yorkshire":  "What AI Opportunities Exist Across Yorkshire?",
    "Bristol's Innovation Ecosystem":     "What Makes Bristol's Innovation Ecosystem Stand Out?",
    "AI for Bristol's Key Industries":    "Which Bristol Industries Benefit Most from AI?",
    "Edinburgh — Europe's Data Science Capital": "What Makes Edinburgh Europe's Data Science Capital?",
    "AI for Edinburgh's Business Community": "How Does AI Help Edinburgh's Business Community Grow?",
    "AI Consultancy in Scotland's Capital": "Why Choose an AI Consultancy Based in Edinburgh?",
    "Glasgow's Economic Transformation":  "How Is Glasgow's Economy Being Transformed by Technology?",
    "AI for Glasgow's Industries":        "Which Glasgow Industries Benefit Most from AI?",
    "The Thames Valley Technology Corridor": "What Makes the Thames Valley the UK's Technology Hub?",
    "AI for Thames Valley Industries":    "Which Thames Valley Industries Are Adopting AI Fastest?",
    "Leicester and the East Midlands Economy": "What Role Does Leicester Play in the East Midlands Economy?",
    "AI for Leicester's Key Sectors":     "Which Sectors Are Driving AI Adoption in Leicester?",
    "Scotland's AI Strengths":            "What Makes Scotland a Leading AI Location?",
    "AI Across Scotland's Regions":       "How Does AI Consultancy Reach Across All of Scotland?",
    "Northern Ireland's Tech Boom":       "How Is Northern Ireland's Tech Sector Growing?",
    "AI Opportunities in Northern Ireland": "What AI Opportunities Exist in Northern Ireland?",
    "AI Consultancy Across Northern Ireland": "How Do We Deliver AI Consultancy Across Northern Ireland?",
    "Norfolk's Business Landscape":       "What Industries Drive Norfolk's Business Landscape?",
    "AI for Norfolk's Key Industries":    "Which Norfolk Industries Benefit Most from AI?",
  };

  if (MAP[base]) return MAP[base];

  if (/^Why Choose a .* AI Consultant/i.test(base)) return base + '?';
  if (/^Why Choose an .* AI Consultant/i.test(base)) return base + '?';
  if (/^Working with a/i.test(base)) return 'Why Choose a Local AI Consultant?';
  if (/^Local (AI Consultancy|Consultancy|Expertise)/i.test(base)) return 'Why Choose a Local AI Consultant?';
  if (/^South West AI Consultancy/i.test(base)) return 'Why Choose a South West AI Consultant?';
  if (/^West of Scotland AI Consultancy/i.test(base)) return 'Why Choose a West of Scotland AI Consultant?';
  if (/^East Anglia AI Consultancy/i.test(base)) return 'Why Choose an East Anglia AI Consultant?';
  if (/^East Midlands AI Consultancy/i.test(base)) return 'Why Choose an East Midlands AI Consultant?';

  // Already a proper question
  if (h.endsWith('?')) return h;

  // Generic: append ?
  return base + '?';
}

// ─── learn section heading rewrites ──────────────────────────────────────────

function rewriteLearnSectionHeading(heading) {
  if (!heading || heading.endsWith('?') || heading === 'The Short Answer') {
    return heading;
  }

  const h = heading.trim();

  // Known noun-phrase patterns → question form
  if (/^Faster Time to Value$/i.test(h)) {
    return 'How Does Hiring an AI Consultant Speed Up Delivery?';
  }
  if (/^The Path to Becoming/i.test(h)) {
    return 'What Is the Path to Becoming an AI Consultant?';
  }
  if (/^Education and Foundational/i.test(h)) {
    return 'What Education and Foundational Knowledge Do You Need?';
  }
  if (/^Building Practical Experience$/i.test(h)) {
    return 'How Do You Build Practical AI Consulting Experience?';
  }
  if (/^Developing Your Advisory Skills$/i.test(h)) {
    return 'How Do You Develop Advisory Skills as an AI Consultant?';
  }
  if (/^Landing Your First AI Consulting Role$/i.test(h)) {
    return 'How Do You Land Your First AI Consulting Role?';
  }
  if (/^Alternative Career Paths in AI Consulting$/i.test(h)) {
    return 'What Are the Alternative Career Paths in AI Consulting?';
  }
  if (/^Accelerating Your Career Progression$/i.test(h)) {
    return 'How Do You Accelerate Your AI Consulting Career?';
  }
  if (/^Transitioning Out of AI Consulting$/i.test(h)) {
    return 'What Options Exist When Transitioning Out of AI Consulting?';
  }

  // Generic: append ?
  return h + '?';
}

// ─── helper: ensure FAQ has at least minCount entries ─────────────────────────

function ensureFaqCount(faq, additions, minCount = 5) {
  if (!faq) return additions.slice(0, minCount);
  if (faq.length >= minCount) return faq;

  const needed = minCount - faq.length;
  const existing = new Set(faq.map(q => q.question.toLowerCase()));
  const toAdd = additions.filter(q => !existing.has(q.question.toLowerCase())).slice(0, needed);
  return [...faq, ...toAdd];
}

// Generic learn FAQ additions
function learnFaqAdditions(slug) {
  const additions = {
    'what-is-an-ai-consultant': [
      {
        question: 'How much do AI consultants charge in the UK?',
        answer:
          'Structured engagements like ours run in three phases: Phase 1 Diagnostic £6,500 fixed fee (3 weeks), Phase 2 Build £850/day (embedded delivery, 3–6 months), Phase 3 Retain £10,000/month (1 day/week, rolling). Independent day-rate consultants typically charge £500–£2,000/day depending on specialisation.',
      },
    ],
    'what-does-an-ai-consultant-do': [
      {
        question: 'How much does it cost to hire an AI consultant for a typical project?',
        answer:
          'Phase 1 Diagnostic is £6,500 fixed fee (3 weeks, board-ready roadmap). Phase 2 Build runs at £850/day embedded delivery over 3–6 months. Phase 3 Retain is £10,000/month (1 day/week, rolling) for ongoing oversight.',
      },
    ],
    'how-to-become-an-ai-consultant': [
      {
        question: 'What does an AI consultant charge, and what can I aim for as a career earner?',
        answer:
          'Experienced AI consultants in the UK typically charge £800–£2,000/day as independents. At partner level in a consultancy, total compensation reaches £200,000–£500,000+. Structured consultancy engagements are often priced by phase rather than by the day.',
      },
    ],
    'ai-consultant-skills': [
      {
        question: 'What salary can I earn as an AI consultant?',
        answer:
          'Mid-level AI consultants at UK firms typically earn £65,000–£100,000. Senior consultants and directors earn £100,000–£180,000. Independent AI consultants charge £800–£2,000/day, making six-figure total earnings achievable once you build a steady pipeline.',
      },
    ],
    'ai-consultant-career-path': [
      {
        question: 'How much do AI consultants at different career levels earn?',
        answer:
          'Analysts earn £35,000–£55,000. Consultants earn £55,000–£85,000. Senior consultants earn £85,000–£130,000. Directors earn £130,000–£200,000. Partners at major firms earn £200,000–£500,000+. Independent boutique owners can exceed these figures.',
      },
    ],
    'ai-consultant-job-description': [
      {
        question: 'What does an AI consultant engagement cost a business?',
        answer:
          'Phase 1 Diagnostic £6,500 (3 weeks, board-ready roadmap), Phase 2 Build £850/day (embedded delivery, 3–6 months), Phase 3 Retain £10,000/month (1 day/week, rolling). These phases structure a full AI adoption journey from strategy through to production support.',
      },
    ],
    'how-to-choose-an-ai-consultant': [
      {
        question: 'What should AI consultancy cost, and how do I compare quotes?',
        answer:
          'Look for structured, outcome-priced engagements rather than open-ended day-rate engagements. Our three-phase structure — Phase 1 Diagnostic £6,500, Phase 2 Build £850/day, Phase 3 Retain £10,000/month — makes costs predictable and ties payment to clear deliverables.',
      },
    ],
    'when-to-hire-an-ai-consultant': [
      {
        question: 'How much does it cost to bring in an AI consultant versus hiring in-house?',
        answer:
          'A senior in-house AI hire costs £80,000–£150,000 salary plus benefits, onboarding, and management overhead. Our Phase 1 Diagnostic starts at £6,500 and delivers a board-ready roadmap in 3 weeks — significantly lower risk for organisations not yet ready for a permanent hire.',
      },
    ],
    'benefits-of-hiring-an-ai-consultant': [
      {
        question: 'What is the typical ROI of hiring an AI consultant?',
        answer:
          'Clients regularly report 3x–10x returns on consultancy investment within the first year through cost savings, revenue growth, and avoided waste from not pursuing dead-end AI initiatives. Phase 1 Diagnostic at £6,500 typically identifies £50,000–£500,000 in AI-realisable value.',
      },
    ],
    'ai-consultant-vs-vendor': [
      {
        question: 'What does independent AI consultancy cost compared to vendor professional services?',
        answer:
          'Independent consultancy typically costs 20–40% less than vendor professional services for the same scope, without the vendor\'s incentive to recommend their own products. Our Phase 1 Diagnostic (£6,500) delivers vendor-neutral recommendations with no implementation bias.',
      },
    ],
    'freelance-ai-consultant': [
      {
        question: 'What do freelance AI consultants charge in the UK?',
        answer:
          'Freelance AI consultants in the UK typically charge £600–£2,000/day depending on specialisation. For structured project engagements, pricing by phase (discovery, build, support) is more predictable than open-ended day rates.',
      },
    ],
    'agentic-ai-vs-rpa': [
      {
        question: 'How much does agentic AI cost compared to traditional RPA?',
        answer:
          'RPA platforms (UiPath, Automation Anywhere) charge per bot, per process, plus maintenance. Agentic AI is typically scoped as a Phase 2 Build at £850/day (3–6 months) with an upfront Phase 1 Diagnostic at £6,500. For complex multi-step workflows, agentic AI often delivers better ROI at lower long-term cost.',
      },
    ],
    'agentic-ai-vs-chatbots': [
      {
        question: 'What does an agentic AI system cost compared to a basic chatbot?',
        answer:
          'A basic scripted chatbot can be deployed for a few thousand pounds. A production agentic AI system that genuinely resolves issues (not just deflects them) typically requires Phase 2 Build at £850/day over 3–6 months, preceded by a Phase 1 Diagnostic at £6,500. The higher investment reflects the higher containment rates — 50–70% versus 20–30% for basic chatbots.',
      },
    ],
    'in-house-ai-team-vs-consultancy': [
      {
        question: 'What is the cost comparison between an in-house AI team and external consultancy?',
        answer:
          'A minimal in-house AI team (1 ML engineer, 1 data engineer, 1 product manager) costs £250,000–£350,000/year in salaries alone. External consultancy at Phase 2 Build rates (£850/day) for 3–6 months costs £100,000–£200,000 for the same scope — without the hiring risk, benefits cost, or management overhead.',
      },
    ],
    'agentic-ai-vs-generative-ai': [
      {
        question: 'What does it cost to build a generative AI system versus an agentic AI system?',
        answer:
          'A focused generative AI deployment (RAG system or content pipeline) typically runs Phase 2 Build at £850/day for 2–3 months. An agentic system for a complex multi-step workflow typically runs 3–6 months. Both are preceded by Phase 1 Diagnostic at £6,500. Agentic systems cost more to build but replace operational capability worth more.',
      },
    ],
    'build-vs-buy-ai-agents': [
      {
        question: 'What does it cost to build a custom AI agent versus buying an off-the-shelf product?',
        answer:
          'Vertical AI agent products charge £500–£5,000/month per seat or workflow. Custom builds run at Phase 2 Build rates (£850/day, 3–6 months) — typically £80,000–£200,000 upfront but with full ownership, no per-seat fees, and no vendor lock-in. The right choice depends on whether the workflow is differentiating for your business.',
      },
    ],
  };

  return additions[slug] || [
    {
      question: 'How much does AI consultancy cost for this type of project?',
      answer:
        'Phase 1 Diagnostic £6,500 (3 weeks, board-ready roadmap), Phase 2 Build £850/day (embedded delivery, 3–6 months), Phase 3 Retain £10,000/month (1 day/week, rolling).',
    },
  ];
}

// ─── Main patching functions ──────────────────────────────────────────────────

function patchWhatWeDo(data) {
  let count = 0;
  const targetSlugs = ['data-ai', 'conversational-ai', 'ai-training', 'ongoing-support', 'applied-ai'];

  for (const slug of targetSlugs) {
    const page = findPage(data.pages, slug);
    if (!page) {
      console.log(`  [WARN] what-we-do: page not found: ${slug}`);
      continue;
    }

    const patch = WHAT_WE_DO_PATCHES[slug];
    if (!patch) continue;

    // 1. Add definedTerm (idempotent)
    if (!page.definedTerm) {
      page.definedTerm = patch.definedTerm;
    }

    // 2. Convert section headings to question form
    if (page.sections && patch.sectionHeadings) {
      page.sections.forEach((section, i) => {
        if (patch.sectionHeadings[i] && !section.heading.endsWith('?')) {
          section.heading = patch.sectionHeadings[i];
        }
      });
    }

    // 3. Replace FAQ with 6 quantified Q&As (idempotent: check if already replaced)
    const existingPricingCount = (page.faq || []).filter(q =>
      /£6,500|phase 1 diagnostic|£850\/day|£10,000\/month/i.test(q.answer)
    ).length;
    if (existingPricingCount === 0 || (page.faq || []).length < 5) {
      page.faq = patch.faq;
    }

    count++;
    console.log(`  [OK] what-we-do: patched ${slug}`);
  }

  return count;
}

function patchIndustries(data) {
  let count = 0;

  for (const page of data.pages) {
    const slug = page.slug;
    const definedTermData = INDUSTRY_DEFINED_TERMS[slug];

    if (!definedTermData) {
      console.log(`  [SKIP] industries: no definedTerm config for ${slug}`);
      continue;
    }

    // 1. Add definedTerm (idempotent)
    if (!page.definedTerm) {
      page.definedTerm = definedTermData;
    }

    // 2. Convert solutionSections headings to question form
    if (page.solutionSections) {
      page.solutionSections.forEach(section => {
        if (section.heading && !section.heading.endsWith('?')) {
          section.heading = rewriteIndustrySectionHeading(section.heading);
        }
      });
    }

    // 3. Healthcare: just add pricing FAQ if missing; for others replace/supplement
    if (slug === 'healthcare') {
      if (!hasPricingFaq(page.faq)) {
        page.faq = page.faq || [];
        page.faq.push({
          question: 'How much does healthcare AI consultancy cost?',
          answer:
            'Phase 1 Diagnostic is £6,500 (3 weeks) and maps your EPR stack, data governance, and highest-value automation candidates. Phase 2 Build runs at £850/day embedded, typically 3–6 months. Phase 3 Retain is £10,000/month for ongoing oversight and model governance.',
        });
      }
    } else {
      // For all other industry pages: replace FAQ with full 5-6 quantified set
      const newFaq = buildIndustryFaq(slug);
      if (newFaq) {
        // Idempotent: only replace if current FAQ lacks pricing structure
        const alreadyRich = (page.faq || []).filter(q =>
          /£6,500|phase 1 diagnostic|£850\/day|£10,000\/month/i.test(q.answer)
        ).length >= 2;
        if (!alreadyRich) {
          page.faq = newFaq;
        }
      }
    }

    count++;
    console.log(`  [OK] industries: patched ${slug}`);
  }

  return count;
}

function patchLocations(data) {
  let count = 0;

  for (const page of data.pages) {
    const slug = page.slug;

    // 1. Prepend TL;DR to intro
    if (page.intro !== undefined) {
      page.intro = prependLocationIntro(slug, page.intro);
    }

    // 2. Convert sections headings to question form.
    // Always call rewrite — the function strips trailing ? and checks the map,
    // so it can correct headings that were naively suffixed on a prior run.
    if (page.sections) {
      page.sections.forEach(section => {
        if (section.heading) {
          section.heading = rewriteLocationSectionHeading(section.heading);
        }
      });
    }

    // 3. Ensure FAQ has 5-6 entries including pricing
    if (!hasPricingFaq(page.faq)) {
      const pricingEntry = {
        question: `What does AI consultancy cost in ${slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}?`,
        answer: `Phase 1 Diagnostic £6,500 (3 weeks, board-ready roadmap), Phase 2 Build £850/day (embedded delivery, 3–6 months), Phase 3 Retain £10,000/month (1 day/week, rolling).`,
      };
      page.faq = ensureFaqCount(page.faq || [], [pricingEntry], 5);
    }

    // Ensure at least 5 FAQ entries
    if ((page.faq || []).length < 5) {
      const extra = {
        question: 'Can you deliver AI consultancy remotely as well as on-site?',
        answer:
          'Yes. Most of our work combines on-site workshops and discovery sessions with remote delivery for ongoing advisory and implementation support. We travel across the UK for client-facing milestones.',
      };
      page.faq = ensureFaqCount(page.faq || [], [extra], 5);
    }

    count++;
    console.log(`  [OK] locations: patched ${slug}`);
  }

  return count;
}

function patchLearn(data) {
  let count = 0;

  for (const page of data.pages) {
    const slug = page.slug;

    // 1. Convert section headings to question form (skip "The Short Answer")
    if (page.sections) {
      page.sections.forEach(section => {
        if (section.heading) {
          section.heading = rewriteLearnSectionHeading(section.heading);
        }
      });
    }

    // 2. Ensure FAQ has at least 5 entries
    const additions = learnFaqAdditions(slug);
    page.faq = ensureFaqCount(page.faq || [], additions, 5);

    count++;
    console.log(`  [OK] learn: patched ${slug}`);
  }

  return count;
}

// ─── Entry point ──────────────────────────────────────────────────────────────

console.log('\n=== optimise-data-longtail.mjs ===\n');

// File A: what-we-do.json
console.log('→ Patching src/data/what-we-do.json ...');
const whatWeDo = load('src/data/what-we-do.json');
const countA = patchWhatWeDo(whatWeDo);
save('src/data/what-we-do.json', whatWeDo);
console.log(`  Patched ${countA} pages in what-we-do.json\n`);

// File B: industries.json
console.log('→ Patching src/data/industries.json ...');
const industries = load('src/data/industries.json');
const countB = patchIndustries(industries);
save('src/data/industries.json', industries);
console.log(`  Patched ${countB} pages in industries.json\n`);

// File C: locations.json
console.log('→ Patching src/data/locations.json ...');
const locations = load('src/data/locations.json');
const countC = patchLocations(locations);
save('src/data/locations.json', locations);
console.log(`  Patched ${countC} pages in locations.json\n`);

// File D: learn.json
console.log('→ Patching src/data/learn.json ...');
const learn = load('src/data/learn.json');
const countD = patchLearn(learn);
save('src/data/learn.json', learn);
console.log(`  Patched ${countD} pages in learn.json\n`);

console.log('=== Summary ===');
console.log(`  what-we-do.json : ${countA} pages patched`);
console.log(`  industries.json : ${countB} pages patched`);
console.log(`  locations.json  : ${countC} pages patched`);
console.log(`  learn.json      : ${countD} pages patched`);
console.log(`  Total           : ${countA + countB + countC + countD} pages patched`);
console.log('\nDone.\n');
