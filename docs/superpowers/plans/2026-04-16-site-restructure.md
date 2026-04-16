# AgenticAI Associates Site Restructure — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure the AgenticAI Associates website to merge Services+Solutions into "What We Do", add authentic messaging, single-entry pricing, and strip fabricated social proof.

**Architecture:** Astro 6 static site on Cloudflare Pages. Data-driven pages from JSON files. Hub-and-spoke content model. All changes are to existing files — no new framework or dependencies.

**Tech Stack:** Astro 6, Tailwind CSS 4, Preact, TypeScript, Cloudflare Pages

**Repo:** `C:\Users\sunny\repos\agenticai-associates\`

**Spec:** `docs/superpowers/specs/2026-04-16-site-restructure-design.md`

---

## Task 1: Create what-we-do.json data file

**Files:**
- Create: `src/data/what-we-do.json`

This is the merged Services + Solutions data. Every subsequent task depends on this file existing.

- [ ] **Step 1: Create `src/data/what-we-do.json`**

```json
{
  "hub": {
    "title": "What We Do — AI Consultancy Services & Solutions",
    "description": "AI readiness assessments, agentic AI systems, automation, governance, and training. We build and deploy AI that delivers measurable results for UK businesses.",
    "primaryKeyword": "ai consultancy services uk"
  },
  "pages": [
    {
      "slug": "ai-readiness-assessment",
      "name": "AI Readiness Assessment",
      "title": "AI Readiness Assessment — Agentic AI Associates",
      "description": "Fixed-fee AI readiness assessment for UK businesses. We audit your data, processes, and team capability, then deliver a prioritised roadmap with clear ROI projections.",
      "primaryKeyword": "ai readiness assessment uk",
      "icon": "strategy",
      "entryPoint": true,
      "intro": "<p>Most AI projects fail because nobody checked whether the business was ready. Our AI Readiness Assessment is a fixed-fee, fixed-scope engagement that gives you a clear picture of where you stand — and exactly where to start.</p>",
      "sections": [
        {
          "heading": "What the Assessment Covers",
          "body": "<p>We evaluate four areas: your data maturity (what data you have, where it lives, how clean it is), your technology infrastructure (what systems you run, what APIs are available, what's legacy), your team capability (who has AI skills, what gaps exist), and your process landscape (which workflows are candidates for AI automation).</p><p>The output is not a generic report. It's a scored matrix of AI opportunities specific to your business, ranked by impact and feasibility. Each opportunity includes estimated ROI, timeline, and the resources needed to deliver it.</p>"
        },
        {
          "heading": "How It Works",
          "body": "<p>The assessment runs over two to four weeks. Week one: we interview your leadership and frontline teams, review your existing technology stack, and map your key business processes. Week two: we analyse the findings, score opportunities, and build your personalised roadmap.</p><p>You receive a presentation walkthrough plus a written report. No dusty PDF — a living document your team can act on immediately. If you want us to help execute the roadmap, we scope that as a separate engagement based on the assessment findings.</p>"
        },
        {
          "heading": "Who This Is For",
          "body": "<p>The assessment suits two types of business. First: organisations that know AI matters but haven't started. You need an honest, expert view of what's possible before committing budget. Second: organisations that have tried AI but got stuck — perhaps a pilot that never reached production, or multiple teams buying different tools with no coordination.</p><p>We work across <a href='/industries/finance/'>financial services</a>, <a href='/industries/healthcare/'>healthcare</a>, <a href='/industries/retail/'>retail</a>, <a href='/industries/manufacturing/'>manufacturing</a>, <a href='/industries/legal/'>legal</a>, and professional services. Company size typically ranges from 50 to 500 employees.</p>"
        },
        {
          "heading": "What You Walk Away With",
          "body": "<p>A scored AI opportunity matrix with estimated ROI for each use case. A technology gap analysis showing what infrastructure changes are needed. A team skills assessment with training recommendations. And a phased roadmap covering the next 12 to 24 months, broken into quarterly sprints with clear deliverables.</p><p>Every recommendation ties back to a business outcome — cost reduction, revenue growth, or operational efficiency. No vanity projects.</p>"
        }
      ],
      "features": [
        { "title": "Data Maturity Assessment", "description": "A structured evaluation of your data assets, quality, governance, and accessibility. Benchmarked against your industry." },
        { "title": "AI Opportunity Matrix", "description": "Every potential AI use case scored by business impact, technical feasibility, and time to value." },
        { "title": "Technology Gap Analysis", "description": "Assessment of your current infrastructure against what's needed for AI deployment." },
        { "title": "Team Skills Audit", "description": "Mapping of existing AI capabilities and identification of training or hiring needs." },
        { "title": "Phased Roadmap", "description": "A 12 to 24 month plan broken into quarterly sprints with clear deliverables and decision gates." },
        { "title": "Board-Ready Business Case", "description": "ROI projections, cost breakdowns, and risk analysis formatted for senior decision-makers." }
      ],
      "faq": [
        { "question": "How much does the AI Readiness Assessment cost?", "answer": "The assessment is a fixed-fee engagement. Contact us for current pricing — it depends on the size and complexity of your organisation, but we always provide a clear price upfront with no hidden costs." },
        { "question": "How long does the assessment take?", "answer": "Typically two to four weeks from kickoff to final presentation. Larger organisations with multiple departments may take slightly longer." },
        { "question": "Do we need to prepare anything?", "answer": "We'll send you a short pre-assessment questionnaire. Beyond that, we just need access to your key stakeholders for interviews and a view of your existing technology stack." },
        { "question": "What happens after the assessment?", "answer": "You receive a complete report with prioritised recommendations. If you want us to help implement the roadmap, we scope that as a separate engagement based on the findings. There's no obligation to continue." },
        { "question": "Is this suitable for businesses that have already started with AI?", "answer": "Yes. Many of our assessments are for organisations that have run pilots or adopted individual tools but lack a coordinated strategy. We help untangle what exists and create a unified plan." }
      ],
      "relatedServices": ["ai-strategy", "agentic-ai", "ai-training"],
      "relatedIndustries": ["finance", "healthcare", "retail", "manufacturing"]
    },
    {
      "slug": "ai-strategy",
      "name": "AI Strategy & Roadmaps",
      "title": "AI Strategy & Roadmaps — Agentic AI Associates",
      "description": "Expert AI strategy consulting. We build clear roadmaps that align AI with your business goals, budget, and timeline. UK-based.",
      "primaryKeyword": "ai strategy consultant",
      "icon": "strategy",
      "entryPoint": false,
      "intro": "<p>Most AI projects fail because there was never a proper plan. We help you build an AI strategy that starts with your actual business problems, not the latest tech hype.</p>",
      "sections": [
        {
          "heading": "Why You Need an AI Strategy Before You Build Anything",
          "body": "<p>Jumping straight into AI tools without a strategy is like renovating a house without blueprints. You might get lucky, but you will almost certainly waste money and end up with something that does not fit together.</p><p>A proper AI strategy starts with understanding where your business actually loses time and money. We audit your operations, talk to your teams, and identify the three to five areas where AI will deliver the fastest, most measurable return.</p>"
        },
        {
          "heading": "Our Strategy Process",
          "body": "<p>We follow a four-phase approach. Phase one is discovery — we spend time with your leadership and frontline teams to understand workflows, pain points, and existing technology. Phase two is opportunity mapping — we match your challenges against proven AI capabilities and score each by impact and feasibility.</p><p>Phase three is roadmap design, where we build a phased plan covering technology choices, data requirements, team skills, and budget. Phase four is the governance framework — the decision-making structure, KPIs, and review cadence to keep your AI programme on track.</p>"
        },
        {
          "heading": "Who This Is For",
          "body": "<p>Organisations that know AI matters but have not started and need a clear-eyed assessment of what is possible, what it costs, and where to begin. Or organisations that have started but feel stuck — perhaps a proof of concept worked but never reached production, or multiple teams are buying different tools with no coordination.</p><p>We work across sectors including <a href='/industries/finance/'>finance</a>, <a href='/industries/healthcare/'>healthcare</a>, <a href='/industries/retail/'>retail</a>, and <a href='/industries/manufacturing/'>manufacturing</a>. Company size typically ranges from 50 to 500 employees.</p>"
        },
        {
          "heading": "What You Walk Away With",
          "body": "<p>An AI maturity assessment, a prioritised opportunity register with estimated ROI, a 12 to 24 month roadmap broken into quarterly sprints, technology and vendor recommendations, and a risk register with change management plan.</p>"
        }
      ],
      "features": [
        { "title": "AI Maturity Assessment", "description": "Structured evaluation of your current data, technology, skills, and culture." },
        { "title": "Opportunity Scoring Matrix", "description": "Every AI use case scored by business impact, technical feasibility, and time to value." },
        { "title": "Phased Roadmap", "description": "A 12 to 24 month plan broken into quarterly sprints with clear deliverables." },
        { "title": "Technology Guidance", "description": "Independent recommendations on platforms, tools, and partners." },
        { "title": "Board-Ready Business Case", "description": "ROI projections and risk analysis for senior decision-makers." },
        { "title": "Change Management Plan", "description": "Practical plan covering communication, training, and role impact." }
      ],
      "faq": [
        { "question": "How long does an AI strategy engagement take?", "answer": "Typically 2 to 6 weeks depending on the size and complexity of your organisation." },
        { "question": "Do we need existing AI capability?", "answer": "No. Many clients start from zero. The strategy engagement is designed to take you from where you are to where you need to be." },
        { "question": "What does an AI strategy cost?", "answer": "Strategy engagements start from £3,000 for smaller organisations. Contact us for a scoped proposal." },
        { "question": "Will you help us implement the strategy?", "answer": "If you want us to. Many clients use the strategy to brief internal teams or other vendors. Others ask us to lead implementation directly." }
      ],
      "relatedServices": ["ai-readiness-assessment", "agentic-ai", "ai-automation"],
      "relatedIndustries": ["finance", "healthcare", "retail", "manufacturing"]
    },
    {
      "slug": "agentic-ai",
      "name": "Agentic AI Systems",
      "title": "Agentic AI Consultancy UK — Autonomous AI Agents",
      "description": "We design, build, and deploy agentic AI systems — autonomous agents that handle complex, multi-step business workflows with minimal human intervention.",
      "primaryKeyword": "agentic ai consultant uk",
      "icon": "agentic",
      "entryPoint": false,
      "intro": "<p>Agentic AI is the next evolution beyond chatbots and copilots. These are autonomous systems that plan, execute, and adapt — handling complex workflows end to end. We build them for UK businesses.</p>",
      "sections": [
        {
          "heading": "What Agentic AI Actually Is",
          "body": "<p>Agentic AI refers to systems that can take sequences of actions autonomously to complete complex, multi-step tasks. Unlike a chatbot that responds to prompts, an agentic system uses tools, browses data sources, makes decisions, and loops back to check its work.</p><p>In practice, this means automating workflows that previously required human judgement — from procurement processes that span multiple systems, to customer service escalations that need context from five different data sources.</p>"
        },
        {
          "heading": "How We Build Agentic Systems",
          "body": "<p>We start by mapping the workflow you want to automate — every decision point, every data source, every exception path. Then we design an agent architecture that handles the happy path and the edge cases.</p><p>We use a combination of LLMs, tool-use frameworks, and custom orchestration to build agents that are reliable enough for production. Every system includes human-in-the-loop controls, so your team stays in charge of high-stakes decisions.</p>"
        },
        {
          "heading": "Where Agentic AI Delivers Most Value",
          "body": "<p>The biggest wins come from multi-step processes that touch multiple systems — procurement, compliance monitoring, customer onboarding, financial reporting. If a workflow requires a person to log into three different tools and make judgement calls, it's a candidate for agentic automation.</p><p>We work across <a href='/industries/finance/'>financial services</a>, <a href='/industries/legal/'>legal</a>, <a href='/industries/healthcare/'>healthcare</a>, and <a href='/industries/manufacturing/'>manufacturing</a>.</p>"
        },
        {
          "heading": "Governance and Control",
          "body": "<p>Autonomous systems need guardrails. Every agentic system we build includes logging, monitoring, human escalation triggers, and audit trails. We design for the UK regulatory environment — GDPR, FCA, ICO — from day one.</p><p>For organisations that need a broader <a href='/what-we-do/ai-governance/'>AI governance framework</a>, we offer dedicated governance consulting.</p>"
        }
      ],
      "features": [
        { "title": "Agent Architecture Design", "description": "Blueprint for autonomous agents including decision flows, tool integrations, and fallback paths." },
        { "title": "Multi-Agent Orchestration", "description": "Systems where multiple agents collaborate on complex tasks, with coordination and conflict resolution." },
        { "title": "Human-in-the-Loop Controls", "description": "Escalation triggers, approval gates, and override mechanisms so your team stays in control." },
        { "title": "Production-Grade Deployment", "description": "Monitoring, logging, error handling, and performance optimisation for real-world reliability." },
        { "title": "Tool Integration", "description": "Agents that connect to your existing systems — CRM, ERP, databases, APIs, email." },
        { "title": "Compliance-Ready Design", "description": "Audit trails, data governance, and regulatory compliance baked in from the start." }
      ],
      "faq": [
        { "question": "What is the difference between agentic AI and a chatbot?", "answer": "A chatbot responds to prompts. An agentic AI system autonomously plans and executes multi-step workflows, using tools and data sources to complete tasks without constant human direction." },
        { "question": "Is agentic AI safe for production use?", "answer": "Yes, when built properly. We include human-in-the-loop controls, monitoring, and guardrails in every system. The key is designing for the failure modes, not just the happy path." },
        { "question": "What does an agentic AI project cost?", "answer": "It depends on the complexity of the workflow. Simple single-agent systems start from £10,000. Multi-agent enterprise systems are scoped individually." },
        { "question": "How long does it take to build an agentic system?", "answer": "A focused single-agent system can be prototyped in 2 to 4 weeks and production-ready in 6 to 8 weeks. More complex systems take longer." }
      ],
      "relatedServices": ["ai-strategy", "ai-automation", "ai-governance"],
      "relatedIndustries": ["finance", "legal", "healthcare", "manufacturing"]
    },
    {
      "slug": "generative-ai",
      "name": "Generative AI & LLMs",
      "title": "Generative AI Consultancy UK — LLMs, RAG & Content Pipelines",
      "description": "We help UK businesses harness generative AI safely. Model selection, RAG systems, content pipelines, and cost optimisation.",
      "primaryKeyword": "generative ai consultancy uk",
      "icon": "sparkles",
      "entryPoint": false,
      "intro": "<p>Generative AI is powerful but choosing the wrong model, architecture, or approach wastes money fast. We help you build generative AI systems that actually work for your business.</p>",
      "sections": [
        {
          "heading": "Cutting Through the Hype",
          "body": "<p>Not every problem needs GPT-4. We help you choose the right model for each use case — sometimes that's a frontier LLM, sometimes it's a fine-tuned smaller model, sometimes it's not AI at all. We save you from expensive mistakes.</p><p>Our approach: define the business outcome first, then select the technology that delivers it most efficiently.</p>"
        },
        {
          "heading": "RAG Systems and Knowledge Bases",
          "body": "<p>Retrieval-Augmented Generation connects LLMs to your actual business data. We build RAG systems that answer questions from your documents, policies, and databases — with citations, so you can verify the output.</p><p>This is how enterprises get value from generative AI without fine-tuning models or risking hallucinated answers.</p>"
        },
        {
          "heading": "Content and Workflow Pipelines",
          "body": "<p>We build production pipelines for content generation, document processing, email drafting, and report creation. These are not toys — they are systems with quality controls, human review steps, and measurable throughput gains.</p>"
        },
        {
          "heading": "Cost Optimisation",
          "body": "<p>LLM costs escalate quickly at scale. We architect systems that use prompt caching, model routing, and tiered inference to keep costs predictable. Most clients see 40 to 60 percent cost reduction compared to naive implementations.</p>"
        }
      ],
      "features": [
        { "title": "Model Selection & Evaluation", "description": "Independent assessment of which models fit your use cases — GPT, Claude, Gemini, open-source, or fine-tuned." },
        { "title": "RAG Architecture", "description": "Retrieval-Augmented Generation systems that ground LLM outputs in your actual business data." },
        { "title": "Content Pipelines", "description": "Production systems for content generation with quality controls and human review." },
        { "title": "Prompt Engineering", "description": "Systematic prompt design and testing to maximise output quality and consistency." },
        { "title": "Cost Optimisation", "description": "Architecture patterns that reduce LLM costs by 40 to 60 percent at scale." },
        { "title": "Safety & Guardrails", "description": "Output filtering, PII detection, and brand-safe content generation." }
      ],
      "faq": [
        { "question": "Which LLM should we use?", "answer": "It depends on your use case, budget, and data sensitivity requirements. We evaluate options and recommend the best fit — we are vendor neutral." },
        { "question": "What is RAG and do we need it?", "answer": "RAG (Retrieval-Augmented Generation) connects an LLM to your business data so it can answer questions accurately. If you need AI that knows about your specific documents, policies, or products, yes." },
        { "question": "How do you handle data privacy with LLMs?", "answer": "We design systems that keep sensitive data within your infrastructure. Options include private cloud deployments, on-premise models, and API configurations that prevent data retention." }
      ],
      "relatedServices": ["agentic-ai", "ai-automation", "data-ai"],
      "relatedIndustries": ["legal", "finance", "marketing", "education"]
    },
    {
      "slug": "ai-automation",
      "name": "AI Automation & Workflows",
      "title": "AI Automation Consulting UK — Intelligent Workflow Automation",
      "description": "Automate repetitive tasks with AI. We design and deploy intelligent automation for UK businesses — from document processing to end-to-end workflow orchestration.",
      "primaryKeyword": "ai automation consulting",
      "icon": "implementation",
      "entryPoint": false,
      "intro": "<p>Most businesses lose thousands of hours each year on tasks that machines can handle faster and more accurately. We help you identify the right processes to automate and build solutions that stick.</p>",
      "sections": [
        {
          "heading": "What AI Automation Looks Like",
          "body": "<p>Modern intelligent automation goes beyond simple macros. Machine learning handles tasks that previously required human judgement — invoice processing, customer onboarding, data entry, regulatory filing, lead qualification, report generation.</p><p>We work with tools like UiPath, Microsoft Power Automate, and custom Python pipelines — choosing whatever fits your existing stack.</p>"
        },
        {
          "heading": "How We Deliver Automation Projects",
          "body": "<p>Every engagement starts with a process audit. We map your current workflows, identify bottlenecks, and calculate time and cost savings for each automation candidate. Then we prioritise — starting with quick wins that deliver measurable ROI within weeks.</p><p>Our delivery follows an agile approach: build, test, refine, deploy. Your team gets hands-on training, clear documentation, and ongoing support.</p>"
        },
        {
          "heading": "Scaling Across the Organisation",
          "body": "<p>One successful automation project is the beginning. The real value comes when you build an automation-first culture. We help you create a Centre of Excellence — a small internal team equipped to identify and deploy new automations independently.</p><p>UK organisations that scale automation well typically see 30 to 50 percent reductions in operational costs within two years.</p>"
        },
        {
          "heading": "Common Automation Use Cases",
          "body": "<p>Invoice processing that cuts handling time by up to 80 percent. Employee onboarding that reduces setup from days to hours. Data entry and migration that eliminates copy-paste errors. Regulatory filing that compiles, validates, and submits documents automatically. Lead qualification that scores and routes prospects without manual review. Report generation that produces board packs and client reports on schedule.</p>"
        }
      ],
      "features": [
        { "title": "Process Audit", "description": "Map current workflows, identify bottlenecks, and calculate savings for each automation candidate." },
        { "title": "Quick Win Identification", "description": "Prioritised list of automations that deliver measurable ROI within weeks." },
        { "title": "Custom Build & Integration", "description": "Solutions built to work with your existing systems — no rip and replace." },
        { "title": "Team Training", "description": "Hands-on training so your team can operate and maintain the automation." },
        { "title": "Centre of Excellence Setup", "description": "Governance, frameworks, and reusable components for scaling automation." },
        { "title": "Ongoing Support", "description": "Monitoring, maintenance, and continuous improvement after deployment." }
      ],
      "faq": [
        { "question": "Which processes should we automate first?", "answer": "We start with high-volume, repetitive tasks that have clear rules. These deliver the fastest ROI with the lowest risk." },
        { "question": "How long before we see results?", "answer": "Most clients see measurable results within 4 to 8 weeks. Some quick wins deliver savings within days of deployment." },
        { "question": "Will automation replace our staff?", "answer": "No. The goal is to free your team from work they shouldn't be doing manually, so they can focus on higher-value activities." }
      ],
      "relatedServices": ["ai-strategy", "agentic-ai", "applied-ai"],
      "relatedIndustries": ["finance", "healthcare", "retail", "manufacturing"]
    },
    {
      "slug": "data-ai",
      "name": "Data & AI Infrastructure",
      "title": "Data & AI Consultancy UK — Pipelines, Analytics & ML Models",
      "description": "Turn your data into a competitive advantage. We build data pipelines, analytics platforms, and machine learning models that deliver actionable insight.",
      "primaryKeyword": "data ai consultancy uk",
      "icon": "data",
      "entryPoint": false,
      "intro": "<p>AI is only as good as the data behind it. We help you build the data infrastructure that makes AI possible — from pipelines and governance to analytics and ML models.</p>",
      "sections": [
        {
          "heading": "Data Strategy and Architecture",
          "body": "<p>We audit your current data landscape, identify gaps, and design an architecture that supports your AI ambitions. This covers data warehousing, lake house patterns, governance frameworks, and quality monitoring.</p>"
        },
        {
          "heading": "Pipelines and Integration",
          "body": "<p>We build ETL/ELT pipelines that bring data from disparate sources into a single, reliable platform. Whether you are on AWS, Azure, Google Cloud, or a hybrid setup, we design for your stack.</p>"
        },
        {
          "heading": "Analytics and Machine Learning",
          "body": "<p>From customer segmentation and churn prediction to operational analytics and demand forecasting — we build models that deliver actionable business insight, not just dashboards.</p>"
        },
        {
          "heading": "Data Governance",
          "body": "<p>GDPR-compliant data governance that covers access controls, retention policies, lineage tracking, and quality monitoring. Essential for any business handling customer data in the UK.</p>"
        }
      ],
      "features": [
        { "title": "Data Maturity Assessment", "description": "Evaluate your current data assets, quality, and infrastructure." },
        { "title": "Pipeline Development", "description": "ETL/ELT pipelines using dbt, Airflow, or cloud-native tools." },
        { "title": "Analytics Platform", "description": "Business intelligence and self-service analytics for your team." },
        { "title": "ML Model Development", "description": "Custom machine learning models trained on your data." },
        { "title": "Data Governance Framework", "description": "GDPR-compliant policies, access controls, and quality monitoring." },
        { "title": "Cloud Infrastructure", "description": "Data platform design on AWS, Azure, or Google Cloud." }
      ],
      "faq": [
        { "question": "Do we need a data strategy before starting AI?", "answer": "In most cases, yes. AI depends on good data. A data strategy ensures you have the right data, in the right format, with the right governance." },
        { "question": "What if our data is a mess?", "answer": "That is common. We start with a data audit, identify the most critical gaps, and build a phased plan to get your data AI-ready." }
      ],
      "relatedServices": ["ai-strategy", "ai-automation", "applied-ai"],
      "relatedIndustries": ["finance", "healthcare", "retail", "manufacturing"]
    },
    {
      "slug": "conversational-ai",
      "name": "Conversational AI",
      "title": "Conversational AI Consultancy UK — Chatbots, Voice & NLU",
      "description": "We design and build conversational AI systems — chatbots, voice assistants, and NLU systems that handle customer interactions intelligently.",
      "primaryKeyword": "conversational ai consultancy uk",
      "icon": "chat",
      "entryPoint": false,
      "intro": "<p>Conversational AI has moved far beyond scripted chatbots. We build systems that understand context, handle complex queries, and know when to escalate to a human.</p>",
      "sections": [
        {
          "heading": "Beyond Basic Chatbots",
          "body": "<p>Modern conversational AI uses natural language understanding to handle nuanced customer interactions. We build systems that resolve queries, not just deflect them — with knowledge bases, context awareness, and seamless human handoff.</p>"
        },
        {
          "heading": "Omnichannel Deployment",
          "body": "<p>We deploy conversational AI across web chat, WhatsApp, SMS, voice, and internal tools. One knowledge base, multiple channels — consistent experience everywhere.</p>"
        },
        {
          "heading": "Measurable Customer Support Impact",
          "body": "<p>Well-implemented conversational AI handles 40 to 70 percent of first-line enquiries autonomously. That means faster response times for customers and lower cost per interaction for your business.</p>"
        },
        {
          "heading": "Enterprise Knowledge Bases",
          "body": "<p>We build internal copilots that answer employee questions from your policies, procedures, and documentation. Reducing time spent searching for information directly improves productivity.</p>"
        }
      ],
      "features": [
        { "title": "NLU Design", "description": "Natural language understanding that handles real customer language, not just keywords." },
        { "title": "Knowledge Base Integration", "description": "Connect your chatbot to your actual data — FAQs, policies, product info." },
        { "title": "Human Handoff", "description": "Intelligent escalation when the AI reaches its limits. Context preserved for the agent." },
        { "title": "Omnichannel Deployment", "description": "Web, WhatsApp, SMS, voice — one system, multiple channels." },
        { "title": "Analytics Dashboard", "description": "Conversation metrics, resolution rates, and improvement insights." },
        { "title": "Continuous Training", "description": "System that learns from interactions and improves over time." }
      ],
      "faq": [
        { "question": "How is this different from a basic chatbot?", "answer": "Basic chatbots follow scripts. Our conversational AI systems understand context, handle complex queries, access your data, and know when to bring in a human." },
        { "question": "What channels can you deploy to?", "answer": "Web chat, WhatsApp, SMS, voice, Microsoft Teams, Slack — any channel your customers or staff use." }
      ],
      "relatedServices": ["agentic-ai", "generative-ai", "ai-automation"],
      "relatedIndustries": ["ecommerce", "healthcare", "finance", "retail"]
    },
    {
      "slug": "ai-governance",
      "name": "AI Governance & Compliance",
      "title": "AI Governance Consulting UK — Compliance, Ethics & Risk Frameworks",
      "description": "AI governance frameworks for UK businesses. Bias audits, regulatory compliance (GDPR, AI Act), ethics policies, and risk management.",
      "primaryKeyword": "ai governance consulting uk",
      "icon": "governance",
      "entryPoint": false,
      "intro": "<p>AI without governance is a liability. We help UK businesses build frameworks that ensure their AI systems are safe, fair, compliant, and auditable.</p>",
      "sections": [
        {
          "heading": "Why AI Governance Matters Now",
          "body": "<p>The UK AI Bill and EU AI Act are creating new compliance obligations. Businesses deploying AI need documented governance frameworks, bias monitoring, and audit trails. This is not optional — it is regulatory reality.</p><p>Beyond compliance, governance protects your reputation. An AI system that makes biased decisions or handles personal data incorrectly can cause lasting damage.</p>"
        },
        {
          "heading": "Our Governance Framework",
          "body": "<p>We build practical governance frameworks, not theoretical ones. This covers: AI risk assessment methodology, model documentation standards, bias detection and monitoring, data governance policies, human oversight requirements, and incident response procedures.</p><p>Every framework is tailored to your industry and regulatory environment — <a href='/industries/finance/'>FCA for financial services</a>, <a href='/industries/healthcare/'>CQC and NHS Digital for healthcare</a>, <a href='/industries/legal/'>SRA for legal</a>.</p>"
        },
        {
          "heading": "Bias Auditing",
          "body": "<p>We test your AI systems for demographic bias, data bias, and outcome bias. If we find problems, we help you fix them — through model adjustment, data rebalancing, or process redesign.</p>"
        },
        {
          "heading": "AI Governance for SMEs",
          "body": "<p>Enterprise-grade governance consulting typically costs £50,000 or more. We offer scaled governance frameworks for mid-market businesses — the same rigour at a price point that makes sense for organisations with 50 to 500 employees.</p>"
        }
      ],
      "features": [
        { "title": "AI Risk Assessment", "description": "Systematic identification and scoring of risks across your AI portfolio." },
        { "title": "Bias Audit", "description": "Testing for demographic, data, and outcome bias with remediation recommendations." },
        { "title": "Regulatory Compliance", "description": "GDPR, UK AI Bill, EU AI Act, and sector-specific regulation (FCA, CQC, SRA)." },
        { "title": "Ethics Framework", "description": "Policies and procedures for responsible AI development and deployment." },
        { "title": "Model Documentation", "description": "Standards for documenting AI models, training data, and decision logic." },
        { "title": "Incident Response", "description": "Procedures for handling AI failures, bias incidents, and data breaches." }
      ],
      "faq": [
        { "question": "Do we need AI governance if we only use third-party AI tools?", "answer": "Yes. You are responsible for how AI is used in your business, even if the AI itself is provided by a third party. Governance covers usage policies, data handling, and risk management." },
        { "question": "What regulations apply to AI in the UK?", "answer": "GDPR applies to all AI that processes personal data. The UK AI Bill introduces additional requirements. Sector-specific regulations (FCA, CQC, SRA) add further obligations depending on your industry." },
        { "question": "How much does AI governance consulting cost?", "answer": "We offer scaled packages from £5,000 for an initial governance assessment through to £25,000+ for comprehensive frameworks. Contact us for a scoped proposal." }
      ],
      "relatedServices": ["ai-strategy", "agentic-ai", "ai-readiness-assessment"],
      "relatedIndustries": ["finance", "healthcare", "legal", "government"]
    },
    {
      "slug": "ai-training",
      "name": "AI Training & Workshops",
      "title": "AI Training & Workshops UK — Team Upskilling",
      "description": "Practical AI training and workshops for UK businesses. Upskill your team on AI tools, prompt engineering, and responsible AI adoption.",
      "primaryKeyword": "ai training workshops uk",
      "icon": "training",
      "entryPoint": false,
      "intro": "<p>Your AI strategy is only as good as your team's ability to execute it. We deliver practical, hands-on training that turns your people into confident AI users.</p>",
      "sections": [
        {
          "heading": "Training That Sticks",
          "body": "<p>We do not do death by PowerPoint. Our workshops are hands-on — your team works with real AI tools on real business problems from your organisation. Every session ends with something they can use the next day.</p>"
        },
        {
          "heading": "Workshop Formats",
          "body": "<p>Half-day AI awareness sessions for leadership teams. Full-day hands-on workshops for operational teams. Multi-week AI champion programmes for internal AI leads. All sessions are customised to your industry, tools, and use cases.</p>"
        },
        {
          "heading": "Topics We Cover",
          "body": "<p>AI fundamentals and use case identification. Prompt engineering for business users. Responsible AI and governance. Generative AI tools (ChatGPT, Claude, Copilot). Agentic AI concepts for technical teams. Data literacy for AI adoption.</p>"
        },
        {
          "heading": "Measuring Impact",
          "body": "<p>Every training programme includes pre and post assessments so you can measure the uplift. We track adoption metrics after the workshops to ensure the training translates into actual behaviour change.</p>"
        }
      ],
      "features": [
        { "title": "Customised Content", "description": "Training built around your industry, tools, and specific business challenges." },
        { "title": "Hands-On Format", "description": "Practical exercises using real AI tools on real problems — not slide decks." },
        { "title": "Multiple Formats", "description": "Half-day, full-day, and multi-week programmes to suit your schedule." },
        { "title": "AI Champion Programme", "description": "Multi-week programme to build internal AI expertise and advocacy." },
        { "title": "Impact Measurement", "description": "Pre and post assessments plus adoption tracking after the programme." },
        { "title": "Materials & Resources", "description": "Written guides, prompt libraries, and reference materials for ongoing use." }
      ],
      "faq": [
        { "question": "Who are the workshops designed for?", "answer": "We run sessions for all levels — from board-level awareness to technical deep-dives. Each session is tailored to the audience." },
        { "question": "How much do workshops cost?", "answer": "Half-day sessions start from £1,500. Full-day workshops from £2,500. Multi-week programmes are scoped individually." },
        { "question": "Can you deliver training remotely?", "answer": "Yes. We deliver in-person and remote workshops. Both formats are fully interactive." }
      ],
      "relatedServices": ["ai-strategy", "ai-readiness-assessment", "ai-governance"],
      "relatedIndustries": ["education", "finance", "healthcare", "government"]
    },
    {
      "slug": "ongoing-support",
      "name": "Ongoing Support & Optimisation",
      "title": "AI Support & Optimisation — Retainer Packages",
      "description": "Ongoing AI support, monitoring, and optimisation. Retainer packages for businesses that need continuous expert guidance.",
      "primaryKeyword": "ai support retainer uk",
      "icon": "support",
      "entryPoint": false,
      "intro": "<p>AI is not a one-off project. Systems need monitoring, models need retraining, and your strategy needs evolving. Our retainer packages give you ongoing access to expert support.</p>",
      "sections": [
        {
          "heading": "Why Ongoing Support Matters",
          "body": "<p>AI models drift. Business requirements change. New tools emerge. Without ongoing attention, AI systems that worked brilliantly at launch gradually lose effectiveness. We keep your systems performing.</p>"
        },
        {
          "heading": "What Retainer Support Includes",
          "body": "<p>Model monitoring and performance tracking. Retraining cycles when performance drops. Strategic advisory on new AI opportunities. Technical support for your AI systems. Quarterly roadmap reviews to align AI with evolving business goals.</p>"
        },
        {
          "heading": "Flexible Engagement",
          "body": "<p>Retainer packages start from £1,500 per month. We tailor the scope to your needs — some clients want weekly check-ins, others prefer monthly strategic reviews with on-demand technical support.</p>"
        },
        {
          "heading": "Fractional AI Leadership",
          "body": "<p>For organisations that need AI expertise but cannot justify a full-time hire, our retainer acts as a fractional AI lead. You get senior-level strategic guidance and technical capability without the overhead of a permanent role.</p>"
        }
      ],
      "features": [
        { "title": "Performance Monitoring", "description": "Continuous tracking of your AI systems' accuracy, speed, and business impact." },
        { "title": "Model Retraining", "description": "Scheduled retraining cycles to prevent model drift and maintain performance." },
        { "title": "Strategic Advisory", "description": "Regular sessions to identify new AI opportunities and evolve your roadmap." },
        { "title": "Technical Support", "description": "On-demand support for issues, questions, and system changes." },
        { "title": "Quarterly Reviews", "description": "Structured reviews of AI performance against business objectives." },
        { "title": "Fractional AI Lead", "description": "Senior AI expertise embedded in your organisation without a full-time hire." }
      ],
      "faq": [
        { "question": "What does a retainer cost?", "answer": "Retainer packages start from £1,500 per month. We scope them based on the number of AI systems, level of support required, and frequency of engagement." },
        { "question": "Can we cancel the retainer?", "answer": "Yes. Our retainers run on a rolling monthly basis with 30 days notice." },
        { "question": "Do you support systems you did not build?", "answer": "Yes. We are happy to take over monitoring and optimisation of AI systems built by other teams or vendors." }
      ],
      "relatedServices": ["ai-strategy", "ai-readiness-assessment", "ai-governance"],
      "relatedIndustries": ["finance", "healthcare", "retail", "manufacturing"]
    },
    {
      "slug": "applied-ai",
      "name": "Applied AI",
      "title": "Applied AI Consulting UK — Computer Vision, Forecasting & NLP",
      "description": "Applied AI solutions including computer vision, demand forecasting, NLP, anomaly detection, and predictive maintenance for UK businesses.",
      "primaryKeyword": "applied ai consulting uk",
      "icon": "applied",
      "entryPoint": false,
      "intro": "<p>Not every AI problem is a language model problem. We build applied AI solutions — computer vision, forecasting, NLP, anomaly detection — tailored to specific business challenges.</p>",
      "sections": [
        {
          "heading": "Computer Vision",
          "body": "<p>Quality inspection, inventory counting, document digitisation, security monitoring. We build computer vision systems that see what humans miss — and work 24/7 without fatigue.</p>"
        },
        {
          "heading": "Forecasting and Prediction",
          "body": "<p>Demand forecasting, revenue prediction, workforce planning, risk assessment. We build models that help you make better decisions about the future using your historical data.</p>"
        },
        {
          "heading": "Natural Language Processing",
          "body": "<p>Sentiment analysis, document classification, entity extraction, text summarisation. NLP turns unstructured text into structured, actionable data.</p>"
        },
        {
          "heading": "Anomaly Detection",
          "body": "<p>Fraud detection, equipment failure prediction, quality control alerts, unusual pattern identification. AI that spots problems before they become costly.</p>"
        }
      ],
      "features": [
        { "title": "Computer Vision", "description": "Image and video analysis for quality control, inventory, and monitoring." },
        { "title": "Demand Forecasting", "description": "Predictive models for inventory, revenue, and workforce planning." },
        { "title": "NLP & Text Analytics", "description": "Extract insight from documents, emails, reviews, and conversations." },
        { "title": "Anomaly Detection", "description": "Identify unusual patterns in financial, operational, or quality data." },
        { "title": "Predictive Maintenance", "description": "Predict equipment failures before they happen to reduce downtime." },
        { "title": "Optimisation", "description": "Route planning, scheduling, pricing, and resource allocation algorithms." }
      ],
      "faq": [
        { "question": "Do we need large datasets for applied AI?", "answer": "It depends on the problem. Some techniques work with modest data. We assess data requirements during scoping and recommend approaches that fit your data reality." },
        { "question": "How accurate are forecasting models?", "answer": "Accuracy depends on data quality and the domain. We provide confidence intervals and error metrics so you know exactly how reliable the forecasts are." }
      ],
      "relatedServices": ["data-ai", "ai-automation", "ai-strategy"],
      "relatedIndustries": ["manufacturing", "retail", "supply-chain", "finance"]
    },
    {
      "slug": "ai-content-marketing",
      "name": "AI for Content & Marketing",
      "title": "AI Content & Marketing Consulting UK — Scalable Content Generation",
      "description": "AI-powered content creation and marketing automation. Scale content production while maintaining quality and brand voice.",
      "primaryKeyword": "ai content marketing consulting",
      "icon": "sparkles",
      "entryPoint": false,
      "intro": "<p>AI can scale your content production dramatically — but only if it is set up properly. We build content systems that maintain quality and brand voice at volume.</p>",
      "sections": [
        {
          "heading": "Content at Scale",
          "body": "<p>Product descriptions, blog posts, email campaigns, social media content. We build AI pipelines that produce high-quality content at volumes your team could never match manually — with human review built into the workflow.</p>"
        },
        {
          "heading": "Marketing Automation",
          "body": "<p>Lead scoring, campaign personalisation, customer segmentation, attribution modelling. AI that makes your marketing spend work harder by targeting the right people with the right message.</p>"
        },
        {
          "heading": "Brand Voice Consistency",
          "body": "<p>We fine-tune and configure AI systems to match your brand voice. Every piece of content sounds like your company, not a generic AI output.</p>"
        },
        {
          "heading": "Quality Controls",
          "body": "<p>Every content pipeline includes automated quality checks, plagiarism detection, factual verification, and human review stages. We build for quality, not just speed.</p>"
        }
      ],
      "features": [
        { "title": "Content Pipeline", "description": "Automated production of product descriptions, articles, and marketing copy." },
        { "title": "Brand Voice Tuning", "description": "AI configured to match your brand's tone, style, and messaging." },
        { "title": "Quality Automation", "description": "Automated checks for quality, accuracy, and brand compliance." },
        { "title": "Marketing Personalisation", "description": "AI-driven customer segmentation and message targeting." },
        { "title": "Campaign Optimisation", "description": "Automated testing and optimisation of marketing campaigns." },
        { "title": "Analytics & Attribution", "description": "AI-powered marketing analytics and multi-touch attribution." }
      ],
      "faq": [
        { "question": "Will AI content hurt our SEO?", "answer": "Not when done properly. Google penalises low-quality content, not AI-generated content. We build systems that produce content search engines value — original, useful, and well-structured." },
        { "question": "How do you maintain brand voice?", "answer": "We train the AI on examples of your existing content, create detailed style guides, and include human review in the pipeline." }
      ],
      "relatedServices": ["generative-ai", "ai-automation", "ai-strategy"],
      "relatedIndustries": ["marketing", "ecommerce", "retail", "education"]
    }
  ]
}
```

- [ ] **Step 2: Verify the JSON is valid**

Run: `cd "C:/Users/sunny/repos/agenticai-associates" && node -e "JSON.parse(require('fs').readFileSync('src/data/what-we-do.json','utf8')); console.log('Valid JSON')"`
Expected: `Valid JSON`

- [ ] **Step 3: Commit**

```bash
cd "C:/Users/sunny/repos/agenticai-associates" && git add src/data/what-we-do.json && git commit -m "feat: add what-we-do.json — merged services and solutions data"
```

---

## Task 2: Create results.json data file

**Files:**
- Create: `src/data/results.json`

- [ ] **Step 1: Create `src/data/results.json`**

```json
{
  "results": [
    {
      "slug": "wireless-logic",
      "headline": "Enterprise AI enquiry within 7 days of launch",
      "description": "A UK IoT connectivity provider with global operations contacted us about AI automation for their systems — within one week of the site going live.",
      "metric": "7 days",
      "metricLabel": "from launch to enterprise lead",
      "anonymous": true
    },
    {
      "slug": "site-proof",
      "headline": "Built, ranked, and converting in under a week",
      "description": "This website was built, deployed, and ranking on Google within days — using the same AI-powered speed and rigour we bring to client projects.",
      "metric": "83 pages",
      "metricLabel": "built and indexed",
      "anonymous": false
    }
  ]
}
```

- [ ] **Step 2: Commit**

```bash
cd "C:/Users/sunny/repos/agenticai-associates" && git add src/data/results.json && git commit -m "feat: add results.json — authentic proof points"
```

---

## Task 3: Update site-config.ts — navigation, footer, messaging

**Files:**
- Modify: `src/data/site-config.ts`

- [ ] **Step 1: Replace the entire contents of `src/data/site-config.ts`**

```typescript
export const siteConfig = {
  name: 'Agentic AI Associates',
  shortName: 'AgenticAI',
  url: 'https://agenticai.associates',
  description: 'UK AI consultancy specialising in agentic AI systems, automation, and governance. We build AI that delivers measurable results from week one.',
  tagline: 'AI systems that deliver results from week one.',
  founder: {
    name: 'Sunny Patel',
    jobTitle: 'Founder & AI Consultant',
    personalUrl: 'https://sunnypatel.co.uk',
  },
  contact: {
    email: 'hello@agenticai.associates',
    bookingUrl: 'https://trafft.com/',
    staticFormsKey: 'sf_9e906eb6c00416b9d3354749',
  },
  social: {
    linkedin: '',
    twitter: '',
  },
  ga4Id: 'G-923Q4JQMH4',
} as const;

