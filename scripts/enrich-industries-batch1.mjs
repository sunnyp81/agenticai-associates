// Expands intro + section bodies + adds new sections for batch 1 industries.
// Each rewrite follows semantic-audit standards: start-with-answer, no LLM fluff,
// concrete numbers, contextual internal links to /what-we-do/* and other industries.
import fs from 'node:fs';

const FILE = new URL('../src/data/industries.json', import.meta.url);
const data = JSON.parse(fs.readFileSync(FILE, 'utf8'));

const patches = {
  healthcare: {
    intro: `<p>Healthcare in the UK faces relentless pressure. Staff shortages, growing waiting lists, and mountains of paperwork drain resources that should go to patient care. AI offers a practical way to ease the burden — from triaging referrals to spotting patterns in patient data that humans cannot process at speed.</p>
<p>NHS trusts and private providers we work with reclaim 20-40% of clinical admin time within the first six months of deploying agentic workflows. The gains compound: less paperwork means lower burnout, better retention, and shorter waits for patients. Every healthcare engagement begins with an <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> so we can map your existing EPR, PAS, and reporting stack before recommending changes.</p>
<p>We work with HL7 and FHIR standards, integrate with NHS Spine where authorised, and design every system against the Data Security and Protection Toolkit. Whether you run a single primary care network or a 500-bed acute trust, we right-size the engagement — most pilots ship a working pipeline in 8-12 weeks.</p>`,
    sections: {
      automation: `<p>We deploy intelligent automation that handles the repetitive tasks draining your clinical staff. Discharge summaries are generated from clinical notes in under a minute. Appointment scheduling agents cut DNA rates by 30-50% via two-way SMS, calendar sync, and rebooking logic. Referral triage systems route patients to the right specialist first time using consultant-validated rules — not opaque models. One NHS trust we advised cut admin time per patient by 35% within three months. These are production-ready workflows built around your existing EPR and PAS systems — Epic, Cerner, EMIS, SystmOne — not experimental pilots. Our <a href="/what-we-do/ai-strategy/">AI strategy</a> work maps every automation to measurable clinical and operational outcomes, and our <a href="/what-we-do/agentic-ai/">agentic AI</a> systems handle multi-step workflows like consent capture, scheduling, and follow-up end-to-end.</p>`,
      'data-analysis': `<p>Healthcare generates vast amounts of data, but most trusts barely surface 10% of its value. We build AI pipelines that turn patient records, operational metrics, and population health data into actionable insights. Predict 30-day readmission risk before discharge. Identify demographic patterns in A&E attendance. Flag prescribing anomalies across your formulary in near real time. Our models integrate with NHS Spine, EMIS Web, and SystmOne, and respect Caldicott principles end-to-end. The same <a href="/what-we-do/data-ai/">data AI</a> patterns we use here power our work with <a href="/industries/government/">government and public sector</a> teams improving citizen outcomes, and they connect cleanly to our <a href="/what-we-do/applied-ai/">applied AI</a> models for downstream forecasting and decision support.</p>`,
      'compliance-monitoring': `<p>CQC inspections, GDPR, clinical governance — the compliance burden in healthcare is enormous. Our AI compliance tools monitor documentation, consent records, and clinical protocols against regulatory requirements continuously. Get alerted to gaps weeks before inspectors find them. Automated audit trails give you evidence on demand, not weeks before a visit. We build these systems with the Data Security and Protection Toolkit baked in from day one and follow the <a href="/what-we-do/ai-governance/">AI governance</a> framework that keeps patient trust intact. The same governance scaffolding powers our work in <a href="/industries/finance/">financial services</a> where FCA and PRA scrutiny is just as intense.</p>`,
      forecasting: `<p>Demand forecasting is critical for workforce planning, bed management, and elective care scheduling. We train models on your historical activity, seasonal patterns, and regional demographics — not generic NHS averages. Predict A&E surges 4-6 weeks in advance. Optimise theatre utilisation by forecasting cancellation rates per consultant. Plan staffing rotas around predicted acuity, not headcount. Most trusts recover the build cost within a single winter pressures cycle. The same <a href="/what-we-do/applied-ai/">applied AI</a> approach drives forecasting wins for <a href="/industries/education/">education providers</a> predicting student demand and <a href="/industries/retail/">retailers</a> planning seasonal inventory.</p>`,
    },
    extraSections: [
      {
        solution: 'use-cases',
        heading: 'Common AI Use Cases in UK Healthcare',
        body: `<p>The highest-ROI healthcare AI projects fall into five clusters. Each can ship as a standalone pilot in 8-12 weeks before scaling.</p>
<ul>
  <li><strong>Clinical documentation:</strong> ambient scribes that draft consultation notes, automated discharge summaries, coding assistance for SNOMED CT and ICD-10.</li>
  <li><strong>Patient flow:</strong> referral triage, theatre scheduling optimisation, predictive bed management, A&E demand forecasting.</li>
  <li><strong>Diagnostics support:</strong> radiology pre-read, retinal screening, dermatology referral grading — always positioned as decision support, never standalone.</li>
  <li><strong>Operations and back office:</strong> rota optimisation, procurement spend analysis, FOI request automation, complaint response drafting.</li>
  <li><strong>Patient engagement:</strong> appointment reminders with rebooking, post-op symptom triage, medication adherence prompts, multilingual chat for non-English speakers.</li>
</ul>
<p>Pick one cluster, prove the business case in a quarter, then expand. Our <a href="/what-we-do/ai-readiness-assessment/">readiness assessment</a> output ranks all five against your specific data maturity and clinical priorities.</p>`,
        linkSlug: '/what-we-do/ai-readiness-assessment/',
      },
    ],
  },

  legal: {
    intro: `<p>The legal sector is under pressure to deliver more for less. Clients expect faster turnarounds, transparent pricing, and proactive advice. AI gives law firms a genuine competitive edge — automating the grunt work of document review, contract drafting, and due diligence so solicitors can focus on the work that requires legal judgement.</p>
<p>UK firms we work with reduce contract review time by 60-80% and disclosure review by 40-60% within the first quarter. The recovered hours go straight back into chargeable advisory work or partner-led business development. We design every system to satisfy SRA principles, the Equality Act, and your firm's existing risk and compliance framework — agentic AI is not a workaround for professional duties.</p>
<p>Whether you are a regional high-street practice, a Magic Circle international, or in-house counsel for a FTSE 250, we right-size the engagement. Most pilots run on a single matter type — NDAs, leases, employment contracts — prove the value in 6-10 weeks, then scale firm-wide. Start with our <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> to map current matter management, document store, and PMS integration before scoping change.</p>`,
    sections: {
      automation: `<p>Document review is the obvious target — and the highest-ROI starting point. We deploy contract analysis agents that extract clauses, flag deviations from your standard playbook, and surface risk in plain English. Disclosure review pipelines triage hundreds of thousands of emails by relevance and privilege within hours rather than weeks. NDA negotiation bots redline against your house style automatically. One regional firm we advised cut average NDA turnaround from 4 days to under 6 hours and freed two associates' worth of capacity. Our <a href="/what-we-do/ai-automation/">AI automation</a> work integrates with iManage, NetDocuments, SharePoint, and the major PMS platforms (Elite 3E, Aderant, Clio) — no rip-and-replace. Our <a href="/what-we-do/agentic-ai/">agentic AI</a> systems can also run multi-step matter workflows: intake → conflict check → engagement letter → matter open.</p>`,
      'data-analysis': `<p>Litigation analytics, billing pattern analysis, matter profitability — most firms collect this data but never act on it. Our analytics pipelines surface which matter types over-run budget, which partners under-utilise associates, and which clients are at churn risk. Predict realisation rates per matter at intake using comparable historical work. Identify cross-sell opportunities by analysing matter co-occurrence across the client base. The <a href="/what-we-do/data-ai/">data AI</a> capability connects to your billing and time-recording systems via standard APIs, with no patient or client data leaving your environment. Similar analytics power our work with <a href="/industries/finance/">financial services</a> firms tracking advisor productivity and book quality.</p>`,
      'compliance-monitoring': `<p>SRA Standards and Regulations, AML, the Equality Act 2010, GDPR, Solicitors Code of Conduct — the compliance perimeter for a UK practice is wide and shifting. Our AI compliance agents continuously monitor file notes, client identification documents, and communications for AML and sanctions red flags. Deadline tracking agents cross-check court rules and matter milestones, alerting fee earners before limitation slips. We build to the <a href="/what-we-do/ai-governance/">AI governance</a> framework recommended by the Law Society and SRA — model decisions are always reviewable, never the final word on a regulated act. The same governance discipline applies in our <a href="/industries/healthcare/">healthcare</a> work where DSPT and CQC scrutiny operate at the same level.</p>`,
      forecasting: `<p>Forecasting matters demand and capacity is the hardest part of running a profitable practice. Our forecasting models train on your historic time recording, win/loss data, and pipeline to predict fee revenue per partner, per practice area, 60-90 days out. Predict resourcing gaps before they become missed deadlines. Identify when to hire ahead of pipeline conversion rather than reacting to billable hour spikes. The <a href="/what-we-do/applied-ai/">applied AI</a> patterns here mirror what we use for <a href="/industries/marketing/">marketing agencies</a> forecasting retainer load, and they integrate cleanly with Aderant, Elite 3E, and most modern PMS platforms.</p>`,
    },
    extraSections: [
      {
        solution: 'use-cases',
        heading: 'Highest-ROI AI Use Cases for UK Law Firms',
        body: `<p>Five use case clusters consistently deliver the fastest payback for UK practices.</p>
<ul>
  <li><strong>Contract lifecycle:</strong> clause extraction, redlining against playbooks, automated NDA turnaround, lease abstraction.</li>
  <li><strong>Disclosure and discovery:</strong> document triage by relevance and privilege, deduplication, predictive coding for litigation.</li>
  <li><strong>Knowledge management:</strong> precedent search across the firm's prior work, matter pack assembly, automated client briefings.</li>
  <li><strong>Compliance and risk:</strong> conflict checks, AML and sanctions monitoring, deadline and limitation tracking, file note review for SRA standards.</li>
  <li><strong>Business development:</strong> lateral hire pipeline analysis, cross-sell opportunity surfacing, client value forecasting, RFP response drafting.</li>
</ul>
<p>Most firms get the strongest first win from contract lifecycle or disclosure — both have clear time-saving metrics partners can defend at the management committee. Our <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> ranks these against your matter mix, document store, and PMS to recommend the right starting pilot.</p>`,
        linkSlug: '/what-we-do/ai-readiness-assessment/',
      },
    ],
  },

  finance: {
    intro: `<p>Financial services sit at the intersection of massive data volumes, strict regulation, and intense competition. AI is not optional in this sector — it is the table stakes for keeping pace with FCA-supervised challengers, neobanks, and global investment platforms. The question for UK firms is not whether to adopt AI, but how to do it without tripping the regulator.</p>
<p>Banks, asset managers, and insurers we advise reduce manual control hours by 30-50% within the first six months and shorten KYC onboarding from days to under an hour. Each engagement starts with a <a href="/what-we-do/ai-readiness-assessment/">readiness assessment</a> covering your data lineage, model risk management framework, and existing regulatory commitments — we never deploy something the second line cannot defend.</p>
<p>We design every solution against SS1/23, the FCA's AI guidance, and the Senior Managers and Certification Regime accountability map. Whether you are a regional building society, a wealth manager, an insurance broker, or a Tier 1 bank, we right-size the engagement — most pilots prove value in 10-14 weeks before scaling across the group.</p>`,
    sections: {
      automation: `<p>Automation in financial services has to be auditable end-to-end. We build agentic workflows for KYC and onboarding that pull from Companies House, sanctions lists, and adverse media in parallel, drafting risk decisions a human reviews and signs off. Reconciliation agents resolve 80% of intraday breaks before a human touches them. Claims triage in insurance routes by complexity and fraud signal in seconds rather than days. Every action lives in a tamper-evident log mapped to the relevant SMCR responsibility. Our <a href="/what-we-do/ai-automation/">AI automation</a> work integrates with the major core banking platforms (Temenos, Mambu, Thought Machine), policy admin systems (Guidewire, Sapiens), and case management tools — no rip-and-replace. Our <a href="/what-we-do/agentic-ai/">agentic AI</a> systems handle the full multi-step lifecycle of regulated workflows.</p>`,
      'data-analysis': `<p>The biggest data wins in finance are not in trading models — they are in customer analytics, controls testing, and conduct surveillance. Our pipelines surface vulnerable customer signals from servicing transcripts, identify mis-selling patterns across product lines, and quantify outcomes for Consumer Duty reporting. Risk segmentation models score insurance and lending books in near real time. Anti-money-laundering analytics cluster suspicious activity across customer entities, accounts, and counterparties. The <a href="/what-we-do/data-ai/">data AI</a> capability runs entirely within your environment with no customer data crossing the boundary, and it satisfies the model documentation expectations under SS1/23 and SS3/18. Similar analytical depth powers our <a href="/industries/healthcare/">healthcare</a> work on population health intelligence.</p>`,
      'compliance-monitoring': `<p>The compliance perimeter in UK financial services keeps expanding — Consumer Duty, the new appointed representative regime, ESG disclosure rules, operational resilience under SS2/21. Our compliance agents continuously monitor advice files, customer interactions, and policy documents for fair value and outcome failings. Get alerted to vulnerable customer indicators that humans miss. Automated control testing runs nightly against your full population, not a 10% sample. Every alert traces back to the regulatory rule, the evidence, and the recommended action. The <a href="/what-we-do/ai-governance/">AI governance</a> framework we apply here aligns with the FCA Discussion Paper on AI and the PRA SS1/23 model risk principles — the same discipline we bring to <a href="/industries/legal/">legal sector</a> compliance.</p>`,
      forecasting: `<p>Forecasting in finance covers everything from cash flow to claims experience to operational resilience scenarios. Our forecasting models predict customer attrition 60-90 days out using behavioural signals from servicing data. Insurance loss-cost models calibrate per peril and per customer segment, not per product line. Liquidity stress scenarios run on your actual deposit and lending book rather than industry averages. The <a href="/what-we-do/applied-ai/">applied AI</a> approach mirrors how <a href="/industries/retail/">retailers</a> forecast demand and how <a href="/industries/manufacturing/">manufacturers</a> model maintenance — pattern recognition tuned to financial-services time horizons.</p>`,
    },
    extraSections: [
      {
        solution: 'use-cases',
        heading: 'Defensible AI Use Cases in UK Financial Services',
        body: `<p>Five use case clusters consistently deliver clear ROI without exceeding regulatory tolerance.</p>
<ul>
  <li><strong>Customer onboarding:</strong> identity verification, KYC enrichment, sanctions and PEP screening, source-of-funds analysis.</li>
  <li><strong>Conduct and Consumer Duty:</strong> advice file review, vulnerability detection in calls, outcome monitoring across products.</li>
  <li><strong>Financial crime:</strong> transaction monitoring, network analysis across counterparties, SAR drafting assistance, sanctions hits triage.</li>
  <li><strong>Operations:</strong> reconciliation, claims triage, exception management, regulatory reporting (COREP, FINREP, MiFIR).</li>
  <li><strong>Customer analytics:</strong> attrition prediction, next-best-action, lifetime value modelling, vulnerable customer scoring.</li>
</ul>
<p>The strongest first wins are usually in operations or customer analytics — measurable ROI without putting model decisions on the regulated act path. Our <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> ranks all five against your data maturity, model risk framework, and governance committee appetite.</p>`,
        linkSlug: '/what-we-do/ai-readiness-assessment/',
      },
    ],
  },

  government: {
    intro: `<p>UK public sector organisations face a unique challenge — delivering better services with shrinking budgets, under intense public scrutiny. AI offers a genuine path to do more with less, but only if it is deployed with the transparency, fairness, and accountability the public rightly expects.</p>
<p>Local authorities, central government departments, and arm's-length bodies we work with cut citizen wait times by 40-70% on common service requests within the first six months of automating triage. The savings get reinvested in frontline service rather than back-office headcount. Every engagement starts with an <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> covering your data sharing arrangements, statutory duties, and existing digital strategy.</p>
<p>We build to the Algorithmic Transparency Recording Standard, the Data Ethics Framework, and the GOV.UK Service Standard. Every system we deploy can be audited by the public, scrutinised by ICO, and explained in a council scrutiny committee. Whether you are a unitary authority, an NHS-adjacent body, a Whitehall department, or a non-departmental public body, we right-size the engagement to your governance environment.</p>`,
    sections: {
      automation: `<p>Citizen service automation is the highest-ROI starting point in most public bodies. We deploy agentic workflows for benefits triage, planning application acknowledgement, council tax queries, and complaint handling that respond within minutes 24/7. Council officers reclaim hours per day previously spent on repeat enquiries. Blue badge and concessionary travel applications process automatically against eligibility rules with full audit trails. Our <a href="/what-we-do/ai-automation/">AI automation</a> work integrates with Capita One, Civica, Granicus, Liquidlogic, and the major case management systems used across UK local government. Multi-step <a href="/what-we-do/agentic-ai/">agentic AI</a> workflows handle the full citizen journey from initial query through escalation to officer review where statutory or discretionary judgment is required.</p>`,
      'data-analysis': `<p>Public sector organisations sit on rich data they rarely use for prevention. Our analytics pipelines surface early-warning signals for adult social care escalation, identify overlapping demand across children's services, and quantify ward-level demand for housing or transport. Population segmentation models help allocate place-based budgets fairly. The <a href="/what-we-do/data-ai/">data AI</a> capability runs entirely within your environment, complies with the National Data Strategy and the Information Sharing Agreement framework, and respects the Data Protection Impact Assessment expectations under UK GDPR. Similar evidence-led analytics power our work with <a href="/industries/healthcare/">NHS trusts</a> on population health and with <a href="/industries/education/">education providers</a> on early intervention.</p>`,
      'compliance-monitoring': `<p>Public bodies face uniquely high standards for fairness, equality, and transparency. Our compliance agents monitor decision-making for disparate impact across protected characteristics, audit FOI response timeliness, and surface gaps in Public Sector Equality Duty evidence. Every model we deploy carries an Algorithmic Transparency Record from day one. The <a href="/what-we-do/ai-governance/">AI governance</a> framework aligns with the Centre for Data Ethics and Innovation guidance, the AI Standards Hub, and ICO best practice on automated decision-making. The same discipline we apply for public-trust reasons here drives our <a href="/industries/healthcare/">healthcare</a> work where the Caldicott framework operates on the same principles.</p>`,
      forecasting: `<p>Forecasting in the public sector is about anticipating demand on stretched services. Our forecasting models predict adult social care demand by ward, school place pressure by year group, and homelessness presentations across a borough. Highways and waste collection optimise routes and shifts against predicted volumes rather than historical averages. The <a href="/what-we-do/applied-ai/">applied AI</a> patterns mirror approaches we use for <a href="/industries/retail/">retail demand planning</a> and <a href="/industries/healthcare/">A&E surge prediction</a> — pattern recognition tuned to the long-cycle nature of public service delivery.</p>`,
    },
    extraSections: [
      {
        solution: 'use-cases',
        heading: 'High-Impact AI Use Cases in UK Public Sector',
        body: `<p>Five clusters consistently deliver the strongest combination of citizen value and budget impact.</p>
<ul>
  <li><strong>Citizen contact:</strong> multilingual chat for benefits and council tax, complaint triage, FOI request acknowledgement and routing, repeat-caller pattern detection.</li>
  <li><strong>Eligibility and applications:</strong> blue badge, concessionary travel, school admission, housing register triage with full audit trail.</li>
  <li><strong>Operational planning:</strong> waste route optimisation, highways inspection prioritisation, adult social care demand forecasting, school place projections.</li>
  <li><strong>Safeguarding and prevention:</strong> early warning signals across children's services, adult social care escalation indicators, repeat domestic abuse pattern detection (always with statutory professional sign-off).</li>
  <li><strong>Back office:</strong> contract management, internal HR query handling, policy comparison and consultation analysis, briefing pack drafting for ministers and members.</li>
</ul>
<p>The fastest political wins usually come from citizen contact or eligibility automation — measurable savings, visible service improvement, no decision-making controversy. Our <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> ranks all five against your statutory duties, data sharing arrangements, and member or ministerial appetite.</p>`,
        linkSlug: '/what-we-do/ai-readiness-assessment/',
      },
    ],
  },
};

let pagesUpdated = 0;
for (const page of data.pages) {
  const patch = patches[page.slug];
  if (!patch) continue;
  page.intro = patch.intro;
  for (const section of page.solutionSections) {
    const newBody = patch.sections[section.solution];
    if (newBody) section.body = newBody;
  }
  if (patch.extraSections) {
    for (const extra of patch.extraSections) {
      // Avoid duplicating if rerun
      if (!page.solutionSections.some(s => s.solution === extra.solution)) {
        page.solutionSections.push(extra);
      } else {
        const idx = page.solutionSections.findIndex(s => s.solution === extra.solution);
        page.solutionSections[idx] = extra;
      }
    }
  }
  pagesUpdated++;
}

fs.writeFileSync(FILE, JSON.stringify(data, null, 2) + '\n');

// Recompute word counts for verification
const wc = s => String(s||'').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
console.log(`Updated ${pagesUpdated} pages.`);
for (const page of data.pages) {
  if (!patches[page.slug]) continue;
  const total = wc(page.intro) + page.solutionSections.reduce((a,s) => a + wc(s.body), 0) + page.faq.reduce((a,q) => a + wc(q.question) + wc(q.answer), 0);
  console.log(`  ${page.slug.padEnd(20)} ${total} words`);
}
