// Batch 3: education, hr, real-estate, marketing
import fs from 'node:fs';
const FILE = new URL('../src/data/industries.json', import.meta.url);
const data = JSON.parse(fs.readFileSync(FILE, 'utf8'));

const patches = {
  education: {
    intro: `<p>Education in the UK is stretched. Teachers are overwhelmed with marking, admin, and reporting. Universities face funding pressures and rising student expectations. Colleges balance vocational delivery with academic rigour. AI offers practical relief — automating the admin so educators can focus on teaching, and surfacing insights that help institutions intervene before students fall behind.</p>
<p>Schools, MATs, FE colleges, and universities we work with reclaim 5-12 hours per week per teacher within the first term, and lift early-warning detection of struggling students by 40-60% within an academic year. The recovered teacher time goes back into planning and pastoral work, not extra workload.</p>
<p>Every engagement starts with an <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> mapping your MIS, VLE, safeguarding systems, and data governance posture. We work natively with SIMS, Arbor, Bromcom, Canvas, Moodle, Blackboard, Microsoft Education, and Google Workspace for Education. Pilots ship in 8-12 weeks and respect the DfE generative AI policy framework, Ofsted expectations, and UK GDPR including special-category data handling for safeguarding.</p>`,
    sections: {
      automation: `<p>The marking, planning, and admin burden on UK teachers is the biggest single lever for retention. We deploy AI assistants that draft lesson plans aligned to your scheme of work and exam board specification, generate differentiated practice questions in seconds, and produce first-pass marking on extended writing for teacher review. Parent communication automation drafts email replies, attendance follow-up, and incident reports against your house style. Our <a href="/what-we-do/ai-automation/">AI automation</a> work integrates with the major MIS platforms (SIMS, Arbor, Bromcom) and the dominant VLEs. Multi-step <a href="/what-we-do/agentic-ai/">agentic AI</a> workflows handle full pastoral journeys — attendance flag → form tutor escalation → home contact → DSL referral — with safeguarding sign-off at each step.</p>`,
      'data-analysis': `<p>Schools and universities sit on rich student data they rarely use for early intervention. Our analytics pipelines surface early-warning signals from attendance, behaviour, assessment, and engagement data combined. Predict A-level result drift 6-9 months before final exams. Identify pupils at risk of persistent absence before the threshold triggers. Surface VLE engagement drops that correlate with assignment failures in HE. The <a href="/what-we-do/data-ai/">data AI</a> capability runs entirely in your environment, complies with the DfE data protection in schools guidance, and respects safeguarding boundaries strictly. Similar early-warning patterns power our work with <a href="/industries/government/">public sector</a> teams identifying citizens at risk of safeguarding escalation.</p>`,
      'compliance-monitoring': `<p>Education compliance covers DfE data protection guidance, KCSIE statutory safeguarding, Ofsted inspection requirements, JCQ exam regulations, and OfS conditions of registration for HE. Our compliance agents continuously monitor safeguarding case files for KCSIE alignment, audit assessment moderation samples for fairness, and surface gaps in EDI evidence. Every model decision carries a clear audit trail and human review checkpoint where statutory duty applies. The <a href="/what-we-do/ai-governance/">AI governance</a> framework we apply aligns with the DfE generative AI policy, the JCQ AI use guidance, and ICO best practice on automated decision-making in education.</p>`,
      forecasting: `<p>Forecasting in education spans demand planning, attainment prediction, and resource allocation. Our forecasting models predict KS4 and KS5 outcomes by pupil at term 2 with enough lead time to intervene. Predict university applications and conversions by course and bursary status. Plan teacher recruitment and CPD against predicted timetable demand and curriculum changes. Estate and catering capacity forecasting cuts waste and improves utilisation. The <a href="/what-we-do/applied-ai/">applied AI</a> patterns mirror approaches we use for <a href="/industries/healthcare/">NHS workforce planning</a> and <a href="/industries/retail/">retail demand forecasting</a> — pattern recognition tuned to academic-year cycles.</p>`,
    },
    extraSections: [
      {
        solution: 'use-cases',
        heading: 'Practical AI Use Cases for UK Schools, Colleges and Universities',
        body: `<p>Five clusters consistently deliver the highest impact for UK education providers across all phases.</p>
<ul>
  <li><strong>Teacher productivity:</strong> lesson and resource planning, differentiated question generation, first-pass marking, parent communication drafting.</li>
  <li><strong>Student early-warning:</strong> attendance pattern detection, attainment drift modelling, VLE engagement analytics, safeguarding signal aggregation (always with DSL human review).</li>
  <li><strong>Admissions and recruitment:</strong> application processing, bursary eligibility triage, conversion prediction, multilingual communication for international applicants.</li>
  <li><strong>Operational planning:</strong> timetable optimisation, room and estate utilisation, catering demand forecasting, transport routing.</li>
  <li><strong>Inclusive learning:</strong> accessibility text-to-speech and translation, adaptive practice content, SEN documentation drafting, EHCP review automation.</li>
</ul>
<p>Most providers get the strongest first win from teacher productivity tools — measurable hours back per week with no data protection risk. Our <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> ranks all five against your phase, MIS environment, and data governance maturity.</p>`,
        linkSlug: '/what-we-do/ai-readiness-assessment/',
      },
    ],
  },

  hr: {
    intro: `<p>HR teams are stretched thin. Recruitment takes too long, onboarding is inconsistent, and employee engagement data sits in spreadsheets gathering dust. AI changes the picture — automating high-volume sourcing, surfacing real engagement signals, and freeing HR to do the work that actually shifts retention and performance.</p>
<p>UK HR teams we work with cut time-to-hire by 30-50% within the first quarter and lift first-year retention by 10-20% through better onboarding personalisation and early-warning attrition modelling. The recovered HR capacity gets reinvested in talent development, culture work, and HR business partnering — not extra requisitions.</p>
<p>Every engagement starts with an <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> mapping your HRIS, ATS, payroll, and engagement survey stack. We work natively with Workday, SAP SuccessFactors, Oracle HCM, BambooHR, Personio, Greenhouse, Lever, and the major UK payroll platforms. We design every system against the EHRC AI in recruitment guidance and ICO employment data guidance, with full audit trails for every automated decision.</p>`,
    sections: {
      automation: `<p>Recruitment and onboarding are full of manual work AI handles cleanly. We deploy CV screening agents that rank candidates against role requirements with explainable scoring. Interview scheduling bots coordinate calendars across panels, candidates, and rooms. Offer letter generation pulls from your standard templates and HRIS data. Onboarding sequences personalise pre-boarding content, IT access requests, and first-week schedules per role and location. Our <a href="/what-we-do/ai-automation/">AI automation</a> work integrates with the major ATS platforms (Greenhouse, Lever, Workday Recruiting) and HRIS systems. Multi-step <a href="/what-we-do/agentic-ai/">agentic AI</a> workflows handle the full hire-to-onboard journey end-to-end with explicit human approval gates at every regulated step.</p>`,
      'data-analysis': `<p>HR data sits across HRIS, payroll, engagement surveys, performance reviews, and exit interviews — and most teams never integrate it. Our analytics pipelines surface attrition risk by team and tenure, identify the manager behaviours that correlate with retention, quantify pay equity gaps with statistical confidence, and highlight high-potential employees the formal talent review missed. The <a href="/what-we-do/data-ai/">data AI</a> capability runs entirely in your environment, respects ICO guidance on monitoring at work, and provides explainable recommendations HR business partners can act on. Similar people analytics power our work with <a href="/industries/finance/">financial services</a> firms managing regulated employee populations.</p>`,
      'compliance-monitoring': `<p>HR compliance covers ICO employment data guidance, EHRC equality duty, Equality Act 2010, EU/UK GDPR special-category data rules, working time regulations, and the new ethnicity pay reporting expectations. Our compliance agents continuously monitor recruitment funnels for adverse impact across protected characteristics, audit promotion and pay decisions for equity, and surface gaps in mandatory training compliance. Every model carries an audit trail mapped to the relevant regulation. The <a href="/what-we-do/ai-governance/">AI governance</a> framework we apply aligns with the EHRC AI guidance and ICO employment monitoring expectations — the same discipline we bring to <a href="/industries/government/">public sector</a> recruitment under the Public Sector Equality Duty.</p>`,
      forecasting: `<p>Forecasting in HR spans demand planning, attrition prediction, and skills supply. Our forecasting models predict resignation risk by individual 60-90 days out using behavioural signals from collaboration tools and engagement surveys (with worker consent and ICO compliance). Workforce planning models match predicted demand to supply by skill family, location, and grade. Skills gap analysis identifies the capabilities the business needs in 18 months but lacks today. The <a href="/what-we-do/applied-ai/">applied AI</a> patterns mirror approaches we use for <a href="/industries/healthcare/">NHS workforce planning</a> and <a href="/industries/government/">public sector</a> capacity modelling — pattern recognition tuned to long talent cycles.</p>`,
    },
    extraSections: [
      {
        solution: 'use-cases',
        heading: 'Highest-Impact AI Use Cases for UK HR Teams',
        body: `<p>Five clusters consistently deliver the strongest combination of HR efficiency and employee experience.</p>
<ul>
  <li><strong>Talent acquisition:</strong> CV screening with explainable scoring, sourcing and outreach, interview scheduling, offer generation, candidate experience analytics.</li>
  <li><strong>Onboarding and lifecycle:</strong> personalised pre-boarding, automated access provisioning, 30/60/90 check-in scheduling, role transition support.</li>
  <li><strong>People analytics:</strong> attrition prediction, engagement signal surfacing, manager effectiveness scoring, pay equity analysis with statistical confidence.</li>
  <li><strong>Learning and development:</strong> personalised learning recommendations, skills gap analysis, mentor matching, leadership pipeline identification.</li>
  <li><strong>HR operations:</strong> policy chat for employee self-service, leave balance queries, expense and benefits guidance, mandatory training nudges.</li>
</ul>
<p>Most teams get the strongest first win from talent acquisition or HR operations — both deliver measurable time savings without touching regulated employment decisions. Our <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> ranks these against your HRIS environment, hiring volume, and policy framework.</p>`,
        linkSlug: '/what-we-do/ai-readiness-assessment/',
      },
    ],
  },

  'real-estate': {
    intro: `<p>The UK property market generates enormous amounts of data — but most estate agents, developers, and property managers barely use it. AI turns that data into competitive advantage. Better property valuations, smarter buyer matching, faster transactions, and predictive maintenance for managed portfolios — all built on data you already collect.</p>
<p>UK property businesses we work with — from independent estate agents to FTSE 250 housebuilders — typically lift conversion from instruction to sale by 15-25% within two quarters and cut administrative cost per transaction by 30-40% in the same window. Build-to-rent operators and asset managers see operating cost reductions of 8-15% from predictive maintenance and energy optimisation alone.</p>
<p>Every engagement starts with an <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> mapping your CRM, listing portals, property management software, and BMS integrations. We work with Reapit, Alto, Yardi, MRI, COINS, BIM 360, and the major UK PropTech platforms. Pilots ship in 8-12 weeks and respect AML, FCA Mortgage Conduct, ICO guidance on property data, and the new Building Safety Act golden thread requirements.</p>`,
    sections: {
      'lead-generation': `<p>Lead generation in residential and commercial property is increasingly competitive. We deploy predictive lead scoring that identifies which enquiries are most likely to transact within 30, 60, and 90 days based on enquiry behaviour, search history, and demographic signals. Vendor identification AI surfaces homeowners likely to instruct in the next 6-12 months from public data — Land Registry signals, planning applications, life event indicators. Buyer matching agents pair listings to qualified buyers automatically rather than waiting for portal alerts to fire. The same approach drives lead generation results for <a href="/industries/marketing/">marketing-led businesses</a> and <a href="/industries/finance/">mortgage and protection brokers</a>.</p>`,
      automation: `<p>Property transactions are admin-heavy and slow. We automate AML and source-of-funds verification with full audit trail. Conveyancing chase agents track milestones across sale chains and surface bottlenecks before they cause fall-throughs. Tenancy renewal automation drafts notices, runs rent reviews, and schedules inspections. Property management agents triage tenant maintenance requests against contractor SLAs and budgets. Our <a href="/what-we-do/ai-automation/">AI automation</a> work integrates with Reapit, Alto, Yardi, MRI, and the major property management platforms. Multi-step <a href="/what-we-do/agentic-ai/">agentic AI</a> systems handle full lettings cycles end-to-end with human sign-off at regulated checkpoints.</p>`,
      'data-analysis': `<p>The UK property market generates rich first-party data — search behaviour, viewing patterns, offer history, transaction completions, tenant behaviour — that most operators never analyse beyond monthly reporting. Our analytics pipelines benchmark agent productivity objectively, surface listings priced incorrectly against comparables, identify portfolio risk concentrations, and quantify true yield after voids, arrears, and maintenance. The <a href="/what-we-do/data-ai/">data AI</a> capability connects to Land Registry, Rightmove and Zoopla data feeds, your CRM, and your property management system. Similar analytical depth powers our <a href="/industries/finance/">financial services</a> work on portfolio risk and our <a href="/industries/retail/">retail</a> work on location performance.</p>`,
      forecasting: `<p>Forecasting in property covers price movement, void risk, and capital expenditure. Our valuation models combine recent comparables, market signals, and property-specific features (EPC, planning history, structural condition) to deliver instant valuations more accurate than typical AVMs. Void prediction models flag rental properties at high turnover risk 60-90 days before notice. Predictive maintenance models for build-to-rent and PRS portfolios forecast major capex requirements 12-24 months out, smoothing budget cycles and avoiding emergency repair premiums. The <a href="/what-we-do/applied-ai/">applied AI</a> approach mirrors patterns from <a href="/industries/manufacturing/">manufacturing predictive maintenance</a> applied to property assets.</p>`,
    },
    extraSections: [
      {
        solution: 'use-cases',
        heading: 'High-ROI AI Use Cases for UK Property Businesses',
        body: `<p>Five clusters consistently deliver the strongest results across estate agency, lettings, BTR, and asset management.</p>
<ul>
  <li><strong>Valuation and pricing:</strong> AVM-grade valuations using local comparables, listing price recommendation, rent recommendation against comparables.</li>
  <li><strong>Lead and vendor identification:</strong> predictive lead scoring, vendor signal detection, buyer matching, conversion forecasting.</li>
  <li><strong>Transaction operations:</strong> AML and source-of-funds automation, conveyancing chain tracking, tenancy renewal automation, fall-through prediction.</li>
  <li><strong>Portfolio management:</strong> void prediction, arrears risk scoring, predictive maintenance, energy and EPC optimisation, ESG reporting.</li>
  <li><strong>Marketing and content:</strong> AI-generated property descriptions, image enhancement, virtual staging, multilingual particulars, social content.</li>
</ul>
<p>Most agencies get the strongest first win from valuation or transaction automation — both deliver measurable productivity gains without touching regulated advice. Our <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> ranks these against your CRM environment, transaction volume, and portfolio composition.</p>`,
        linkSlug: '/what-we-do/ai-readiness-assessment/',
      },
    ],
  },

  marketing: {
    intro: `<p>Marketing teams are expected to do more with less. More channels, more content, more personalisation — with flat or shrinking budgets. AI is not a nice-to-have any more; it is the only way to keep pace. The teams winning today are not the ones with the biggest agencies but the ones with the smartest workflows.</p>
<p>UK marketing teams we work with — from in-house brand teams to performance agencies — typically lift conversion rate by 20-40% within the first quarter through better personalisation, dynamic creative, and on-site search. Customer acquisition cost drops 15-30% as predictive bidding shifts spend toward audiences that actually convert at LTV-positive levels.</p>
<p>Every engagement starts with an <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> mapping your CDP, ad stack, marketing automation, and analytics environment. We work natively with Klaviyo, HubSpot, Marketo, Adobe Experience Platform, Salesforce Marketing Cloud, Segment, GA4, and the major ad platforms. Pilots ship in 6-10 weeks and prove ROI within a single campaign cycle. Every system we deploy respects UK GDPR, the PECR (cookies and marketing), and the ICO direct marketing guidance.</p>`,
    sections: {
      personalisation: `<p>Generic email blasts and one-size-fits-all landing pages leak conversion every day. We build AI personalisation across the full funnel — homepage hero rotation, email subject line and content variation, landing page dynamic blocks, retargeting creative selection, and post-purchase upsell sequences. Customer Data Platform integration means every personalisation decision uses unified first-party data, not fragmented session signals. The leading UK retailer we worked with lifted email revenue by 47% within two months through behavioural send-time and content personalisation. Our <a href="/what-we-do/data-ai/">data AI</a> capability anchors every recommendation in your first-party data, and it integrates with the same <a href="/what-we-do/conversational-ai/">conversational AI</a> that powers chat and clienteling.</p>`,
      automation: `<p>Marketing operations are full of repetitive work AI handles cleanly. Campaign trafficking, UTM tagging, asset versioning, brief writing, audience building — all automatable with measurable time savings. We deploy <a href="/what-we-do/conversational-ai/">conversational AI</a> for tier-1 customer enquiries that resolves 50-70% of contacts without human handoff. Content production agents draft blog outlines, social variants, ad copy A/B versions, and meta descriptions against your brand voice. Our <a href="/what-we-do/ai-automation/">AI automation</a> work integrates with HubSpot, Marketo, Klaviyo, and the major marketing automation platforms. Multi-step <a href="/what-we-do/agentic-ai/">agentic AI</a> systems handle complete campaign workflows end-to-end with brand-safety checkpoints.</p>`,
      'data-analysis': `<p>Marketing teams sit on rich data they rarely use — CDP records, ad platform performance, web analytics, CRM history, customer service interactions, post-purchase surveys. Most teams analyse less than 15% of it because BI projects keep getting deprioritised. We build analytics pipelines that surface real attribution beyond last-click, identify the audience cohorts driving 80% of LTV, quantify creative fatigue per campaign, and predict campaign performance from creative and audience signals before launch. The <a href="/what-we-do/data-ai/">data AI</a> capability runs in your environment and respects PECR and UK GDPR. Similar analytical patterns drive results for <a href="/industries/retail/">omnichannel retailers</a> and <a href="/industries/ecommerce/">DTC ecommerce brands</a>.</p>`,
      'lead-generation': `<p>Lead generation gets harder every quarter as ad platforms restrict targeting and creative fatigue accelerates. AI helps in three concrete ways. Predictive bidding shifts spend toward audiences most likely to convert profitably — measured in LTV, not just clicks. Creative testing at scale identifies winning hooks 3-5x faster than human iteration. Lookalike modelling on highest-LTV customers (not all converters) finds new buyers who actually stick around. Sales enablement agents qualify inbound leads with conversational triage before they hit the SDR queue. The same approach drives results for <a href="/industries/ecommerce/">ecommerce brands</a> and <a href="/industries/real-estate/">property businesses</a> targeting high-intent buyers.</p>`,
    },
    extraSections: [
      {
        solution: 'use-cases',
        heading: 'Highest-ROI AI Use Cases for UK Marketing Teams',
        body: `<p>Five clusters consistently deliver the strongest results for in-house marketing and agencies alike.</p>
<ul>
  <li><strong>Personalisation and CRO:</strong> dynamic landing pages, behavioural email, on-site search relevance, recommendation engines, exit-intent retention.</li>
  <li><strong>Content production:</strong> brief writing, blog outlines, ad copy variants, social asset generation, meta descriptions, multilingual versions.</li>
  <li><strong>Paid media optimisation:</strong> predictive bidding, creative testing at scale, audience modelling on LTV, attribution beyond last-click.</li>
  <li><strong>Customer analytics:</strong> LTV cohort analysis, churn prediction with retention triggers, next-best-action, propensity modelling for upsell.</li>
  <li><strong>Sales enablement:</strong> lead scoring, conversational lead qualification, account-based targeting, intent signal aggregation.</li>
</ul>
<p>Most teams get the strongest first win from personalisation or content production — both deliver measurable lift within weeks without major data engineering. Our <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> ranks these against your CDP environment, channel mix, and content cadence.</p>`,
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
      const idx = page.solutionSections.findIndex(s => s.solution === extra.solution);
      if (idx >= 0) page.solutionSections[idx] = extra;
      else page.solutionSections.push(extra);
    }
  }
  pagesUpdated++;
}
fs.writeFileSync(FILE, JSON.stringify(data, null, 2) + '\n');

const wc = s => String(s||'').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
console.log(`Updated ${pagesUpdated} pages.`);
for (const page of data.pages) {
  if (!patches[page.slug]) continue;
  const total = wc(page.intro) + page.solutionSections.reduce((a,s) => a + wc(s.body), 0) + page.faq.reduce((a,q) => a + wc(q.question) + wc(q.answer), 0);
  console.log(`  ${page.slug.padEnd(20)} ${total} words`);
}