export const mainNav = [
  { label: 'What We Do', href: '/what-we-do/' },
  { label: 'Industries', href: '/industries/' },
  { label: 'Learn', href: '/learn/' },
  { label: 'About', href: '/about/' },
  { label: 'Get Started', href: '/get-started/' },
] as const;

export const footerNav = {
  whatWeDo: [
    { label: 'AI Readiness Assessment', href: '/what-we-do/ai-readiness-assessment/' },
    { label: 'AI Strategy & Roadmaps', href: '/what-we-do/ai-strategy/' },
    { label: 'Agentic AI Systems', href: '/what-we-do/agentic-ai/' },
    { label: 'Generative AI & LLMs', href: '/what-we-do/generative-ai/' },
    { label: 'AI Automation', href: '/what-we-do/ai-automation/' },
    { label: 'AI Governance', href: '/what-we-do/ai-governance/' },
  ],
  industries: [
    { label: 'Healthcare', href: '/industries/healthcare/' },
    { label: 'Legal', href: '/industries/legal/' },
    { label: 'Finance', href: '/industries/finance/' },
    { label: 'Retail', href: '/industries/retail/' },
    { label: 'Manufacturing', href: '/industries/manufacturing/' },
    { label: 'Education', href: '/industries/education/' },
  ],
  company: [
    { label: 'About', href: '/about/' },
    { label: 'Results', href: '/about/results/' },
    { label: 'Get Started', href: '/get-started/' },
    { label: 'Contact', href: '/contact/' },
    { label: 'Privacy Policy', href: '/privacy/' },
    { label: 'Terms of Service', href: '/terms/' },
  ],
} as const;
```

- [ ] **Step 2: Commit**

```bash
cd "C:/Users/sunny/repos/agenticai-associates" && git add src/data/site-config.ts && git commit -m "feat: update nav to What We Do / Get Started, update footer links"
```

---

## Task 4: Update page-factory.ts and internal-links.ts

**Files:**
- Modify: `src/lib/page-factory.ts`
- Modify: `src/lib/internal-links.ts`

- [ ] **Step 1: Replace `src/lib/page-factory.ts`**

```typescript
import whatWeDoData from '@/data/what-we-do.json';
import industriesData from '@/data/industries.json';
import businessSizesData from '@/data/business-sizes.json';
import learnData from '@/data/learn.json';
import locationsData from '@/data/locations.json';
import resultsData from '@/data/results.json';

