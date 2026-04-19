// Enriches the 7 thin what-we-do service pages to semantic-audit standards.
// Same structure as industries: intro, sections[].body, faq.
import fs from 'node:fs';
const FILE = new URL('../src/data/what-we-do.json', import.meta.url);
const data = JSON.parse(fs.readFileSync(FILE, 'utf8'));

const patches = {
  'data-ai': {
    intro: `<p>AI is only as good as the data behind it. We help UK businesses build the data infrastructure that makes AI possible — from foundational pipelines to advanced analytics. Without solid data foundations, even the best models produce unreliable results.</p>
<p>Most AI projects fail at the data layer, not the model layer. Teams discover their customer records sit across 12 systems with conflicting schemas. The product catalogue exists in three places with different SKU conventions. The data warehouse last refreshed six months ago. Our data engagements always begin with an honest audit through our <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> so we know exactly what we are working with before recommending change.</p>
<p>Whether you need a modern data warehouse, real-time pipelines, or production-grade machine learning models, we build the foundations that make AI delivery predictable. Most pilots ship in 8-12 weeks against a single high-value use case before scaling. We work with Snowflake, Databricks, BigQuery, Synapse, dbt, Fivetran, Airflow, and the major cloud platforms — no vendor lock-in.</p>`,
    sections: {
      'Data Strategy and Architecture': `<p>Data strategy work translates business priorities into a concrete data architecture decision tree. Should you centralise in a warehouse, federate across a lakehouse, or run a data mesh? Which workloads belong in real-time pipelines vs nightly batch? How does your data layer support agentic AI workflows where models read AND write back? We design pragmatic architectures that suit your scale, team, and budget — not theoretical reference architectures from a vendor whitepaper. Our <a href="/what-we-do/ai-strategy/">AI strategy</a> work always feeds into the data architecture phase, ensuring every pipeline serves a business outcome rather than building data assets that nobody uses.</p>`,
      'Pipelines and Integration': `<p>Your data lives across CRMs, ERPs, marketing platforms, finance systems, ticketing tools, and dozens of SaaS apps. We build the pipelines that bring it together reliably — using Fivetran or Airbyte for ingestion, dbt for transformation, and Airflow or Dagster for orchestration. Real-time pipelines stream events from Kafka or Kinesis into your warehouse and AI models. Reverse ETL pushes enriched data back into operational systems where teams already work. The <a href="/what-we-do/ai-automation/">AI automation</a> we build relies on clean integrated data, and the <a href="/what-we-do/agentic-ai/">agentic AI</a> systems we deploy use the same pipelines as their connective tissue.</p>`,
      'Analytics and Machine Learning': `<p>Analytics and ML capabilities turn data into decisions. We build dashboards in Looker, Tableau, Power BI, or Metabase tailored to the audience — exec dashboards for boards, operational reports for shift leaders, ad-hoc analysis tools for analysts. Machine learning models cover classification (customer segmentation, fraud scoring), regression (forecasting, pricing), clustering (cohort discovery), and recommendations. Every model ships with explainability built in, monitoring in production, and retraining pipelines so accuracy does not silently drift. The <a href="/what-we-do/applied-ai/">applied AI</a> capability turns model outputs into specific business products like demand forecasts and predictive maintenance schedules.</p>`,
      'Data Governance': `<p>Data governance is the unsexy work that determines whether your AI program survives an audit, a regulator visit, or a major incident. We help you establish clear data ownership, classification taxonomies, retention schedules, access policies, lineage tracking, and quality monitoring. UK GDPR, sector-specific rules (FCA SS1/23, NHS DSPT, ICO employment guidance), and the new EU AI Act all demand provable data governance. Our governance frameworks integrate with the wider <a href="/what-we-do/ai-governance/">AI governance</a> work so model and data accountability live in the same operating model rather than being managed separately by different teams.</p>`,
    },
    extraSections: [
      {
        heading: 'Common Data and AI Use Cases',
        body: `<p>Five clusters of work consistently deliver the strongest ROI for businesses building data foundations alongside AI capability.</p>
<ul>
  <li><strong>Customer data unification:</strong> identity resolution, CDP build-out, single customer view, GDPR-compliant first-party data activation.</li>
  <li><strong>Operational analytics:</strong> real-time dashboards on inventory, throughput, SLAs, financial position, with alerting on threshold breaches.</li>
  <li><strong>Predictive modelling:</strong> demand forecasting, attrition prediction, anomaly detection, propensity scoring across the customer base.</li>
  <li><strong>Reverse ETL and activation:</strong> push warehouse-derived insights back to Salesforce, HubSpot, ad platforms, and customer service tools.</li>
  <li><strong>ML platform and MLOps:</strong> feature stores, model registries, deployment pipelines, monitoring, retraining triggers.</li>
</ul>
<p>Most clients get the strongest first win from customer unification or operational analytics — both create immediate business value while laying the foundation for downstream AI work. Our <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> ranks these against your stack, team, and revenue priorities.</p>`,
      },
    ],
  },

  'conversational-ai': {
    intro: `<p>Conversational AI has moved far beyond scripted chatbots. We build systems that understand context, hold real conversations across multiple turns, and integrate with your back-office systems to actually resolve issues — not just deflect them. The technology now genuinely deflects 50-70% of contact-centre volume without frustrating customers.</p>
<p>The UK businesses we work with — from financial services firms to retailers to NHS trusts — typically deflect 50-70% of inbound contact-centre volume within the first quarter while improving CSAT scores. The recovered agent capacity goes back into complex cases that need human empathy and judgement, not extra hires.</p>
<p>Every conversational AI engagement starts with an <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> mapping your contact-centre platform, knowledge base, CRM, and identity verification stack. We work natively with Genesys, NICE, Five9, Zendesk, Intercom, Salesforce Service Cloud, and the major UK-hosted contact-centre platforms. Pilots ship in 6-10 weeks. Every system respects PCI DSS, UK GDPR, the FCA fair customer treatment principles, and accessibility requirements under the Equality Act 2010.</p>`,
    sections: {
      'Beyond Basic Chatbots': `<p>Old-school decision-tree chatbots fail because customers do not phrase questions the way the script anticipates. Modern conversational AI uses large language models grounded in your knowledge base via retrieval — so it understands intent flexibly while citing real source documents. We build systems that handle multi-turn conversations, resolve issues by calling back-office APIs (not just providing information), and escalate cleanly to human agents with full context. The <a href="/what-we-do/agentic-ai/">agentic AI</a> patterns we use let conversations span multiple systems — order lookup → return triage → refund processing → confirmation — without bouncing the customer between channels.</p>`,
      'Omnichannel Deployment': `<p>Customers do not think in channels — they expect the same conversation to continue from chat to phone to email. We deploy unified conversational AI across web chat, WhatsApp Business, Facebook Messenger, voice IVR, in-app chat, and email. State persists across channels so customers never repeat themselves. Voice deployments use modern speech recognition and synthesis to feel natural rather than robotic. Integration with your contact-centre platform (Genesys, NICE, Five9, Salesforce Service Cloud) means agents always inherit full context when calls escalate, and post-call summaries write back automatically. The <a href="/what-we-do/ai-automation/">AI automation</a> capability handles the after-call work that wastes 30-40% of agent time today.</p>`,
      'Measurable Customer Support Impact': `<p>Conversational AI ROI is straightforward to measure. Containment rate (issues resolved without human handoff), CSAT for AI conversations vs human, average handle time, first-contact resolution, and net cost per contact. UK retailers we work with hit 55-65% containment within three months for high-volume issue types like order tracking, returns, and store information. Financial services typically reach 40-50% containment in the first year (more nuanced regulated conversations limit the ceiling). Our <a href="/industries/retail/">retail</a> and <a href="/industries/finance/">financial services</a> work both rely on the same conversational AI patterns adapted for sector-specific compliance and CX expectations.</p>`,
      'Enterprise Knowledge Bases': `<p>The biggest internal use case for conversational AI is employee enablement. We build knowledge agents that answer staff questions about HR policy, IT support, procurement processes, brand guidelines, sales enablement materials, and product technical specifications. Retrieval-augmented generation grounds every answer in your actual documentation — not hallucinated content. Source citation lets users verify and dig deeper. Permission-aware retrieval ensures sensitive content stays restricted. The same <a href="/what-we-do/data-ai/">data AI</a> infrastructure that powers customer-facing AI feeds the internal knowledge agents, and the <a href="/what-we-do/agentic-ai/">agentic AI</a> framework lets internal agents take action — raising tickets, drafting documents, scheduling meetings — not just answer questions.</p>`,
    },
    extraSections: [
      {
        heading: 'Highest-ROI Conversational AI Use Cases',
        body: `<p>Five clusters consistently deliver the strongest combination of cost reduction and CX improvement.</p>
<ul>
  <li><strong>Customer support deflection:</strong> tier-1 issue resolution, order and account queries, returns and refunds, store and branch information.</li>
  <li><strong>Sales and pre-sales:</strong> product discovery, quote requests, qualification, appointment booking, abandoned-cart recovery conversations.</li>
  <li><strong>Internal employee enablement:</strong> HR policy chat, IT support tier-1, procurement guidance, sales enablement, technical knowledge.</li>
  <li><strong>Field service and operations:</strong> appointment scheduling, technician dispatch, status updates, completion confirmations, customer surveys.</li>
  <li><strong>Regulated conversations:</strong> banking servicing within FCA boundaries, insurance claims first notification, NHS appointment management within DSPT.</li>
</ul>
<p>Most teams get the strongest first win from customer support deflection or internal employee enablement — both deliver measurable cost savings without touching regulated decisions. Our <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> ranks these against your contact-centre platform, knowledge base maturity, and compliance environment.</p>`,
      },
    ],
  },

  'generative-ai': {
    intro: `<p>Generative AI is powerful but choosing the wrong model, architecture, or approach wastes money fast. We help UK businesses cut through the hype and build genAI systems that deliver real value — from RAG knowledge systems to content production pipelines to multi-modal applications.</p>
<p>The biggest risk in generative AI is not technology choice — it is solution-fit. Teams spend six figures fine-tuning a model when retrieval-augmented generation would have delivered better results in three weeks. Or they pick a frontier model for a task a smaller open-weights model handles for 95% less cost. Our generative AI engagements always start with an <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> to identify the highest-value use cases and right-size the architecture before any build work begins.</p>
<p>We work with the full spectrum — OpenAI, Anthropic Claude, Google Gemini, Llama, Mistral, and open-weights models hosted on your infrastructure where data residency or cost demand it. Pilots ship in 6-10 weeks against specific business outcomes. Every system includes evaluation harnesses, content safety filters, and observability so you know precisely how the model performs in production over time.</p>`,
    sections: {
      'Cutting Through the Hype': `<p>Most generative AI vendor pitches conflate three different things — chat interfaces, retrieval systems, and autonomous agents. Each has different risks, costs, and use cases. We work with you to identify which pattern fits your problem. Sometimes the answer is a simple ChatGPT-style chat interface over your documentation. Sometimes it is a retrieval system grounding answers in your knowledge base. Sometimes it is full multi-step <a href="/what-we-do/agentic-ai/">agentic AI</a> workflows that take action. Often the answer is a much smaller model than the conversation suggests. We never recommend frontier models when smaller ones deliver the same business outcome at 1/20th the cost.</p>`,
      'RAG Systems and Knowledge Bases': `<p>Retrieval-augmented generation is the highest-ROI starting point for most businesses adopting generative AI. We build RAG systems that ground model responses in your actual content — policies, procedures, technical documentation, customer history, product catalogues. Citations let users verify answers. Permission-aware retrieval respects access controls. Continuous evaluation surfaces hallucinations and topic drift. We deploy RAG systems on Pinecone, Weaviate, Qdrant, pgvector, or whatever vector store fits your existing stack. The <a href="/what-we-do/conversational-ai/">conversational AI</a> capability uses RAG as its foundation, and the <a href="/what-we-do/data-ai/">data AI</a> work ensures the underlying content is clean, current, and well-structured.</p>`,
      'Content and Workflow Pipelines': `<p>Generative AI shines for content production at scale — when paired with proper quality controls. We build pipelines for marketing copy variants, technical documentation drafts, code generation, image synthesis, multilingual content, and automated reporting. Every pipeline includes prompt templates aligned to your brand voice, evaluation against quality rubrics, human approval gates for high-stakes content, and version control. Teams using our pipelines typically produce 5-10x more content per week with higher consistency and lower revision cycles. The <a href="/what-we-do/ai-automation/">AI automation</a> framework handles the orchestration, and the <a href="/what-we-do/ai-content-marketing/">AI content marketing</a> capability provides the editorial overlay.</p>`,
      'Cost Optimisation': `<p>Generative AI costs spiral fast if you let them. Frontier models cost 10-50x more per token than open-weights alternatives. Naive prompt engineering wastes 60-80% of spend on context that does not change the answer. Caching, batching, and smart routing between models cut bills dramatically. We build systems with cost observability from day one — you see spend per use case, per model, per business unit. Open-weights deployments on your own infrastructure (using vLLM, TGI, or Ollama) eliminate per-token cost for high-volume internal workloads while keeping data inside your environment. Our <a href="/what-we-do/ai-strategy/">AI strategy</a> work always considers total cost of ownership, not just initial deployment cost.</p>`,
    },
    extraSections: [
      {
        heading: 'Common Generative AI Use Cases',
        body: `<p>Five clusters consistently deliver the strongest ROI for businesses adopting generative AI in production.</p>
<ul>
  <li><strong>Knowledge access:</strong> RAG over policies, procedures, technical documentation, prior client work, product catalogues — internal and external.</li>
  <li><strong>Content production:</strong> marketing copy variants, technical documentation drafts, multilingual content, transcript summarisation, brief writing.</li>
  <li><strong>Code and engineering:</strong> code review, test generation, documentation, debugging, technical specification drafting, SQL generation.</li>
  <li><strong>Customer interaction:</strong> support chat, sales discovery conversations, appointment booking, post-purchase engagement, voice IVR.</li>
  <li><strong>Decision support:</strong> document summarisation for legal and compliance review, contract clause comparison, policy alignment checks.</li>
</ul>
<p>Most teams get the strongest first win from knowledge access or content production — both deliver measurable productivity gains in weeks. Our <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> ranks these against your data maturity, content needs, and team capacity.</p>`,
      },
    ],
  },

  'ai-training': {
    intro: `<p>Your AI strategy is only as good as your team's ability to execute it. We deliver practical, hands-on AI training that turns leaders, managers, and technical teams into confident operators of AI systems. The training that sticks is not abstract theory — it is workshops where people actually use the tools on their own work.</p>
<p>UK organisations we work with see measurable productivity gains within four weeks of cohort training as participants apply techniques to live work. Manager-level cohorts typically commit to specific automation projects within a fortnight, and technical cohorts ship their first internal genAI prototype during the programme. Most clients return for second and third cohorts within six months as demand spreads through the business.</p>
<p>Every training engagement begins with a discovery session to map current AI literacy, business priorities, and the specific outcomes you want to drive. We then design cohorts at three levels — executive (board and SLT), management (operations and functional leads), and practitioner (technical teams). Pilot cohorts run 4-8 weeks. We work in person across the UK and remotely via Microsoft Teams or Zoom, with all materials, recordings, and follow-up resources delivered through your LMS or our hosted platform.</p>`,
    sections: {
      'Training That Sticks': `<p>Most corporate AI training fails because it teaches concepts without application. People sit through slides on transformer architectures and large language models, then go back to inboxes and never use a tool. Our training is workshop-led — every session has participants applying techniques to their actual work problems. Marketing managers leave with three live prompts they use weekly. Operations leads leave with a process automation prototype. Engineers leave with a working RAG system over team documentation. The <a href="/what-we-do/ongoing-support/">ongoing support</a> capability provides the post-training reinforcement that converts learning into operating habit.</p>`,
      'Workshop Formats': `<p>We deliver training in formats that match how teams actually work. Half-day executive sessions cover AI governance, opportunity mapping, and competitive context for board and SLT. Two-day immersives for cross-functional management teams build literacy and identify the first wave of projects. Six-week practitioner cohorts (typically 1.5 hours weekly + assignments) develop deep skills in genAI, conversational AI, agentic systems, or applied ML. Bespoke workshops for specific functions (HR, finance, marketing, legal) cover the use cases and tools most relevant to that team. The format always serves the outcome — we never deliver training without clear alignment on what changes after.</p>`,
      'Topics We Cover': `<p>Our curriculum covers the full breadth of practical AI for UK businesses. Generative AI fundamentals — what models can and cannot do, how to write prompts that work, when to use which model. Building with retrieval — RAG systems for knowledge access. Agentic AI — multi-step workflows that take action. AI governance and ethics — UK regulatory landscape, EU AI Act, fairness and explainability. Data foundations — what AI needs from data infrastructure to actually work. The <a href="/what-we-do/agentic-ai/">agentic AI</a>, <a href="/what-we-do/generative-ai/">generative AI</a>, and <a href="/what-we-do/ai-governance/">AI governance</a> capabilities all feed our training content with current implementation lessons.</p>`,
      'Measuring Impact': `<p>Training impact is measured concretely. Pre and post cohort assessments quantify capability gains across knowledge, confidence, and applied skill. Project portfolios capture the specific automations, prototypes, and process changes participants ship during the programme. Six-week and twelve-week follow-up reviews track which projects went into production and what business value they delivered. We never deliver training as a tick-box exercise — every cohort closes with a programme review and a recommendation on next steps. The <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> often follows training as participants identify the next wave of opportunities to scope formally.</p>`,
    },
    extraSections: [
      {
        heading: 'Common AI Training Engagements',
        body: `<p>Five engagement patterns consistently deliver the strongest learning outcomes for UK organisations.</p>
<ul>
  <li><strong>Board and SLT briefings:</strong> half-day sessions on AI strategy, governance, competitive landscape, and opportunity prioritisation.</li>
  <li><strong>Cross-functional management cohorts:</strong> two-day immersives building literacy across business unit leaders and identifying first-wave projects.</li>
  <li><strong>Practitioner upskilling:</strong> six-week cohorts for technical teams covering genAI, RAG, agentic systems, evaluation, and MLOps.</li>
  <li><strong>Function-specific workshops:</strong> tailored content for HR, finance, marketing, legal, operations, with use cases and tools specific to that function.</li>
  <li><strong>Train-the-trainer programmes:</strong> equipping internal L&D and AI champions to scale literacy across the organisation continuously.</li>
</ul>
<p>Most clients get the strongest first win from a cross-functional management cohort — it builds shared literacy and surfaces the highest-ROI projects in the same engagement. Our discovery call scopes the right format against your team size, current literacy, and business priorities.</p>`,
      },
    ],
  },

  'ongoing-support': {
    intro: `<p>AI is not a one-off project. Systems need monitoring, models need retraining, and your strategy needs to evolve as the technology and your business change. Our retainer support keeps your AI delivery on track without forcing you to build a full internal AI function from scratch.</p>
<p>UK businesses we support on retainer typically maintain 95%+ uptime on production AI systems, retrain models on a 4-8 week cycle, and ship 6-12 new automations per year through the retainer relationship — at lower cost than equivalent in-house headcount. The retainer model lets you access senior AI capability without committing to permanent hires before the business case is fully proven.</p>
<p>Every retainer relationship starts with a structured handover from the original delivery team or an audit of inherited systems if we are picking up someone else's build. We then agree service levels, escalation pathways, monthly steering rhythm, and a 12-month roadmap of additions and improvements. Retainers run from 4 days per month for smaller estates up to fractional CTO/Chief AI Officer engagements 2-3 days per week. We work across UK time zones with named senior consultants who stay with your account.</p>`,
    sections: {
      'Why Ongoing Support Matters': `<p>Production AI systems decay if left alone. Model performance drifts as customer behaviour, product mix, and market conditions change. RAG systems degrade if knowledge bases are not maintained. Conversational AI accuracy slips when new product launches introduce vocabulary the system has never seen. Cost per query creeps up as prompt patterns become inefficient. We monitor all of this continuously, retrain models on agreed cycles, refresh knowledge bases, and rewrite prompts as model versions update. The <a href="/what-we-do/ai-strategy/">AI strategy</a> we agreed at the start gets reviewed quarterly so the roadmap stays aligned with business priorities, not the original assumptions.</p>`,
      'What Retainer Support Includes': `<p>A standard retainer covers production monitoring (model performance, system uptime, cost tracking, content safety incidents), scheduled retraining (typically 4-8 week cycles depending on use case), incident response (named on-call within agreed SLA), continuous improvement (monthly recommendations and small enhancements), and quarterly strategy reviews. Larger retainers add new use case scoping and delivery, governance committee participation, and team upskilling support. Every retainer comes with a monthly written report and a steering call so executives stay informed without micromanaging. The <a href="/what-we-do/ai-governance/">AI governance</a> framework we apply means audit evidence is always current, not assembled in a panic for the next regulator visit.</p>`,
      'Flexible Engagement': `<p>Retainer engagements scale to your needs and budget. Smallest engagements are 4 days per month covering monitoring and small changes for one or two production systems. Mid-size retainers run 8-12 days per month for businesses with 5-10 production AI systems requiring regular evolution. Largest engagements include fractional senior leadership at 8-12 days per month for organisations building internal AI teams who need experienced steering until those teams are autonomous. We never lock you into multi-year contracts — every retainer is reviewed quarterly and either party can adjust scope or end with reasonable notice. The <a href="/what-we-do/ai-training/">AI training</a> capability runs alongside many retainers as we transfer knowledge to client teams over time.</p>`,
      'Fractional AI Leadership': `<p>Many mid-market UK businesses need senior AI leadership but cannot justify a full-time hire at six-figure salary plus equity. Fractional Chief AI Officer or VP AI engagements give you that seniority on a retainer basis — typically 2-3 days per week. We attend your exec meetings, lead AI strategy reviews with the board, manage relationships with AI vendors and platforms, hire and manage internal AI team members, and represent the AI function externally to investors, customers, and partners. Most fractional engagements run 12-18 months as the business builds toward an internal hire we then help recruit. Our <a href="/what-we-do/ai-strategy/">AI strategy</a> work often evolves into fractional leadership as scope expands.</p>`,
    },
    extraSections: [
      {
        heading: 'Common Retainer Patterns',
        body: `<p>Five retainer shapes cover the vast majority of UK business needs for ongoing AI support.</p>
<ul>
  <li><strong>Production maintenance:</strong> 4-6 days/month covering monitoring, retraining, incident response for established AI systems.</li>
  <li><strong>Continuous delivery:</strong> 8-12 days/month combining maintenance with regular new automation delivery for growing AI estates.</li>
  <li><strong>Fractional AI leadership:</strong> 8-12 days/month providing senior strategic capacity for mid-market businesses building AI capability.</li>
  <li><strong>Governance and audit:</strong> 2-4 days/month for businesses where the AI build is mature but governance evidence and audit support remain gaps.</li>
  <li><strong>Hybrid build-and-run:</strong> mixed engagement where part of the team delivers new AI capability while another part runs production support.</li>
</ul>
<p>Most clients start with production maintenance after their first project goes live, then expand scope as the AI estate grows. Our team agrees the right shape during the handover or audit phase before any retainer commitments are made.</p>`,
      },
    ],
  },

  'applied-ai': {
    intro: `<p>Not every AI problem is a language model problem. We build applied AI solutions — computer vision, forecasting, anomaly detection, recommendation systems, optimisation — that solve specific business challenges in production. Where genAI gets the headlines, applied AI usually delivers the measurable ROI.</p>
<p>UK businesses we work with through applied AI engagements typically see clear payback within one operational cycle — a quarter for retail forecasting, a season for manufacturing predictive maintenance, a year for insurance loss-cost models. The advantage of applied AI is that the metrics are concrete and the comparison to the prior baseline is unambiguous. You either forecast more accurately or you do not. The model either catches more defects or it does not.</p>
<p>Every applied AI engagement starts with an <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> mapping your data sources, the business decision the model needs to support, and the integration paths to operational systems. Pilots ship in 8-14 weeks. We work with PyTorch, TensorFlow, scikit-learn, XGBoost, and the modern stack of foundation models for vision and time-series tasks. Every model ships with monitoring, retraining pipelines, and explainability appropriate for the use case.</p>`,
    sections: {
      'Computer Vision': `<p>Computer vision quietly powers more production AI than any other category — quality inspection in manufacturing, document processing in finance, medical imaging in healthcare, in-store analytics in retail, security and safety monitoring in logistics. We build vision systems that catch defects at line speed, classify documents and extract structured data, count and track objects, identify safety violations, and verify compliance. Our <a href="/industries/manufacturing/">manufacturing</a> work uses vision for quality inspection. <a href="/industries/healthcare/">Healthcare</a> deployments support radiology pre-read and dermatology referral grading (always as decision support, never standalone). The same patterns apply across <a href="/industries/retail/">retail</a> in-store analytics and <a href="/industries/finance/">financial services</a> document automation.</p>`,
      'Forecasting and Prediction': `<p>Forecasting models are the highest-volume applied AI deployment in UK business. Demand forecasting at SKU-store-day level for retail and ecommerce. Workforce demand prediction for healthcare and contact centres. Maintenance failure prediction for manufacturing and infrastructure. Cash flow and customer attrition forecasting for financial services. We build forecasting models that combine traditional time-series methods (ARIMA, Prophet, exponential smoothing) with modern approaches (gradient boosting, neural forecasting, foundation models for time-series). The <a href="/industries/supply-chain/">supply chain</a> and <a href="/industries/manufacturing/">manufacturing</a> work both rely heavily on forecasting capability, and the same patterns apply for <a href="/industries/retail/">retail</a> demand planning and <a href="/industries/government/">public sector</a> service demand modelling.</p>`,
      'Natural Language Processing': `<p>NLP covers the applied AI work that does not require generative models — text classification, named entity extraction, sentiment analysis, topic modelling, document similarity, automated tagging. We build NLP pipelines that classify support tickets to the right routing queue, extract structured data from unstructured documents (invoices, contracts, medical notes), surface sentiment and topic patterns from voice-of-customer data, and tag content automatically against taxonomies. Our <a href="/what-we-do/conversational-ai/">conversational AI</a> capability uses NLP for intent classification, and our <a href="/what-we-do/generative-ai/">generative AI</a> work often layers genAI on top of an NLP foundation rather than replacing it entirely.</p>`,
      'Anomaly Detection': `<p>Anomaly detection catches the things that should not be happening — fraud, equipment failure, security incidents, data quality issues, operational outliers. We build anomaly detection systems that combine statistical methods (control charts, isolation forests) with machine learning approaches (autoencoders, one-class SVMs) and modern foundation models for unsupervised pattern recognition. Production deployments include monitoring dashboards, alerting workflows, and feedback loops so analysts can label false positives and the model improves over time. Our <a href="/industries/finance/">financial services</a> work uses anomaly detection for transaction monitoring and fraud. <a href="/industries/manufacturing/">Manufacturing</a> uses it for early failure detection on critical equipment.</p>`,
    },
    extraSections: [
      {
        heading: 'Common Applied AI Use Cases',
        body: `<p>Five clusters consistently deliver the strongest measurable ROI for applied AI deployments.</p>
<ul>
  <li><strong>Demand forecasting:</strong> SKU-level retail forecasts, workforce demand for service operations, customer call volume for contact centres.</li>
  <li><strong>Predictive maintenance:</strong> equipment failure prediction in manufacturing, fleet maintenance scheduling, infrastructure asset monitoring.</li>
  <li><strong>Quality and inspection:</strong> vision-based defect detection, document processing accuracy verification, audit sample selection.</li>
  <li><strong>Risk and fraud:</strong> transaction monitoring, claims fraud scoring, credit risk modelling, security anomaly detection.</li>
  <li><strong>Optimisation:</strong> route planning, scheduling, inventory placement, pricing optimisation, resource allocation.</li>
</ul>
<p>Most clients get the strongest first win from forecasting or quality inspection — both deliver clear measurable ROI within one operational cycle. Our <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> ranks these against your data maturity, operational priorities, and integration constraints.</p>`,
      },
    ],
  },

  'ai-content-marketing': {
    intro: `<p>AI can scale your content production dramatically — but only if it is set up properly. We build content systems that combine generative AI with editorial discipline, brand voice consistency, and quality control at scale. Most teams using AI for content end up with average copy at higher volume; we help you ship better copy at higher volume.</p>
<p>UK marketing teams we work with typically lift content output 3-5x within the first quarter while maintaining or improving editorial quality scores. SEO traffic compounds 30-60% within six months as keyword coverage expands and content depth increases. The recovered marketing capacity gets reinvested in creative work and channel experimentation, not extra production hires.</p>
<p>Every content engagement starts with an <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> mapping your CMS, brand guidelines, content workflows, and SEO posture. We work natively with WordPress, Webflow, Contentful, Sanity, Storyblok, and the major UK CMS platforms. Pilots ship in 6-10 weeks. Every system respects ICO direct marketing rules, ASA advertising standards, accessibility requirements, and Google Search Quality Rater Guidelines on AI-generated content.</p>`,
    sections: {
      'Content at Scale': `<p>Content at scale is not just about volume — it is about coverage. We build pipelines that map your full keyword opportunity, prioritise topics by commercial value and competitive difficulty, draft outlines aligned to search intent and your brand POV, generate first drafts with proper structure and source citations, and route through editorial review before publication. Output covers blog posts, landing pages, comparison pages, FAQ pages, and supporting content like glossaries and resource hubs. The <a href="/what-we-do/generative-ai/">generative AI</a> capability provides the underlying models, and the <a href="/what-we-do/data-ai/">data AI</a> work surfaces the search and behavioural data that drives prioritisation.</p>`,
      'Marketing Automation': `<p>Marketing automation extends AI content into the activation layer. We build systems that personalise email subject lines and content per recipient, generate ad copy variants for testing at scale, draft social media content tailored to each platform, write meta descriptions and structured data for SEO, and produce multilingual versions for international audiences. Every output respects brand voice guidelines and passes through quality gates appropriate to the channel risk. The <a href="/what-we-do/ai-automation/">AI automation</a> capability handles the orchestration across email, ads, social, and web, and the <a href="/what-we-do/conversational-ai/">conversational AI</a> work extends content into chat-based engagement.</p>`,
      'Brand Voice Consistency': `<p>The biggest failure mode in AI content is brand voice drift — copy that reads like every other AI-generated marketing post on the internet. We solve this systematically. Brand voice guidelines get codified into prompt templates with positive and negative examples. Style guide enforcement runs automatically on every draft against tone, vocabulary, sentence structure, and prohibited terms. Editorial review by a human always remains in the loop for high-stakes content. Continuous evaluation tracks brand voice consistency scores over time and surfaces drift before it becomes obvious. Our <a href="/industries/marketing/">marketing industry</a> work brings the same brand discipline to client engagements at scale.</p>`,
      'Quality Controls': `<p>Quality at scale requires layered controls. We build systems with mandatory source citation for any factual claim, plagiarism and originality scoring before publication, fact-checking workflows for high-stakes content (regulated industries, technical claims, statistics), readability scoring matched to audience reading level, and accessibility compliance checking for inclusive design. SEO quality gates verify proper heading structure, internal linking, meta tag completeness, and structured data. Every published piece tracks back to its source prompts, models, and editorial reviewers — if something goes wrong, full audit trail exists. Our <a href="/what-we-do/ai-governance/">AI governance</a> framework provides the policy spine, and the <a href="/what-we-do/ongoing-support/">ongoing support</a> capability maintains evaluation and improvement cycles in production.</p>`,
    },
    extraSections: [
      {
        heading: 'Common AI Content Marketing Use Cases',
        body: `<p>Five clusters consistently deliver the strongest results for UK content marketing teams.</p>
<ul>
  <li><strong>SEO content production:</strong> blog posts, landing pages, comparison pages, glossaries, resource hubs aligned to keyword opportunity.</li>
  <li><strong>Lifecycle and email:</strong> behavioural email content, subject line variants, post-purchase sequences, win-back content, nurture journeys.</li>
  <li><strong>Paid creative:</strong> ad copy variants for testing, headline and CTA optimisation, landing page variants, multilingual ad creative.</li>
  <li><strong>Social and community:</strong> platform-specific social posts, community management responses, voice-of-customer content from reviews.</li>
  <li><strong>Sales enablement:</strong> case studies, comparison sheets, objection-handling content, proposal sections, technical documentation.</li>
</ul>
<p>Most teams get the strongest first win from SEO content production — measurable traffic growth within a quarter and clear cost-per-asset comparison vs prior production methods. Our <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> ranks these against your CMS environment, brand guidelines, and SEO opportunity.</p>`,
      },
    ],
  },
};

let pagesUpdated = 0;
for (const page of data.pages) {
  const patch = patches[page.slug];
  if (!patch) continue;
  page.intro = patch.intro;
  for (const section of page.sections) {
    const newBody = patch.sections[section.heading];
    if (newBody) section.body = newBody;
  }
  if (patch.extraSections) {
    for (const extra of patch.extraSections) {
      const idx = page.sections.findIndex(s => s.heading === extra.heading);
      if (idx >= 0) page.sections[idx] = extra;
      else page.sections.push(extra);
    }
  }
  pagesUpdated++;
}
fs.writeFileSync(FILE, JSON.stringify(data, null, 2) + '\n');

const wc = s => String(s||'').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
console.log(`Updated ${pagesUpdated} pages.`);
for (const page of data.pages) {
  if (!patches[page.slug]) continue;
  const total = wc(page.intro) + page.sections.reduce((a,s) => a + wc(s.body), 0) + (page.faq||[]).reduce((a,q) => a + wc(q.q||q.question) + wc(q.a||q.answer), 0);
  console.log(`  ${page.slug.padEnd(25)} ${total} words`);
}
