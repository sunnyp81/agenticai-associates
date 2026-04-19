// Batch 2: commerce/operations sectors — retail, ecommerce, supply-chain, manufacturing
import fs from 'node:fs';
const FILE = new URL('../src/data/industries.json', import.meta.url);
const data = JSON.parse(fs.readFileSync(FILE, 'utf8'));

const patches = {
  retail: {
    intro: `<p>UK retail is fiercely competitive. Thin margins, shifting consumer habits, and the constant battle between high street and online mean every advantage matters. AI gives retailers the edge to predict demand accurately, personalise the customer experience, and operate efficiently across every channel.</p>
<p>The retailers we work with — from regional grocers to premium fashion brands — typically see margin recovery of 1-3 percentage points within two trading cycles after deploying intelligent pricing, replenishment, and personalisation. The biggest single lever is usually demand forecasting at SKU-store-day level, which simultaneously cuts waste and lifts on-shelf availability.</p>
<p>Every engagement starts with an <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> mapping your EPOS, ERP, and customer data sources. We integrate with the major retail platforms — Shopify Plus, Salesforce Commerce Cloud, SAP Retail, Microsoft Dynamics 365 Commerce — and respect PCI DSS and UK GDPR end-to-end. Pilots ship in 8-12 weeks and most clients prove the business case within a single trading season.</p>`,
    sections: {
      personalisation: `<p>Generic mass marketing is dead. Today's shoppers expect experiences tailored to their preferences, history, and context. We build AI personalisation engines that work across email, web, app, and in-store. Product recommendations adapt to browsing patterns. Pricing flexes by customer segment within your brand and regulatory guardrails. Marketing messages reflect real-time behaviour rather than week-old segmentation. The leading UK fashion retailer we worked with lifted email revenue by 34% within three months of deploying our personalisation stack. Our <a href="/what-we-do/data-ai/">data AI</a> capability anchors every recommendation in your first-party data, and the engine connects cleanly to <a href="/what-we-do/conversational-ai/">conversational AI</a> for in-app shopping assistants and clienteling.</p>`,
      automation: `<p>Customer service costs escalate fast — especially during peak trading periods like Black Friday and Christmas. We deploy <a href="/what-we-do/conversational-ai/">conversational AI</a>-powered support that handles the high-volume, repetitive queries — order tracking, returns processing, product availability, and store information. Human agents focus on complex issues that need empathy and judgement. Most retailers see 40-50% of inbound queries resolved without human intervention, dramatically reducing cost per contact. Beyond support, we automate replenishment with intelligent reorder points, dynamic pricing within rules-based guardrails, and markdown sequencing tied to sell-through forecasts. Our <a href="/what-we-do/ai-automation/">AI automation</a> work integrates with the major EPOS, OMS, and merchandising systems used across UK retail.</p>`,
      forecasting: `<p>Accurate forecasting underpins everything in retail — buying decisions, replenishment, staffing rotas, markdown timing. Our AI models go far beyond simple trend extrapolation. They factor in promotional calendars, competitor activity, local demographics, weather, and external signals to produce forecasts at SKU-store-day level. Better forecasts mean better buying, less waste, optimised markdown timing, and tighter staffing. The models improve continuously as they learn from actual sales data. The same <a href="/what-we-do/applied-ai/">applied AI</a> approach drives forecasting wins for <a href="/industries/supply-chain/">supply chain</a> teams predicting upstream demand and for <a href="/industries/ecommerce/">ecommerce</a> brands planning inventory at warehouse level.</p>`,
      'lead-generation': `<p>Retailers with trade, B2B, or wholesale channels gain measurable acquisition lift from AI lead generation. Our systems analyse buying signals, company data, and engagement patterns to surface accounts most likely to convert. Automated outreach sequences nurture leads with personalised content until they are ready for your sales team. The approach is particularly effective for home improvement, office supplies, and food service retailers with trade counters. Loyalty integration extends the same intelligence to consumer customers — predict churn risk before it converts, identify high-value cohorts for retention investment, and surface the offers most likely to drive incremental spend. <a href="/industries/ecommerce/">Ecommerce brands</a> use the same AI lead and retention systems to convert browsers into loyal repeat customers.</p>`,
    },
    extraSections: [
      {
        solution: 'use-cases',
        heading: 'Highest-ROI AI Use Cases for UK Retail',
        body: `<p>Five use case clusters consistently deliver the strongest results for UK retailers — physical, online, and omnichannel.</p>
<ul>
  <li><strong>Demand forecasting and replenishment:</strong> SKU-store-day forecasts, intelligent reorder points, transfer optimisation, markdown sequencing.</li>
  <li><strong>Pricing and promotion:</strong> dynamic pricing within guardrails, promotional uplift modelling, competitor monitoring, basket-level discount optimisation.</li>
  <li><strong>Personalisation and clienteling:</strong> recommendation engines, segment-of-one email, in-store clienteling apps, AI-assisted product discovery.</li>
  <li><strong>Operations:</strong> staff rota optimisation by predicted footfall, store-level shrinkage analytics, vendor performance monitoring, returns triage.</li>
  <li><strong>Customer service:</strong> conversational support for tier-1 enquiries, AI-routed escalations, voice-of-customer analytics from reviews and contacts.</li>
</ul>
<p>Most retailers get the strongest first win from forecasting or personalisation — both produce measurable margin or revenue lift within a single trading cycle. Our <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> ranks these against your channel mix, data maturity, and competitive position.</p>`,
        linkSlug: '/what-we-do/ai-readiness-assessment/',
      },
    ],
  },

  ecommerce: {
    intro: `<p>Ecommerce moves fast. Customer expectations rise every year, acquisition costs keep climbing, and competition is a click away. AI gives online retailers the speed, personalisation, and operational efficiency needed to win — turning data exhaust into measurable margin.</p>
<p>UK ecommerce brands we work with typically lift conversion rates 15-30% within the first trading quarter through better personalisation, abandoned-basket recovery, and on-site search relevance. Customer acquisition cost drops 20-40% as predictive bidding shifts spend toward the audiences most likely to convert profitably. Both wins compound over time as models learn from each transaction.</p>
<p>Every engagement starts with an <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> mapping your storefront platform, CDP, ad stack, and fulfilment integrations. We work natively with Shopify Plus, BigCommerce, WooCommerce, Salesforce Commerce Cloud, Klaviyo, and the major ad platforms. Most pilots ship in 6-10 weeks and prove ROI within a single peak trading period.</p>`,
    sections: {
      personalisation: `<p>Generic homepages and one-size-fits-all email campaigns leak revenue every day. We build AI personalisation that works across the full funnel — homepage hero rotation, product listing reordering, search relevance ranking, recommended-for-you carousels, and post-purchase upsell sequences. Cross-sell and bundle suggestions adapt to real-time basket composition. Email and SMS triggers fire on behavioural signals, not arbitrary time delays. The <a href="/what-we-do/data-ai/">data AI</a> capability anchors every recommendation in your first-party data — no third-party cookie reliance. The same personalisation patterns drive results for <a href="/industries/retail/">omnichannel retailers</a> blending store and online experiences.</p>`,
      automation: `<p>Ecommerce operations are full of manual work AI handles cleanly. Order processing, fraud screening, returns triage, customer service tier-1 — all automatable with measurable ROI. We build <a href="/what-we-do/conversational-ai/">conversational AI</a> that resolves 50-70% of pre-sales and post-sales enquiries without human handoff. Returns automation routes refund-vs-replace decisions automatically against your policy. Inventory sync across marketplaces (Amazon, eBay, TikTok Shop, your own DTC site) runs continuously rather than overnight. Our <a href="/what-we-do/agentic-ai/">agentic AI</a> systems handle multi-step workflows like fraud investigation → chargeback response → write-off recommendation end-to-end.</p>`,
      'data-analysis': `<p>Ecommerce generates more first-party data per visitor than any other channel — but most brands never use 90% of it. We build analytics pipelines that surface lifetime value by acquisition cohort, identify the products most likely to drive repeat purchase, quantify the true contribution margin per channel after returns and discount, and segment customers by predicted future value rather than historical spend. Our <a href="/what-we-do/data-ai/">data AI</a> capability runs entirely in your environment, integrates with GA4, Meta Pixel, Klaviyo, and your warehouse, and provides explainable recommendations the marketing team can act on without a data science PhD.</p>`,
      'lead-generation': `<p>Acquisition gets harder every quarter as platforms restrict targeting and creative fatigue accelerates. AI helps in three concrete ways. First, predictive bidding shifts spend toward audiences most likely to convert profitably — not just convert. Second, creative testing at scale identifies winning hooks 3-5x faster than human iteration. Third, lookalike modelling on your highest-LTV customers (not all converters) finds new buyers who actually stick. We integrate with Meta Ads Manager, Google Ads, TikTok Ads Manager, and Klaviyo. Similar acquisition optimisation patterns drive results for <a href="/industries/marketing/">marketing-led businesses</a> and <a href="/industries/retail/">omnichannel retailers</a>.</p>`,
    },
    extraSections: [
      {
        solution: 'use-cases',
        heading: 'Top AI Use Cases for UK Ecommerce Brands',
        body: `<p>Five clusters consistently deliver the fastest ROI for DTC and marketplace-led ecommerce.</p>
<ul>
  <li><strong>On-site experience:</strong> personalised PLPs, AI-powered search and discovery, recommendation engines, exit-intent retention triggers.</li>
  <li><strong>Lifecycle marketing:</strong> behavioural email and SMS triggers, post-purchase upsell, churn prediction with retention offers, win-back campaigns.</li>
  <li><strong>Acquisition and ads:</strong> predictive bidding, creative testing, audience modelling on LTV, attribution modelling beyond last-click.</li>
  <li><strong>Customer service:</strong> conversational tier-1 support, returns automation, fraud screening, voice-of-customer analytics from reviews.</li>
  <li><strong>Operations:</strong> demand forecasting at warehouse and SKU level, inventory rebalancing across marketplaces, supplier performance scoring.</li>
</ul>
<p>The strongest first wins are usually on-site personalisation or lifecycle marketing — both lift revenue measurably within weeks. Our <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> ranks these against your storefront platform, data maturity, and growth stage.</p>`,
        linkSlug: '/what-we-do/ai-readiness-assessment/',
      },
    ],
  },

  'supply-chain': {
    intro: `<p>Supply chains have never been more complex or more fragile. Brexit customs requirements, global shipping volatility, and rising costs demand smarter operations. AI brings the visibility, prediction, and automation modern supply chains need — turning reactive firefighting into proactive management.</p>
<p>UK distributors and manufacturers we work with typically lift forecast accuracy from 60-65% to 80-90% at SKU level within two quarters, cut emergency freight spend by 30-50%, and reduce safety stock by 15-25% without service-level deterioration. The combined working-capital release usually pays for the engagement within a single inventory cycle.</p>
<p>Every engagement starts with an <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> mapping your ERP, WMS, TMS, and customs broker integrations. We work natively with SAP, Oracle, Microsoft Dynamics, Sage, NetSuite, Manhattan, and the major TMS platforms (Blue Yonder, Descartes, Mercury Gate). Pilots ship in 10-14 weeks and most clients prove the business case within a single inventory cycle.</p>`,
    sections: {
      forecasting: `<p>Demand sensing models go beyond historical averages. They incorporate real-time signals — point-of-sale data, weather, social media trends, economic indicators, container shipping rates, and even geopolitical risk feeds — to predict demand shifts before they propagate upstream. One UK FMCG distributor we worked with improved forecast accuracy from 62% to 87% at SKU level, cutting safety stock by 19% in the same quarter. Better forecasts mean less safety stock, fewer emergency shipments, and tighter customer service levels. The models run continuously and improve with every cycle. <a href="/industries/manufacturing/">Manufacturers</a> use the same forecasting approach to optimise production scheduling and raw material purchasing, and <a href="/industries/retail/">retailers</a> apply it downstream at SKU-store-day level.</p>`,
      automation: `<p>We automate the processes that slow your supply chain down. Purchase order generation triggered by intelligent reorder points. Customs documentation that self-populates from commercial invoices using HS code AI classification. Carrier selection based on real-time rate comparison and on-time delivery performance. Invoice matching that catches discrepancies before payment. Three-way match between PO, GRN, and invoice runs continuously rather than at month-end. These automations remove bottlenecks, reduce errors, and free your team to focus on supplier relationships and strategic sourcing. Our <a href="/what-we-do/ai-automation/">AI implementation</a> methodology integrates cleanly with your existing ERP and WMS, and our <a href="/what-we-do/agentic-ai/">agentic AI</a> systems handle multi-step procurement workflows end-to-end.</p>`,
      'data-analysis': `<p>Supply chain data sits across ERP, WMS, TMS, customs broker portals, EDI feeds, and supplier scorecards — and most teams never get it into one place. We build analytics platforms that turn this data into decisions. Identify your best and worst performing suppliers objectively against on-time, in-full, and quality metrics. Spot cost leakage across your logistics network at lane and carrier level. Benchmark warehouse productivity across sites with normalised metrics. The <a href="/what-we-do/data-ai/">data AI</a> dashboards give supply chain leaders the visibility they have always wanted but never had — and they integrate with the same datasets we use for <a href="/industries/finance/">treasury and working capital</a> analytics.</p>`,
      'process-improvement': `<p>AI excels at finding inefficiencies humans overlook. We analyse your end-to-end supply chain processes to identify bottlenecks, redundant steps, and optimisation opportunities. Route planning reduces mileage and tightens delivery windows. Warehouse slotting minimises pick travel time. Production scheduling balances capacity across lines while respecting changeover constraints. These improvements compound — a 5% efficiency gain at each stage can mean 20% or more across the full chain. <a href="/industries/retail/">Retail businesses</a> downstream see the benefits reflected directly in margin, and <a href="/industries/manufacturing/">manufacturers</a> upstream see them in OEE and on-time-in-full performance.</p>`,
    },
    extraSections: [
      {
        solution: 'use-cases',
        heading: 'High-ROI AI Use Cases Across UK Supply Chains',
        body: `<p>Five use case clusters consistently deliver the fastest payback for UK supply chain operations.</p>
<ul>
  <li><strong>Demand sensing and forecasting:</strong> SKU-level forecasts with real-time signal integration, bullwhip dampening, new-product introduction modelling, end-of-life ramp-down.</li>
  <li><strong>Inventory optimisation:</strong> safety stock recalibration, multi-echelon optimisation, ABC-XYZ segmentation refresh, slow-mover identification.</li>
  <li><strong>Logistics and transport:</strong> carrier selection, dynamic routing, load optimisation, on-time delivery prediction, customs documentation automation.</li>
  <li><strong>Supplier and procurement:</strong> supplier risk scoring, spot-buy vs contract analysis, three-way match automation, contract clause extraction.</li>
  <li><strong>Disruption response:</strong> early-warning monitoring of geopolitical, weather, and supplier financial signals, scenario simulation, alternate sourcing identification.</li>
</ul>
<p>Most operations get the strongest first win from demand sensing or inventory optimisation — both release working capital and lift service levels measurably within one cycle. Our <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> ranks these against your data maturity, ERP environment, and supply chain complexity.</p>`,
        linkSlug: '/what-we-do/ai-readiness-assessment/',
      },
    ],
  },

  manufacturing: {
    intro: `<p>UK manufacturing faces a triple squeeze — rising energy costs, persistent skills shortages, and intensifying global competition. AI addresses all three. Predictive maintenance prevents unplanned downtime that wrecks margins. Quality automation catches defects before they ship. Production scheduling squeezes more throughput from existing capacity without adding heads.</p>
<p>The UK manufacturers we work with — from precision engineering SMEs to FTSE 100 industrials — typically lift OEE by 4-8 percentage points within two quarters and cut quality escape rate by 30-60% in the same window. Predictive maintenance pilots usually pay for themselves on the first prevented major breakdown.</p>
<p>Every engagement starts with an <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> mapping your shop-floor data, MES, ERP, and quality systems. We work with SAP, Oracle, Infor, Microsoft Dynamics 365 for Manufacturing, and the major MES platforms (Wonderware, Aveva, Rockwell). Most pilots ship in 10-14 weeks and prove ROI within a single quarter — usually on a single line, single asset, or single quality stream before scaling site-wide.</p>`,
    sections: {
      forecasting: `<p>Forecasting in manufacturing covers demand, capacity, maintenance, and energy. Our predictive maintenance models train on vibration, temperature, current draw, and acoustic data from your existing PLCs and sensors — no rip-and-replace required. Predict asset failures 7-21 days in advance with enough lead time to schedule maintenance during planned downtime. Production scheduling models balance demand forecasts against line capacity, changeover times, and labour constraints. Energy demand forecasting helps you optimise tariff strategy and avoid peak charges. Our <a href="/what-we-do/applied-ai/">applied AI</a> patterns mirror those used by <a href="/industries/supply-chain/">supply chain</a> teams forecasting upstream demand and by <a href="/industries/finance/">finance teams</a> modelling cash flow.</p>`,
      'process-improvement': `<p>AI computer vision transforms quality inspection. Where human inspectors miss subtle defects through fatigue, vision systems catch them every time at line speed. We deploy vision-based quality control for surface defects, dimensional accuracy, label and barcode verification, and assembly completeness. Process mining analytics identify the steps in your production process where time, scrap, or rework leaks. SPC analytics surface drift before it becomes scrap. The biggest UK precision engineering client we work with cut first-pass yield losses by 41% within one quarter. The same <a href="/what-we-do/ai-automation/">AI automation</a> patterns drive efficiency gains for <a href="/industries/supply-chain/">supply chain</a> warehouse operations.</p>`,
      automation: `<p>Manufacturing automation in 2025 is less about robots and more about intelligent orchestration of the systems you already have. We build agents that automate production scheduling decisions across multiple lines, raw material reorder triggers tied to live demand and inventory positions, quality non-conformance triage and root-cause clustering, and shift-handover briefing automation from MES data. Our <a href="/what-we-do/agentic-ai/">agentic AI</a> systems integrate with the major ERP and MES platforms used in UK manufacturing — SAP, Oracle, Microsoft Dynamics, Aveva, Wonderware, Rockwell — and respect Industry 4.0 standards including OPC UA and MQTT for shop-floor data exchange.</p>`,
      'data-analysis': `<p>Manufacturing data sits across MES, ERP, quality systems, energy meters, and shop-floor sensors. Most teams analyse less than 20% of it because the integration cost has been prohibitive. We build analytics platforms that unify this data without expensive data warehouse projects. Surface OEE losses by line, shift, product, and root cause. Quantify cost-to-produce per SKU including yield, energy, and labour at line level. Benchmark plant productivity across sites with normalised metrics. The <a href="/what-we-do/data-ai/">data AI</a> dashboards run on edge or cloud depending on your security posture, and they give operations leaders the visibility they have always wanted but never had. Similar analytical depth powers our work with <a href="/industries/government/">public sector</a> teams optimising service delivery operations.</p>`,
    },
    extraSections: [
      {
        solution: 'use-cases',
        heading: 'Highest-ROI AI Use Cases for UK Manufacturers',
        body: `<p>Five use case clusters consistently deliver the strongest results for UK manufacturers — process, discrete, and hybrid.</p>
<ul>
  <li><strong>Predictive maintenance:</strong> vibration and current-draw monitoring, failure mode classification, remaining-useful-life prediction, maintenance scheduling optimisation.</li>
  <li><strong>Quality and vision:</strong> defect detection at line speed, dimensional accuracy verification, assembly completeness checks, root-cause clustering on rejects.</li>
  <li><strong>Production scheduling and OEE:</strong> finite capacity scheduling, changeover sequencing, shift-handover briefing automation, OEE root-cause analytics.</li>
  <li><strong>Supply and procurement:</strong> raw material demand forecasting, supplier on-time-in-full scoring, spot vs contract analysis, three-way invoice matching.</li>
  <li><strong>Energy and sustainability:</strong> energy demand forecasting, tariff optimisation, carbon footprint per SKU, scope 3 emissions tracking from supplier data.</li>
</ul>
<p>Most operations get the strongest first win from predictive maintenance or quality vision — both deliver measurable ROI within one quarter. Our <a href="/what-we-do/ai-readiness-assessment/">AI Readiness Assessment</a> ranks these against your asset criticality, data maturity, and quality cost baseline.</p>`,
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