export type HubMeta = {
  title: string;
  description: string;
  primaryKeyword: string;
};

export type WhatWeDoPage = (typeof whatWeDoData.pages)[number];
export type IndustryPage = (typeof industriesData.pages)[number];
export type BusinessSizePage = (typeof businessSizesData.pages)[number];
export type LearnPage = (typeof learnData.pages)[number];
export type LocationPage = (typeof locationsData.pages)[number];
export type ResultItem = (typeof resultsData.results)[number];

// getStaticPaths generators
export function getWhatWeDoPaths() {
  return whatWeDoData.pages.map((page) => ({
    params: { slug: page.slug },
    props: { page, hub: whatWeDoData.hub },
  }));
}

export function getIndustryPaths() {
  return industriesData.pages.map((page) => ({
    params: { slug: page.slug },
    props: { page, hub: industriesData.hub },
  }));
}

export function getBusinessSizePaths() {
  return businessSizesData.pages.map((page) => ({
    params: { slug: page.slug },
    props: { page },
  }));
}

export function getLearnPaths() {
  return learnData.pages.map((page) => ({
    params: { slug: page.slug },
    props: { page, hub: learnData.hub },
  }));
}

export function getLocationPaths() {
  return locationsData.pages.map((page) => ({
    params: { slug: page.slug },
    props: { page, hub: locationsData.hub },
  }));
}

// Hub data accessors
export function getWhatWeDoHub() { return whatWeDoData; }
export function getIndustriesHub() { return industriesData; }
export function getBusinessSizesHub() { return businessSizesData; }
export function getLearnHub() { return learnData; }
export function getLocationsHub() { return locationsData; }
export function getResults() { return resultsData.results; }

// Cross-link helpers
export function getRelatedWhatWeDo(slugs: string[]): WhatWeDoPage[] {
  return whatWeDoData.pages.filter((p) => slugs.includes(p.slug));
}

export function getRelatedIndustries(slugs: string[]): IndustryPage[] {
  return industriesData.pages.filter((p) => slugs.includes(p.slug));
}

export function getRelatedLearnPages(slugs: string[]): LearnPage[] {
  return learnData.pages.filter((p) => slugs.includes(p.slug));
}

export function getRelatedLocations(slugs: string[]): LocationPage[] {
  return locationsData.pages.filter((p) => slugs.includes(p.slug));
}
```

- [ ] **Step 2: Replace `src/lib/internal-links.ts`**

```typescript
const hubSpokes: Record<string, string[]> = {
  'what-we-do': [
    'ai-readiness-assessment',
    'ai-strategy',
    'agentic-ai',
    'generative-ai',
    'ai-automation',
    'data-ai',
    'conversational-ai',
    'ai-governance',
    'ai-training',
    'ongoing-support',
    'applied-ai',
    'ai-content-marketing',
  ],
  industries: [
    'healthcare',
    'legal',
    'retail',
    'supply-chain',
    'finance',
    'education',
    'ecommerce',
    'hr',
    'real-estate',
    'manufacturing',
    'marketing',
    'government',
  ],
  'for': [
    'small-business',
    'enterprise',
    'startups',
    'smes',
  ],
  learn: [
    'what-is-an-ai-consultant',
    'what-does-an-ai-consultant-do',
    'how-to-become-an-ai-consultant',
    'become-ai-consultant-no-experience',
    'ai-consultant-skills',
    'ai-consultant-career-path',
    'ai-consultant-certification',
    'ai-consultant-job-description',
    'ai-consultant-salary',
    'ai-consultant-hourly-rate',
    'how-to-choose-an-ai-consultant',
    'when-to-hire-an-ai-consultant',
    'benefits-of-hiring-an-ai-consultant',
    'ai-consultant-vs-vendor',
    'freelance-ai-consultant',
    'ai-consultant-interview-questions',
  ],
  locations: [
    'london',
    'manchester',
    'birmingham',
    'leeds',
    'bristol',
    'edinburgh',
    'glasgow',
    'reading',
    'leicester',
    'scotland',
    'northern-ireland',
    'norfolk',
  ],
};

const crossHubLinks: Record<string, string[]> = {
  'what-we-do': ['industries'],
  industries: ['what-we-do'],
  'for': ['what-we-do', 'industries'],
  learn: ['what-we-do'],
  locations: ['what-we-do', 'industries'],
};

export function getHubSpokes(hub: string): string[] {
  return hubSpokes[hub] || [];
}

export function getCrossHubLinks(hub: string): string[] {
  return crossHubLinks[hub] || [];
}

export function getHubUrl(hub: string): string {
  if (hub === 'for') return '/for/';
  return `/${hub}/`;
}

export function getSpokeUrl(hub: string, slug: string): string {
  if (hub === 'for') return `/for/${slug}/`;
  return `/${hub}/${slug}/`;
}
```

- [ ] **Step 3: Commit**

```bash
cd "C:/Users/sunny/repos/agenticai-associates" && git add src/lib/page-factory.ts src/lib/internal-links.ts && git commit -m "feat: update page-factory and internal-links for what-we-do hub"
```

---

## Task 5: Create WhatWeDoLayout.astro (merge of ServiceLayout + SolutionLayout)

**Files:**
- Create: `src/layouts/WhatWeDoLayout.astro`

- [ ] **Step 1: Create `src/layouts/WhatWeDoLayout.astro`**

```astro
---
import BaseLayout from './BaseLayout.astro';
import BreadcrumbNav from '@/components/BreadcrumbNav.astro';
import FeatureGrid from '@/components/FeatureGrid.astro';
import FAQ from '@/components/FAQ.astro';
import CTABanner from '@/components/CTABanner.astro';
import RelatedLinks from '@/components/RelatedLinks.astro';
import { buildServiceSchema, buildFAQSchema } from '@/lib/schema';
import { siteConfig } from '@/data/site-config';
import { getRelatedIndustries, getRelatedWhatWeDo } from '@/lib/page-factory';

interface Props {
  page: {
    slug: string;
    name: string;
    title: string;
    description: string;
    intro: string;
    entryPoint?: boolean;
    sections: { heading: string; body: string }[];
    features: { title: string; description: string }[];
    faq: { question: string; answer: string }[];
    relatedServices: string[];
    relatedIndustries: string[];
  };
}

const { page } = Astro.props;

const serviceSchema = buildServiceSchema({
  name: page.name,
  description: page.description,
  url: `${siteConfig.url}/what-we-do/${page.slug}/`,
});

const faqSchema = buildFAQSchema(page.faq);
const schemas = [serviceSchema, ...(faqSchema ? [faqSchema] : [])];

const relatedIndustries = getRelatedIndustries(page.relatedIndustries);
const relatedServices = getRelatedWhatWeDo(page.relatedServices);
---

<BaseLayout title={page.title} description={page.description} schema={schemas}>
  <!-- Hero -->
  <section class="bg-[var(--color-hero-bg)] text-[var(--color-hero-text)] section">
    <div class="container">
      <BreadcrumbNav items={[
        { label: 'What We Do', href: '/what-we-do/' },
        { label: page.name, href: `/what-we-do/${page.slug}/` },
      ]} />
      <h1 class="text-white max-w-3xl">{page.name}</h1>
      <div class="text-lg text-slate-300 mt-4 max-w-2xl leading-relaxed prose prose-invert prose-p:my-0"><Fragment set:html={page.intro} /></div>
      {page.entryPoint ? (
        <a href="/contact/" class="btn-glow mt-6">
          Book a Discovery Call
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </a>
      ) : (
        <a href="/contact/" class="btn btn-primary mt-6">Discuss Your Project</a>
      )}
    </div>
  </section>

  <div class="container section-sm">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <!-- Main content -->
      <div class="lg:col-span-2 order-1">
        <p class="text-sm text-slate-500 mb-8 pb-4 border-b border-slate-100">Written by <strong>Sunny Patel</strong>, Founder, Agentic AI Associates</p>

        <div class="prose">
          {page.sections.map((section) => (
            <div>
              <h2>{section.heading}</h2>
              <Fragment set:html={section.body} />
            </div>
          ))}
        </div>

        {page.features.length > 0 && (
          <div class="mt-12">
            <h2 class="mb-6">What You Get</h2>
            <FeatureGrid features={page.features} columns={2} />
          </div>
        )}
      </div>

      <!-- Sidebar -->
      <aside class="space-y-6 order-2 lg:order-none">
        {page.entryPoint && (
          <div class="card bg-gradient-to-br from-[var(--color-accent)]/5 to-[var(--color-primary-light)]/5 border-[var(--color-accent)]/20">
            <h3 class="text-lg font-semibold mb-2">Start Here</h3>
            <p class="text-sm text-[var(--color-text-muted)] mb-5 leading-relaxed">Book a free 30-minute discovery call. We'll assess whether an AI Readiness Assessment is right for your business.</p>
            <a href="/contact/" class="btn btn-primary text-sm w-full justify-center">Book a Discovery Call</a>
          </div>
        )}

        {relatedServices.length > 0 && (
          <RelatedLinks
            title="Related Services"
            links={relatedServices.map((svc) => ({
              label: svc.name,
              href: `/what-we-do/${svc.slug}/`,
            }))}
          />
        )}

        {relatedIndustries.length > 0 && (
          <RelatedLinks
            title="Industries We Serve"
            links={relatedIndustries.map((ind) => ({
              label: ind.name,
              href: `/industries/${ind.slug}/`,
            }))}
          />
        )}

        {!page.entryPoint && (
          <div class="card bg-gradient-to-br from-[var(--color-accent)]/5 to-[var(--color-primary-light)]/5 border-[var(--color-accent)]/20">
            <h3 class="text-lg font-semibold mb-2">Not Sure Where to Start?</h3>
            <p class="text-sm text-[var(--color-text-muted)] mb-5 leading-relaxed">Our AI Readiness Assessment gives you a clear picture of where AI can help your business.</p>
            <a href="/what-we-do/ai-readiness-assessment/" class="btn btn-primary text-sm w-full justify-center">Learn About the Assessment</a>
          </div>
        )}
      </aside>
    </div>
  </div>

  {page.faq.length > 0 && (
    <div class="container">
      <FAQ faqs={page.faq} />
    </div>
  )}

  <CTABanner
    headline="Ready to Get Started?"
    text="Book a free 30-minute discovery call. We'll discuss your challenges and give you an honest assessment of where AI can help."
    buttonText="Book a Discovery Call"
    buttonHref="/contact/"
    secondaryText="View All Services"
    secondaryHref="/what-we-do/"
  />
</BaseLayout>
```

- [ ] **Step 2: Commit**

```bash
cd "C:/Users/sunny/repos/agenticai-associates" && git add src/layouts/WhatWeDoLayout.astro && git commit -m "feat: add WhatWeDoLayout — merged service and solution layout"
```

---

## Task 6: Create What We Do pages (hub + dynamic)

**Files:**
- Create: `src/pages/what-we-do/index.astro`
- Create: `src/pages/what-we-do/[slug].astro`

- [ ] **Step 1: Create `src/pages/what-we-do/index.astro`**

```astro
---
import HubLayout from '@/layouts/HubLayout.astro';
import HubCard from '@/components/HubCard.astro';
import { getWhatWeDoHub } from '@/lib/page-factory';

const hub = getWhatWeDoHub();
const pages = hub.pages;

const faqs = [
  { question: 'What AI services do you offer?', answer: 'We offer AI readiness assessments, strategy consulting, agentic AI development, generative AI systems, automation, data infrastructure, conversational AI, governance consulting, training, and ongoing support. Every engagement is tailored to your business needs.' },
  { question: 'Where should we start with AI?', answer: 'Most businesses start with an AI Readiness Assessment. It gives you a clear picture of your data, infrastructure, and team capability — plus a prioritised roadmap of where AI will deliver the most value.' },
  { question: 'Do you work with businesses that have no AI experience?', answer: 'Yes. Many of our clients are starting from zero. The readiness assessment is specifically designed to take you from where you are to where you need to be.' },
  { question: 'How much does AI consulting cost?', answer: 'It depends on scope. Our AI Readiness Assessment is a fixed-fee engagement. Strategy projects start from £3,000. Implementation is scoped individually. We always provide clear pricing upfront.' },
];
---

<HubLayout
  title={hub.hub.title}
  description={hub.hub.description}
  heading="What We Do"
  intro="From readiness assessments to full implementation — we cover the complete AI lifecycle. Every engagement starts with understanding your business, not selling you technology."
  faqs={faqs}
>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {pages.map((page) => (
      <HubCard
        title={page.name}
        description={page.description}
        href={`/what-we-do/${page.slug}/`}
        icon={page.icon}
      />
    ))}
  </div>
</HubLayout>
```

- [ ] **Step 2: Create `src/pages/what-we-do/[slug].astro`**

```astro
---
import WhatWeDoLayout from '@/layouts/WhatWeDoLayout.astro';
import { getWhatWeDoPaths } from '@/lib/page-factory';

export function getStaticPaths() {
  return getWhatWeDoPaths();
}

const { page } = Astro.props;
---

<WhatWeDoLayout page={page} />
```

- [ ] **Step 3: Commit**

```bash
cd "C:/Users/sunny/repos/agenticai-associates" && git add src/pages/what-we-do/ && git commit -m "feat: add what-we-do hub and dynamic pages"
```

---

## Task 7: Create Get Started page (replaces Pricing)

**Files:**
- Create: `src/pages/get-started/index.astro`

- [ ] **Step 1: Create `src/pages/get-started/index.astro`**

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import BreadcrumbNav from '@/components/BreadcrumbNav.astro';
import FAQ from '@/components/FAQ.astro';
import CTABanner from '@/components/CTABanner.astro';
import { buildFAQSchema, buildServiceSchema } from '@/lib/schema';
import { siteConfig } from '@/data/site-config';

const faqs = [
  { question: 'How much does the AI Readiness Assessment cost?', answer: 'The assessment is a fixed-fee engagement. Contact us for current pricing — it depends on the size and complexity of your organisation, but we always provide a clear price upfront with no hidden costs.' },
  { question: 'What happens after the assessment?', answer: 'You receive a complete report with a prioritised AI roadmap. If you want us to help execute it, we scope that as a separate engagement. There is no obligation to continue.' },
  { question: 'Do you offer fixed-price projects?', answer: 'Yes. For well-defined projects, we prefer fixed-price engagements. You know exactly what you are paying upfront. For ongoing work, we offer monthly retainer packages starting from £1,500.' },
  { question: 'How long does a typical engagement take?', answer: 'The AI Readiness Assessment takes 2 to 4 weeks. Strategy engagements run 2 to 6 weeks. Implementation projects deliver first results within 6 to 8 weeks, with full deployment in 3 to 6 months.' },
  { question: 'Do you work with small businesses?', answer: 'We work with businesses of all sizes. Our assessment and strategy services are designed to be accessible. For smaller businesses, we also offer advisory sessions from £150 per hour.' },
];

const faqSchema = buildFAQSchema(faqs);

const assessmentSchema = buildServiceSchema({
  name: 'AI Readiness Assessment',
  description: 'Fixed-fee AI readiness assessment for UK businesses. We audit your data, processes, and team capability, then deliver a prioritised roadmap with clear ROI projections.',
  url: `${siteConfig.url}/get-started/`,
});

const schemas = [assessmentSchema, ...(faqSchema ? [faqSchema] : [])];
---

<BaseLayout
  title="Get Started — AI Readiness Assessment | Agentic AI Associates"
  description="Start your AI journey with a fixed-fee AI Readiness Assessment. Clear pricing, no hidden fees. Book a free discovery call."
  schema={schemas}
>
  <!-- Hero -->
  <section class="bg-[var(--color-hero-bg)] text-[var(--color-hero-text)] section">
    <div class="container">
      <BreadcrumbNav items={[{ label: 'Get Started', href: '/get-started/' }]} />
      <h1 class="text-white max-w-3xl">Get Started</h1>
      <p class="text-lg text-slate-300 mt-4 max-w-2xl leading-relaxed">Every engagement begins with understanding your business. No sales pitch — just an honest assessment of where AI can help.</p>
    </div>
  </section>

  <div class="container section-sm">
    <!-- Entry point: Assessment -->
    <div class="max-w-4xl mx-auto">
      <div class="card border-[var(--color-accent)] border-2 p-8 md:p-10">
        <div class="flex items-start gap-4 mb-6">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background: rgba(13,148,136,0.1);">
            <svg class="w-6 h-6" style="color: #0d9488;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h2 class="text-2xl font-bold mb-1">AI Readiness Assessment</h2>
            <p class="text-sm text-[var(--color-text-muted)]">Fixed fee &middot; 2-4 weeks &middot; No obligation to continue</p>
          </div>
        </div>

        <p class="text-[var(--color-text-muted)] leading-relaxed mb-6">We audit your data, processes, technology, and team capability. You receive a scored matrix of AI opportunities with estimated ROI, a technology gap analysis, and a phased roadmap you can act on immediately.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {[
            'Data maturity assessment',
            'AI opportunity scoring matrix',
            'Technology gap analysis',
            'Team skills audit',
            'Phased 12-24 month roadmap',
            'Board-ready business case',
          ].map(item => (
            <div class="flex gap-2 text-sm">
              <span class="text-[var(--color-success)] flex-shrink-0">&#10003;</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div class="flex flex-col sm:flex-row gap-4">
          <a href="/contact/" class="btn-glow">
            Book a Free Discovery Call
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
          <a href="/what-we-do/ai-readiness-assessment/" class="btn btn-outline">Learn More</a>
        </div>
      </div>

      <!-- What happens next -->
      <div class="mt-16">
        <h2 class="text-center mb-10">What Happens After the Assessment</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: '1', title: 'AI Strategy', desc: 'We build a detailed AI roadmap based on the assessment findings. Typically 2-6 weeks.', range: 'From £3,000' },
            { step: '2', title: 'Pilot & Proof of Concept', desc: 'We build and test your highest-priority AI use case in a single department.', range: 'From £10,000' },
            { step: '3', title: 'Full Implementation', desc: 'Multi-use-case deployment across your organisation with training and ongoing support.', range: 'Scoped individually' },
          ].map(item => (
            <div class="text-center">
              <div class="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4" style="background: rgba(13,148,136,0.1);">
                <span class="text-sm font-bold" style="color: #0d9488;">{item.step}</span>
              </div>
              <h3 class="text-lg font-semibold mb-2">{item.title}</h3>
              <p class="text-sm text-[var(--color-text-muted)] leading-relaxed mb-2">{item.desc}</p>
              <p class="text-xs font-semibold text-[var(--color-accent)]">{item.range}</p>
            </div>
          ))}
        </div>
      </div>

      <!-- Retainer note -->
      <div class="mt-12 text-center">
        <p class="text-[var(--color-text-muted)]">
          <strong class="text-[var(--color-text)]">Ongoing support</strong> available from £1,500/month. Advisory sessions from £150/hour.
          <a href="/what-we-do/ongoing-support/" class="text-[var(--color-primary-light)] hover:text-[var(--color-accent)]">Learn about retainer packages</a>.
        </p>
      </div>
    </div>
  </div>

  <div class="container">
    <FAQ faqs={faqs} heading="Common Questions" />
  </div>

  <CTABanner
    headline="Every Engagement Starts with a Conversation"
    text="30 minutes, no obligation. Tell us what you're working on and we'll give you an honest assessment."
    buttonText="Book a Discovery Call"
    buttonHref="/contact/"
  />
</BaseLayout>
```

- [ ] **Step 2: Commit**

```bash
cd "C:/Users/sunny/repos/agenticai-associates" && git add src/pages/get-started/ && git commit -m "feat: add get-started page — single entry point pricing"
```

---

## Task 8: Rewrite homepage

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Replace the entire contents of `src/pages/index.astro`**

This is the big one — strips fake stats, fake testimonials, updates hero, adds results section, adds buyer journey, updates all CTAs.

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import HubCard from '@/components/HubCard.astro';
import CTABanner from '@/components/CTABanner.astro';
import { buildWebSiteSchema, buildOrganizationSchema } from '@/lib/schema';
import { getResults } from '@/lib/page-factory';

const results = getResults();

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does an AI consultant do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI consultant helps businesses identify where artificial intelligence can add value, designs a strategy to implement it, and builds the solution. At Agentic AI Associates, we cover the full lifecycle: from AI readiness assessment through to deployment, team training, and ongoing optimisation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does AI consultancy cost in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI consultancy in the UK ranges from £150 per hour for advisory sessions to £3,000+ for strategy engagements and custom pricing for implementation projects. We offer a free discovery call to scope your project and provide clear pricing upfront.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does an AI project take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI Readiness Assessment takes 2-4 weeks. Strategy engagements run 2-6 weeks. Implementation projects deliver first results within 6-8 weeks. Agentic AI systems with complex workflow automation may take longer depending on integration requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need technical expertise to work with you?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. We work with business owners, operations directors, and leadership teams who understand their business challenges but not necessarily AI technology. We handle the technical complexity and communicate in plain language.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is agentic AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agentic AI refers to AI systems that take sequences of actions autonomously to complete complex, multi-step tasks — rather than simply responding to single prompts. These systems use tools, browse data sources, make decisions, and check their work, enabling automation of workflows that previously required human judgment.',
      },
    },
  ],
};

const schemas = [buildWebSiteSchema(), buildOrganizationSchema(), faqSchema];

const services = [
  { title: 'AI Readiness Assessment', description: 'Fixed-fee assessment of your data, processes, and team. Walk away with a prioritised AI roadmap.', href: '/what-we-do/ai-readiness-assessment/', icon: 'strategy' },
  { title: 'Agentic AI Systems', description: 'Autonomous AI agents that handle complex workflows end to end. We design, build, and deploy them.', href: '/what-we-do/agentic-ai/', icon: 'agentic' },
  { title: 'AI Automation', description: 'Intelligent automation for document processing, onboarding, data entry, and workflow orchestration.', href: '/what-we-do/ai-automation/', icon: 'implementation' },
  { title: 'Generative AI & LLMs', description: 'RAG systems, content pipelines, and LLM integration. The right model for each use case.', href: '/what-we-do/generative-ai/', icon: 'sparkles' },
  { title: 'AI Governance', description: 'Compliance frameworks, bias audits, and risk management for UK regulatory requirements.', href: '/what-we-do/ai-governance/', icon: 'governance' },
  { title: 'AI Strategy & Roadmaps', description: 'From opportunity mapping to board-ready business cases. Strategy that leads to action.', href: '/what-we-do/ai-strategy/', icon: 'strategy' },
];

const industries = [
  { title: 'Healthcare', description: 'Clinical AI, NHS compliance, patient data automation.', href: '/industries/healthcare/', icon: 'healthcare' },
  { title: 'Legal', description: 'Document review, compliance monitoring, SRA-compliant systems.', href: '/industries/legal/', icon: 'legal' },
  { title: 'Finance', description: 'FCA compliance, fraud detection, automated reporting.', href: '/industries/finance/', icon: 'finance' },
  { title: 'Retail', description: 'Demand forecasting, personalisation, inventory optimisation.', href: '/industries/retail/', icon: 'retail' },
  { title: 'Manufacturing', description: 'Predictive maintenance, quality control, supply chain AI.', href: '/industries/manufacturing/', icon: 'manufacturing' },
  { title: 'Education', description: 'Adaptive learning, admin automation, Ofsted-compliant AI.', href: '/industries/education/', icon: 'education' },
];

const techStack = [
  'OpenAI', 'Anthropic', 'Google Cloud', 'Microsoft Azure', 'AWS', 'Hugging Face',
];
---

<BaseLayout
  title="AI Consultancy UK — Agentic AI Associates | Strategy, Implementation & Training"
  description="UK AI consultancy specialising in agentic AI systems, automation, and governance. We build AI that delivers measurable results from week one."
  schema={schemas}
>
  <!-- HERO -->
  <section class="relative overflow-hidden" style="background: #080f1e;">
    <div class="aurora-blob w-[min(600px,80vw)] h-[min(600px,80vw)] top-[-100px] left-[-100px]" style="background: #1e3a5f;"></div>

    <div class="container relative section" style="padding-top: 7rem; padding-bottom: 7rem;">
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-semibold tracking-wide mb-6">
        <span class="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
        UK-Based AI Consultancy
      </div>

      <h1 class="text-white max-w-4xl leading-[1.05] text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-display)] font-extrabold tracking-tight">
        AI systems that<br>
        <span style="background: linear-gradient(135deg, #2563eb, #0d9488); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">deliver from week one</span>
      </h1>

      <p class="text-xl text-slate-300 mt-6 max-w-2xl leading-relaxed">
        We build and deploy AI that generates measurable results — not strategy decks that sit in a drawer. Founded by practitioners, not career consultants.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 mt-10">
        <a href="/contact/" class="btn-glow text-base">
          Book a Discovery Call
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </a>
        <a href="/get-started/" class="btn" style="background: rgba(255,255,255,0.08); color: #e2e8f0; border: 1px solid rgba(255,255,255,0.15);">
          Start with an Assessment
        </a>
      </div>
    </div>
  </section>

  <!-- BUYER JOURNEY -->
  <section class="section" style="background: #f8fafc;">
    <div class="container">
      <div class="text-center mb-12">
        <p class="text-xs font-bold text-teal-600 mb-3 uppercase tracking-[0.2em]">How We Work</p>
        <h2 class="text-4xl font-extrabold">Three steps to working AI</h2>
      </div>
      <div class="relative max-w-4xl mx-auto">
        <div class="hidden lg:block absolute top-7 left-[16%] right-[16%] h-px" style="background: linear-gradient(to right, transparent, #2563eb, #0d9488, transparent);" aria-hidden="true"></div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {[
            { num: '1', title: 'Discovery Call', desc: 'Free 30-minute call. We listen, assess your situation, and tell you honestly whether AI can help.', tag: 'Free' },
            { num: '2', title: 'AI Readiness Assessment', desc: 'Fixed-fee audit of your data, processes, and team. You get a prioritised roadmap with clear ROI.', tag: 'Fixed fee' },
            { num: '3', title: 'Scoped Engagement', desc: 'Strategy, pilot, or full implementation — scoped based on your assessment findings. No surprises.', tag: 'Custom' },
          ].map(step => (
            <div class="relative text-center">
              <div class="w-14 h-14 rounded-full bg-white flex items-center justify-center mx-auto mb-4 relative z-10 shadow-sm" style="border: 2px solid rgba(13,148,136,0.3);">
                <span class="text-xl font-bold font-[family-name:var(--font-display)]" style="color: #0d9488;">{step.num}</span>
              </div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-teal-600 mb-1 block">{step.tag}</span>
              <h3 class="text-lg font-semibold mb-2">{step.title}</h3>
              <p class="text-sm text-[var(--color-text-muted)] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  <!-- WHAT WE DO -->
  <section class="section">
    <div class="container">
      <div class="text-center mb-14">
        <p class="text-xs font-bold text-teal-600 mb-3 uppercase tracking-[0.2em]">What We Do</p>
        <h2 class="text-4xl font-extrabold">AI services that ship</h2>
        <p class="text-slate-500 mt-4 max-w-xl mx-auto text-lg">From readiness assessment to full deployment — every engagement delivers something you can measure.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((svc) => (
          <HubCard title={svc.title} description={svc.description} href={svc.href} icon={svc.icon} />
        ))}
      </div>
      <div class="text-center mt-10">
        <a href="/what-we-do/" class="btn btn-outline">View All Services</a>
      </div>
    </div>
  </section>

  <!-- WHY US -->
  <section class="section" style="background: #f8fafc;">
    <div class="container">
      <div class="text-center mb-14">
        <p class="text-xs font-bold text-teal-600 mb-3 uppercase tracking-[0.2em]">Why Us</p>
        <h2 class="text-4xl font-extrabold">Built by practitioners, not career consultants</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', title: 'We ship working systems', body: "This website ranked on Google and generated an enterprise lead within 7 days. We build with the same speed and rigour for our clients." },
          { icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Transparent pricing', body: 'Fixed-fee assessments. Clear scoping. No hidden costs, no billable hour surprises. You know what you are paying before we start.' },
          { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', title: 'UK expertise, founder-led', body: 'You work directly with the founder. We understand UK regulation, GDPR, and the business landscape. No junior consultants, no handoffs.' },
        ].map(f => (
          <div class="card-animated-border p-8">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style="background: rgba(13,148,136,0.1);">
              <svg class="w-6 h-6" style="color: #0d9488;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={f.icon} />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">{f.title}</h3>
            <p class="text-slate-500 leading-relaxed">{f.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  <!-- RESULTS -->
  <section class="section">
    <div class="container">
      <div class="text-center mb-14">
        <p class="text-xs font-bold text-teal-600 mb-3 uppercase tracking-[0.2em]">Results</p>
        <h2 class="text-4xl font-extrabold">Proof, not promises</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {results.map(result => (
          <div class="card-animated-border p-8">
            <div class="text-3xl font-extrabold font-[family-name:var(--font-display)] text-gradient mb-1">{result.metric}</div>
            <p class="text-xs text-[var(--color-text-muted)] uppercase tracking-wider font-semibold mb-4">{result.metricLabel}</p>
            <h3 class="text-lg font-bold mb-2">{result.headline}</h3>
            <p class="text-sm text-[var(--color-text-muted)] leading-relaxed">{result.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  <!-- INDUSTRIES -->
  <section class="section" style="background: #f8fafc;">
    <div class="container">
      <div class="text-center mb-14">
        <p class="text-xs font-bold text-teal-600 mb-3 uppercase tracking-[0.2em]">Industries</p>
        <h2 class="text-4xl font-extrabold">AI for your sector</h2>
        <p class="text-slate-500 mt-4 max-w-xl mx-auto text-lg">Every industry has unique challenges and regulations. We bring domain-specific knowledge to every project.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((ind) => (
          <HubCard title={ind.title} description={ind.description} href={ind.href} icon={ind.icon} />
        ))}
      </div>
      <div class="text-center mt-10">
        <a href="/industries/" class="btn btn-outline">View All Industries</a>
      </div>
    </div>
  </section>

  <!-- TECH STACK -->
  <section class="py-16 border-y border-slate-100">
    <div class="container">
      <p class="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">Our Technology Stack</p>
      <div class="flex flex-wrap justify-center items-center gap-10">
        {techStack.map(name => (
          <span class="text-sm font-bold text-slate-400 tracking-wide trust-bar-logo">{name}</span>
        ))}
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="section bg-[var(--color-surface)]">
    <div class="container max-w-3xl mx-auto">
      <div class="text-center mb-12">
        <p class="text-xs font-bold text-teal-600 mb-3 uppercase tracking-[0.2em]">Common Questions</p>
        <h2 class="text-4xl font-extrabold">Frequently Asked Questions</h2>
      </div>
      <div class="space-y-4">
        {[
          { q: 'What does an AI consultant do?', a: 'An AI consultant helps businesses identify where artificial intelligence can add value, designs a strategy to implement it, and builds the solution. At Agentic AI Associates, we cover the full lifecycle: from AI readiness assessment through to deployment, team training, and ongoing optimisation.' },
          { q: 'How much does AI consultancy cost in the UK?', a: 'AI consultancy in the UK ranges from £150 per hour for advisory sessions to £3,000+ for strategy engagements and custom pricing for implementation projects. We offer a free discovery call to scope your project and provide clear pricing upfront.' },
          { q: 'How long does an AI project take?', a: 'An AI Readiness Assessment takes 2-4 weeks. Strategy engagements run 2-6 weeks. Implementation projects deliver first results within 6-8 weeks.' },
          { q: 'Do I need technical expertise to work with you?', a: 'No. We work with business owners, operations directors, and leadership teams who understand their business challenges but not necessarily AI technology. We handle the technical complexity and communicate in plain language.' },
          { q: 'What is agentic AI?', a: 'Agentic AI refers to AI systems that take sequences of actions autonomously to complete complex, multi-step tasks. These systems use tools, browse data sources, make decisions, and check their work — enabling automation of workflows that previously required human judgment.' },
        ].map(({q, a}) => (
          <details class="card-animated-border p-6 group">
            <summary class="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
              {q}
              <svg class="w-5 h-5 text-teal-500 flex-shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </summary>
            <p class="mt-4 text-slate-500 leading-relaxed">{a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>

  <!-- CTA -->
  <CTABanner
    headline="Ready to explore what AI can do for your business?"
    text="Book a free 30-minute discovery call. We'll discuss your challenges and give you an honest assessment — no sales pitch."
    buttonText="Book a Discovery Call"
    buttonHref="/contact/"
    secondaryText="Start with an Assessment"
    secondaryHref="/get-started/"
  />
</BaseLayout>
```

- [ ] **Step 2: Verify build compiles**

Run: `cd "C:/Users/sunny/repos/agenticai-associates" && npm run build 2>&1 | tail -20`
Expected: Build may fail due to remaining references to old imports — that's expected, we fix those in subsequent tasks.

- [ ] **Step 3: Commit**

```bash
cd "C:/Users/sunny/repos/agenticai-associates" && git add src/pages/index.astro && git commit -m "feat: rewrite homepage — authentic messaging, results section, buyer journey"
```

---

## Task 9: Rewrite About page

**Files:**
- Modify: `src/pages/about/index.astro`

- [ ] **Step 1: Replace the contents of `src/pages/about/index.astro`**

Strip fake stats from sidebar. Rewrite founder bio to be honest. Update "12+ sectors served" to remove inflated claims. Change "Industries: 12+ sectors served" to "Speciality: Agentic AI, Automation & Governance". Update CTA to "Book a Discovery Call". Update CTABanner to reference discovery call.

The full rewritten file should:
- Remove "12+ sectors served" from Quick Facts
- Update founder bio: replace "deep experience" with honest description
- Remove "Delivered AI projects across healthcare, legal, finance, retail" (unverified)
- Add "Results" link to sidebar
- Update all CTAs from "Get in Touch" / "Book a Free Consultation" to "Book a Discovery Call"
- Update CTABanner href from `/contact/` to reference discovery call

- [ ] **Step 2: Commit**

```bash
cd "C:/Users/sunny/repos/agenticai-associates" && git add src/pages/about/index.astro && git commit -m "feat: rewrite about page — honest founder bio, remove fake stats"
```

---

## Task 10: Update Footer component

**Files:**
- Modify: `src/components/Footer.astro`

- [ ] **Step 1: Update Footer.astro**

Changes needed:
1. Replace `footerNav.services` with `footerNav.whatWeDo` throughout
2. Change "Services" column header to "What We Do"
3. Change "Technology Partners" to "Technology Stack"
4. Update CTA from "Book a Free Call" to "Book a Discovery Call"

In the import, `footerNav` is already imported from site-config. The new site-config has `whatWeDo` instead of `services`.

Replace the Services column `footerNav.services` references with `footerNav.whatWeDo` and update the heading from "Services" to "What We Do".

Replace "Technology Partners" text with "Technology Stack".

Replace "Book a Free Call" with "Book a Discovery Call".

- [ ] **Step 2: Commit**

```bash
cd "C:/Users/sunny/repos/agenticai-associates" && git add src/components/Footer.astro && git commit -m "feat: update footer — what we do links, tech stack label, discovery call CTA"
```

---

## Task 11: Update HubCard icon map for new icons

**Files:**
- Modify: `src/components/HubCard.astro`

- [ ] **Step 1: Add missing icon mappings**

The what-we-do.json uses icons: `strategy`, `implementation`, `agentic`, `sparkles`, `chat`, `data`, `training`, `governance`, `support`, `applied`. Check what icons already exist in HubCard and add `governance`, `support`, and `applied` if missing.

`governance` SVG path: `M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z` (shield check)

`support` SVG path: `M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15` (refresh/cycle)

`applied` SVG path: `M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z` (desktop/monitor)

- [ ] **Step 2: Commit**

```bash
cd "C:/Users/sunny/repos/agenticai-associates" && git add src/components/HubCard.astro && git commit -m "feat: add governance, support, applied icons to HubCard"
```

---

## Task 12: Delete old services and solutions pages

**Files:**
- Delete: `src/pages/services/index.astro`
- Delete: `src/pages/services/[slug].astro`
- Delete: `src/pages/solutions/index.astro`
- Delete: `src/pages/solutions/[slug].astro`
- Delete: `src/pages/pricing/index.astro`
- Delete: `src/pages/case-studies/index.astro`

- [ ] **Step 1: Delete old pages**

```bash
cd "C:/Users/sunny/repos/agenticai-associates" && rm -rf src/pages/services src/pages/solutions src/pages/pricing src/pages/case-studies
```

- [ ] **Step 2: Commit**

```bash
cd "C:/Users/sunny/repos/agenticai-associates" && git add -A && git commit -m "chore: remove old services, solutions, pricing, case-studies pages"
```

---

## Task 13: Create About Results page

**Files:**
- Create: `src/pages/about/results.astro`

- [ ] **Step 1: Create `src/pages/about/results.astro`**

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import BreadcrumbNav from '@/components/BreadcrumbNav.astro';
import CTABanner from '@/components/CTABanner.astro';
import { getResults } from '@/lib/page-factory';

const results = getResults();
---

<BaseLayout
  title="Results — Agentic AI Associates"
  description="Real results from real engagements. See how we deliver measurable AI impact for UK businesses."
>
  <section class="bg-[var(--color-hero-bg)] text-[var(--color-hero-text)] section">
    <div class="container">
      <BreadcrumbNav items={[
        { label: 'About', href: '/about/' },
        { label: 'Results', href: '/about/results/' },
      ]} />
      <h1 class="text-white max-w-3xl">Results</h1>
      <p class="text-lg text-slate-300 mt-4 max-w-2xl leading-relaxed">Proof, not promises. This page grows with every engagement.</p>
    </div>
  </section>

  <div class="container section-sm">
    <div class="max-w-3xl mx-auto space-y-8">
      {results.map(result => (
        <div class="card-animated-border p-8">
          <div class="flex items-baseline gap-4 mb-4">
            <span class="text-3xl font-extrabold font-[family-name:var(--font-display)] text-gradient">{result.metric}</span>
            <span class="text-xs text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">{result.metricLabel}</span>
          </div>
          <h2 class="text-xl font-bold mb-3">{result.headline}</h2>
          <p class="text-[var(--color-text-muted)] leading-relaxed">{result.description}</p>
        </div>
      ))}

      <div class="text-center pt-8">
        <p class="text-[var(--color-text-muted)] text-sm mb-6">This page will grow as we deliver more results. Every engagement produces something measurable.</p>
        <a href="/contact/" class="btn btn-primary">Become the Next Result</a>
      </div>
    </div>
  </div>

  <CTABanner
    headline="Ready to see results for your business?"
    text="Book a free discovery call. We'll discuss your challenges and give you an honest assessment."
    buttonText="Book a Discovery Call"
    buttonHref="/contact/"
  />
</BaseLayout>
```

- [ ] **Step 2: Commit**

```bash
cd "C:/Users/sunny/repos/agenticai-associates" && git add src/pages/about/results.astro && git commit -m "feat: add results page — authentic proof points"
```

---

## Task 14: Create _redirects file for Cloudflare Pages

**Files:**
- Create: `public/_redirects`

- [ ] **Step 1: Create `public/_redirects`**

```
/services/ /what-we-do/ 301
/services/ai-strategy/ /what-we-do/ai-strategy/ 301
/services/ai-implementation/ /what-we-do/ai-automation/ 301
/services/agentic-ai/ /what-we-do/agentic-ai/ 301
/services/generative-ai/ /what-we-do/generative-ai/ 301
/services/conversational-ai/ /what-we-do/conversational-ai/ 301
/services/data-and-ai/ /what-we-do/data-ai/ 301
/services/applied-ai/ /what-we-do/applied-ai/ 301
/services/ai-training/ /what-we-do/ai-training/ 301
/services/ethical-ai/ /what-we-do/ai-governance/ 301
/solutions/ /what-we-do/ 301
/solutions/automation/ /what-we-do/ai-automation/ 301
/solutions/data-analysis/ /what-we-do/data-ai/ 301
/solutions/content-creation/ /what-we-do/ai-content-marketing/ 301
/solutions/customer-support/ /what-we-do/conversational-ai/ 301
/solutions/forecasting/ /what-we-do/applied-ai/ 301
/solutions/compliance-monitoring/ /what-we-do/ai-governance/ 301
/solutions/lead-generation/ /what-we-do/ai-automation/ 301
/solutions/report-generation/ /what-we-do/ai-automation/ 301
/solutions/inventory-management/ /what-we-do/applied-ai/ 301
/solutions/process-improvement/ /what-we-do/ai-automation/ 301
/pricing/ /get-started/ 301
/case-studies/ /about/results/ 301
```

- [ ] **Step 2: Commit**

```bash
cd "C:/Users/sunny/repos/agenticai-associates" && git add public/_redirects && git commit -m "feat: add 301 redirects for old URLs — services, solutions, pricing"
```

---

## Task 15: Update astro.config.mjs sitemap priorities

**Files:**
- Modify: `astro.config.mjs`

- [ ] **Step 1: Update the sitemap serialize function**

Replace the existing priority rules to match the new URL structure:

```javascript
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://agenticai.associates',
  output: 'static',
  trailingSlash: 'always',

  integrations: [
    sitemap({
      serialize(item) {
        item.lastmod = new Date().toISOString();
        const url = item.url;
        if (url === 'https://agenticai.associates/') item.priority = 1.0;
        else if (/\/what-we-do\/$/.test(url)) item.priority = 0.9;
        else if (/\/what-we-do\/ai-readiness-assessment\/$/.test(url)) item.priority = 0.9;
        else if (/\/what-we-do\/[^/]+\/$/.test(url)) item.priority = 0.8;
        else if (/\/industries\/$/.test(url)) item.priority = 0.8;
        else if (/\/industries\/[^/]+\/$/.test(url)) item.priority = 0.8;
        else if (/\/get-started\/$/.test(url)) item.priority = 0.8;
        else if (/\/(about|learn)\/$/.test(url)) item.priority = 0.7;
        else if (/\/learn\/[^/]+\/$/.test(url)) item.priority = 0.7;
        else if (/\/locations\/[^/]+\/$/.test(url)) item.priority = 0.7;
        else if (/\/for\/[^/]+\/$/.test(url)) item.priority = 0.5;
        else item.priority = 0.5;
        return item;
      },
    }),
    preact(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
```

- [ ] **Step 2: Commit**

```bash
cd "C:/Users/sunny/repos/agenticai-associates" && git add astro.config.mjs && git commit -m "feat: update sitemap priorities for new URL structure"
```

---

## Task 16: Update industries.json internal links

**Files:**
- Modify: `src/data/industries.json`

- [ ] **Step 1: Find and replace all `/services/` and `/solutions/` links in industries.json**

Run: `cd "C:/Users/sunny/repos/agenticai-associates" && grep -c '/services/\|/solutions/' src/data/industries.json`

Then perform the following replacements throughout the file:
- `/services/ai-strategy/` → `/what-we-do/ai-strategy/`
- `/services/ai-implementation/` → `/what-we-do/ai-automation/`
- `/services/agentic-ai/` → `/what-we-do/agentic-ai/`
- `/services/generative-ai/` → `/what-we-do/generative-ai/`
- `/services/conversational-ai/` → `/what-we-do/conversational-ai/`
- `/services/data-and-ai/` → `/what-we-do/data-ai/`
- `/services/applied-ai/` → `/what-we-do/applied-ai/`
- `/services/ai-training/` → `/what-we-do/ai-training/`
- `/services/ethical-ai/` → `/what-we-do/ai-governance/`
- `/solutions/automation/` → `/what-we-do/ai-automation/`
- `/solutions/data-analysis/` → `/what-we-do/data-ai/`
- `/solutions/content-creation/` → `/what-we-do/ai-content-marketing/`
- `/solutions/customer-support/` → `/what-we-do/conversational-ai/`
- `/solutions/forecasting/` → `/what-we-do/applied-ai/`
- `/solutions/compliance-monitoring/` → `/what-we-do/ai-governance/`
- `/solutions/lead-generation/` → `/what-we-do/ai-automation/`
- `/solutions/report-generation/` → `/what-we-do/ai-automation/`
- `/solutions/inventory-management/` → `/what-we-do/applied-ai/`
- `/solutions/process-improvement/` → `/what-we-do/ai-automation/`

Also update the `relatedServices` arrays (which reference service slugs) and any `relatedSolutions` arrays. These now point to what-we-do slugs.

- [ ] **Step 2: Verify JSON is valid**

Run: `cd "C:/Users/sunny/repos/agenticai-associates" && node -e "JSON.parse(require('fs').readFileSync('src/data/industries.json','utf8')); console.log('Valid')"`

- [ ] **Step 3: Commit**

```bash
cd "C:/Users/sunny/repos/agenticai-associates" && git add src/data/industries.json && git commit -m "fix: update industry page links from services/solutions to what-we-do"
```

---

## Task 17: Update IndustryLayout.astro imports

**Files:**
- Modify: `src/layouts/IndustryLayout.astro`

- [ ] **Step 1: Update IndustryLayout imports**

Replace imports of `getRelatedServices` and `getRelatedSolutions` with `getRelatedWhatWeDo`. Update all sidebar links from `/services/` and `/solutions/` to `/what-we-do/`. Update the RelatedLinks sections to use a single "Related Services" block using `getRelatedWhatWeDo`.

- [ ] **Step 2: Commit**

```bash
cd "C:/Users/sunny/repos/agenticai-associates" && git add src/layouts/IndustryLayout.astro && git commit -m "fix: update IndustryLayout imports for what-we-do"
```

---

## Task 18: Update LocationLayout.astro imports

**Files:**
- Modify: `src/layouts/LocationLayout.astro`

- [ ] **Step 1: Update LocationLayout imports**

Same pattern as IndustryLayout — replace `getRelatedServices` with `getRelatedWhatWeDo`, update sidebar links from `/services/` to `/what-we-do/`.

- [ ] **Step 2: Commit**

```bash
cd "C:/Users/sunny/repos/agenticai-associates" && git add src/layouts/LocationLayout.astro && git commit -m "fix: update LocationLayout imports for what-we-do"
```

---

## Task 19: Update LearnLayout.astro imports

**Files:**
- Modify: `src/layouts/LearnLayout.astro`

- [ ] **Step 1: Update LearnLayout imports**

Replace `getRelatedServices` with `getRelatedWhatWeDo`, update sidebar links.

- [ ] **Step 2: Commit**

```bash
cd "C:/Users/sunny/repos/agenticai-associates" && git add src/layouts/LearnLayout.astro && git commit -m "fix: update LearnLayout imports for what-we-do"
```

---

## Task 20: Update for/[slug].astro page

**Files:**
- Modify: `src/pages/for/[slug].astro`

- [ ] **Step 1: Update business size pages**

Update any imports of service/solution related functions to use what-we-do equivalents. Update any links from `/services/` to `/what-we-do/` and `/solutions/` to `/what-we-do/`.

- [ ] **Step 2: Commit**

```bash
cd "C:/Users/sunny/repos/agenticai-associates" && git add src/pages/for/ && git commit -m "fix: update business size pages for what-we-do links"
```

---

## Task 21: Update locations.json and learn.json internal links

**Files:**
- Modify: `src/data/locations.json`
- Modify: `src/data/learn.json`
- Modify: `src/data/business-sizes.json`

- [ ] **Step 1: Find and replace all `/services/` and `/solutions/` links**

Same replacement pattern as Task 16 applied to locations.json, learn.json, and business-sizes.json.

- [ ] **Step 2: Verify all JSON files are valid**

```bash
cd "C:/Users/sunny/repos/agenticai-associates" && node -e "['locations','learn','business-sizes'].forEach(f => { JSON.parse(require('fs').readFileSync('src/data/'+f+'.json','utf8')); console.log(f+': valid') })"
```

- [ ] **Step 3: Commit**

```bash
cd "C:/Users/sunny/repos/agenticai-associates" && git add src/data/locations.json src/data/learn.json src/data/business-sizes.json && git commit -m "fix: update all data files — replace services/solutions links with what-we-do"
```

---

## Task 22: Visual design fixes

**Files:**
- Modify: `src/styles/global.css`

- [ ] **Step 1: Standardise gradient blue and increase focus ring**

In `global.css`:
1. The `.noise-overlay::after` rule — leave it (it's only used if someone adds the class, homepage no longer uses it)
2. Increase focus ring: Add to the end of global.css:

```css
/* Accessible focus ring */
:focus-visible {
  outline: 3px solid #0d9488;
  outline-offset: 2px;
}
```

3. Standardise button font-size from `0.9375rem` to `0.875rem` in the `.btn` rule.

- [ ] **Step 2: Commit**

```bash
cd "C:/Users/sunny/repos/agenticai-associates" && git add src/styles/global.css && git commit -m "fix: 3px focus ring, standardise button font-size"
```

---

## Task 23: Build, test, and fix any remaining issues

**Files:**
- Various (fix whatever breaks)

- [ ] **Step 1: Run the build**

```bash
cd "C:/Users/sunny/repos/agenticai-associates" && npm run build 2>&1
```

- [ ] **Step 2: Fix any import errors**

Common issues to expect:
- Old `services.json` or `solutions.json` still imported somewhere — grep for them
- `getRelatedServices`, `getRelatedSolutions`, `getSolutionPaths`, `getServicePaths` still referenced — grep and fix
- `ServiceLayout` or `SolutionLayout` still referenced — grep and fix

Run: `grep -r "services\.json\|solutions\.json\|getServicePaths\|getSolutionPaths\|getRelatedServices\|getRelatedSolutions\|ServiceLayout\|SolutionLayout" src/`

Fix any remaining references.

- [ ] **Step 3: Re-run build until clean**

```bash
cd "C:/Users/sunny/repos/agenticai-associates" && npm run build 2>&1
```

Expected: Build succeeds with no errors.

- [ ] **Step 4: Commit all fixes**

```bash
cd "C:/Users/sunny/repos/agenticai-associates" && git add -A && git commit -m "fix: resolve all build errors from restructure"
```

---

## Task 24: Push and deploy

- [ ] **Step 1: Push to GitHub**

```bash
cd "C:/Users/sunny/repos/agenticai-associates" && git push origin master
```

This triggers the GitHub Actions workflow which deploys to Cloudflare Pages.

- [ ] **Step 2: Verify deployment**

Check that the site builds and deploys successfully via GitHub Actions.

- [ ] **Step 3: Test key pages**

Verify these URLs work:
- `https://agenticai.associates/` (homepage)
- `https://agenticai.associates/what-we-do/` (hub)
- `https://agenticai.associates/what-we-do/ai-readiness-assessment/` (money page)
- `https://agenticai.associates/get-started/` (pricing entry)
- `https://agenticai.associates/about/` (about)
- `https://agenticai.associates/about/results/` (results)

Verify redirects work:
- `https://agenticai.associates/services/` → redirects to `/what-we-do/`
- `https://agenticai.associates/pricing/` → redirects to `/get-started/`
- `https://agenticai.associates/case-studies/` → redirects to `/about/results/`
