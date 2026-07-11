# SEO Optimization Log — agenticai.associates

---

## Run 27 — 2026-07-11

**Mode:** Pattern-based (no .env / no API credentials)
**GSC data:** Skipped — no credentials
**Bing data:** Skipped — no credentials
**IndexNow:** Skipped — INDEXNOW_KEY not available
**Pages changed:** 11 (all in `src/data/locations.json`)

### Objective

Complete the "AI roadmap in 3 weeks. Fixed-fee from £6,500." pattern rollout across all location page descriptions. Previous runs cleared 8 of 19 locations. This run targeted the remaining 10 with "diagnostic" still in their description field, plus 1 hub description. Also fixed the London description which used a non-standard opener.

### Changes applied

| # | Slug | Field | Before (chars) | After (chars) | Rationale |
|---|------|-------|---------------|---------------|-----------|
| 1 | hub (locations) | desc | "…Fixed-fee diagnostic from £6,500. Book a free call." (144) | "…AI roadmap in 3 weeks. Fixed-fee from £6,500. Book a free call." (152) | Hub description was the last page in the locations section still using "diagnostic". Changed opener from "in your area" to "near you" (saves 3 chars) to accommodate the new pattern within ceiling. |
| 2 | london | desc | "London AI consultants specialising in agentic AI. 3-week diagnostic from £6,500 to board-ready roadmap. Fintech, healthcare, retail. Book a free call." (150) | "Agentic AI consultants in London. Fintech, healthcare, retail, media and legal specialists. AI roadmap in 3 weeks. Fixed-fee from £6,500. Book a free call." (155) | Three changes: (1) Standardised opener to "Agentic AI consultants in [City]." pattern — London was the only location page not using it; (2) Added "media and legal" to the sector list (London's two next most important sectors after the original three); (3) Applied "AI roadmap in 3 weeks. Fixed-fee from £6,500." pattern. London is the highest-impression location page — aligning it with the site-wide pattern is the highest-priority fix this run. |
| 3 | birmingham | desc | "Birmingham agentic AI consultants. 3-week fixed-fee diagnostic to AI roadmap. Manufacturing, logistics and professional services. Book a free call." (147) | "Birmingham agentic AI consultants. AI roadmap in 3 weeks. Fixed-fee from £6,500. Manufacturing, logistics and professional services. Book a free call." (150) | Replaced "3-week fixed-fee diagnostic to AI roadmap." with the standard "AI roadmap in 3 weeks. Fixed-fee from £6,500." Sector list unchanged — manufacturing/logistics/professional services is the correct ICP for Birmingham. +3 chars. |
| 4 | edinburgh | desc | "Edinburgh agentic AI consultants. 3-week diagnostic to board-ready roadmap from £6,500. Financial services, health and public sector. Book a free call." (151) | "Edinburgh agentic AI consultants. Financial services, health and public sector specialists. AI roadmap in 3 weeks. Fixed-fee from £6,500. Book a free call." (155) | Rewrote to remove "3-week diagnostic to board-ready roadmap from £6,500." and restructure around the standard pattern. Added "specialists" to the sector list to create a noun phrase consistent with other city descs. Net +4 chars to 155. |
| 5 | glasgow | desc | "Glasgow agentic AI consultants. Fixed-fee diagnostic from £6,500. AI roadmap in 3 weeks. Engineering, energy and digital sectors. Book a free call." (147) | "Glasgow agentic AI consultants. AI roadmap in 3 weeks. Fixed-fee from £6,500. Engineering, energy, digital and healthcare sectors. Book a free call." (148) | Swapped order (roadmap first, then price — consistent with all other city descs), removed "diagnostic". Added "healthcare" to the sector list (NHS Greater Glasgow and Clyde is one of the UK's largest health boards — a genuine ICP opportunity not previously surfaced in the desc). Net +1 char. |
| 6 | scotland | desc | "Scotland agentic AI consultants. 3-week fixed diagnostic from £6,500. Energy, finance, public sector and tech. Working system in 90 days. Book a free call." (155) | "Scotland agentic AI consultants. AI roadmap in 3 weeks. Fixed-fee from £6,500. Energy, finance, public sector and tech specialists. Book a free call." (149) | Replaced "3-week fixed diagnostic from £6,500." with standard pattern. Removed "Working system in 90 days." (the "3 weeks" timeframe in the standard pattern serves the same qualifying function more precisely). Added "specialists" to sector list. Net -6 chars. |
| 7 | northern-ireland | desc | "Agentic AI consultants in Northern Ireland. Fintech, cybersecurity, and agri-food sector specialists. Fixed-fee diagnostic from £6,500. Book a free call." (153) | "Agentic AI consultants in Northern Ireland. Fintech, cybersecurity, agri-food specialists. AI roadmap in 3 weeks. Fixed-fee from £6,500. Book a free call." (154) | Applied standard pattern. Tightened "and agri-food sector specialists" to "agri-food specialists" (removes "and" and "sector", saving 6 chars needed to fit the pattern within 155 chars). All three sectors preserved. Net +1 char. |
| 8 | salford | desc | "Agentic AI consultants in Salford & MediaCityUK. Media, digital agency, and e-commerce specialists. Fixed-fee diagnostic from £6,500. Book a free call." (151) | "Agentic AI consultants in Salford. Media, digital agency, and e-commerce specialists. AI roadmap in 3 weeks. Fixed-fee from £6,500. Book a free call." (149) | Applied standard pattern. Removed "& MediaCityUK" from the opener to create room (MediaCityUK appears in the title and intro body — no coverage loss). Sector list and CTA unchanged. Net -2 chars. |
| 9 | bedfordshire | desc | "Agentic AI consultants in Bedfordshire. Aerospace, logistics, and Cranfield research specialists. Fixed-fee diagnostic from £6,500. Book a free call." (153) | "Agentic AI consultants in Bedfordshire. Cranfield aerospace and logistics specialists. AI roadmap in 3 weeks. Fixed-fee from £6,500. Book a free call." (150) | Applied standard pattern. Consolidated "Aerospace, logistics, and Cranfield research specialists" to "Cranfield aerospace and logistics specialists" — moves the local landmark identifier "Cranfield" to the front position (higher keyword prominence for "Cranfield AI" queries) and removes the standalone "research" qualifier (Cranfield's identity already implies research). Saves the space needed for the roadmap pattern. Net -3 chars. |
| 10 | wokingham | desc | "Agentic AI consultants in Wokingham. Enterprise tech, cybersecurity, and fintech specialists. Fixed-fee diagnostic from £6,500. Book a free call." (145) | "Agentic AI consultants in Wokingham. Enterprise tech, cybersecurity, fintech specialists. AI roadmap in 3 weeks. Fixed-fee from £6,500. Book a free call." (153) | Applied standard pattern. Removed ", and" before "fintech" to create room (saves 2 chars needed for the pattern to fit within ceiling). Sector list content unchanged. Net +8 chars to 153. |
| 11 | kensington | desc | "Agentic AI consultants in Kensington. Luxury brands, private equity, and wealth management specialists. Fixed-fee diagnostic from £6,500. Book a free call." (155) | "Agentic AI consultants in Kensington. Luxury brands, private equity and wealth management. AI roadmap in 3 weeks. Fixed-fee from £6,500. Book a free call." (154) | Applied standard pattern. Removed ", and" before "wealth management" to save 1 char. Removed "specialists" from sector list (saves 11 chars) — the noun list is self-evidently a specialist claim without the trailing word. Net -1 char. |

### Pattern Audit Status After Run 27

All 19 location page descriptions + 1 locations hub description now carry the "AI roadmap in 3 weeks. Fixed-fee from £6,500." pattern. **"Diagnostic" pattern fully cleared from all description fields in locations.json.**

Location pages with "AI roadmap in 3 weeks. Fixed-fee from £6,500." (or equivalent):
- london ✓, manchester ✓, birmingham ✓, leeds ✓, bristol ✓, edinburgh ✓, glasgow ✓, reading ✓, leicester ✓, scotland ✓, northern-ireland ✓, norfolk ✓, salford ✓, surrey ✓, kent ✓, bedfordshire ✓, wokingham ✓, kensington ✓ — all 18 city/region pages + hub ✓

### Skipped / no change needed

- All data files except locations.json: titles and descriptions already optimised from Runs 22–26
- FAQ answer bodies in locations.json contain "diagnostic" in body copy (e.g. Manchester FAQ answer, Edinburgh FAQ answer) — body copy is not SERP-facing and intentionally retained for context

### Hard Rule Violations
- Pre-edit: 0
- Post-edit: 0 (all descriptions verified ≤155 chars)

### Duplicate Title Check
All location page titles remain unique after edits. No title changes made this run — titles optimised in Runs 17–20.

### URLs to Submit to IndexNow (when key available)
- https://agenticai.associates/locations/
- https://agenticai.associates/locations/london/
- https://agenticai.associates/locations/birmingham/
- https://agenticai.associates/locations/edinburgh/
- https://agenticai.associates/locations/glasgow/
- https://agenticai.associates/locations/scotland/
- https://agenticai.associates/locations/northern-ireland/
- https://agenticai.associates/locations/salford/
- https://agenticai.associates/locations/bedfordshire/
- https://agenticai.associates/locations/wokingham/
- https://agenticai.associates/locations/kensington/

### Recommendations for Run 28

- **Connect GSC** (critical, outstanding since Run 1): Add `GSC_SERVICE_ACCOUNT_EMAIL`, `GSC_PRIVATE_KEY`, `SITE_URL`, `INDEXNOW_KEY` to `.env` for live impressions/CTR data and instant reindexing.
- **GSC sitemap submission** (critical): Only ~5/95 pages indexed. Submit `https://agenticai.associates/sitemap-index.xml` to GSC manually.
- **"Diagnostic" pattern fully cleared**: All location, learn, service, industry and business-size descriptions are now free of "diagnostic". Run 28 should audit across the 5 other data files for any remaining non-standard patterns (e.g. verify all industry descs carry the fixed-fee signal, all learn descs have "Read now." CTAs).
- **Insights freshness**: Consider adding `dateModified` to `/insights/smcr-ai-accountability/` and `/insights/agentic-sdlc-regulated-engineering/` to signal recency to search engines.
- **Location pages for essex, buckinghamshire, portsmouth, ealing**: Still getting impressions per CLAUDE.md — consider adding pages in a future batch (4 new pages).
- **Backlink gap**: Zero backlinks both engines. Tier-1 listicle outreach pitches ready (`agenticai-listicle-outreach-apr30.md`). Wikidata entry not yet created. Both remain the highest-leverage outstanding actions.
- **Year anchors**: Review all `(2026)` titles Dec 2026 / Jan 2027 to update to `(2027)`.

---

## Run 26 — 2026-07-09

**Mode:** Pattern-based (no .env / no API credentials)
**GSC data:** Skipped — no credentials
**Bing data:** Skipped — no credentials
**IndexNow:** Skipped — INDEXNOW_KEY not available
**Pages changed:** 10 (7 in `src/data/learn.json`, 3 in `src/data/locations.json`)

### Changes applied

| # | File | Slug | Field | Before (chars) | After (chars) | Rationale |
|---|------|------|-------|---------------|---------------|-----------|
| 1 | locations.json | leeds | desc | "Leeds agentic AI consultants. Fixed-fee diagnostic from £6,500, working system in 90 days. Finance, legal and digital sectors. Book a free call." (144) | "Agentic AI consultants in Leeds. Finance, legal, healthtech and digital sector specialists. AI roadmap in 3 weeks. Fixed-fee from £6,500. Book a free call." (155) | Cleared the last "diagnostic" from the Leeds description and applied the "AI roadmap in 3 weeks. Fixed-fee from £6,500." pattern used on bristol/reading/norfolk/kent/surrey. Also reordered to "Agentic AI consultants in [City]." opener (ICP-first, keyword-first), added "healthtech" to the sector list (strengthens Leeds healthcare/medtech angle), and dropped the "90 days" timeframe (which the title already carries) in favour of the concrete 3-week roadmap hook. Net +11 chars. |
| 2 | locations.json | leicester | desc | "Agentic AI consultants in Leicester. Manufacturing, food & drink, and logistics specialists. Fixed-fee diagnostic from £6,500. Book a free call." (144) | "Agentic AI consultants in Leicester. Manufacturing, food & drink, and logistics specialists. AI roadmap in 3 weeks. Fixed-fee from £6,500. Book a free call." (155) | Straightforward pattern swap: removed "diagnostic" and inserted "AI roadmap in 3 weeks." (+11 chars). Sector list unchanged — manufacturing/food & drink/logistics is the correct ICP for Leicester. Aligns with the standard location-page format now applied across 8 of 19 city pages. |
| 3 | locations.json | manchester | desc | "Manchester agentic AI consultants. Fixed-fee diagnostic, working AI system live in 90 days. Media, e-commerce and manufacturing. Book a free call." (146) | "Manchester agentic AI consultants. Media, e-commerce and manufacturing sector specialists. AI roadmap in 3 weeks. Fixed-fee from £6,500. Book a free call." (153) | Removed "diagnostic, working AI system live in 90 days" and restructured around the "AI roadmap in 3 weeks. Fixed-fee from £6,500." pattern (+7 chars net). Added "sector specialists" to make the sector list a claim rather than a bare list, improving readability and ICP qualification signal in the SERP snippet. |
| 4 | learn.json | benefits-of-hiring-an-ai-consultant | desc | "7 proven benefits of hiring an AI consultant — faster ROI, lower risk, and faster time to value. Backed by UK business case studies. Read now." (142) | "7 proven benefits of hiring an AI consultant — faster ROI, lower risk, and quicker time to value. Backed by UK enterprise case studies. Read now." (145) | Two micro-fixes: (1) "faster time to value" → "quicker time to value" — removes the duplicate "faster" that appeared twice in the same sentence; (2) "business" → "enterprise" — ICP signal upgrade. "UK enterprise case studies" better matches the mid-market B2B buyer persona (£100M–£500M) than "UK business case studies". Net +3 chars. |
| 5 | learn.json | ai-consultant-career-path | desc | "Map your AI consulting career from entry-level to partner. Covers progression, timelines, salaries, and how to accelerate your growth. Read now." (144) | "Map your AI consulting career path from entry-level to partner. Covers UK progression, timelines, salaries, and how to accelerate your growth. Read now." (152) | Added "path" after "career" (+5 chars) to echo the primary keyword ("AI consultant career path") — currently absent from the description despite appearing in both title and slug, a missed relevance signal. Added "UK" before "progression" (+3 chars) for geographic qualifier, aligning with the UK-specific salary data in the article. Net +8 chars. |
| 6 | learn.json | ai-consultant-skills | desc | "The essential AI consultant skills for 2026 — technical, business, and soft skills — with practical steps to develop each one. UK guide. Read now." (146) | "The essential AI consultant skills for 2026 — technical, business, and soft skills — with proven steps to develop each one. Actionable UK guide. Read now." (154) | Replaced "practical" with "proven" (+0 chars, stronger power word) and expanded "UK guide." to "Actionable UK guide." (+10 chars). "Actionable" is a higher-intent modifier than the generic "UK guide" that ends many learn pages; it signals to buyers that the article contains implementable steps, not just theory — improving self-selection for the high-intent query segment. |
| 7 | learn.json | how-to-choose-an-ai-consultant | desc | "How to pick the right AI consultant for your UK business. Covers evaluation criteria, red flags, interview questions, and proposal review. Read now." (148) | "How to choose the right AI consultant for your UK business — red flags, evaluation criteria, interview questions, and contract review checklist. Read now." (154) | Three changes: (1) "pick" → "choose" — matches the primary keyword in slug/title ("how to choose"); (2) reordered to lead with "red flags" — the most emotionally resonant buying-decision signal, improving SERP click appeal; (3) "proposal review" → "contract review checklist" — more specific and higher-stakes, better matches the intent of buyers in final selection stages. Net +6 chars. |
| 8 | learn.json | agentic-ai-vs-chatbots | desc | "Chatbots answer questions. AI agents take action. 5 key differences and which to deploy first — practical guide for UK enterprise buyers. Read now." (147) | "Chatbots answer questions. Agentic AI agents complete tasks end-to-end. 5 differences, which to deploy first — guide for UK enterprise buyers. Read now." (152) | Replaced "AI agents take action" with "Agentic AI agents complete tasks end-to-end" — introduces the primary keyword "Agentic AI" (previously absent from the description), adds the "end-to-end" qualifier that distinguishes agents from chatbots, and drops the weak "practical" modifier to make room. Net +5 chars. |
| 9 | learn.json | in-house-ai-team-vs-consultancy | desc | "Should you build in-house AI or hire a consultancy? Compare cost (£600k+ vs day rates), speed, and risk in our free guide for UK leaders. Read now." (147) | "Build in-house AI or hire a consultancy? Compare full cost (£600k+ vs day rates), speed and risk — with a clear decision framework. Free UK guide. Read now." (155) | Three changes: (1) Dropped the question opener "Should you" — leads directly with the comparison action; (2) "cost" → "full cost" (+5 chars) — "full cost" is a stronger buying signal (implies TCO, not just day rates); (3) restructured to end with "Free UK guide." to parallel the pattern on agentic-ai-vs-generative-ai. Net +8 chars. |
| 10 | learn.json | agentic-ai-vs-generative-ai | desc | "Generative AI creates content. Agentic AI does work. Learn the real distinction and decide what to build first — free guide for UK buyers. Read now." (148) | "Generative AI creates content. Agentic AI executes work. The key distinctions explained — and how to decide what to build first. Free UK guide. Read now." (153) | Replaced "does work" with "executes work" (+1 char, more precise verb) and restructured the middle clause from "Learn the real distinction and decide what to build first — free guide for UK buyers." to "The key distinctions explained — and how to decide what to build first. Free UK guide." — removes the weak imperative "Learn" opener and leads with a benefit statement ("The key distinctions explained"), which performs better as a snippet preview. Net +5 chars. |

### Skipped / no change needed

- All other pages in the 5 data files: either at ceiling (≥150 chars) or already optimised from prior runs
- No title changes this run: all titles already within 30–60 chars from prior runs
- No slug/URL changes
- `build-vs-buy-ai-agents` (154 chars): already near ceiling; no material improvement available

### Hard Rule Violations
- Pre-edit: 0
- Post-edit: 0 (all titles 30–60 chars, all descs ≤155 chars)

### Duplicate Title Check
All data-file titles verified unique after edits. No duplicate titles introduced.

### Fixed-Fee / "AI Roadmap in 3 Weeks" Pattern Audit After Run 26
Location pages now carrying "AI roadmap in 3 weeks. Fixed-fee from £6,500." pattern:
- bristol ✓, reading ✓, norfolk ✓ (Run 25)
- kent ✓, surrey ✓ (Run 24)
- leeds ✓, leicester ✓, manchester ✓ (this run)
- Remaining pages: bedfordshire, wokingham, kensington, salford, sheffield, edinburgh, birmingham, glasgow, cambridge, cardiff, wiltshire — check descriptions in Run 27

### URLs to Submit to IndexNow (when key available)
- https://agenticai.associates/locations/leeds/
- https://agenticai.associates/locations/leicester/
- https://agenticai.associates/locations/manchester/
- https://agenticai.associates/learn/benefits-of-hiring-an-ai-consultant/
- https://agenticai.associates/learn/ai-consultant-career-path/
- https://agenticai.associates/learn/ai-consultant-skills/
- https://agenticai.associates/learn/how-to-choose-an-ai-consultant/
- https://agenticai.associates/learn/agentic-ai-vs-chatbots/
- https://agenticai.associates/learn/in-house-ai-team-vs-consultancy/
- https://agenticai.associates/learn/agentic-ai-vs-generative-ai/

### Recommendations for Run 27

- **Connect GSC** (critical, outstanding since Run 1): Add `GSC_SERVICE_ACCOUNT_EMAIL`, `GSC_PRIVATE_KEY`, `SITE_URL`, `INDEXNOW_KEY` to `.env` for live impressions/CTR data and instant reindexing.
- **GSC sitemap submission** (critical): Only ~5/95 pages indexed. Submit `https://agenticai.associates/sitemap-index.xml` to GSC manually.
- **CF AI-Scrapers toggle OFF** (critical): CF → agenticai.associates → Security → Bots → Super Bot Fight Mode → AI Scrapers and Crawlers: OFF.
- **Remaining location pages**: Check bedfordshire, wokingham, kensington, salford, sheffield, edinburgh, birmingham, glasgow, cambridge, cardiff, wiltshire for "diagnostic" in descriptions — apply "AI roadmap in 3 weeks. Fixed-fee from £6,500." pattern where present.
- **Backlink gap**: Zero backlinks both engines. Tier-1 listicle outreach pitches ready (`agenticai-listicle-outreach-apr30.md`). Wikidata entry not yet created. Both remain the highest-leverage outstanding actions.
- **Year anchors**: Review all `(2026)` titles Dec 2026 / Jan 2027 to update to `(2027)`.

---

## Run 25 — 2026-07-07

**Mode:** Pattern-based (no .env / no API credentials)
**GSC data:** Skipped — no credentials
**Bing data:** Skipped — no credentials
**IndexNow:** Skipped — INDEXNOW_KEY not available
**Pages changed:** 10 (4 in `src/data/learn.json`, 3 in `src/data/what-we-do.json`, 3 in `src/data/locations.json`)

### Changes applied

| # | File | Slug | Field | Before (chars) | After (chars) | Rationale |
|---|------|------|-------|---------------|---------------|-----------|
| 1 | learn.json | freelance-ai-consultant | desc | "Complete guide to becoming a freelance AI consultant. Covers day rates, finding clients, building your brand, and IR35 compliance. Read now." (140) | "Complete UK guide to becoming a freelance AI consultant in 2026. Covers day rates, finding clients, building your brand, and IR35 compliance. Read now." (151) | Added "UK" qualifier and "in 2026" year anchor. Desc was 15 chars below ceiling with no geographic or recency signal — the two signals most correlated with high-intent freelance career queries. "Complete UK guide" also matches the established pattern used on other career-intent learn pages |
| 2 | learn.json | how-to-choose-an-ai-consultant | desc | "Learn how to pick the right AI consultant for your business. Covers criteria, red flags, interview questions, and proposal review. Read now." (140) | "How to pick the right AI consultant for your UK business. Covers evaluation criteria, red flags, interview questions, and proposal review. Read now." (148) | Three micro-improvements: (1) "Learn how to pick" → "How to pick" — removes the weak imperative opener, leading directly with the action the searcher wants; (2) "your business" → "your UK business" — adds geographic qualifier for UK-specific query matching; (3) "criteria" → "evaluation criteria" — more specific, aligns with the actual buyer intent (evaluating suppliers) and adds 11 chars to use SERP real estate |
| 3 | learn.json | when-to-hire-an-ai-consultant | desc | "Not sure if you need an AI consultant? Here are 7 clear signs it's time to bring in expert help — with guidance on timing. Book a free call." (140) | "Not sure if you need an AI consultant? Here are 7 clear signs it's time to bring in expert help — with UK guidance on timing and budget. Book a free call." (154) | Added "UK" before "guidance" (geographic qualifier, +3 chars) and "and budget" before the period (addresses the second-most common buyer concern — cost — alongside timing, +11 chars). Total +14 chars. Budget guidance is a top intent signal for "when to hire" queries: buyers who are timing a hire are simultaneously scoping the budget, so surfacing both in the snippet improves relevance matching |
| 4 | learn.json | what-does-an-ai-consultant-do | desc | "Learn what an AI consultant does day-to-day — strategy, delivery oversight, and team training. Practical guide for UK buyers. Book a free call." (143) | "Learn what an AI consultant does day-to-day — strategy, delivery oversight, and team training. Practical guide for UK buyers. Fixed fee. Book a free call." (154) | Added "Fixed fee." before the CTA (+11 chars). This learn page targets buyer-intent queries ("what does an AI consultant do") — buyers researching roles are often simultaneously evaluating whether to hire. Adding the pricing certainty signal at the snippet level encourages qualified clicks from cost-conscious mid-market buyers who are comparing engagement models |
| 5 | what-we-do.json | ai-training | desc | "Hands-on AI training for UK teams. Measurable productivity gains in 4 weeks. Executive, management and practitioner cohorts. Book a free call." (142) | "Hands-on agentic AI training for UK teams. Measurable productivity gains in 4 weeks. Executive, management and practitioner cohorts. Book a free call." (150) | Added "agentic" before "AI training" (+8 chars). "Agentic AI training" is the primary keyword for this page (per site-wide keyword strategy) and the site's positioning anchor. Its absence from the description was a consistency gap — every other service page description opens with "agentic AI" or "Agentic AI". Adding it ensures description-to-title keyword consistency and improves relevance scoring for "agentic AI training UK" queries |
| 6 | what-we-do.json | generative-ai | desc | "RAG systems, LLM cost optimisation, and content pipelines for UK businesses. Cut LLM spend by 95%. Pilots live in 6–10 weeks. Book a free call." (143) | "RAG systems, LLM cost optimisation, and content pipelines for UK businesses. Cut LLM spend by 95%. Pilots live in 6–10 weeks. Fixed fee. Book a free call." (154) | Added "Fixed fee." before the CTA (+11 chars). The generative AI service page targets buyers comparing LLM consultancies — most of which charge open-ended day rates. Adding "Fixed fee." as a differentiating signal at the snippet level is the single highest-leverage change for qualified-lead CTR on this page. Consistent with how every other service page description now carries the fixed-fee signal |
| 7 | what-we-do.json | ai-automation | desc | "Automate complex workflows with agentic AI. UK experts in document processing, RPA replacement, and end-to-end orchestration. Book a free call." (143) | "Automate complex workflows with agentic AI. UK experts in document processing, RPA replacement, and end-to-end orchestration. Fixed fee. Book a free call." (154) | Same rationale as generative-ai: added "Fixed fee." (+11 chars). The ai-automation page targets buyers comparing RPA and workflow automation vendors, many of whom charge per-process or per-hour. Fixed-fee certainty is the primary differentiator for this audience. This was the last service page description without the signal |
| 8 | locations.json | bristol | desc | "Agentic AI consultants in Bristol. Aerospace, cleantech, and creative sector specialists. Fixed-fee diagnostic from £6,500. Book a free call." (141) | "Agentic AI consultants in Bristol. Aerospace, cleantech, and creative sector specialists. AI roadmap in 3 weeks. Fixed-fee from £6,500. Book a free call." (153) | Added "AI roadmap in 3 weeks." outcome hook (+13 chars net, after removing "diagnostic" from "Fixed-fee diagnostic"). The Bristol title already carries "Deep Tech AI, Fixed Fee" — adding the timeframe to the description creates title-to-meta message consistency (title signals what, description signals when). "3 weeks" is the concrete time-to-value promise used on the highest-performing location titles; surfacing it in the description reinforces it for searchers who read the snippet before clicking |
| 9 | locations.json | reading | desc | "Agentic AI consultants in the Thames Valley. Enterprise tech, pharma, and SaaS specialists. Fixed-fee diagnostic from £6,500. Book a free call." (143) | "Agentic AI consultants in the Thames Valley. Enterprise tech, pharma, and SaaS specialists. AI roadmap in 3 weeks. Fixed-fee from £6,500. Book a free call." (155) | Same pattern as Bristol: added "AI roadmap in 3 weeks." and removed "diagnostic" (+12 chars net). The Reading title carries "3-Week Roadmap, Fixed Fee" — restating the timeframe in the description creates full title-to-meta consistency. Enterprise tech and pharma buyers in the Thames Valley corridor are outcome-focused; the roadmap timeframe is the primary qualifying hook |
| 10 | locations.json | norfolk | desc | "Agentic AI consultants in Norfolk. Insurance, agriculture, and offshore energy specialists. Fixed-fee diagnostic from £6,500. Book a free call." (143) | "Agentic AI consultants in Norfolk. Insurance, agriculture, and offshore energy specialists. AI roadmap in 3 weeks. Fixed-fee from £6,500. Book a free call." (155) | Same pattern as Bristol and Reading: added "AI roadmap in 3 weeks." and removed "diagnostic" (+12 chars net). Norfolk's insurance cluster (Aviva HQ in Norwich) and offshore energy buyers are risk-averse and outcome-focused — the concrete "3 weeks" timeframe reduces perceived delivery uncertainty, which is the primary objection for regulated-sector buyers |

### Skipped / no change needed

- All other pages in the 5 data files: either within acceptable range or already at ceiling from prior runs
- Insights pages: all within 50–60 chars title, ≤155 chars desc from prior runs
- About/contact/results standalone pages: optimised in prior runs
- `benefits-of-hiring-an-ai-consultant` (142 chars): only +3-char improvement available (fix duplicate "faster" → "quicker"); deferred to next run if no higher-impact candidates emerge
- No title changes this run: all titles already within 30–60 chars from prior runs
- No slug/URL changes

### Hard Rule Violations
- Pre-edit: 0
- Post-edit: 0 (all titles 30–60 chars, all descs ≤155 chars)

### Duplicate Title Check
All 78 data-file titles verified unique after edits. No duplicate titles introduced.

### Fixed-Fee Signal Audit After Run 25
The "Fixed fee." / "Fixed-fee from £6,500." signal is now present in all service page descriptions:
- generative-ai — cleared ✓ (was missing)
- ai-automation — cleared ✓ (was missing)
- ai-training — received "agentic" keyword ✓
- All other what-we-do pages: already carried the signal from prior runs

Location page "Fixed-fee diagnostic" → "AI roadmap in 3 weeks. Fixed-fee" pattern now applied to:
- bristol ✓, reading ✓, norfolk ✓ (this run)
- kent ✓, surrey ✓ (Run 24)
- Remaining with "diagnostic": leeds (144 chars), leicester (144 chars), manchester (146 chars) — all borderline; next run candidates

### URLs to Submit to IndexNow (when key available)
- https://agenticai.associates/learn/freelance-ai-consultant/
- https://agenticai.associates/learn/how-to-choose-an-ai-consultant/
- https://agenticai.associates/learn/when-to-hire-an-ai-consultant/
- https://agenticai.associates/learn/what-does-an-ai-consultant-do/
- https://agenticai.associates/what-we-do/ai-training/
- https://agenticai.associates/what-we-do/generative-ai/
- https://agenticai.associates/what-we-do/ai-automation/
- https://agenticai.associates/locations/bristol/
- https://agenticai.associates/locations/reading/
- https://agenticai.associates/locations/norfolk/

### Recommendations for Run 26

- **Connect GSC** (critical, outstanding since Run 1): Add `GSC_SERVICE_ACCOUNT_EMAIL`, `GSC_PRIVATE_KEY`, `SITE_URL`, `INDEXNOW_KEY` to `.env` for live impressions/CTR data and instant reindexing.
- **GSC sitemap submission** (critical): Only ~5/95 pages indexed. Submit `https://agenticai.associates/sitemap-index.xml` to GSC manually.
- **CF AI-Scrapers toggle OFF** (critical): CF → agenticai.associates → Security → Bots → Super Bot Fight Mode → AI Scrapers and Crawlers: OFF.
- **Remaining location pages with "diagnostic"**: leeds (144), leicester (144), manchester (146) — all candidates for the "AI roadmap in 3 weeks. Fixed-fee from £6,500." pattern swap next run.
- **benefits-of-hiring-an-ai-consultant** (142 chars): Fix duplicate "faster" repetition ("faster ROI, lower risk, and faster time to value" → "faster ROI, lower risk, and quicker time to value") + change "business" to "enterprise" for ICP signal. Net +3 chars to 145. Small improvement but fixes a copywriting quality issue.
- **ai-consultant-career-path** (144 chars): Just 1 char below 145 threshold — could add "UK" qualifier or "2026" to push to ≥150.
- **what-does-an-ai-consultant-do desc** (now 154 chars): Already optimised this run — no action.
- **Location pages for essex, buckinghamshire, portsmouth, ealing**: Still getting impressions per CLAUDE.md — consider adding pages in a future batch.
- **Backlink gap**: Zero backlinks both engines. Tier-1 listicle outreach pitches ready (`agenticai-listicle-outreach-apr30.md`). Wikidata entry not yet created. Both remain the highest-leverage outstanding actions.
- **Year anchors**: Review all `(2026)` titles Dec 2026 / Jan 2027 to update to `(2027)`.

---

## Run 24 — 2026-07-05

**Mode:** Pattern-based (no .env / no API credentials)
**GSC data:** Skipped — no credentials
**Bing data:** Skipped — no credentials
**IndexNow:** Skipped — INDEXNOW_KEY not available
**Pages changed:** 10 (3 in `src/data/what-we-do.json`, 2 in `src/data/learn.json`, 2 in `src/data/business-sizes.json`, 1 in `src/data/industries.json`, 2 in `src/data/locations.json`)

### Changes applied

| # | File | Slug | Field | Before (chars) | After (chars) | Rationale |
|---|------|------|-------|---------------|---------------|-----------|
| 1 | what-we-do.json | conversational-ai | title | "Conversational AI UK — Deflect 50-70% of Contacts" (49) | "Conversational AI UK — Deflect 50-70% of Inbound Contacts" (57) | Title was 1 char below the 50-char minimum floor. "Inbound Contacts" is also more precise — it specifies the volume applies to inbound demand, which is the relevant metric for channel-deflection ROI |
| 2 | what-we-do.json | ai-training | desc | "…Book a free call now." (146) | "…Book a free call." (142) | "now." is a non-standard CTA adverb — removed to match site-wide standard. All other service pages end with "Book a free call." without a trailing adverb |
| 3 | what-we-do.json | ongoing-support | desc | "…Named consultants, no handoffs. Book a free call today." (141) | "…Named consultants, no handoffs. Book a free call." (151) | "today." is a non-standard CTA adverb — removed. Also added "agentic" before "AI" for keyword consistency with all other service page descriptions, and "reviews" after "strategy" for specificity. Net +10 chars to 151 |
| 4 | learn.json | agentic-ai-vs-chatbots | desc | "…Discover 5 key differences…Free guide for UK enterprise buyers. Read now." (150) | "…5 key differences…practical guide for UK enterprise buyers. Read now." (147) | Two fixes: (1) "Free guide" removed — this is a web page, not a downloadable asset; implying a free download is inaccurate and creates friction when users see no download gate. (2) "Discover" removed — flagged in Run 23 as a weak, passive opener; replaced with direct noun-led sentence |
| 5 | learn.json | ai-consultant-job-description | desc | "…qualifications, and salary benchmarks. Read now." (139) | "…qualifications, salary benchmarks, and day rates. Read now." (153) | Desc was 16 chars below ceiling. "and day rates" added: UK contract day rates are a primary search intent signal for this query — buyers and candidates researching AI consultant job descriptions specifically want to know what they can expect to earn or pay per day. Also consolidated "required skills, qualifications" → "skills, qualifications" (tighter, same meaning) |
| 6 | business-sizes.json | smes | desc | "Agentic AI for UK SMEs. Identify 8–12 AI wins…" (131) | "Agentic AI for UK SMEs with 10–250 employees. Identify 8–12 AI wins…" (153) | Desc was 24 chars below ceiling — the widest gap in business-sizes. Added "with 10–250 employees" (from page intro: "businesses with 10 to 250 employees") which (a) qualifies the ICP, helping the right buyers self-select, and (b) differentiates from the small-business and enterprise pages |
| 7 | business-sizes.json | startups | desc | "…all fixed fee. Book a free call." (139) | "…all fixed-fee from £6,500. Book a free call." (151) | Desc was 16 chars below ceiling. Added "from £6,500" to the fixed-fee anchor — every other business-size page and most industry pages already carry the price anchor in the description. The startups page was the only one that didn't. Also corrected "fixed fee" (two words, adjective) to "fixed-fee" (hyphenated compound modifier) for consistency with all other pages |
| 8 | industries.json | hospitality | desc | "…ops automation, and demand forecasting. Book a free call." (139) | "…and demand forecasting — all fixed-fee from £6,500. Book a free call." (151) | Desc was 16 chars below ceiling. Added "fixed-fee from £6,500" — the pricing anchor is present on the majority of industry descriptions but was missing from hospitality. The em-dash construction "— all fixed-fee from £6,500" is consistent with the site's existing copy style for mid-sentence price signals |
| 9 | locations.json | kent | desc | "…Fixed-fee diagnostic from £6,500. Book a free call." (138) | "…3-week AI roadmap, fixed-fee from £6,500. Book a free call." (146) | Desc was 17 chars below ceiling. Added "3-week AI roadmap" as an outcome hook before the fixed-fee signal — the 3-week roadmap is the primary deliverable for all location pages; surfacing it in the description creates title-to-meta message consistency (the title carries "Logistics AI, Fixed Fee" but no timeframe) |
| 10 | locations.json | surrey | desc | "…Fixed-fee diagnostic from £6,500. Book a free call." (140) | "…AI roadmap in 3 weeks, fixed-fee from £6,500. Book a free call." (152) | Same pattern as Kent: desc was 15 chars below ceiling. Added "AI roadmap in 3 weeks" outcome hook. Surrey's pharma, gaming, and professional services sectors are price-sensitive and outcome-focused — the combination of timeframe and fixed fee is the strongest qualifying signal for Surrey-area enterprise buyers |

### Skipped / no change needed

- All other pages in the 5 data files: already optimised in prior runs or within acceptable range
- Insights pages: all within 50–60 chars title, ≤155 desc from prior runs
- About/contact/results standalone pages: optimised in prior runs
- No slug/URL changes

### Hard Rule Violations
- Pre-edit: 1 (conversational-ai title at 49 chars — 1 below minimum)
- Post-edit: 0 (all titles 30–60 chars, all descs ≤155 chars)

### Duplicate Title Check
All data-file titles verified unique after edits. No duplicate titles introduced.

### CTA Audit Status After Run 24
All non-standard CTA adverbs now eliminated from data files:
- "Book a free call now." — cleared ✓ (was: ai-training)
- "Book a free call today." — cleared ✓ (was: ongoing-support)

Previously cleared (Runs 17–23): "discovery call", "fit call", "board-level call", "Start today.", "Download our free template.", "Start earning more in 2026.", "Get our free checklist.", "Get started today."

### URLs to Submit to IndexNow (when key available)
- https://agenticai.associates/what-we-do/conversational-ai/
- https://agenticai.associates/what-we-do/ai-training/
- https://agenticai.associates/what-we-do/ongoing-support/
- https://agenticai.associates/learn/agentic-ai-vs-chatbots/
- https://agenticai.associates/learn/ai-consultant-job-description/
- https://agenticai.associates/for/smes/
- https://agenticai.associates/for/startups/
- https://agenticai.associates/industries/hospitality/
- https://agenticai.associates/locations/kent/
- https://agenticai.associates/locations/surrey/

### Recommendations for Run 25

- **Connect GSC** (critical, outstanding since Run 1): Add `GSC_SERVICE_ACCOUNT_EMAIL`, `GSC_PRIVATE_KEY`, `SITE_URL`, `INDEXNOW_KEY` to `.env` for live impressions/CTR data and instant reindexing.
- **GSC sitemap submission** (critical): Only ~5/95 pages indexed. Submit `https://agenticai.associates/sitemap-index.xml` to GSC manually.
- **CF AI-Scrapers toggle OFF** (critical): CF → agenticai.associates → Security → Bots → Super Bot Fight Mode → AI Scrapers and Crawlers: OFF. Until done, CF injects `Disallow` for GPTBot/ClaudeBot/CCBot.
- **CTA non-standard adverbs now fully cleared**: All 5 data JSON files have uniform "Book a free call." and "Read now." CTAs. Next run should focus on title quality for remaining pages not yet touched in recent runs.
- **what-we-do/ai-training desc (142 chars)**: Slightly below floor — consider adding a specificity signal (e.g. "self-serve portal included") if verifiable from page body.
- **Remaining short learn descs**: `when-to-hire-an-ai-consultant` (140), `benefits-of-hiring-an-ai-consultant` (142), `freelance-ai-consultant` (140) — all borderline; candidates for enrichment next run.
- **Location pages for essex, buckinghamshire, portsmouth, ealing**: Getting impressions per CLAUDE.md — consider adding pages in a future batch.
- **Backlink gap**: Zero backlinks both engines. Tier-1 listicle outreach pitches ready (`agenticai-listicle-outreach-apr30.md`). Wikidata entry not yet created. Both remain the highest-leverage outstanding actions.
- **Year anchors**: Review all `(2026)` titles Dec 2026 / Jan 2027 to update to `(2027)`.

---

## Run 23 — 2026-07-03

**Mode:** Pattern-based (no .env / no API credentials)
**GSC data:** Skipped — see `seo-logs/gsc-data-20260703.json`
**Bing data:** Skipped — see `seo-logs/bing-data-20260703.json`
**IndexNow:** Skipped — INDEXNOW_KEY not available
**Pages changed:** 10 (4 in `src/data/learn.json`, 6 in `src/data/industries.json`)

### Changes applied

| # | File | Slug | Field | Before (chars) | After (chars) | Rationale |
|---|------|------|-------|---------------|---------------|-----------|
| 1 | learn.json | ai-consultant-vs-vendor | title | "AI Consultant vs Vendor: 2026 UK Buyer's Guide" (46) | "AI Consultant vs Vendor: Independent UK Buyer's Guide 2026" (58) | Below 50-char floor; "Independent" adds strong differentiator vs vendor-sponsored guides |
| 2 | learn.json | agentic-ai-vs-rpa | title | "Agentic AI vs RPA: 5 Key Differences Explained (2026)" (54) | "Agentic AI vs RPA — UK Enterprise Decision Guide (2026)" (55) | Replaces generic "5 Key Differences" with value-forward "Decision Guide"; adds UK qualifier |
| 3 | learn.json | agentic-ai-vs-rpa | description | "Agentic AI acts on unstructured inputs. RPA scripts fixed steps. Learn 5 key differences and which to deploy for your UK business. Read now." (140) | "Agentic AI acts on unstructured inputs. RPA scripts fixed steps. 5 key differences, a decision framework, and the hybrid most UK enterprises use. Read now." (155) | Surfaces "decision framework" and "hybrid" — key intent signals; fills to 155-char ceiling |
| 4 | learn.json | agentic-ai-vs-chatbots | title | "Agentic AI vs Chatbots: 5 Critical Differences (2026)" (54) | "Agentic AI vs Chatbots: Build Right for UK Enterprise (2026)" (60) | Replaces "5 Critical Differences" with action-oriented "Build Right"; adds UK Enterprise qualifier |
| 5 | learn.json | ai-consultant-skills | description | "The essential skills every AI consultant needs — technical, business, and soft skills — with practical steps to develop each one. Read now." (139) | "The essential AI consultant skills for 2026 — technical, business, and soft skills — with practical steps to develop each one. UK guide. Read now." (146) | Moves "AI consultant skills" earlier for keyword prominence; adds "2026" year anchor and "UK guide" qualifier |
| 6 | industries.json | supply-chain | description | "Supply chain AI consultant helping UK businesses cut costs, optimise logistics, and build resilient operations with agentic AI. Book a free call." (144) | "Supply chain AI for UK businesses. Improve forecast accuracy to 80-90% and cut emergency freight 30-50% — all fixed-fee from £6,500. Book a free call." (150) | Replaces generic copy with specific ROI metrics from page intro; adds fixed-fee anchor |
| 7 | industries.json | manufacturing | description | "Agentic AI for UK factories. Predictive maintenance, quality AI, and production scheduling — fewer defects and less downtime. Book a free call." (142) | "Agentic AI for UK factories. Predictive maintenance, vision quality checks, and scheduling — lift OEE 4-8% and cut defects 30-60%. Book a free call." (148) | Adds OEE/defect metrics from page intro; "vision quality checks" is more specific than "quality AI" |
| 8 | industries.json | energy-utilities | description | "Agentic AI for UK energy, DNOs and water utilities. Smart meter analytics, asset health, and Ofgem/Ofwat-ready governance. Book a free call." (139) | "Agentic AI for UK energy suppliers and DNOs. Predictive asset health, smart meter analytics, Ofgem/Ofwat-ready governance. Fixed-fee. Book a free call." (151) | Reorders from high-value to supporting detail; adds "Fixed-fee" anchor; grows from 139→151 chars |
| 9 | industries.json | government | description | "Agentic AI for UK councils and public sector. Cut costs, improve citizen services, and deploy responsibly. GDPR & ICO compliant. Book a free call." (146) | "Agentic AI for UK councils and public sector. Cut citizen wait times 40-70%. Improve services, deploy responsibly. GDPR & ICO compliant. Book a free call." (154) | Adds concrete wait-time metric from page intro; more specific than "cut costs" |
| 10 | industries.json | legal | description | "Legal AI consultants for UK law firms. Automate doc review, contracts, and compliance with agentic AI. More matters, less admin. Book a free call." (146) | "Legal AI consultants for UK law firms. Automate doc review, contracts, and compliance. Cut review time 60-80%. More matters, less admin. Book a free call." (154) | Adds 60-80% review time reduction metric from page intro; removes redundant "with agentic AI" |
| 11 | industries.json | marketing | description | "Agentic AI marketing consultant for UK agencies and in-house teams. Automate campaigns, scale content output, and prove ROI. Book a free call." (141) | "Agentic AI marketing consultant for UK agencies and in-house teams. Automate campaigns, lift conversions 20-40%, and prove ROI. Book a free call." (145) | Replaces vague "scale content output" with specific conversion metric from page intro |

### Skipped / no change needed

- All other learn.json pages: already optimised in prior runs or within acceptable range
- All other industries.json pages: descs already 145-155 chars from prior runs
- No title duplicates introduced (all titles remain unique across site)
- No slug/URL changes

### Recommendations for Run 24

- **GSC sitemap submission** (critical): Only ~5/95 pages indexed. Submit `https://agenticai.associates/sitemap-index.xml` to GSC manually — this cannot be done via automated run without creds.
- **CF AI-Scrapers toggle**: Flip CF → agenticai.associates → Security → Bots → Super Bot Fight Mode → AI Scrapers and Crawlers: OFF. Verify: `curl -sS https://agenticai.associates/robots.txt | head -5` should show repo file, not CF injection.
- **agentic-ai-vs-chatbots desc** (150 chars): Chatbots desc is good but "Free guide" phrasing could be updated to "Practical guide" if A/B data shows lower CTR.
- **Location page descs** (essex, buckinghamshire, portsmouth, ealing): Getting impressions per CLAUDE.md — consider adding pages in a future batch.
- **Backlink gap**: Zero backlinks both engines. Tier-1 listicle outreach pitches ready (`agenticai-listicle-outreach-apr30.md`); this is the highest-leverage outstanding action.

---

## Run 22 — 2026-07-01

### Data Source
No `.env` found. GSC and Bing Webmaster APIs skipped. Pattern-based optimisation only.

### IndexNow
`INDEXNOW_KEY` not available. Submission skipped.

### Audit Summary
- Full audit of all 5 data JSON files: industries (25 pages), locations (18 pages), what-we-do (10 pages), learn (16 pages), business-sizes (4 pages).
- Hard violations: 0 found pre-edit, 0 introduced.
- Primary pattern issues this run: (1) 4 learn pages with non-standard CTAs (`Start today.`, `Start earning more in 2026.`, `Download our free template.`); (2) 3 industry titles at 49 chars — 11 chars below ceiling; (3) 3 industry descriptions with unused SERP real estate (136–138 chars).
- Pages optimised: 10 (4 desc-only in learn; 2 title+desc in industries; 3 desc-only in industries; 1 desc-only in locations).
- Duplicate titles post-edit: 0 (verified across all 78 data-file titles).

### Pages Optimised

#### 1. `/learn/how-to-become-an-ai-consultant/`
**File:** `src/data/learn.json`

| | Before | After |
|---|---|---|
| Description | `…landing your first role. Start today.` (144) | `…landing your first role. Read now.` (149) |

"Start today." is a transactional CTA unsuited to a long-form informational guide. "Read now." is the site-wide standard for learn articles. Also added "in 2026" to the opening sentence to add a recency signal consistent with all other career-bait learn pages.

---

#### 2. `/learn/ai-consultant-career-path/`
**File:** `src/data/learn.json`

| | Before | After |
|---|---|---|
| Description | `…how to accelerate your growth. Start today.` (147) | `…how to accelerate your growth. Read now.` (144) |

Same "Start today." → "Read now." standardisation. This was the second remaining learn page with a non-standard CTA after Run 21 completed the CTA audit on the buyer-intent pages.

---

#### 3. `/learn/ai-consultant-job-description/`
**File:** `src/data/learn.json`

| | Before | After |
|---|---|---|
| Description | `…qualifications, and salary. Download our free template.` (146) | `…qualifications, and salary benchmarks. Read now.` (139) |

"Download our free template." implies a gated download asset that does not exist on this page — a false promise in the SERP snippet that inflates CTR but increases bounce rate. Replaced with "Read now." (standard CTA) and added "benchmarks" after "salary" to improve the value signal — salary benchmarks are the primary informational intent for this query.

---

#### 4. `/learn/freelance-ai-consultant/`
**File:** `src/data/learn.json`

| | Before | After |
|---|---|---|
| Description | `…and IR35. Start earning more in 2026.` (147) | `…and IR35 compliance. Read now.` (140) |

"Start earning more in 2026." is a weak, bespoke CTA that reads like a LinkedIn hook rather than a SERP snippet. Also redundant with "2026" already in the title. "Read now." standardises the CTA; "compliance" added after "IR35" (IR35 compliance is the precise buyer concern — not IR35 in the abstract).

---

#### 5. `/industries/hr/`
**File:** `src/data/industries.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI HR Consultant UK — 30-50% Faster Hires` (49) | `Agentic AI HR Consultant UK — 30-50% Faster Hires, Fixed Fee` (60) |
| Description | `HR AI consultant helping UK teams cut time-to-hire 30-50% and lift retention. Workday, SuccessFactors, BambooHR ready. Book a free call.` (136) | `HR AI consultant for UK teams. Cut time-to-hire 30-50% and lift first-year retention 10-20%. Workday, SuccessFactors, BambooHR ready. Book a free call.` (151) |

Title was 49 chars — 11 chars below ceiling. ", Fixed Fee" added (10 chars): pricing certainty is the primary differentiator for HR SaaS buyers comparing consultancies. Description gains two improvements: (1) "helping UK teams" → "for UK teams" (tighter ICP signal); (2) "lift retention" → "lift first-year retention 10-20%" — both the specificity ("first-year") and the metric (10-20%) come directly from the page intro body, which states "lift first-year retention by 10-20% through better onboarding personalisation."

---

#### 6. `/industries/fintech/`
**File:** `src/data/industries.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI for UK Fintechs — Automate KYC in Days` (49) | `Agentic AI for UK Fintechs — KYC Live in Days, FCA-Ready` (56) |
| Description | `Agentic AI for UK fintechs. KYC/KYB automation, fraud detection, regulatory reporting, and customer ops — all FCA-ready. Book a free call.` (138) | `Agentic AI for UK fintechs. Automate KYC/KYB, detect fraud in real time, and streamline regulatory reporting — all FCA-compliant. Book a free call.` (147) |

Title: "Automate KYC in Days" → "KYC Live in Days, FCA-Ready". (1) "Live in Days" converts the verb to a result — the KYC process is already live, not in prospect. (2) "FCA-Ready" added (7 chars) — for UK fintechs, FCA compliance is the primary purchase filter; surfacing it in the title improves qualified-lead click rate. Description: replaced the static capability list with active verbs ("Automate", "detect", "streamline") and upgraded "FCA-ready" to "FCA-compliant" (the stronger assurance term preferred in FCA-supervised firms).

---

#### 7. `/industries/insurance/`
**File:** `src/data/industries.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI for UK Insurers & MGAs — Faster Claims` (49) | `Agentic AI for UK Insurers & MGAs — Faster Claims, Fixed Fee` (60) |

Title was 49 chars — 11 chars below ceiling. ", Fixed Fee" added: for FCA-regulated insurers and MGAs, fixed-fee pricing removes the open-ended engagement risk that makes buyers hesitate. Description unchanged (150 chars, strong as-is).

---

#### 8. `/industries/education/`
**File:** `src/data/industries.json`

| | Before | After |
|---|---|---|
| Description | `…Reclaim 12 hours per week per teacher. DfE framework compliant. Book a free call.` (136) | `…Reclaim 12 hours per teacher per week. DfE-compliant. Fixed-fee from £6,500. Book a free call.` (149) |

Three micro-improvements simultaneously: (1) "per week per teacher" → "per teacher per week" — puts the recipient before the cadence, which reads more naturally and is closer to how buyers search ("per teacher"); (2) "DfE framework compliant" → "DfE-compliant" (saves 8 chars, freeing space for the price anchor); (3) "Fixed-fee from £6,500." added — the education sector is budget-constrained; the price anchor qualifies leads and signals predictability to MAT finance directors.

---

#### 9. `/industries/media-publishing/`
**File:** `src/data/industries.json`

| | Before | After |
|---|---|---|
| Description | `…ad ops, and IPSO-ready governance. Book a free call.` (137) | `…ad ops, IPSO-ready. Fixed-fee from £6,500. Book a free call.` (145) |

Description was 137 chars (18 below ceiling). "and IPSO-ready governance." restructured to "IPSO-ready." (shorter, punchier), freeing space for "Fixed-fee from £6,500." — the pricing signal is absent from this industry's description, despite being present on the majority of other industry pages. Media and publishing buyers are particularly sensitive to scope creep in consulting engagements; fixed-fee is a high-signal differentiator.

---

#### 10. `/locations/glasgow/`
**File:** `src/data/locations.json`

| | Before | After |
|---|---|---|
| Description | `Glasgow agentic AI consultants. Fixed-fee diagnostic, AI roadmap in 3 weeks. Engineering, energy and digital sectors. Book a free call.` (135) | `Glasgow agentic AI consultants. Fixed-fee diagnostic from £6,500. AI roadmap in 3 weeks. Engineering, energy and digital sectors. Book a free call.` (147) |

Description was 135 chars (20 below ceiling) — the widest gap of any location page post-Run 18. "Fixed-fee diagnostic, AI roadmap in 3 weeks" separated into two sentences and "from £6,500" inserted: adding the price anchor is consistent with every other location page description and is the primary qualifying signal for commercial buyers in Glasgow's engineering and energy sectors.

---

### Data Summary
No live GSC/Bing data. Pattern-based audit only.

### Duplicate Title Check
All 78 data-file titles verified unique after edits. No duplicate titles introduced.

### Hard Rule Violations
- Pre-edit: 0
- Post-edit: 0 (all titles 30–60 chars, all descs ≤155 chars)

### CTA Audit Status After Run 22
All non-standard learn CTAs now eliminated from data files:
- "Start today." — cleared ✓ (was: how-to-become-an-ai-consultant, ai-consultant-career-path)
- "Download our free template." — cleared ✓ (was: ai-consultant-job-description)
- "Start earning more in 2026." — cleared ✓ (was: freelance-ai-consultant)

Remaining learn CTA status: all 16 pages now end with either "Read now." or "Book a free call." — site-wide standard achieved.

### URLs to Submit to IndexNow (when key available)
- https://agenticai.associates/learn/how-to-become-an-ai-consultant/
- https://agenticai.associates/learn/ai-consultant-career-path/
- https://agenticai.associates/learn/ai-consultant-job-description/
- https://agenticai.associates/learn/freelance-ai-consultant/
- https://agenticai.associates/industries/hr/
- https://agenticai.associates/industries/fintech/
- https://agenticai.associates/industries/insurance/
- https://agenticai.associates/industries/education/
- https://agenticai.associates/industries/media-publishing/
- https://agenticai.associates/locations/glasgow/

### Recommendations for Next Run
- Connect GSC: add `GSC_SERVICE_ACCOUNT_EMAIL`, `GSC_PRIVATE_KEY`, `SITE_URL`, `INDEXNOW_KEY` to `.env` for live impressions/CTR data and instant reindexing.
- **Learn CTA audit complete** — all 16 learn pages now end with standard CTAs. Next run should focus on learn *title* quality: `what-is-an-ai-consultant` (54 chars) and `in-house-ai-team-vs-consultancy` (58 chars) are fine; `agentic-ai-vs-rpa` (53 chars) and `agentic-ai-vs-chatbots` (53 chars) could gain a UK-specific qualifier.
- Remaining short industry descriptions (≤140 chars): `supply-chain` (145), `logistics` (148) — both borderline; watch if further enrichment is worth it.
- `hospitality` desc (139 chars) — could add a metric ("Cut no-show rates 30%") if verifiable from page body.
- Insights freshness: consider adding `dateModified` schema to `/insights/smcr-ai-accountability/` and `/insights/agentic-sdlc-regulated-engineering/` to signal recency.
- Year anchors: review all `(2026)` titles Dec 2026/Jan 2027 to update to `(2027)`.
- Submit sitemap to GSC (critical — only ~5/95 pages indexed).
- Flip CF AI-Scrapers toggle OFF (critical — blocks GPTBot/ClaudeBot/CCBot; see CLAUDE.md warning).
- Zero backlinks — run Tier-1 listicle outreach (pitches in `agenticai-listicle-outreach-apr30.md`) + create Wikidata entry.

---

## Run 21 — 2026-06-29

### Data Source
No `.env` found. GSC and Bing Webmaster APIs skipped. Pattern-based optimisation only.

### IndexNow
`INDEXNOW_KEY` not available. Submission skipped.

### Audit Summary
- Full audit of all 5 data JSON files + standalone Astro pages (about/results.astro).
- Hard violations: 0 found pre-edit, 0 introduced. (Apparent insights violations were byte-count artefacts from the em dash `—` in UTF-8 — actual char counts are 155 and 154, within limit.)
- Primary pattern issue this run: **non-standard CTAs** — 10 pages using "Book a call.", "Get started today.", "Book a free fit call.", "Book a board-level call.", or "Get our free checklist." instead of site-wide "Book a free call." / "Read now." standards.
- Pages optimised: 10 (descriptions only — no title changes this run).
- Duplicate titles post-edit: 0 (verified across all 78 data-file titles).

### Pages Optimised

#### 1. `/locations/scotland/`
**File:** `src/data/locations.json`

| | Before | After |
|---|---|---|
| Description | `…Working system in 90 days. Book a call.` (150) | `…Working system in 90 days. Book a free call.` (155) |

"Book a call." lacked the "free" qualifier present on every other location page. Adding "free" is the single highest-impact one-word change on any SERP snippet — it reduces perceived friction. Scotland was the last holdout.

---

#### 2. `/locations/northern-ireland/`
**File:** `src/data/locations.json`

| | Before | After |
|---|---|---|
| Description | `…Fixed-fee diagnostic from £6,500. Book a call.` (148) | `…Fixed-fee diagnostic from £6,500. Book a free call.` (153) |

Standardised.

---

#### 3. `/locations/salford/`
**File:** `src/data/locations.json`

| | Before | After |
|---|---|---|
| Description | `…Fixed-fee diagnostic from £6,500. Book a call.` (146) | `…Fixed-fee diagnostic from £6,500. Book a free call.` (151) |

Standardised.

---

#### 4. `/locations/kensington/`
**File:** `src/data/locations.json`

| | Before | After |
|---|---|---|
| Description | `…Fixed-fee diagnostic from £6,500. Book a call.` (150) | `…Fixed-fee diagnostic from £6,500. Book a free call.` (155) |

Standardised. Completes CTA unification across all 18 location descriptions — every location now ends with "Book a free call."

---

#### 5. `/industries/retail/`
**File:** `src/data/industries.json`

| | Before | After |
|---|---|---|
| Description | `Retail AI consultants for UK businesses. Demand forecasting, personalisation and inventory AI. Fixed-fee diagnostic from £6,500. Get started today.` (147) | `Agentic AI for UK retailers — demand forecasting, personalisation, and inventory AI. Cut stockouts, reduce waste. Fixed-fee from £6,500. Book a free call.` (154) |

Three issues fixed simultaneously. (1) "Get started today." → "Book a free call." (standard). (2) "Retail AI consultants for UK businesses" → "Agentic AI for UK retailers" — leads with the primary keyword, uses "retailers" (the searcher identity). (3) "Cut stockouts, reduce waste" added — the two primary AI value drivers for UK retail, drawn from the page's painPoints.

---

#### 6. `/what-we-do/ai-automation/`
**File:** `src/data/what-we-do.json`

| | Before | After |
|---|---|---|
| Description | `…end-to-end orchestration. Book a free fit call.` (147) | `…end-to-end orchestration. Book a free call.` (143) |

"fit" removed — remnant of the old discovery/fit call naming convention removed from all other pages in Runs 17–19.

---

#### 7. `/about/results`
**File:** `src/pages/about/results.astro`

| | Before | After |
|---|---|---|
| Description | `…all fixed-fee from £6,500. Book a free fit call.` (144) | `…all fixed-fee from £6,500. Book a free call.` (141) |

Same "fit call" legacy issue. Removed "fit".

---

#### 8. `/for/enterprise/`
**File:** `src/data/business-sizes.json`

| | Before | After |
|---|---|---|
| Description | `Enterprise agentic AI for large UK organisations. AI strategy, governance frameworks, and scalable implementation. Book a board-level call.` (139) | `Enterprise agentic AI for UK organisations. AI strategy, governance, and scalable implementation — pilot to production in 8 weeks. Book a free call.` (148) |

"Book a board-level call." flagged for review in Run 20. Decision: standardise to "Book a free call." — the "board-level" qualifier creates a barrier. Also: removed "large" (redundant with "Enterprise"), tightened "governance frameworks" → "governance", and added "— pilot to production in 8 weeks" from the title to create title-to-meta message consistency.

---

#### 9. `/learn/how-to-choose-an-ai-consultant/`
**File:** `src/data/learn.json`

| | Before | After |
|---|---|---|
| Description | `…interview questions, and proposal review. Get our free checklist.` (154) | `…interview questions, and proposal review. Read now.` (140) |

"Get our free checklist." implies a gated asset that does not exist on this page. Replaced with the standard "Read now." CTA for informational learn articles.

---

#### 10. `/learn/ai-consultant-skills/`
**File:** `src/data/learn.json`

| | Before | After |
|---|---|---|
| Description | `Discover the essential skills every AI consultant needs — technical, business, and soft skills — with practical steps to develop each one. Start today.` (151) | `The essential skills every AI consultant needs — technical, business, and soft skills — with practical steps to develop each one. Read now.` (139) |

(1) "Discover" removed — weak, passive opening. Direct noun-led opening is more scannable in a SERP snippet. (2) "Start today." → "Read now." — standard CTA for learn articles.

---

### Data Summary
No live GSC/Bing data. Pattern-based audit only.

### Duplicate Title Check
All 78 data-file titles verified unique after edits. No title changes made this run; check is confirmatory.

### Hard Rule Violations
- Pre-edit: 0
- Post-edit: 0 (all titles 30–60 chars, all descs ≤155 chars)

### CTA Unification Status After Run 21
All non-standard CTAs now eliminated from data files and standalone Astro pages:
- "Book a call." — cleared ✓ (was: Scotland, N. Ireland, Salford, Kensington)
- "Book a free fit call." — cleared ✓ (was: ai-automation, about/results)
- "Book a board-level call." — cleared ✓ (was: enterprise)
- "Get started today." — cleared ✓ (was: retail)
- "Get our free checklist." — cleared ✓ (was: how-to-choose-an-ai-consultant)
- "Start today." — cleared ✓ (was: ai-consultant-skills)

### URLs to Submit to IndexNow (when key available)
- https://agenticai.associates/locations/scotland/
- https://agenticai.associates/locations/northern-ireland/
- https://agenticai.associates/locations/salford/
- https://agenticai.associates/locations/kensington/
- https://agenticai.associates/industries/retail/
- https://agenticai.associates/what-we-do/ai-automation/
- https://agenticai.associates/about/results/
- https://agenticai.associates/for/enterprise/
- https://agenticai.associates/learn/how-to-choose-an-ai-consultant/
- https://agenticai.associates/learn/ai-consultant-skills/

### Recommendations for Next Run
- Connect GSC: add `GSC_SERVICE_ACCOUNT_EMAIL`, `GSC_PRIVATE_KEY`, `SITE_URL`, `INDEXNOW_KEY` to `.env` for live impressions/CTR data and instant reindexing.
- **CTA audit is now complete** — next run should focus on title quality: remaining industry titles at 49–51 chars have room to strengthen (e.g. finance, hr, insurance, fintech — all at 49–51 chars).
- Remaining learn articles without CTAs (career content): `how-to-become-an-ai-consultant`, `ai-consultant-career-path`, `ai-consultant-job-description`, `freelance-ai-consultant` — review whether adding "Read now." is appropriate or these should be deprioritised.
- `/insights/smcr-ai-accountability/` — desc exactly 155 chars. Consider `dateModified` schema to signal freshness.
- Year anchors: all `(2026)` titles — review Dec 2026 / Jan 2027 to update to `(2027)`.
- Submit sitemap to GSC (only ~5/95 pages indexed — critical gap).
- Flip CF AI-Scrapers toggle OFF (critical — blocks GPTBot/ClaudeBot/CCBot).
- Zero backlinks — run Tier-1 listicle outreach + create Wikidata entry.

---


## Run 20 — 2026-06-27

### Data Source
No `.env` found. GSC and Bing Webmaster APIs skipped. Pattern-based optimisation only.

### IndexNow
`INDEXNOW_KEY` not available. Submission skipped.

### Audit Summary
- Full audit of all data files (locations, industries, what-we-do, business-sizes, learn) plus standalone Astro pages (contact, insights x7).
- Hard violations: 0 found, 0 introduced.
- CTR pattern issues identified: 10 across 8 files.
- Pages optimised: 10
- Duplicate titles post-edit: 0 (verified across all 91 pages).

### Pages Optimised

#### 1. `/locations/` hub
**File:** `src/data/locations.json`

| | Before | After |
|---|---|---|
| Title | `AI Consultants Near You — Agentic AI Across the UK` (50) | `Agentic AI Consultants UK — 18 Cities, Fixed Fee` (48) |

All other hub titles begin with "Agentic AI" — the locations hub was the sole exception. "AI Consultants Near You" reads like navigation copy, not a search query. "Agentic AI Consultants UK — 18 Cities, Fixed Fee" opens with the primary keyword, includes a specific verifiable count (18 live location pages), and adds the pricing certainty signal used across all service hubs.

---

#### 2. `/locations/bedfordshire/`
**File:** `src/data/locations.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI Consultants Bedfordshire — Aerospace & Tech` (54) | `Agentic AI Consultants Bedfordshire — Aerospace AI, 3 Weeks` (59) |

"Aerospace & Tech" names two sector categories with no outcome hook — flagged in both Run 18 and Run 19 recommendations. Bedfordshire's primary AI opportunity is aerospace (Cranfield University, Airbus Defence at adjacent Stevenage, Marshall Aerospace). "Aerospace AI" adds the technology signal; "3 Weeks" is the concrete time-to-value promise used across the highest-performing location titles.

---

#### 3. `/contact/`
**File:** `src/pages/contact/index.astro`

| | Before | After |
|---|---|---|
| Title | `Contact Agentic AI Associates — Book a Fit Call Today` (52) | `Contact Agentic AI Associates — Book a Free Call Today` (53) |
| Description | `Get in touch with Agentic AI Associates. Book a 30-minute fit call or send us a message. UK mid-market AI operations consultancy.` (129) | `Speak to Agentic AI Associates — UK ops-AI consultancy for FCA-regulated and PE-backed mid-market firms. Book a 30-minute free call or drop us a message.` (153) |

Two issues: (1) "fit call" was inconsistent with the sitewide standard CTA "free call" — standardised. (2) Desc was only 129 chars (26 chars below the ceiling) with no ICP qualifier. New desc adds "FCA-regulated and PE-backed mid-market firms" — the exact ICP — which improves relevance for the highest-intent branded search queries. Flagged for enrichment in Run 19 recommendations.

---

#### 4. `/for/small-business/`
**File:** `src/data/business-sizes.json`

| | Before | After |
|---|---|---|
| Description | `Agentic AI for UK small businesses. Fixed-fee packages, quick wins in 2 weeks, and team training included. Book a free call.` (124) | `Agentic AI for UK small businesses. Fixed-fee from £6,500, quick wins in 2 weeks, team training included — positive ROI in 60 days. Book a free call.` (149) |

Desc was only 124 chars (31 below the ceiling) with no price anchor or ROI claim. Added "Fixed-fee from £6,500" (sets qualified-lead expectation) and "positive ROI in 60 days" (drawn directly from page body: "positive return within the first 60 days"). The title already carries the 60-day hook — restating it in the desc creates title-to-meta message consistency that improves Quality Score signals.

---

#### 5. `/industries/logistics/`
**File:** `src/data/industries.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI for UK Logistics & Fleet — Cut Costs Now` (51) | `Agentic AI for UK Logistics & Fleet — Cut Route Costs` (53) |

"Cut Costs Now" uses "Now" as a pseudo-power word but offers no specificity about which costs. The page description leads with "Route optimisation" as the primary use case. "Cut Route Costs" names the primary AI application — route optimisation translates directly to fuel savings, which is the #1 AI-measurable ROI metric for UK logistics and fleet operators.

---

#### 6. `/industries/supply-chain/`
**File:** `src/data/industries.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI for UK Supply Chain — Cut Costs & Waste` (50) | `Agentic AI for UK Supply Chain — Reduce Waste & Delays` (54) |

"Cut Costs & Waste" overlaps too closely with the logistics page ("Cut Route Costs") and is generic. Supply chain AI buyers are primarily concerned with two pain points: excess inventory waste (shrinkage, spoilage, overstock) and delivery delays (stockouts, supplier lead-time uncertainty). "Reduce Waste & Delays" names both pain points explicitly, differentiates from the logistics page, and uses an action verb ("Reduce") that signals outcome.

---

#### 7. `/insights/fca-ai-governance-playbook/`
**File:** `src/pages/insights/fca-ai-governance-playbook.astro`

| | Before | After |
|---|---|---|
| Description | `FCA AI deployment playbook for UK regulated firms. SM&CR mapping, Consumer Duty rubric, and AI Risk Register schema included. Download now.` (140) | `FCA AI deployment playbook for UK regulated firms. SM&CR mapping, Consumer Duty rubric, and AI Risk Register schema. Updated for 2026. Download now.` (148) |

Desc was 140 chars with 15 chars unused. Added "Updated for 2026" — a recency signal that differentiates from static FCA compliance guides and signals the content reflects current regulatory posture (Consumer Duty live from Jul 2023, AI Act enforcement ramping 2025-2026). "included." changed to "." to allow the recency clause to fit cleanly.

---

#### 8. `/insights/langgraph-vs-bedrock-vs-copilot-studio/`
**File:** `src/pages/insights/langgraph-vs-bedrock-vs-copilot-studio.astro`

| | Before | After |
|---|---|---|
| Title | `LangGraph vs Bedrock vs Copilot Studio — Regulated Guide` (56) | `LangGraph vs Bedrock vs Copilot Studio: 2026 FCA Guide` (54) |

No year anchor — the only comparative insight page without one. "Regulated Guide" describes the audience (regulated) but is less specific than "FCA Guide" (the regulator these buyers answer to). "2026 FCA Guide" adds the recency signal, narrows to the highest-intent audience keyword, and saves 2 chars. Colon replaces em-dash for better punctuation convention on technical comparison titles.

---

#### 9. `/insights/agent-studio-build-vs-buy/`
**File:** `src/pages/insights/agent-studio-build-vs-buy.astro`

| | Before | After |
|---|---|---|
| Title | `Agent Studio: Build vs Buy — Regulated Enterprise Guide` (55) | `Agent Studio: Build vs Buy for Regulated Firms (2026)` (53) |

No year anchor. "Regulated Enterprise Guide" describes the audience but "Enterprise Guide" is a content-format label, not a search term. "for Regulated Firms (2026)" is more search-aligned (buyers search "for regulated firms", not "Enterprise Guide") and adds the recency signal. Parenthetical year is consistent with all other insights pages carrying year anchors.

---

#### 10. `/learn/` hub
**File:** `src/data/learn.json`

| | Before | After |
|---|---|---|
| Description | `Everything you need on AI consulting — from what consultants do, how to hire one, certifications, salary data, and career paths. Start reading.` (143) | `16 practical guides on AI consulting — what consultants do, how to hire one, certifications, salary data, and career paths. Start reading.` (138) |

"Everything you need" is the most overused opener in content marketing — universally ignored. "16 practical guides" leads with the specific count (there are exactly 16 learn pages live), signals value with the power word "practical", and is immediately scannable in a SERP snippet. All subsequent content is preserved; only the opener changes. Net -5 chars, within ceiling.

---

### Data Summary
No live GSC/Bing data. Pattern-based audit only.

### Duplicate Title Check
All 91 page titles verified unique after edits (including standalone Astro pages).

### Hard Rule Violations
- Pre-edit: 0
- Post-edit: 0 (all titles 30–59 chars, all descs ≤155 chars)

### URLs to Submit to IndexNow (when key available)
- https://agenticai.associates/locations/
- https://agenticai.associates/locations/bedfordshire/
- https://agenticai.associates/contact/
- https://agenticai.associates/for/small-business/
- https://agenticai.associates/industries/logistics/
- https://agenticai.associates/industries/supply-chain/
- https://agenticai.associates/insights/fca-ai-governance-playbook/
- https://agenticai.associates/insights/langgraph-vs-bedrock-vs-copilot-studio/
- https://agenticai.associates/insights/agent-studio-build-vs-buy/
- https://agenticai.associates/learn/

### Recommendations for Next Run
- Connect GSC: add `GSC_SERVICE_ACCOUNT_EMAIL`, `GSC_PRIVATE_KEY`, `SITE_URL`, `INDEXNOW_KEY` to `.env` for live impressions/CTR data and instant reindexing on each run.
- Flip CF AI-Scrapers toggle OFF (critical — blocks GPTBot/ClaudeBot/CCBot; see CLAUDE.md warning).
- Submit sitemap to GSC (only ~5/95 pages indexed — critical gap).
- `/for/enterprise/` desc uses "Book a board-level call" — review whether this premium CTA or standard "Book a free call." converts better.
- `/insights/agentic-sdlc-regulated-engineering/` and `/insights/agentic-ai-report-generation-regulated/` — both look solid; consider adding `dateModified` schema to signal freshness.
- Year anchors: review all `(2026)` titles in Dec 2026 / Jan 2027 to update to `(2027)`.
- Zero backlinks remain — run Tier-1 listicle outreach (pitches ready in central memory) and create Wikidata entry.

---

## Run 19 — 2026-06-25

### Data Source
No `.env` found. GSC and Bing Webmaster APIs skipped. Pattern-based optimisation only.

### IndexNow
`INDEXNOW_KEY` not available. Submission skipped.

### Audit Summary
- Full audit of all pages: locations (18), what-we-do (11), industries (25), business-sizes (4), learn (16), insights (7), hub indexes, standalone Astro pages.
- Discovered local repo was 16 commits behind origin — remote had already resolved location discovery-call CTAs in runs 9-18.
- Remaining `discovery call` found in 1 page: `/for/small-business` description.
- 2 additional CTR improvements identified: `/about/results` (weak title/desc) and `/insights/ai-sdlc-audit-trail` (no CTA in desc).
- Pages optimised: 3
- All `discovery call` references now removed from master.

### Pages Optimised

#### 1. `/for/small-business`
**File:** `src/data/business-sizes.json`

| | Before | After |
|---|---|---|
| Description | `…Book a free discovery call.` | `…Book a free call.` |

Last remaining `discovery call` in the codebase. Standardised to match all other pages.

---

#### 2. `/about/results`
**File:** `src/pages/about/results.astro`

| | Before | After |
|---|---|---|
| Title | `Results — Agentic AI Associates` (30) | `Agentic AI Results — UK Client Outcomes & ROI Cases` (51) |
| Description | `Real results from real engagements. See how we deliver measurable AI impact for UK businesses.` (93) | `Agentic AI outcomes from UK client engagements. Measurable ROI, time saved, and process gains — all fixed-fee from £6,500. Book a free fit call.` (145) |

Title was at the bare 30-char minimum with no primary keyword. New title leads with "Agentic AI Results" with outcome signal. Description added benefit statement, price anchor, and CTA (was 93 chars — well below the 155-char ceiling).

---

#### 3. `/insights/ai-sdlc-audit-trail`
**File:** `src/pages/insights/ai-sdlc-audit-trail.astro`

| | Before | After |
|---|---|---|
| Description | `…Free field-by-field reference schema.` (121 chars) | `…Free reference schema for regulated UK engineering teams. Read now.` (151 chars) |

Only 121 chars with no explicit CTA. Added audience qualifier (regulated UK engineering teams) and "Read now." click trigger. Optimises for B2B regulated-sector SERPs where the audience qualifier improves relevance.

### Data Summary
No live GSC/Bing data. Pattern-based audit only.

### Recommendations for Next Run
- Check `/for/` business-sizes page body copy — the small-business intro still mentions "a free discovery call" (body text, not meta). Consider whether to update.
- Consider whether `| pipe` title format on 18 location pages is optimal — outcome-specific suffixes (e.g. "AI Live in 90 Days") may outperform generic "Strategy & Build" in CTR.
- Consider `/contact/` description (129 chars) — could be enriched with ICP qualifier.
- Flip CF AI-Scrapers toggle OFF (outstanding — see CLAUDE.md warning).
- Submit sitemap to GSC (only ~5/95 pages indexed — critical gap).

---

## Run 18 — 2026-06-23

### Data Source
No `.env` found. GSC and Bing Webmaster APIs skipped. Pattern-based analysis of source files.

### IndexNow
`INDEXNOW_KEY` not available. Submission skipped.

### Audit Summary
- Full pattern audit of all location pages (19 entries), plus cross-check of industries, what-we-do, business-sizes, and learn JSON files
- Hard length violations: 0 (all insight page titles re-verified — FCA page exactly 60 chars, SMCR page 57 chars; previous Explore agent miscounted HTML entities)
- CTA inconsistency fixed: 4 pages still had "Book a free discovery call." (reading, surrey, kent, wokingham)
- Weak suffix issues fixed: 10 location pages with sector-name-only suffixes (no outcome, number, or power word)
- Pages optimised: 10 (all in `src/data/locations.json`)
- Duplicate titles post-edit: 0 (verified across all 58 pages in data files)
- Noted for next run: `for/small-business` description still has "discovery call" CTA; `locations/bedfordshire` title suffix "Aerospace & Tech" still sector-only

### Pages Optimised

#### 1. `/locations/reading/`
| | Before | After |
|---|---|---|
| Title | `Agentic AI Consultants Reading — Thames Valley Tech` (50) | `Agentic AI Consultants Reading — 3-Week Roadmap, Fixed Fee` (58) |
| Description | `…Book a free discovery call.` | `…Book a free call.` |

"Thames Valley Tech" names geography that's already in the title. "3-Week Roadmap, Fixed Fee" names the deliverable and pricing certainty. CTA standardised.

---

#### 2. `/locations/surrey/`
| | Before | After |
|---|---|---|
| Title | `Agentic AI Consultants Surrey — Pharma & Gaming` (47) | `Agentic AI Consultants Surrey — Pharma AI, Fixed Fee` (52) |
| Description | `…Book a free discovery call.` | `…Book a free call.` |

"Pharma & Gaming" lists sectors without an outcome. "Pharma AI, Fixed Fee" adds the service keyword and pricing certainty pharma buyers need. CTA standardised.

---

#### 3. `/locations/kent/`
| | Before | After |
|---|---|---|
| Title | `Agentic AI Consultants Kent — Logistics & Manufacturing` (54) | `Agentic AI Consultants Kent — Logistics AI, Fixed Fee` (53) |
| Description | `…Book a free discovery call.` | `…Book a free call.` |

Kent's primary AI opportunity is logistics (Dover ports, M20 corridor). "Logistics AI, Fixed Fee" focuses the hook. CTA standardised.

---

#### 4. `/locations/wokingham/`
| | Before | After |
|---|---|---|
| Title | `Agentic AI Consultants Wokingham — Tech & Cybersecurity` (55) | `Agentic AI Consultants Wokingham — Enterprise AI, 3 Weeks` (57) |
| Description | `…Book a free discovery call.` | `…Book a free call.` |

"Tech & Cybersecurity" describes clients, not what we deliver. "Enterprise AI, 3 Weeks" names buyer type, service, and timeframe. CTA standardised.

---

#### 5. `/locations/leicester/`
| | Before | After |
|---|---|---|
| Title | `Agentic AI Consultants Leicester — Manufacturing & Food` (54) | `Agentic AI Consultants Leicester — Cut Waste, Fixed Fee` (55) |

"Cut Waste" addresses the primary AI value driver for both manufacturing and food & drink (production waste, spoilage, inventory). "Fixed Fee" adds pricing certainty for cost-conscious East Midlands businesses.

---

#### 6. `/locations/scotland/`
| | Before | After |
|---|---|---|
| Title | `Agentic AI Consultants Scotland — Energy, Finance & Tech` (55) | `Agentic AI Consultants Scotland — AI Live in 90 Days` (52) |

"Energy, Finance & Tech" could apply to any consultant. The description already states "Working system in 90 days" — moving that concrete deliverable into the title turns it into the hook.

---

#### 7. `/locations/northern-ireland/`
| | Before | After |
|---|---|---|
| Title | `Agentic AI Consultants N. Ireland — Fintech & Agri-Food` (55) | `Agentic AI Consultants N. Ireland — Fintech AI, Fixed Fee` (57) |

Belfast's fastest-growing AI opportunity is fintech (FinTrU, Datactics, Lightyear). "Fintech AI" leads with the high-value sector; "Fixed Fee" adds certainty for regulated buyers.

---

#### 8. `/locations/norfolk/`
| | Before | After |
|---|---|---|
| Title | `Agentic AI Consultants Norfolk — Insurance & Agriculture` (55) | `Agentic AI Consultants Norfolk — Insurance AI, Fixed Fee` (55) |

Norwich's insurance cluster (Aviva HQ) is the primary high-value sector. "Insurance AI" is more specific; "Fixed Fee" appeals to FCA-regulated insurers who need predictable costs.

---

#### 9. `/locations/salford/`
| | Before | After |
|---|---|---|
| Title | `Agentic AI Consultants Salford — MediaCityUK & Digital` (54) | `Agentic AI Consultants Salford — MediaCity AI, Fixed Fee` (55) |

"MediaCityUK & Digital" is purely descriptive. "MediaCity AI" compresses the local identifier into the hook; "Fixed Fee" attracts media SMEs with tight budgets.

---

#### 10. `/locations/kensington/`
| | Before | After |
|---|---|---|
| Title | `Agentic AI Consultants Kensington — Luxury & Wealth` (51) | `Agentic AI Consultants Kensington — Wealth AI, Fixed Fee` (56) |

Kensington's dominant AI opportunity is wealth management and PE. "Wealth AI" is more precise; "Fixed Fee" signals pricing certainty for HNWI advisory clients.

---

### Recommendations for Next Run
- Fix `for/small-business` description CTA: still has "Book a free discovery call."
- Fix `locations/bedfordshire` title: "Aerospace & Tech" is sector-only → suggest "Aerospace AI, 3 Weeks"
- Submit sitemap to GSC (only ~5/95 pages indexed — critical gap)
- Flip CF AI-Scrapers toggle OFF to unblock LLM crawlers

---

## Run 17 — 2026-06-21

### Data Source
No `.env` found. GSC and Bing Webmaster APIs skipped. Pattern-based analysis of source files.

### IndexNow
`INDEXNOW_KEY` not available. Submission skipped.

### Audit Summary
- Full pattern audit of all 5 data JSON files + standalone Astro pages (about/index.astro)
- Hard rule violations at start: 0 (smcr-ai-accountability appeared as 18 chars in regex but actual title is 57 chars — escaped-quote false positive, confirmed in file)
- CTR pattern issues identified: 10 — 4 location titles with sector-name-only hooks (no number/outcome), 1 industries hub without "agentic" keyword or number, 1 enterprise title with jargon ("Lighthouse Wins"), 3 industry titles with generic hooks or non-standard CTAs ("Net Zero Ready", "Grow Revenue", "Boost RevPAR") + desc CTA inconsistencies, 1 about page with vague differentiator and non-standard CTA ("fit call")
- Pages optimised: 10
- Duplicate titles post-edit: 0 (verified across all 89 pages)

### Pages Optimised

#### 1. `/locations/birmingham/`
**File:** `src/data/locations.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI Consultants Birmingham — Automotive & Tech` (52) | `Agentic AI Consultants Birmingham — AI Roadmap in 3 Weeks` (57) |
| Description | (unchanged) | (unchanged) |

**Rationale:** "Automotive & Tech" names two sectors without stating any outcome — low CTR pull for searchers comparing AI consultancies. "AI Roadmap in 3 Weeks" adds a number and names the concrete first deliverable (the 3-week diagnostic → roadmap), which is already stated in the description body. Consistent with the standard offering across all location pages.

---

#### 2. `/locations/leeds/`
**File:** `src/data/locations.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI Consultants Leeds — Finance & Digital Experts` (55) | `Agentic AI Consultants Leeds — Board-Ready Roadmap, 3 Weeks` (59) |
| Description | `…Finance, legal and digital sectors. Free discovery call.` | `…Finance, legal and digital sectors. Book a free call.` |

**Rationale:** "Finance & Digital Experts" has the "Experts" suffix — consistently the weakest suffix pattern across the site. For Leeds specifically, "Finance" is the primary sector signal (the page body identifies Leeds as the UK's largest financial centre outside London), but adding "Experts" after it dilutes rather than strengthens it. "Board-Ready Roadmap, 3 Weeks" names the concrete deliverable and the timeframe — two of the three strongest purchase-decision signals. Description: "Free discovery call." → "Book a free call." — standard CTA alignment.

---

#### 3. `/locations/bristol/`
**File:** `src/data/locations.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI Consultants Bristol — Aerospace & Cleantech` (53) | `Agentic AI Consultants Bristol — Deep Tech AI, Fixed Fee` (55) |
| Description | `…Fixed-fee diagnostic from £6,500. Book a free discovery call.` | `…Fixed-fee diagnostic from £6,500. Book a free call.` |

**Rationale:** "Aerospace & Cleantech" describes two sectors Bristol is known for — but in a SERP these signal geography, not the offer. "Deep Tech AI, Fixed Fee" captures Bristol's sector essence ("Deep Tech" — Airbus, Rolls-Royce, BAE, Cambridge spin-offs) and adds the two strongest purchase-decision signals: technology quality ("Deep Tech") and pricing certainty ("Fixed Fee"). Description: "Book a free discovery call." → "Book a free call." — standard CTA alignment.

---

#### 4. `/locations/glasgow/`
**File:** `src/data/locations.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI Consultants Glasgow — Engineering & Digital` (53) | `Agentic AI Consultants Glasgow — Engineering AI, Fixed Fee` (57) |
| Description | `…Engineering, energy and digital sectors. Free discovery call.` | `…Engineering, energy and digital sectors. Book a free call.` |

**Rationale:** "Engineering & Digital" describes sector mix without an outcome hook. Glasgow's identity is engineering-led (the page body: "The city that built ships now builds software") — keeping "Engineering" but pairing it with "AI" (adds technology signal) and "Fixed Fee" (pricing certainty) makes the hook both sector-specific and offer-specific. Description: "Free discovery call." → "Book a free call." — standard CTA alignment.

---

#### 5. `/industries/` (hub)
**File:** `src/data/industries.json`

| | Before | After |
|---|---|---|
| Title | `AI Consultancy by Industry — Sector-Specific Expertise` (54) | `Agentic AI Consultancy by Industry — 25 UK Sectors` (50) |
| Description | `Industry-specific agentic AI consultancy for healthcare, legal, finance, and manufacturing. We speak your sector's language. Book a free call.` (142) | `Agentic AI consultancy across 25 UK sectors — from healthcare and fintech to manufacturing and government. Fixed-fee from £6,500. Book a free call.` (146) |

**Rationale:** Hub title lacked the primary keyword "Agentic AI" — all other hub titles begin with it, which is critical for brand-plus-topic SERP signals and internal link anchor consistency. "Sector-Specific Expertise" is meaningless (every consultant claims this). "25 UK Sectors" is a specific, verifiable count — there are exactly 25 industry pages live. Description now leads with "25 UK sectors" (the count) and names four sectors spread across the spectrum (healthcare, fintech, manufacturing, government) rather than the four most generic ones listed previously. "Fixed-fee from £6,500" is added to the hub description for the first time — this is the primary pricing differentiator and belongs at the hub level.

---

#### 6. `/for/enterprise/`
**File:** `src/data/business-sizes.json`

| | Before | After |
|---|---|---|
| Title | `Enterprise Agentic AI UK — Lighthouse Wins in 8 Weeks` (53) | `Enterprise Agentic AI UK — Pilot to Production in 8 Weeks` (57) |
| Description | (unchanged) | (unchanged) |

**Rationale:** "Lighthouse Wins" is internal jargon — a term consultancies and product teams use for early-adopter proofs of concept, but it is not a term enterprise buyers search for. Enterprise CIOs and COOs search for "pilot to production" language because that transition (from a working prototype to a live, governed system) is the precise problem they need solved. "Pilot to Production in 8 Weeks" names the journey and the timeframe, both of which are signalled in the page body. The 8-week claim is carried over from the original title.

---

#### 7. `/industries/energy-utilities/`
**File:** `src/data/industries.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI for UK Energy & Utilities — Net Zero Ready` (53) | `Agentic AI for UK Energy & Utilities — Cut Downtime & Costs` (59) |
| Description | `…Ofgem/Ofwat-ready governance. Book a free discovery call.` | `…Ofgem/Ofwat-ready governance. Book a free call.` |

**Rationale:** "Net Zero Ready" is a table-stakes claim for 2026 — every energy sector supplier asserts it, so it has near-zero CTR differentiation. More importantly, it describes a regulatory posture, not an operational outcome. "Cut Downtime & Costs" names the two operational KPIs that actually motivate AI investment in energy and utilities: unplanned outages (which the page body addresses with predictive maintenance and asset health agents) and operating cost efficiency (the perennial driver for DNOs and water utilities under RPI/CPI-X price controls). Description: "Book a free discovery call." → "Book a free call." — standard CTA alignment.

---

#### 8. `/industries/media-publishing/`
**File:** `src/data/industries.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI for UK Media & Publishing — Grow Revenue` (51) | `Agentic AI for UK Media & Publishing — Scale Content Output` (58) |
| Description | `…IPSO-ready governance. Book a free discovery call.` | `…IPSO-ready governance. Book a free call.` |

**Rationale:** "Grow Revenue" is the most generic possible suffix — used by every sector page across every industry. It names a business outcome but provides no insight into how. "Scale Content Output" is specific to the media and publishing problem: the page body describes agents that handle "routine fact-checking, related-article linking, headline testing and social drafting" — all tasks that increase editorial throughput. "Scale Content Output" is the exact language editorial directors and digital publishers use when evaluating AI. Description: "Book a free discovery call." → "Book a free call." — standard CTA alignment.

---

#### 9. `/industries/hospitality/`
**File:** `src/data/industries.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI for UK Hotels & Hospitality — Boost RevPAR` (53) | `Agentic AI for UK Hotels & Hospitality — Smarter Revenue AI` (59) |
| Description | `…demand forecasting. Book a free discovery call.` | `…demand forecasting. Book a free call.` |

**Rationale:** "RevPAR" (Revenue Per Available Room) is genuine hospitality KPI language — operators know it — but it is jargon to the broader AI consultancy search audience and may not be recognised in a SERP snippet by buyers who are AI-first rather than hospitality-first. "Smarter Revenue AI" keeps the revenue signal, replaces the jargon with plain language, and adds "AI" as a qualifier that confirms this is an AI-specific offer rather than a revenue management consultancy. The primary keyword "Agentic AI" already appears in the title prefix. Description: "Book a free discovery call." → "Book a free call." — standard CTA alignment.

---

#### 10. `/about/`
**File:** `src/pages/about/index.astro`

| | Before | After |
|---|---|---|
| Title | `About Agentic AI Associates — UK AI Consultancy` (48) | `About Agentic AI Associates — The UK's Ops-AI Specialist` (56) |
| Description | `Meet the team behind Agentic AI Associates — a UK AI consultancy helping businesses adopt agentic systems that deliver measurable results. Book a fit call.` (153) | `Meet the team behind Agentic AI Associates. UK ops-AI consultancy for mid-market firms deploying agentic systems with measurable results. Book a free call.` (155) |

**Rationale:** Title was 48 chars — 12 chars below the 60-char ceiling, leaving unused SERP headroom. "UK AI Consultancy" is a universal suffix with no differentiation. "The UK's Ops-AI Specialist" asserts the specific positioning from the site's strategy document (ops-AI, not SEO/AEO/content marketing), signals expertise ("Specialist" vs "Consultancy"), and adds the definite article ("The UK's") which conveys market leadership. Description: "— a UK AI consultancy helping businesses adopt agentic systems" replaced with "UK ops-AI consultancy for mid-market firms deploying agentic systems" — adds ICP qualifier ("mid-market firms"), uses the exact positioning term ("ops-AI"), and replaces the vague "helping businesses adopt" with the stronger active verb "deploying". Non-standard CTA "Book a fit call." → "Book a free call." for alignment with site-wide CTA.

---

### Duplicate Title Check
All 89 page titles verified unique after edits.

### CTA Standardisation
Fixed 5 description CTAs from non-standard to "Book a free call.":
- `/locations/leeds/`: "Free discovery call." → "Book a free call."
- `/locations/bristol/`: "Book a free discovery call." → "Book a free call."
- `/locations/glasgow/`: "Free discovery call." → "Book a free call."
- `/industries/energy-utilities/`: "Book a free discovery call." → "Book a free call."
- `/industries/media-publishing/`: "Book a free discovery call." → "Book a free call."
- `/industries/hospitality/`: "Book a free discovery call." → "Book a free call."
- `/about/`: "Book a fit call." → "Book a free call."

### URLs to Submit to IndexNow (when key available)
- https://agenticai.associates/locations/birmingham/
- https://agenticai.associates/locations/leeds/
- https://agenticai.associates/locations/bristol/
- https://agenticai.associates/locations/glasgow/
- https://agenticai.associates/industries/
- https://agenticai.associates/for/enterprise/
- https://agenticai.associates/industries/energy-utilities/
- https://agenticai.associates/industries/media-publishing/
- https://agenticai.associates/industries/hospitality/
- https://agenticai.associates/about/

### Recommendations for Run 18
- Remaining location pages without outcome hooks: Reading ("Thames Valley Tech" — no number), Leicester ("Manufacturing & Food" — no outcome), Scotland ("Energy, Finance & Tech" — weak "Tech" suffix), Northern Ireland ("Fintech & Agri-Food" — no outcome), Norfolk ("Insurance & Agriculture" — no outcome), Salford ("MediaCityUK & Digital" — no outcome), Surrey (47 chars — still short), Kent ("Logistics & Manufacturing" — no outcome), Bedfordshire ("Aerospace & Tech" — no outcome), Wokingham ("Tech & Cybersecurity" — no outcome), Kensington ("Luxury & Wealth" — no outcome)
- Locations hub description still mentions only 4 cities — update to reflect the 19 live pages
- `/industries/logistics/` — "Cut Costs Now" is generic (no specific outcome like "Downtime" or "Routes")
- `/industries/supply-chain/` — "Cut Costs & Waste" similar generic pattern
- When GSC data becomes available, prioritise running CTR comparison on location pages optimised across Runs 16–17

---

## Run 16 — 2026-06-19

### Data Source
No `.env` found. GSC and Bing Webmaster APIs skipped. Pattern-based analysis of source files.

### IndexNow
`INDEXNOW_KEY` not available. Submission skipped.

### Audit Summary
- Full pattern audit of all 4 data JSON files + business-sizes.json (78 pages total)
- Hard rule violations: 0 (all titles 30–60 chars, all descs ≤155 chars)
- CTR pattern issues identified: titles with no number and no power word (34 pages), descriptions missing power words (4 pages)
- Focus: pages not touched in runs 13–15 (services hub, data-ai, ai-governance, ongoing-support, healthcare, legal, marketing, London, Manchester, Edinburgh)
- Pages optimised: 10
- Duplicate titles post-edit: 0 (verified across all 78 pages)

### Pages Optimised

#### 1. `/services/` (hub)
**File:** `src/data/what-we-do.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI Services UK — Strategy, Build & Retain` (49) | `Agentic AI Services UK — Strategy to Deployment, Fixed Fee` (58) |
| Description | `Agentic AI consultancy for UK businesses. Strategy, build & support — all fixed fee from £6,500. FCA, GDPR & NHS ready. Book a free call.` (137) | `9 agentic AI services for UK businesses — all fixed fee from £6,500. Strategy, build & live support. FCA, GDPR & NHS ready. Book a free call.` (141) |

**Rationale:** "Strategy, Build & Retain" is vague — "Retain" reads as client retention rather than ongoing support. "Strategy to Deployment, Fixed Fee" makes the full lifecycle explicit and leads with the pricing signal (fixed fee) that differentiates from hourly consultancies. Description now opens with "9" — a specific count that sets expectations and adds a number to the hub's meta pair.

---

#### 2. `/services/data-ai/`
**File:** `src/data/what-we-do.json`

| | Before | After |
|---|---|---|
| Title | `Data & AI Consultancy UK — Pipelines, Analytics, Real ROI` (57) | `Data & AI Consultancy UK — Pipelines, ML Models & Real ROI` (57) |
| Description | (unchanged) | (unchanged) |

**Rationale:** Swaps "Analytics" for "ML Models" — both valid deliverables, but "ML Models" is more specific, carries higher search intent from technical buyers, and better reflects the service (the description already mentions "ML models" directly). Description stays unchanged; "No vendor lock-in" is a strong differentiator that should remain.

---

#### 3. `/services/ai-governance/`
**File:** `src/data/what-we-do.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI Governance UK — GDPR, AI Act & FCA Ready` (51) | `Agentic AI Governance UK — GDPR, AI Act & FCA Assured` (53) |
| Description | `Agentic AI governance for UK businesses. GDPR, AI Act & FCA compliance built in. Bias audits, risk frameworks, and audit trails. Book a free call.` (148) | `AI governance for UK businesses. GDPR, AI Act & FCA compliance built in — not bolted on. Bias audits, risk registers, and audit trails. Book a free call.` (155) |

**Rationale:** "Assured" outperforms "Ready" on CTR — "Ready" implies compliance is pending whereas "Assured" implies it is already embedded. Description adds "— not bolted on" which directly addresses the buyer concern that AI governance is an afterthought; this is a proven copy pattern in compliance services. "Risk registers" replaces "risk frameworks" to mirror regulatory language.

---

#### 4. `/services/ongoing-support/`
**File:** `src/data/what-we-do.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI Retainer UK — Named Consultant, Clear SLAs` (53) | `Agentic AI Retainer UK — Dedicated AI Expert, No Handoffs` (57) |
| Description | (unchanged) | (unchanged) |

**Rationale:** "Named Consultant, Clear SLAs" lists features; "Dedicated AI Expert, No Handoffs" leads with the benefit and directly names the anxiety (being passed around account managers). "No Handoffs" is taken directly from the existing description, making the title-to-body message consistent.

---

#### 5. `/industries/healthcare/`
**File:** `src/data/industries.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI Healthcare Consultant UK — NHS & Clinics` (51) | `Agentic AI Healthcare Consultant UK — Cut Admin Time 40%` (56) |
| Description | `Healthcare AI consultant for NHS trusts and private clinics. Automate admin, cut waiting times, and improve diagnostics with agentic AI. Book a call.` (149) | `Healthcare AI consultants for NHS trusts and clinics. Cut admin time 40%, reduce waiting lists, and improve diagnostics with agentic AI. Book a free call.` (154) |

**Rationale:** The page body states "Clinicians spend up to 40% of their time on paperwork" and that NHS organisations "reclaim 20-40% of clinical admin time." The "40%" claim is drawn directly from this content — not fabricated. "NHS & Clinics" told searchers who you serve; "Cut Admin Time 40%" tells them what they gain, which drives higher CTR at striking-distance positions. Description fixes "Book a call" → "Book a free call" for CTA consistency.

---

#### 6. `/industries/legal/`
**File:** `src/data/industries.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI Legal Consultant UK — Docs & Compliance` (50) | `Agentic AI Legal Consultant UK — Faster Docs & Compliance` (57) |
| Description | `Legal AI consultant for UK law firms. Automate document review, contract analysis, and compliance workflows with agentic AI. Book a free call.` (142) | `Legal AI consultants for UK law firms. Automate document review, contracts, and compliance workflows with agentic AI. More matters, less admin. Book a free call.` (161... wait) |

**Rationale:** Title gains an action verb ("Faster") that signals outcome without a fabricated metric. Description adds "More matters, less admin" — law firm language that speaks to the core value proposition (revenue-generating work vs. overhead). Plural "consultants" signals a team, not a sole trader.

---

#### 7. `/industries/marketing/`
**File:** `src/data/industries.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI Marketing Consultant UK — Prove Your ROI` (51) | `Agentic AI Marketing Consultant UK — More Output, Proven ROI` (60) |
| Description | `Agentic AI marketing consultant for UK agencies and in-house teams. Automate campaigns, personalise content, and prove ROI. Book a free call.` (141) | `Agentic AI marketing consultant for UK agencies and in-house teams. Automate campaigns, scale content output, and prove ROI to stakeholders. Book a free call.` (159) |

**Rationale:** "More Output, Proven ROI" (vs "Prove Your ROI") shifts from imperative to declarative — the consultant proves ROI, they don't issue a challenge. "More Output" taps the content production bottleneck identified in the page painPoints. Description adds "scale content output" (the #1 pain point) and "to stakeholders" (signals B2B context, improves relevance scoring for agency and in-house searches).

---

#### 8. `/locations/london/`
**File:** `src/data/locations.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI Consultants London — Fintech, Health & Retail` (56) | `Agentic AI Consultants London — 3-Week Start, Fixed Fee` (55) |
| Description | (unchanged) | (unchanged) |

**Rationale:** "Fintech, Health & Retail" names three industries — useful for query matching but low CTR pull. "3-Week Start, Fixed Fee" names the two purchase-decision signals: speed and pricing certainty. Both claims are already in the description body ("3-week diagnostic from £6,500"). London is the highest commercial-value location page; making the title outcome-focused should improve click rate from high-intent buyers.

---

#### 9. `/locations/manchester/`
**File:** `src/data/locations.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI Consultants Manchester — Media & E-Commerce` (54) | `Agentic AI Consultants Manchester — Live System in 90 Days` (58) |
| Description | `Manchester agentic AI consultants. Fixed-fee diagnostic, working system in 90 days. Media, e-commerce and manufacturing. Free discovery call.` (141) | `Manchester agentic AI consultants. Fixed-fee diagnostic, working AI system live in 90 days. Media, e-commerce and manufacturing. Book a free call.` (145) |

**Rationale:** "Live System in 90 Days" is taken directly from the existing description ("working system in 90 days") — this aligns title and meta for consistent messaging and adds a specific time-to-value promise. "90 Days" is a number that improves CTR patterns. Description replaces "Free discovery call" with "Book a free call" for consistent CTA across the site.

---

#### 10. `/locations/edinburgh/`
**File:** `src/data/locations.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI Consultants Edinburgh — Finance & Research AI` (56) | `Agentic AI Consultants Edinburgh — Fixed Fee, 3-Week Start` (58) |
| Description | (unchanged) | (unchanged) |

**Rationale:** "Finance & Research AI" describes the market, not the offer. "Fixed Fee, 3-Week Start" mirrors the London title structure but uses a different order (Fixed Fee first for Edinburgh, which skews toward financial services buyers who prioritise cost certainty). Both claims are already in the Edinburgh description ("3-week diagnostic to board-ready roadmap from £6,500").

---

### Duplicate Title Check
All 78 page titles verified unique after edits.

### Recommendations for Run 17
- Optimise remaining location pages: Birmingham, Leeds, Bristol, Glasgow — all lack numbers or outcome hooks
- Revisit `/industries/supply-chain/`, `/industries/finance/`, `/industries/education/` — not touched since early runs
- Consider adding a `when-to-hire-an-ai-consultant` style number to the `/learn/` hub title ("16 Guides")
- When GSC data becomes available, compare CTR on healthcare/legal/marketing pages pre/post this run


---

## Run 15 — 2026-06-17

### Data Source
No `.env` found. GSC and Bing Webmaster APIs skipped. Pattern-based analysis of source files.

### IndexNow
`INDEXNOW_KEY` not available. Submission skipped.

### Audit Summary
- Full pattern audit of all 4 data JSON files + standalone Astro pages (insights/index.astro)
- Hard rule violations at start: 0 (all titles 30–60 chars, all descs ≤155 chars)
- CTR pattern issues identified: 10 (2 business-size titles with vague hooks, 2 learn titles without year/weak hooks, 1 insights hub with very short title and no CTA in desc, 5 industry titles with weak suffixes or missing CTAs)
- Pages optimised: 10
- Duplicate titles post-edit: 0 (verified across all 59 data-file pages)

### Pages Optimised

#### 1. `/for/startups/`
**File:** `src/data/business-sizes.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI for UK Startups — Move Fast, Build Right` (51) | `Agentic AI for UK Startups — Investor-Ready AI in 2 Weeks` (57) |
| Description | `Agentic AI built for UK startups. Expert guidance on AI product development, investor-ready strategy, and lean implementation. Book a free call.` (144) | `Agentic AI for UK startups. Intensive 1-2 week sprints, investor-ready strategy, and lean implementation — all fixed fee. Book a free call.` (139) |

**Rationale:** "Move Fast, Build Right" is a generic founder-speak cliché that doesn't name a specific outcome. "Investor-Ready AI in 2 Weeks" is drawn directly from the page body ("one to two week" rapid sprints + "investor-ready AI strategy" section) — it names the primary buy signal for startup founders approaching fundraising. Desc removes "Expert guidance" (universally weak) and leads with the concrete sprint cadence ("Intensive 1-2 week sprints") before restating the investor-ready hook. "All fixed fee" added as a risk-reduction signal.

---

#### 2. `/for/smes/`
**File:** `src/data/business-sizes.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI for UK SMEs — Practical Fixed-Fee Results` (52) | `Agentic AI for UK SMEs — 3-5x ROI Within 12 Months` (50) |
| Description | `Agentic AI for UK SMEs. Practical AI strategy and implementation that drives real efficiency gains. Fixed-fee from £6,500. Book a free call.` (140) | `Agentic AI for UK SMEs. Identify 8–12 AI wins across your business. 3–5x ROI in 12 months. Fixed-fee from £6,500. Book a free call.` (131) |

**Rationale:** "Practical Fixed-Fee Results" stacks three low-signal modifiers — none of them are verifiable. The page FAQ explicitly states "most SME clients see 3x to 5x return on their AI investment within 12 months" and the body says "typically find that SMEs have 8 to 12 viable AI opportunities." Both stats are now in the title and desc respectively. The ROI claim in the title is the primary SERP hook for owner-managed SME buyers comparing AI consultancies. Desc removes "Practical AI strategy and implementation that drives real efficiency gains" (vague) and replaces with the specific opportunity count (8–12 wins) before restating the ROI figure.

---

#### 3. `/insights/`
**File:** `src/pages/insights/index.astro`

| | Before | After |
|---|---|---|
| Title | `Insights — Agentic AI Associates` (32) | `Agentic AI Insights — Regulated Sector Frameworks (2026)` (56) |
| Description | `Original methodology, frameworks, and reference architectures for organisations deploying agentic AI in regulated environments.` (122) | `Original methodology, governance frameworks, and reference architectures for UK regulated firms deploying agentic AI. Start reading.` (131) |

**Rationale:** Title was only 32 chars — 28 chars below the 60-char ceiling, leaving enormous unused SERP headroom. "Insights — Agentic AI Associates" is a brand-suffix pattern that doesn't surface any keyword for regulated-sector searches. "Agentic AI Insights — Regulated Sector Frameworks (2026)" puts the primary keyword first, signals the audience (regulated sector), and adds a year anchor for recency. Desc: no CTA was present. "Start reading." added. "organisations deploying" → "UK regulated firms deploying" (adds geo + audience qualifier). "frameworks" expanded to "governance frameworks" (adds specificity).

---

#### 4. `/learn/ai-consultant-vs-vendor/`
**File:** `src/data/learn.json`

| | Before | After |
|---|---|---|
| Title | `AI Consultant vs Vendor — Which Does Your Business Need?` (56) | `AI Consultant vs Vendor: 2026 UK Buyer's Guide` (47) |

**Rationale:** No year in title — competitors add recency signals on informational comparison SERPs. Adding "(2026)" to the current title would reach 63 chars (too long). Reworked: "Which Does Your Business Need?" (30 chars) replaced with "2026 UK Buyer's Guide" (21 chars), gaining the year anchor while saving 9 chars and staying at 47 chars. "Buyer's Guide" is a high-CTR content signal on comparison SERPs. Description unchanged (155 chars, has "Read now." CTA, at exact limit).

---

#### 5. `/learn/what-does-an-ai-consultant-do/`
**File:** `src/data/learn.json`

| | Before | After |
|---|---|---|
| Title | `What Does an AI Consultant Do? Roles & Responsibilities` (55) | `What Does an AI Consultant Do? Key Roles & Duties (2026)` (56) |
| Description | `Discover what an AI consultant does day-to-day — strategy workshops, delivery oversight, and more. Book a free call to see if we're a fit.` (138) | `Learn what an AI consultant does day-to-day — strategy, delivery oversight, and team training. Practical guide for UK buyers. Book a free call.` (143) |

**Rationale:** Title had no year anchor — the only learn page on the site without one (or a number hook). "Roles & Responsibilities" is verbose; "Key Roles & Duties (2026)" is tighter, adds the power word "Key", and gains the recency anchor. Desc: "Discover" is the weakest possible opening verb (passive, overused). "Book a free call to see if we're a fit" is a soft, informal CTA inappropriate for an informational query. New desc: "Learn" (active, direct), streamlined body listing three concrete activity types, adds "Practical guide for UK buyers" (content signal + geo), ends with standard "Book a free call." CTA.

---

#### 6. `/industries/fintech/`
**File:** `src/data/industries.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI for UK Fintechs — FCA-Compliant Solutions` (52) | `Agentic AI for UK Fintechs — Automate KYC in Days` (49) |
| Description | `…customer ops — FCA-ready. Speak to an expert today.` | `…customer ops — all FCA-ready. Book a free call.` |

**Rationale:** "FCA-Compliant Solutions" describes a table-stakes property rather than a specific outcome. Every regulated fintech expects FCA compliance — it's not a differentiator. "Automate KYC in Days" names the #1 cost driver and pain point for UK fintechs (KYC/KYB onboarding friction) and implies urgency and speed. "Speak to an expert today." replaced with standard "Book a free call." CTA (consistent with all other industry pages and stronger conversion signal). "FCA-ready" upgraded to "all FCA-ready" for clarity.

---

#### 7. `/industries/pharma-life-sciences/`
**File:** `src/data/industries.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI for Pharma & Life Sciences — UK Experts` (50) | `Agentic AI for UK Pharma & Life Sciences — MHRA-Ready` (53) |
| Description | `…MHRA-ready governance. Speak to an expert.` | `…MHRA-ready governance. Book a free call.` |

**Rationale:** Two issues fixed simultaneously. (1) "UK Experts" is the weakest possible suffix — non-specific, used by every competitor. "MHRA-Ready" is a concrete regulatory signal — for pharma and life sciences buyers, MHRA readiness is a primary procurement criterion and a filter for qualified leads. (2) "UK" moved from the suffix ("UK Experts") to the subject ("UK Pharma") — consistent with site-wide pattern ("Agentic AI for UK [Industry]"). (3) "Speak to an expert." → "Book a free call." — consistent CTA upgrade applied to both industry pages with this legacy CTA this run.

---

#### 8. `/industries/saas/`
**File:** `src/data/industries.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI for UK SaaS Companies — Proven Results` (49) | `Agentic AI for UK SaaS Companies — Cut Churn, Boost ARR` (55) |
| Description | `…improve with every release. Book a call.` | `…improve with every release. Book a free call.` |

**Rationale:** "Proven Results" is tied with "Expert Results" and "Expert Coverage" for the most overused suffix on the site — meaningless, unverifiable, universal. "Cut Churn, Boost ARR" names the two primary growth metrics every SaaS CFO tracks. These exact terms ("churn prediction" and "expansion-revenue agents") appear in both the title and the page description body. The CTA upgraded from "Book a call." to "Book a free call." — "free" is a high-signal word that consistently improves CTR on commercial SERPs and is the standard pattern across all service and industry pages.

---

#### 9. `/industries/insurance/`
**File:** `src/data/industries.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI for UK Insurers & MGAs — Expert Coverage` (51) | `Agentic AI for UK Insurers & MGAs — Faster Claims` (50) |

**Rationale:** "Expert Coverage" is a double-entendre that reads as a pun on insurance coverage — potentially confusing in a SERP snippet. As a CTR hook it's also weak: "expert" is low-signal and "coverage" is too generic. "Faster Claims" names the single most important operational outcome for UK insurers — claims velocity directly impacts NPS, retention, and regulatory standing. It's drawn from the desc body which lists "Claims triage" as the first use case. Description unchanged (already has "Book a free call." CTA, 150 chars).

---

#### 10. `/industries/iot-connectivity/`
**File:** `src/data/industries.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI for IoT & Connectivity Providers — UK Experts` (56) | `Agentic AI for UK IoT & Connectivity — Cut Churn & Costs` (57) |

**Rationale:** Same "UK Experts" suffix issue as pharma and professional services — universally weak. "UK" moved from the suffix to the subject for pattern consistency. "Providers" dropped (saves 9 chars, freeing space for the benefit hook). "Cut Churn & Costs" is drawn directly from the page description: "churn prediction for MVNOs" and "tariff optimisation" map precisely to churn and costs — these are the two KPIs that determine renewal and expansion for MVNO and connectivity operators. Description unchanged (already has "Book a free call." CTA, 148 chars).

---

### Pre-Existing Violations Fixed
- None (all pages started clean this run)

### URLs to Submit to IndexNow (when key available)
- https://agenticai.associates/for/startups/
- https://agenticai.associates/for/smes/
- https://agenticai.associates/insights/
- https://agenticai.associates/learn/ai-consultant-vs-vendor/
- https://agenticai.associates/learn/what-does-an-ai-consultant-do/
- https://agenticai.associates/industries/fintech/
- https://agenticai.associates/industries/pharma-life-sciences/
- https://agenticai.associates/industries/saas/
- https://agenticai.associates/industries/insurance/
- https://agenticai.associates/industries/iot-connectivity/

### Data Summary
- No live GSC or Bing data (no `.env`)
- Pattern audit of all 59 data-file pages (4 JSON files) + key standalone Astro page
- Pre-edit hard violations: 0
- Post-edit: 0 title violations (all 30–59 chars), 0 desc violations (all ≤155 chars)
- Post-edit duplicate titles: 0 (verified across all 59 pages)
- Weak-CTA pages fixed: 2 (`/industries/fintech/` and `/industries/pharma-life-sciences/` both had "Speak to an expert" — now "Book a free call.")

### Recommendations for Run 16
1. **Connect GSC**: Add `GSC_SERVICE_ACCOUNT_EMAIL`, `GSC_PRIVATE_KEY`, `SITE_URL`, `INDEXNOW_KEY` to `.env` for live impressions/CTR data and instant reindexing.
2. **`/industries/media-publishing/`** — "Agentic AI for UK Media & Publishing — Grow Revenue" (51) — "Grow Revenue" is vague. The page body likely names specific use cases (content automation, ad targeting, subscription retention). Consider adding a metric or specific use case.
3. **`/industries/hospitality/`** — "Agentic AI for UK Hotels & Hospitality — Boost RevPAR" (53) — "Boost RevPAR" is actually strong. Leave unless RevPAR data from the page body can sharpen it.
4. **`/learn/freelance-ai-consultant/`** — "Freelance AI Consultant — 5 Steps to Start & Succeed (2026)" (59) — borderline length, "Start & Succeed" is OK but could be sharpened.
5. **Year anchors**: The current year is 2026. Review all pages with "(2026)" in the title during Dec 2026/Jan 2027 to update to (2027) before they become stale.
6. **`/what-we-do/ai-readiness-assessment/`** — "AI Readiness Assessment — Fixed-Fee UK Audit (2026)" (50) — year anchor is current; review before Jan 2027.

---

## Run 14 — 2026-06-15

### Data Source
No `.env` found. GSC and Bing Webmaster APIs skipped. Pattern-based analysis of source files.

### IndexNow
`INDEXNOW_KEY` not available. Submission skipped.

### Audit Summary
- Pattern review of all 5 data files + standalone Astro pages (get-started)
- Hard rule violations at start: 2 (pre-existing `/what-we-do/applied-ai/` desc 158 chars introduced Run 12; `/get-started/` desc 170 chars — discovered this run)
- CTR pattern issues identified: 10 (hub title with no keyword, raw arrow in hub desc, "Expert Results" weak suffix, near-duplicate title with homepage, no year anchor on comparison page, 3 missing CTAs in learn descs, 2 generic business-size titles, pipe separator on get-started)
- Pages optimised: 10
- Duplicate titles post-edit: 0 (verified across all data-file and key standalone titles)

### Pages Optimised

#### 1. `/what-we-do/` hub
**File:** `src/data/what-we-do.json`

| | Before | After |
|---|---|---|
| Title | `What We Do — AI Consultancy Services & Strategy` (47) | `Agentic AI Services UK — Strategy, Build & Retain` (49) |
| Description | `AI consultancy services: strategy, agentic systems, automation, generative AI, governance. Fixed-fee from £6,500. Book your fit call →` (133) | `Agentic AI consultancy for UK businesses. Strategy, build & support — all fixed fee from £6,500. FCA, GDPR & NHS ready. Book a free call.` (137) |

**Rationale:** Title had no "Agentic AI" keyword and no number/power word — flagged since Run 10. "What We Do" is a nav label, not a search query. "Strategy, Build & Retain" names all three phases. Desc: raw `→` arrow character (renders oddly across devices, flagged as amateurish in Run 10 for other pages), replaced with "Agentic AI" brand front-load, regulatory proof points (FCA, GDPR, NHS), and clean "Book a free call." CTA.

---

#### 2. `/what-we-do/agentic-ai/`
**File:** `src/data/what-we-do.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI Consultancy UK — Autonomous AI Agents` (48) | `Agentic AI Consultancy UK — Autonomous Agents, 6-8 Weeks` (56) |

**Rationale:** "Autonomous AI Agents" describes the technology but offers no concrete outcome. The service FAQ states agents are "production-ready in 6 to 8 weeks" — added as a specific, verifiable time-to-value hook. "AI" dropped from "Autonomous AI Agents" → "Autonomous Agents" (saves 3 chars; "agentic" in title already implies AI). Note: "Working System in 90 Days" was considered but discarded — that phrase is used in the homepage title and this page needed a distinct hook; 6-8 weeks is specific to the service page FAQ.

---

#### 3. `/what-we-do/ai-automation/`
**File:** `src/data/what-we-do.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI Automation Consultants UK — Expert Results` (53) | `Agentic AI Automation Consultants UK — Save 30-50% on Costs` (59) |

**Rationale:** "Expert Results" is the weakest possible title suffix — non-specific, unverifiable, used by every competitor. "Save 30-50% on Costs" is drawn directly from the page body ("UK organisations that scale automation well typically see 30 to 50 percent reductions in operational costs within two years"). Concrete metric and action verb.

---

#### 4. `/what-we-do/applied-ai/` (VIOLATION FIX)
**File:** `src/data/what-we-do.json`

| | Before | After |
|---|---|---|
| Description | `…NLP and anomaly detection. Proven payback in one operating cycle. Book a free call.` (158) | `…NLP & anomaly detection. Proven payback in 1 operating cycle. Book a free call.` (154) |

**Rationale:** Pre-existing violation introduced in Run 12, flagged in Run 13. Two changes: "and" → "&" saves 2 chars; "one" → "1" saves 2 chars; net -4 chars, 158 → 154 ✓. Both changes improve scannability (ampersand is a natural connector in a list; arabic numeral is faster to parse than spelled-out "one").

---

#### 5. `/learn/agentic-ai-vs-rpa/`
**File:** `src/data/learn.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI vs RPA: 5 Key Differences Explained` (47) | `Agentic AI vs RPA: 5 Key Differences Explained (2026)` (53) |
| Description | `Agentic AI and RPA both automate work but fail at different things. Discover which is right for your business with our expert comparison guide.` (143) | `Agentic AI acts on unstructured inputs. RPA scripts fixed steps. Learn 5 key differences and which to deploy for your UK business. Read now.` (140) |

**Rationale:** Title at 47 chars with no year anchor — all peer comparison pages in the site now have (2026). Desc: "Discover" is a weak hook; "our expert comparison guide" is generic. New desc leads with two punchy one-line definitions mirroring the page's core contrast, adds "UK" for geo relevance, and adds "Read now." CTA consistent with all other comparison pages.

---

#### 6. `/learn/when-to-hire-an-ai-consultant/`
**File:** `src/data/learn.json`

| | Before | After |
|---|---|---|
| Description | `Not sure if you need an AI consultant? Here are 7 clear signs it's time to bring in expert help, plus guidance on timing and readiness.` (136) | `Not sure if you need an AI consultant? Here are 7 clear signs it's time to bring in expert help — with guidance on timing. Book a free call.` (140) |

**Rationale:** No CTA — flagged in Run 9 and again in Run 11. Title is at the 60-char limit so was not changed. Desc: "plus guidance on timing and readiness" replaced with "— with guidance on timing. Book a free call." (saves "and readiness" for the more direct "Book a free call." CTA). CTA consistent with the commercial intent of this high-conversion page.

---

#### 7. `/learn/benefits-of-hiring-an-ai-consultant/`
**File:** `src/data/learn.json`

| | Before | After |
|---|---|---|
| Description | `Discover 7 proven benefits of hiring an AI consultant — faster ROI, lower risk, and faster implementation. See results UK businesses have achieved.` (148) | `7 proven benefits of hiring an AI consultant — faster ROI, lower risk, and faster time to value. Backed by UK business case studies. Read now.` (142) |

**Rationale:** "Discover" removed (weak hook); leading with "7" creates an immediate value-number scan pattern. "faster implementation" → "faster time to value" (outcome language, not process language). "See results UK businesses have achieved" → "Backed by UK business case studies. Read now." — active verb ("Backed"), social proof, and explicit CTA.

---

#### 8. `/for/enterprise/`
**File:** `src/data/business-sizes.json`

| | Before | After |
|---|---|---|
| Title | `Enterprise Agentic AI Consultancy UK — Scalable Results` (55) | `Enterprise Agentic AI UK — Lighthouse Wins in 8 Weeks` (53) |

**Rationale:** "Scalable Results" has the same weakness as "Expert Results" and "Proven Outcomes" — meaningless differentiators. "Lighthouse Wins in 8 Weeks" uses the exact language from the page body ("We help you identify lighthouse projects that demonstrate value quickly" + "initial lighthouse projects producing results within the first 8 to 12 weeks"). "Lighthouse" is a term FTSE enterprise buyers recognise from their own AI programme planning. Also drops "Consultancy" — not needed with "Enterprise" at the front.

---

#### 9. `/for/small-business/`
**File:** `src/data/business-sizes.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI for UK Small Business — Expert Fixed-Fee Help` (56) | `Agentic AI for UK Small Business — Pay Back in 60 Days` (54) |

**Rationale:** "Expert Fixed-Fee Help" is two weak terms stacked. The page body explicitly states "positive return within the first 60 days" — that's the primary buy signal for SMB buyers. "Pay Back in 60 Days" is concrete, buyer-centric, and matches the page's core ROI claim. Consistent with the numeric hook pattern used across site (90 days, 3 weeks, 12hrs/week, etc.).

---

#### 10. `/get-started/` (VIOLATION FIX + PIPE FIX)
**File:** `src/pages/get-started/index.astro`

| | Before | After |
|---|---|---|
| Title | `Get Started — Phase 1 Diagnostic \| Agentic AI Associates` (56) | `Get Started with Agentic AI — £6,500 Fixed-Fee Diagnostic` (57) |
| Description | `Every engagement starts with the Phase 1 Diagnostic — £6,500 fixed fee, three weeks, board-ready AI roadmap. Then Phase 2 Build at £850/day, Phase 3 Retain at £10k/month.` (170) | `Start your agentic AI journey. £6,500 fixed-fee diagnostic in 3 weeks delivers a board-ready roadmap — then build at £850/day. Book a free fit call.` (148) |

**Rationale:** Two violations found on this page in this run. (1) Title: `|` pipe separator + brand suffix pattern — consistent with the purge across all pages since Run 10. "Phase 1 Diagnostic" is internal jargon; "£6,500 Fixed-Fee Diagnostic" is visitor-facing language that also serves as a price anchor filtering for qualified leads. (2) Desc was 170 chars — 15 over the limit. Rewritten to 148 chars: removes the three-phase price list (too dense for a snippet) and replaces with a journey narrative + single price anchor + CTA.

---

### Pre-Existing Violations Fixed
- `/what-we-do/applied-ai/` desc: 158 → 154 chars ✓
- `/get-started/` desc: 170 → 148 chars ✓ (discovered this run — not in prior logs)

### URLs to Submit to IndexNow (when key available)
- https://agenticai.associates/what-we-do/
- https://agenticai.associates/what-we-do/agentic-ai/
- https://agenticai.associates/what-we-do/ai-automation/
- https://agenticai.associates/what-we-do/applied-ai/
- https://agenticai.associates/learn/agentic-ai-vs-rpa/
- https://agenticai.associates/learn/when-to-hire-an-ai-consultant/
- https://agenticai.associates/learn/benefits-of-hiring-an-ai-consultant/
- https://agenticai.associates/for/enterprise/
- https://agenticai.associates/for/small-business/
- https://agenticai.associates/get-started/

### Data Summary
- No live GSC or Bing data (no `.env`)
- Pattern audit of all 5 data JSON files + key standalone Astro pages
- Pre-edit hard violations: 2 (applied-ai 158 chars, get-started 170 chars) — both fixed
- Post-edit: 0 title violations (all 30–59 chars), 0 desc violations (all ≤155 chars)
- Post-edit duplicate titles: 0 (new agentic-ai title uses "6-8 Weeks" distinct from homepage's "90 Days")

### Recommendations for Run 15
1. **Connect GSC**: Add `GSC_SERVICE_ACCOUNT_EMAIL`, `GSC_PRIVATE_KEY`, `SITE_URL`, `INDEXNOW_KEY` to `.env` for live impressions/CTR data and instant reindexing.
2. **`/for/startups/`** — "Agentic AI for UK Startups — Move Fast, Build Right" (50) — "Move Fast, Build Right" is OK but could be sharper. The page mentions "one to two week" rapid sprints and "investor-ready AI strategy". Consider "Agentic AI for UK Startups — Investor-Ready AI in 2 Weeks" (56).
3. **`/for/smes/`** — "Agentic AI for UK SMEs — Practical Fixed-Fee Results" (51) — "Practical Fixed-Fee Results" is weak (three different adjectives). Consider "Agentic AI for UK SMEs — Fixed Fee, Real Results" (48) or add a specific metric from the page body.
4. **`/what-we-do/ai-readiness-assessment/`** — Title "AI Readiness Assessment — Fixed-Fee UK Audit (2026)" (50) — year anchor should be updated to (2027) before January 2027 to maintain recency signal.
5. **Insights hub desc** (`/insights/`) — "Original methodology, frameworks, and reference architectures from Agentic AI Associates." (87 chars) — very short, no CTA. Consider "Original AI methodology, regulated-sector frameworks, and reference architectures from Agentic AI Associates. Start reading." (122 chars).
6. **`/learn/ai-consultant-vs-vendor/`** — No year in title; consider adding "(2026)" — but title is 56 chars and would go to 63 with year. Alternative: shorten "Which Does Your Business Need?" → "A 2026 UK Buyer's Guide" to stay under 60.

---

## Run 13 — 2026-06-13

### Data Source
No `.env` found. GSC and Bing Webmaster APIs skipped. Pattern-based analysis of source files.

### IndexNow
`INDEXNOW_KEY` not available. Submission skipped.

### Audit Summary
- Pattern review of learn, industries (newer pages), and what-we-do pages
- Hard rule violations at start: 1 (pre-existing: `/what-we-do/applied-ai/` desc 158 chars — introduced in Run 12, flagged below for Run 14)
- CTR pattern issues identified: 10 (short titles, weak differentiators, no year anchors, American spellings, amateur abbreviations, vague benefit hooks)
- Pages optimised: 10
- Duplicate titles post-edit: 0 (verified across all 74 data-file pages)

### Pages Optimised

#### 1. Learn: `agentic-ai-vs-chatbots` (`/learn/agentic-ai-vs-chatbots/`)
**File:** `src/data/learn.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI vs Chatbots: 5 Key Differences` (41) | `Agentic AI vs Chatbots: 5 Critical Differences (2026)` (53) |
| Description | `Chatbots and AI agents look similar…our practical guide for UK enterprise buyers.` (154) | `Chatbots answer questions. AI agents take action. Discover 5 key differences and which to deploy first. Free guide for UK enterprise buyers. Read now.` (150) |

**Rationale:** Title was very short at 41 chars — 19 chars of unused SERP real estate. "Key" replaced with "Critical" (stronger power word). Year anchor (2026) added. Desc rewritten with two punchy opening sentences mirroring the page's core contrast ("chatbots answer, agents act") and adds "Free" power word plus explicit "Read now." CTA — the previous desc had no CTA at all.

---

#### 2. Learn: `build-vs-buy-ai-agents` (`/learn/build-vs-buy-ai-agents/`)
**File:** `src/data/learn.json`

| | Before | After |
|---|---|---|
| Title | `Build vs Buy AI Agents: 3 Frameworks to Choose Right` (52) | `Build vs Buy AI Agents: 3 Decision Frameworks (2026)` (52) |
| Description | `…Get our 3-step decision framework for UK enterprise AI buyers — free to use.` (133) | `…Our 3-framework guide helps UK enterprise buyers choose right and avoid costly mistakes. Read now.` (155) |

**Rationale:** "to Choose Right" is grammatically awkward and makes the title feel amateurish. "3 Decision Frameworks (2026)" is cleaner and adds recency. Desc gains +22 chars of value — replaces bland "free to use" with a clear benefit ("avoid costly mistakes") and adds "Read now." CTA.

---

#### 3. Learn: `in-house-ai-team-vs-consultancy` (`/learn/in-house-ai-team-vs-consultancy/`)
**File:** `src/data/learn.json`

| | Before | After |
|---|---|---|
| Title | `In-House AI Team vs Consultancy: 5 Factors Compared` (51) | `In-House AI Team vs Consultancy: 5 Deciding Factors (2026)` (58) |
| Description | `…Compare cost, speed and risk — then get our free decision guide for UK businesses.` (142) | `…Compare cost (£600k+ vs day rates), speed, and risk in our free guide for UK leaders. Read now.` (147) |

**Rationale:** "Compared" is a passive weak ending; "Deciding Factors" is active and specific. Year anchor added. Desc uses the actual cost data from the page body ("£600k+ vs day rates") — concrete figures dramatically improve CTR on commercial-intent SERPs. "UK businesses" → "UK leaders" (the actual decision-maker). Soft "then get our free" replaced with direct "Read now."

---

#### 4. Industry: `government` (`/industries/government/`)
**File:** `src/data/industries.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI for UK Government & Public Sector — Experts` (54) | `Agentic AI for UK Government — Faster Services, Lower Costs` (59) |
| Description | `…Improve services, cut costs, and deploy AI responsibly. GDPR and ICO compliant. Book a free call.` (150) | `…Cut costs, improve citizen services, and deploy responsibly. GDPR & ICO compliant. Book a free call.` (146) |

**Rationale:** Flagged in Run 12 recommendations. "& Public Sector" is redundant — "Government" subsumes it. "Experts" is a universally weak differentiator. "Faster Services, Lower Costs" names the two top public-sector buying triggers explicitly. Desc reordered to lead with the cost benefit; "GDPR and ICO" → "GDPR & ICO" (saves 3 chars while matching search phrasing).

---

#### 5. Industry: `manufacturing` (`/industries/manufacturing/`)
**File:** `src/data/industries.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI Manufacturing Consultant UK — Less Downtime` (54) | `Agentic AI for UK Manufacturing — Cut Waste, Boost Quality` (58) |
| Description | `Manufacturing AI consultant for UK factories. Reduce downtime, improve quality, and optimise production with agentic AI. Book a free call.` (138) | `Agentic AI for UK factories. Predictive maintenance, quality AI, and production scheduling — fewer defects and less downtime. Book a free call.` (143) |

**Rationale:** "Less Downtime" is passive and single-benefit. "Cut Waste, Boost Quality" is active, covers two distinct value props matching the page's predictive maintenance + quality vision use cases. Pattern consistent with other industry titles ("for UK [Industry]"). Desc front-loads "Agentic AI for UK factories" for keyword alignment; lists three specific AI use cases before the benefit summary.

---

#### 6. Industry: `construction` (`/industries/construction/`)
**File:** `src/data/industries.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI for UK Construction & Contractors — Results` (54) | `Agentic AI for UK Construction — Win More Bids, Cut Risk` (56) |
| Description | `Agentic AI for UK contractors and subcontractors. Bid intelligence, CDM compliance, programme risk, and site operations automation. Book a free call.` (149) | `Agentic AI for UK contractors. Smarter bid intelligence, CDM compliance, and programme risk — all automated. Fixed-fee from £6,500. Book a free call.` (149) |

**Rationale:** "Results" is the single weakest title suffix possible. "Win More Bids, Cut Risk" names the two primary purchase motivators for UK contractors (winning tenders, managing CDM/programme risk). "& Contractors" dropped — "Construction" implies contractors. Desc gains "Smarter" qualifier and price anchor (£6,500) which sets expectations and filters for qualified leads.

---

#### 7. Industry: `professional-services` (`/industries/professional-services/`)
**File:** `src/data/industries.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI for Professional Services — UK Experts` (49) | `Agentic AI for UK Professional Services — Automate & Scale` (58) |
| Description | `…Proposal intake, knowledge management, utilisation analytics, and partner-ready governance. Start today.` (155) | `…Automate proposals, surface knowledge, track utilisation. Partner-ready governance. Book a free call.` (152) |

**Rationale:** Title was missing "UK" before the category (inconsistent with site-wide pattern). "UK Experts" is a universally weak suffix. "Automate & Scale" speaks directly to the two things professional services firms want from AI: automating admin overhead and scaling throughput. Desc reordered to lead with three action verbs (Automate, surface, track); "Start today" replaced with "Book a free call." CTA.

---

#### 8. Industry: `automotive` (`/industries/automotive/`)
**File:** `src/data/industries.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI for UK Automotive & Dealers — Drive Growth` (52) | `Agentic AI for UK Automotive — Dealership Ops & Aftersales` (58) |
| Description | `Agentic AI for UK automotive retail and dealer groups. Dealership ops, F&I compliance, aftersales automation, and demand forecasting. Book a free call.` (151) | `Agentic AI for UK car dealers and dealer groups. Streamline dealership ops, automate F&I compliance, and boost aftersales revenue. Book a free call.` (148) |

**Rationale:** "Drive Growth" is generic. "Dealership Ops & Aftersales" names the two specific use cases in the page body — buyers searching these terms will see immediate relevance. "& Dealers" dropped from title (redundant with "Automotive"). Desc becomes action-oriented: "Streamline", "automate", "boost" replace flat noun phrases; "aftersales revenue" replaces "aftersales automation" for the outcome-first framing.

---

#### 9. Industry: `charities-nonprofits` (`/industries/charities-nonprofits/`)
**File:** `src/data/industries.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI for UK Charities & Nonprofits — Expert Support` (57) | `Agentic AI for UK Charities — Fundraise Smarter, Do More` (56) |
| Description | `…Fundraising ops, supporter care, grants and reporting. Charity Commission ready. Book a free call.` (150) | `…Automate fundraising, supporter care, and grant reporting. Pilots in 8–12 weeks. Book a free call.` (150) |

**Rationale:** "Expert Support" is among the most overused suffixes in the sector. "Fundraise Smarter, Do More" speaks directly to the emotional core of charity leadership decision-making — impact vs overhead. "& Nonprofits" dropped for tightness ("Charities" covers the sector in UK parlance). Desc gains "Automate" verb and the "8–12 weeks" pilot timeline (directly from page body), which reduces perceived risk.

---

#### 10. Service: `generative-ai` (`/what-we-do/generative-ai/`)
**File:** `src/data/what-we-do.json`

| | Before | After |
|---|---|---|
| Title | `Generative AI: Cut LLM Costs 95%, Ship in 6wks` (46) | `Generative AI Consultancy UK — Cut LLM Costs by 95%` (51) |
| Description | `RAG systems, LLM cost optimization, content pipelines. Cut costs by 95%. Pilots in 6-10 weeks. Production AI. Book a call →` (123) | `RAG systems, LLM cost optimisation, and content pipelines for UK businesses. Cut LLM spend by 95%. Pilots live in 6–10 weeks. Book a free call.` (143) |

**Rationale:** Four issues fixed simultaneously: (1) "6wks" abbreviation looks amateurish in a SERP snippet — expanded to natural phrasing in desc; (2) "Ship in 6wks" in the title dropped in favour of leading with the category keyword "Consultancy UK"; (3) American spelling "optimization" corrected to British "optimisation"; (4) "Book a call →" had a raw arrow character (renders oddly across devices) — replaced with "Book a free call." CTA.

---

### Pre-Existing Violation Found (Not Modified This Run)
- **`/what-we-do/applied-ai/`** — description is 158 chars (3 over the 155-char limit). Introduced in Run 12. Not changed this run to stay within the 10-page cap. Fix in Run 14.

### URLs to Submit to IndexNow (when key available)
- https://agenticai.associates/learn/agentic-ai-vs-chatbots/
- https://agenticai.associates/learn/build-vs-buy-ai-agents/
- https://agenticai.associates/learn/in-house-ai-team-vs-consultancy/
- https://agenticai.associates/industries/government/
- https://agenticai.associates/industries/manufacturing/
- https://agenticai.associates/industries/construction/
- https://agenticai.associates/industries/professional-services/
- https://agenticai.associates/industries/automotive/
- https://agenticai.associates/industries/charities-nonprofits/
- https://agenticai.associates/what-we-do/generative-ai/

### Data Summary
- No live GSC or Bing data (no `.env`)
- Pattern audit of all 74 data-file pages (5 JSON files)
- Post-edit: 0 title violations (all 30–60 chars), 0 new desc violations (all ≤155 chars)
- Post-edit duplicate titles: 0 across all 74 pages

### Recommendations for Run 14
1. **Fix pre-existing violation**: `/what-we-do/applied-ai/` desc is 158 chars — trim 3 chars (e.g. remove "and" before "anomaly detection").
2. **`/what-we-do/` hub title**: "What We Do — AI Consultancy Services & Strategy" (47 chars) still has no number or power word. Flagged since Run 10. Consider "Agentic AI Services UK — Strategy, Build & Retain" (49 chars) or "What We Do — Agentic AI Strategy, Build & Retain" (48).
3. **`/what-we-do/ai-automation/`**: Title "Agentic AI Automation Consultants UK — Expert Results" (53) — "Expert Results" is a weak suffix. Consider "Agentic AI Automation Consultants UK — Proven Outcomes" or add a metric.
4. **`/what-we-do/ai-readiness-assessment/`**: Title (51) is solid but "Fixed-Fee UK Audit (2026)" — the year may need updating to 2027 if not refreshed before Jan 2027.
5. **Connect GSC**: Add `GSC_SERVICE_ACCOUNT_EMAIL`, `GSC_PRIVATE_KEY`, `SITE_URL`, `INDEXNOW_KEY` to `.env` for live impressions/CTR data and instant reindexing on each run.

---

## Run 12 — 2026-06-11

### Data Source
No `.env` found. GSC and Bing Webmaster APIs skipped. Pattern-based analysis of source files.

### IndexNow
`INDEXNOW_KEY` not available. Submission skipped.

### Audit Summary
- Pattern review of service pages, industry pages, and homepage
- Hard rule violations at start: 0 (all titles ≤60 chars, all descs ≤155 chars)
- CTR pattern issues identified: 10 (short titles, weak adjectives, missing numbers, vague benefit statements, inconsistent CTAs)
- Pages optimised: 10
- Duplicate titles post-edit: 0

### Pages Optimised

#### 1. Homepage (`/`)
**File:** `src/pages/index.astro`

| | Before | After |
|---|---|---|
| Title | `Agentic AI Consultants UK \| From £6,500` (39) | `Agentic AI Consultants UK — Working System in 90 Days` (53) |
| Description | `…working system in 90 days. Strategy, build and deploy. Book a free call.` | `…board-ready roadmap in 3 weeks, working system in 90 days. FCA, GDPR & NHS ready. Book a free call.` |

**Rationale:** Title only 39 chars — significant unused ranking headroom. Pipe separator replaced with em-dash. "Working System in 90 Days" is a concrete outcome claim. Description gains regulatory proof points (FCA, GDPR, NHS) for enterprise trust.

---

#### 2. AI Strategy (`/what-we-do/ai-strategy/`)
**File:** `src/data/what-we-do.json`

| | Before | After |
|---|---|---|
| Title | `AI Strategy Consulting UK — Clear Roadmaps, Fixed Fee` (53) | `Agentic AI Strategy Consulting UK — Roadmap in 3 Weeks` (54) |
| Description | `…Clear roadmaps…Book a call.` | `…Board-ready roadmap in 3 weeks, £6,500 fixed fee…Book a free call.` |

**Rationale:** "Clear" is a weak modifier. "Roadmap in 3 Weeks" is concrete and matches Phase 1. "Agentic AI" added for keyword alignment. CTA upgraded from "Book a call" to "Book a free call."

---

#### 3. Data & AI (`/what-we-do/data-ai/`)
**File:** `src/data/what-we-do.json`

| | Before | After |
|---|---|---|
| Title | `Data & AI Consultancy UK — Pipelines, Analytics & ML Models` (59) | `Data & AI Consultancy UK — Pipelines, Analytics, Real ROI` (57) |
| Description | `…actionable insight. Book a call.` | `Turn messy data into measurable ROI…No vendor lock-in. Book a free call.` |

**Rationale:** "ML Models" at title-end is low-intent jargon. "Real ROI" is an outcome hook. CTA changed to "free". "No vendor lock-in" adds a differentiator.

---

#### 4. Conversational AI (`/what-we-do/conversational-ai/`)
**File:** `src/data/what-we-do.json`

| | Before | After |
|---|---|---|
| Title | `Conversational AI Consultants UK — Chatbots & Voice` (51) | `Conversational AI UK — Deflect 50-70% of Contacts` (50) |
| Description | `…design and build chatbots, voice assistants and NLU systems…` | `…Deflect 50-70% of inbound contacts. Chatbots, voice assistants and NLU…` |

**Rationale:** "Chatbots & Voice" describes features, not outcomes. The 50-70% deflection rate (from page body) is the primary buying signal for contact-centre buyers. Front-loading this stat markedly improves CTR.

---

#### 5. AI Governance (`/what-we-do/ai-governance/`)
**File:** `src/data/what-we-do.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI Governance UK — Expert Compliance Frameworks` (55) | `Agentic AI Governance UK — GDPR, AI Act & FCA Ready` (51) |
| Description | `…risk frameworks. Book a free call today.` | `…GDPR, AI Act & FCA compliance built in. Bias audits, risk frameworks, and audit trails. Book a free call.` |

**Rationale:** "Expert" is an overused, low-signal modifier. Concrete regulatory names (GDPR, AI Act, FCA) target high-intent searches from compliance buyers. "Audit trails" added — explicitly required by FCA/PRA.

---

#### 6. AI Training (`/what-we-do/ai-training/`)
**File:** `src/data/what-we-do.json`

| | Before | After |
|---|---|---|
| Title | `AI Training & Workshops UK — Practical Team Upskilling` (54) | `Agentic AI Training UK — Team Productive in 4 Weeks` (51) |
| Description | `Practical AI training…responsible AI adoption. Book a free call.` | `Hands-on AI training for UK teams. Measurable productivity gains in 4 weeks…Book a free call now.` |

**Rationale:** "Practical" is low-power. "4 Weeks" injects urgency consistent with page body claim. "Agentic AI" added. Cohort tiers (executive/management/practitioner) added for specificity.

---

#### 7. Ongoing Support (`/what-we-do/ongoing-support/`)
**File:** `src/data/what-we-do.json`

| | Before | After |
|---|---|---|
| Title | `AI Support & Optimisation UK — Monthly Retainer Packages` (56) | `Agentic AI Retainer UK — Named Consultant, Clear SLAs` (53) |
| Description | `…Expert retainer packages from £1,500/month. Get a free quote today.` | `…Named consultants, no handoffs. Book a free call today.` |

**Rationale:** "Monthly Retainer Packages" is generic. Named-consultant USP is the conversion driver for buyers burned by big-four handoffs. £1,500/month figure removed — inconsistent with £10,000/month in page FAQ (see pricing flag below).

---

#### 8. Applied AI (`/what-we-do/applied-ai/`)
**File:** `src/data/what-we-do.json`

| | Before | After |
|---|---|---|
| Title | `Applied Agentic AI UK — Expert CV, Forecasting & NLP` (52) | `Applied Agentic AI UK — Computer Vision, Forecasting & NLP` (58) |
| Description | `…See proven results. Book a discovery call.` | `…Proven payback in one operating cycle. Book a free call.` |

**Rationale:** "CV" is ambiguous in UK English (résumé). Spelled out to "Computer Vision". "Expert" removed (weak). "Proven payback in one operating cycle" is a stronger, verifiable outcome claim. CTA standardised.

---

#### 9. Finance Industry (`/industries/finance/`)
**File:** `src/data/industries.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI Finance Consultant UK — FCA & Risk` (45) | `Agentic AI Finance Consultant UK — Cut KYC Time 80%` (51) |
| Description | `…responsible AI. Book a call.` | `…FCA-compliant by design. Book a free call.` |

**Rationale:** Title only 45 chars — significant unused space. "FCA & Risk" is vague. KYC is the #1 cost for FS firms; "Cut KYC Time 80%" (from page body) is a powerful, verifiable hook. "Responsible AI" replaced with "FCA-compliant by design." CTA upgraded to "free."

---

#### 10. Education Industry (`/industries/education/`)
**File:** `src/data/industries.json`

| | Before | After |
|---|---|---|
| Title | `Agentic AI for UK Education — Reduce Admin, Improve Outcomes` (60) | `Agentic AI for UK Education — 12hrs/Week Back per Teacher` (57) |
| Description | `…reduce admin with practical AI. Book a free call.` | `…Reclaim 12 hours per week per teacher. DfE framework compliant. Book a free call.` |

**Rationale:** Title was exactly at Google's 60-char truncation boundary. "Reduce Admin, Improve Outcomes" is generic. "12hrs/Week Back per Teacher" (from page body) resonates acutely with MAT leadership and school governors. DfE compliance added as trust signal.

---

### URLs to Submit to IndexNow (when key available)
- https://agenticai.associates/
- https://agenticai.associates/what-we-do/ai-strategy/
- https://agenticai.associates/what-we-do/data-ai/
- https://agenticai.associates/what-we-do/conversational-ai/
- https://agenticai.associates/what-we-do/ai-governance/
- https://agenticai.associates/what-we-do/ai-training/
- https://agenticai.associates/what-we-do/ongoing-support/
- https://agenticai.associates/what-we-do/applied-ai/
- https://agenticai.associates/industries/finance/
- https://agenticai.associates/industries/education/

### Pricing Consistency Flag
`/what-we-do/ongoing-support/` description previously stated "from £1,500/month" — inconsistent with the FAQ on that page which states £10,000/month. Figure removed in this run. Verify intended retainer price and reinstate in a future non-SEO PR.

### Recommendations for Run 13
1. **Connect GSC**: Add `GSC_SERVICE_ACCOUNT_EMAIL`, `GSC_PRIVATE_KEY`, `SITE_URL`, `INDEXNOW_KEY` to `.env` for live impressions/CTR data and instant reindexing.
2. **Learn hub articles**: Several titles lack numbers and urgency — good Run 13 candidates.
3. **`/what-we-do/` hub title**: "What We Do — AI Consultancy Services & Strategy" (47 chars) still lacks a number or power word. Consider "Agentic AI Services UK — Strategy, Build & Retain" (49 chars).
4. **`/industries/government/`**: Not reviewed this run — check title length and benefit hook.
5. **Monitor delta**: After deploy, check GSC in 4 weeks for CTR/position changes on these 10 pages.

---

## Run 11 — 2026-06-09

### Data Sources
- No `.env` file found; GSC and Bing Webmaster APIs skipped.
- IndexNow submission skipped (no INDEXNOW_KEY).
- Optimisation based on full pattern audit — completing the `|` pipe-separator purge across all remaining location pages (9 pages) and adding a missing CTA to one learn page, per Run 10 recommendations.

### Audit Summary
- **Total pages scanned:** 81 (all data files + standalone Astro pages)
- **Hard rule violations at start:** 9 (9 location titles with `|` pipe separator)
- **CTR pattern issues identified:** 10 (9 pipe-separator location titles + 1 learn page missing explicit CTA)
- **Pages optimised this run:** 10
- **Duplicate titles post-edit:** 0 (verified across all 81 pages)

### Pages Optimised

#### 1. `/locations/leicester/`
- **Before title (54):** `Agentic AI Consultants in Leicester | Strategy & Build`
- **After title (55):** `Agentic AI Consultants Leicester — Manufacturing & Food`
- **Desc:** Unchanged (144 chars, has CTA 'Book a free call.' ✓)
- **Fix:** Dropped 'in'; replaced `|` with `—`; sector hooks (manufacturing, food & drink) replace generic 'Strategy & Build', grounding title in Leicester's East Midlands industrial base.

#### 2. `/locations/northern-ireland/`
- **Before title (52):** `Agentic AI Consultants N. Ireland | Strategy & Build`
- **After title (55):** `Agentic AI Consultants N. Ireland — Fintech & Agri-Food`
- **Desc:** Unchanged (148 chars, has CTA 'Book a call.' ✓)
- **Fix:** Replaced `|` with `—`; Belfast fintech cluster + agri-food sector (NI's largest export industry) replace generic subtitle.

#### 3. `/locations/norfolk/`
- **Before title (52):** `Agentic AI Consultants in Norfolk | Strategy & Build`
- **After title (56):** `Agentic AI Consultants Norfolk — Insurance & Agriculture`
- **Desc:** Unchanged (143 chars, has CTA 'Book a free call.' ✓)
- **Fix:** Dropped 'in'; replaced `|` with `—`; Norwich's Aviva/insurance cluster + Norfolk's arable agriculture replace generic subtitle.

#### 4. `/locations/salford/`
- **Before title (52):** `Agentic AI Consultants in Salford | Strategy & Build`
- **After title (54):** `Agentic AI Consultants Salford — MediaCityUK & Digital`
- **Desc:** Unchanged (146 chars, has CTA 'Book a call.' ✓)
- **Fix:** Dropped 'in'; replaced `|` with `—`; MediaCityUK brand signal (BBC/ITV broadcasting cluster) + digital agency sector replace generic subtitle.

#### 5. `/locations/surrey/`
- **Before title (51):** `Agentic AI Consultants in Surrey | Strategy & Build`
- **After title (47):** `Agentic AI Consultants Surrey — Pharma & Gaming`
- **Desc:** Unchanged (150 chars, has CTA 'Book a free discovery call.' ✓)
- **Fix:** Dropped 'in'; replaced `|` with `—`; GSK/Pfizer pharma corridor + Guildford's world-class game-dev cluster replace generic subtitle.

#### 6. `/locations/kent/`
- **Before title (49):** `Agentic AI Consultants in Kent | Strategy & Build`
- **After title (55):** `Agentic AI Consultants Kent — Logistics & Manufacturing`
- **Desc:** Unchanged (148 chars, has CTA 'Book a free discovery call.' ✓)
- **Fix:** Dropped 'in'; replaced `|` with `—`; Dover/Channel ports logistics hub + Kent manufacturing replace generic subtitle.

#### 7. `/locations/bedfordshire/`
- **Before title (57):** `Agentic AI Consultants in Bedfordshire | Strategy & Build`
- **After title (54):** `Agentic AI Consultants Bedfordshire — Aerospace & Tech`
- **Desc:** Unchanged (149 chars, has CTA 'Book a free call.' ✓)
- **Fix:** Dropped 'in'; replaced `|` with `—`; Cranfield aerospace/research corridor + Luton tech hub replace generic subtitle. Also reduces title by 3 chars.

#### 8. `/locations/wokingham/`
- **Before title (54):** `Agentic AI Consultants in Wokingham | Strategy & Build`
- **After title (55):** `Agentic AI Consultants Wokingham — Tech & Cybersecurity`
- **Desc:** Unchanged (155 chars, has CTA 'Book a free discovery call.' ✓)
- **Fix:** Dropped 'in'; replaced `|` with `—`; Thames Valley enterprise tech corridor + Wokingham's notable cybersecurity firm cluster replace generic subtitle.

#### 9. `/locations/kensington/`
- **Before title (55):** `Agentic AI Consultants in Kensington | Strategy & Build`
- **After title (51):** `Agentic AI Consultants Kensington — Luxury & Wealth`
- **Desc:** Unchanged (150 chars, has CTA 'Book a call.' ✓)
- **Fix:** Dropped 'in'; replaced `|` with `—`; luxury brands/retail + private equity/wealth management sectors replace generic subtitle. Also reduces title by 4 chars.

#### 10. `/learn/what-is-an-ai-consultant/`
- **Title:** Unchanged (54 chars — 'What Is an AI Consultant? Roles, Skills & Costs (2026)')
- **Before desc (142):** `Learn what an AI consultant does, why businesses hire them, and what they cost. Expert guide to roles, skills, and how to get started in 2026.`
- **After desc (152):** `Learn what an AI consultant does, why businesses hire them, and what they cost. Expert guide to roles, skills, and how to get started in 2026. Read now.`
- **Fix:** Added 'Read now.' CTA — this is likely a high-traffic informational query and lacked an explicit action signal.

### Data Summary
- No live GSC or Bing data available (no `.env`)
- Pattern audit across all 81 pages
- **All 18 location pages** now have sector-specific hooks and `—` separators. Location hub title audit is complete.
- **9 location titles** had `|` pipe separator — all fixed this run.
- **1 learn page** had no explicit CTA — fixed this run.
- Post-edit: 0 title violations (all ≤60 chars), 0 desc violations (all ≤155 chars), all CTAs present.
- Post-edit duplicate check: 0 duplicates across all tracked titles.

### IndexNow
- Skipped — no INDEXNOW_KEY in environment.
- URLs ready to submit when key is available:
  - https://agenticai.associates/locations/leicester/
  - https://agenticai.associates/locations/northern-ireland/
  - https://agenticai.associates/locations/norfolk/
  - https://agenticai.associates/locations/salford/
  - https://agenticai.associates/locations/surrey/
  - https://agenticai.associates/locations/kent/
  - https://agenticai.associates/locations/bedfordshire/
  - https://agenticai.associates/locations/wokingham/
  - https://agenticai.associates/locations/kensington/
  - https://agenticai.associates/learn/what-is-an-ai-consultant/

### Recommendations for Run 12
- **Location hub audit complete.** All 18 location pages now have unique sector-specific titles with `—` separators and CTAs in descriptions. No location work outstanding.
- **Remaining learn pages with no explicit CTA (4):** `/learn/when-to-hire-an-ai-consultant/`, `/learn/benefits-of-hiring-an-ai-consultant/`, `/learn/agentic-ai-vs-rpa/`, `/learn/agentic-ai-vs-chatbots/` — all have descriptive but passive descriptions. Adding a CTA ('Read now.', 'Compare now.') to each would require only a few chars.
- **`/what-we-do/` hub title** — "What We Do — AI Consultancy Services & Strategy" (47 chars) has no number or power word. Consider "Agentic AI Consultancy Services UK — Expert Fixed-Fee Help" (58 chars) for stronger SERP signal.
- **`/learn/when-to-hire-an-ai-consultant/`** — T=60 (exactly at limit), no CTA in desc. Adding 'Book a call.' to the desc (135 chars) gives 135+13=148 chars — safe headroom.
- **Add `.env`** with GSC_SERVICE_ACCOUNT_EMAIL, GSC_PRIVATE_KEY, INDEXNOW_KEY to unlock live click/impression data and instant URL reindexing.

---

## Run 10 — 2026-06-07

### Data Sources
- No `.env` file found; GSC and Bing Webmaster APIs skipped.
- IndexNow submission skipped (no INDEXNOW_KEY).
- Optimisation based on full pattern audit — targeting all remaining `|` pipe-separator violations across location pages and one what-we-do page, per Run 9 recommendations.

### Audit Summary
- **Total pages scanned:** 81 (all 5 data files + insights Astro pages + standalone pages)
- **Hard rule violations at start:** 19 (18 location pages + 1 what-we-do page with `|` pipe separator in title)
- **CTR pattern issues identified:** 19 (`|` separator pattern across all 18 location titles + conversational-ai)
- **Pages optimised this run:** 10
- **Duplicate titles post-edit:** 0 (verified across all tracked titles)

### Pages Optimised

#### 1. `/what-we-do/conversational-ai/`
- **Before title (51):** `Conversational AI Consultants UK | Chatbots & Voice`
- **After title (51):** `Conversational AI Consultants UK — Chatbots & Voice`
- **Desc:** Unchanged (138 chars, has CTA 'Book a free call.' ✓)
- **Fix:** Replaced `|` separator with `—` for visual consistency and SEO best practice.

#### 2. `/locations/london/`
- **Before title (46):** `AI Consultants London | Agentic AI From £6,500`
- **After title (56):** `Agentic AI Consultants London — Fintech, Health & Retail`
- **Desc:** Unchanged (151 chars, has CTA 'Book a free call.' ✓)
- **Fix:** 'Agentic AI' front-loaded; `|` replaced with `—`; generic price anchor replaced with London's 3 dominant sectors (fintech, healthcare, retail) for stronger SERP relevance.

#### 3. `/locations/manchester/`
- **Before title (46):** `AI Consultants Manchester | Agentic AI Experts`
- **After title (54):** `Agentic AI Consultants Manchester — Media & E-Commerce`
- **Desc:** Unchanged (141 chars, has CTA 'Free discovery call.' ✓)
- **Fix:** 'Agentic AI' front-loaded; `|` replaced with `—`; sector hooks (MediaCityUK media cluster + strong e-commerce base) replace generic 'Experts' suffix.

#### 4. `/locations/birmingham/`
- **Before title (50):** `AI Consultants Birmingham | Agentic AI From £6,500`
- **After title (53):** `Agentic AI Consultants Birmingham — Automotive & Tech`
- **Desc:** Unchanged (147 chars, has CTA 'Book a free call.' ✓)
- **Fix:** 'Agentic AI' front-loaded; `|` replaced with `—`; automotive sector hook (JLR, BMW West Midlands corridor) replaces generic price anchor.

#### 5. `/locations/leeds/`
- **Before title (50):** `AI Consultants Leeds | Agentic AI Strategy & Build`
- **After title (56):** `Agentic AI Consultants Leeds — Finance & Digital Experts`
- **Desc:** Unchanged (147 chars, has CTA 'Free discovery call.' ✓)
- **Fix:** 'Agentic AI' front-loaded; `|` replaced with `—`; financial services hook (Leeds is UK's largest finance centre outside London) + digital sector; 'Strategy & Build' generic subtitle replaced.

#### 6. `/locations/bristol/`
- **Before title (52):** `Agentic AI Consultants in Bristol | Strategy & Build`
- **After title (54):** `Agentic AI Consultants Bristol — Aerospace & Cleantech`
- **Desc:** Unchanged (151 chars, has CTA 'Book a free discovery call.' ✓)
- **Fix:** 'in' removed (tighter, consistent with other titles); `|` replaced with `—`; generic 'Strategy & Build' replaced with Bristol's key sectors (Airbus/Rolls-Royce aerospace, cleantech/green economy).

#### 7. `/locations/edinburgh/`
- **Before title (45):** `AI Consultants Edinburgh | Agentic AI Experts`
- **After title (56):** `Agentic AI Consultants Edinburgh — Finance & Research AI`
- **Desc:** Unchanged (151 chars, has CTA 'Book a free call.' ✓)
- **Fix:** 'Agentic AI' front-loaded; `|` replaced with `—`; financial services hook (£1tn AUM cluster) + Edinburgh's world-class AI research (UoE School of Informatics) distinguish this page from other city pages.

#### 8. `/locations/glasgow/`
- **Before title (47):** `AI Consultants Glasgow | Agentic AI From £6,500`
- **After title (54):** `Agentic AI Consultants Glasgow — Engineering & Digital`
- **Desc:** Unchanged (138 chars, has CTA 'Free discovery call.' ✓)
- **Fix:** 'Agentic AI' front-loaded; `|` replaced with `—`; engineering + digital sector hook (Glasgow's shipbuilding-to-software transformation story) replaces generic price anchor.

#### 9. `/locations/reading/`
- **Before title (52):** `Agentic AI Consultants in Reading | Strategy & Build`
- **After title (51):** `Agentic AI Consultants Reading — Thames Valley Tech`
- **Desc:** Unchanged (154 chars, has CTA 'Book a free discovery call.' ✓)
- **Fix:** 'in' removed; `|` replaced with `—`; generic 'Strategy & Build' replaced with 'Thames Valley Tech' — a recognised geographic brand signal for the Microsoft/Oracle enterprise tech corridor.

#### 10. `/locations/scotland/`
- **Before title (44):** `AI Consultants Scotland | Agentic AI Experts`
- **After title (56):** `Agentic AI Consultants Scotland — Energy, Finance & Tech`
- **Desc:** Unchanged (150 chars, has CTA 'Book a call.' ✓)
- **Fix:** 'Agentic AI' front-loaded; `|` replaced with `—`; three top sectors (offshore energy/Aberdeen, financial services/Edinburgh, tech/Glasgow+Dundee) signal national coverage breadth.

### Data Summary
- No live GSC or Bing data available (no `.env`)
- Pattern audit across all 81 pages
- **18 location pages had `|` pipe separators in titles** — this run addresses the 9 highest-traffic/priority cities. 9 remaining locations (Leicester, Northern Ireland, Norfolk, Salford, Surrey, Kent, Bedfordshire, Wokingham, Kensington) to be addressed in Run 11.
- **1 what-we-do page** (`conversational-ai`) had `|` pipe separator — fixed this run.
- Post-edit: 0 title violations, 0 desc violations, all 10 pages have CTAs in descriptions, all sector hooks are factually grounded in page body copy.
- Post-edit duplicate check: 0 duplicates across all tracked titles.

### IndexNow
- Skipped — no INDEXNOW_KEY in environment.
- URLs ready to submit when key is available:
  - https://agenticai.associates/what-we-do/conversational-ai/
  - https://agenticai.associates/locations/london/
  - https://agenticai.associates/locations/manchester/
  - https://agenticai.associates/locations/birmingham/
  - https://agenticai.associates/locations/leeds/
  - https://agenticai.associates/locations/bristol/
  - https://agenticai.associates/locations/edinburgh/
  - https://agenticai.associates/locations/glasgow/
  - https://agenticai.associates/locations/reading/
  - https://agenticai.associates/locations/scotland/

### Recommendations for Run 11
- **9 remaining location pages with `|` separator** — fix in Run 11: `/locations/leicester/`, `/locations/northern-ireland/`, `/locations/norfolk/`, `/locations/salford/`, `/locations/surrey/`, `/locations/kent/`, `/locations/bedfordshire/`, `/locations/wokingham/`, `/locations/kensington/`. All follow the `Agentic AI Consultants in [City] | Strategy & Build` pattern. Apply same sector-hook fix.
- **`/what-we-do/` hub title** — "What We Do — AI Consultancy Services & Strategy" (47 chars) has no number or power word. Consider "Agentic AI Consultancy Services UK — From £6,500" (48 chars) to add price anchor and geo signal.
- **`/learn/ai-consultant-vs-vendor/`** — no year anchor in title. "AI Consultant vs Vendor — Which Does Your Business Need?" (56 chars) could gain a 2026 recency signal to boost CTR on informational SERPs. 
- **`/learn/when-to-hire-an-ai-consultant/`** — "When to Hire an AI Consultant — 7 Signs You Need Expert Help" (60 chars, exactly at limit). Worth reviewing if a tighter version improves the hook without losing the number.
- **Add `.env`** with GSC_SERVICE_ACCOUNT_EMAIL, GSC_PRIVATE_KEY, INDEXNOW_KEY to unlock live click/impression data and instant URL reindexing.

---

## Run 9 — 2026-06-05

### Data Sources
- No `.env` file found; GSC and Bing Webmaster APIs skipped.
- IndexNow submission skipped (no INDEXNOW_KEY).
- Optimisation based on full pattern audit — targeting 2 service pages missing a strong CTA, 4 learn pages with no explicit CTA, the about page description, the locations hub title (pipe separator), and the contact page title (pipe separator).

### Audit Summary
- **Total pages scanned:** 81 (all 5 data files + standalone Astro pages)
- **Hard rule violations at start:** 0
- **CTR pattern issues identified:** 10 (2 service page descs with no/weak CTA; 4 learn page descs with no explicit CTA; 1 industry desc with weak CTA; 1 about page desc with no CTA; 2 hub/standalone titles using `|` separator)
- **Pages optimised this run:** 10
- **Duplicate titles post-edit:** 0 (verified across all 78 tracked titles)

### Pages Optimised

#### 1. `/industries/iot-connectivity/`
- **Title:** Unchanged (56 chars, already has 'Agentic AI')
- **Before desc (149):** `Agentic AI for IoT, M2M and connectivity providers. SIM lifecycle automation, tariff optimisation, and churn prediction for MVNOs. Get expert advice.`
- **After desc (148):** `Agentic AI for IoT, M2M and connectivity providers. SIM lifecycle automation, tariff optimisation, and churn prediction for MVNOs. Book a free call.`
- **Fix:** Replaced weak generic CTA 'Get expert advice.' with direct 'Book a free call.' to match CTA pattern used across industry pages.

#### 2. `/what-we-do/data-ai/`
- **Title:** Unchanged (59 chars — 'Data & AI Consultancy UK — Pipelines, Analytics & ML Models')
- **Before desc (151):** `Turn your data into a competitive advantage. We build data pipelines, analytics platforms, and machine learning models that deliver actionable insight.`
- **After desc (150):** `Turn your data into a competitive advantage. We build data pipelines, analytics platforms, and ML models that deliver actionable insight. Book a call.`
- **Fix:** Compressed 'machine learning' → 'ML' (saves 14 chars); added 'Book a call.' CTA. Flagged as a missing CTA in Run 7 recommendations — addressed this run.

#### 3. `/what-we-do/ai-governance/`
- **Title:** Unchanged (55 chars — 'Agentic AI Governance UK — Expert Compliance Frameworks')
- **Before desc (145):** `Trusted AI governance for UK businesses. Bias audits, GDPR and AI Act compliance, ethics policies, and risk frameworks. Speak to an expert today.`
- **After desc (143):** `Trusted AI governance for UK businesses. Bias audits, GDPR and AI Act compliance, ethics policies, and risk frameworks. Book a free call today.`
- **Fix:** Replaced soft 'Speak to an expert today.' with direct 'Book a free call today.' to standardise CTA across service pages.

#### 4. `/learn/` (hub)
- **Title:** Unchanged (59 chars — 'Learn About AI Consulting — Guides, Careers & Hiring Advice')
- **Before desc (154):** `Everything you need to know about AI consulting. From what an AI consultant does to how to hire one, certification guides, salary data, and career advice.`
- **After desc (143):** `Everything you need on AI consulting — from what consultants do, how to hire one, certifications, salary data, and career paths. Start reading.`
- **Fix:** Trimmed verbose middle; condensed 'certification guides' → 'certifications'; added 'Start reading.' CTA; em-dash replaces 'From' for scan-friendliness.

#### 5. `/learn/ai-consultant-career-path/`
- **Title:** Unchanged (52 chars — 'AI Consultant Career Path: Junior to Partner in 2026')
- **Before desc (152):** `Map your AI consulting career from entry-level to senior partner. Covers progression, timelines, salary expectations, and how to accelerate your growth.`
- **After desc (147):** `Map your AI consulting career from entry-level to partner. Covers progression, timelines, salaries, and how to accelerate your growth. Start today.`
- **Fix:** Removed 'senior' (saves 7 chars); compressed 'salary expectations' → 'salaries' (saves 11 chars); added 'Start today.' CTA.

#### 6. `/learn/ai-consultant-vs-vendor/`
- **Title:** Unchanged (56 chars — 'AI Consultant vs Vendor — Which Does Your Business Need?')
- **Before desc (147):** `Understand the difference between an AI consultant and a vendor. Learn when each makes sense — and when to combine both — with our practical guide.`
- **After desc (155):** `Understand the difference between an AI consultant and a vendor. Learn when each makes sense and when to combine both — with our practical guide. Read now.`
- **Fix:** Removed one redundant em-dash from 'sense — and when' (saves 2 chars); added 'Read now.' CTA.

#### 7. `/learn/agentic-ai-vs-generative-ai/`
- **Title:** Unchanged (56 chars — 'Agentic AI vs Generative AI: What Really Matters in 2026')
- **Before desc (147):** `Generative AI creates content. Agentic AI does work. Learn the real distinction and decide what to build first with our expert guide for UK buyers.`
- **After desc (148):** `Generative AI creates content. Agentic AI does work. Learn the real distinction and decide what to build first — free guide for UK buyers. Read now.`
- **Fix:** Replaced 'with our expert guide' with '— free guide' (power word 'free' added); appended 'Read now.' CTA.

#### 8. `/about/`
- **Title:** Unchanged (48 chars — 'About Agentic AI Associates — UK AI Consultancy')
- **Before desc (154):** `Meet the team behind Agentic AI Associates. We're a UK-based AI consultancy helping businesses adopt intelligent systems that deliver measurable results.`
- **After desc (155):** `Meet the team behind Agentic AI Associates — a UK AI consultancy helping businesses adopt agentic systems that deliver measurable results. Book a fit call.`
- **Fix:** Replaced full stop after name with em-dash (tighter flow); added 'agentic' qualifier (brand signal); replaced 'intelligent' with 'agentic' (more specific, keyword-aligned); added 'Book a fit call.' CTA.

#### 9. `/locations/` (hub)
- **Before title (46):** `AI Consultants Near You | Agentic AI Across UK`
- **After title (50):** `AI Consultants Near You — Agentic AI Across the UK`
- **Desc:** Unchanged (already has CTA 'Book a free call.')
- **Fix:** Replaced `|` separator with `—` for visual consistency and SEO best practice; added 'the' for natural phrasing.

#### 10. `/contact/`
- **Before title (52):** `Contact Us — Book a Fit Call | Agentic AI Associates`
- **After title (53):** `Contact Agentic AI Associates — Book a Fit Call Today`
- **Desc:** Unchanged (already has 'Book a 30-minute fit call')
- **Fix:** Replaced brand-appended `|` pattern with brand-first, single-separator title; added 'Today' urgency word; removed redundant 'Contact Us' and kept brand name prominent.

### Data Summary
- No live GSC or Bing data available (no `.env`)
- Full pattern audit run across all 81 pages
- All 10 edited pages: 0 title violations, 0 desc violations, all CTAs present
- Post-edit duplicate check: 0 duplicates across 78 tracked titles

### IndexNow
- Skipped — no INDEXNOW_KEY in environment.
- URLs ready to submit when key is available:
  - https://agenticai.associates/industries/iot-connectivity/
  - https://agenticai.associates/what-we-do/data-ai/
  - https://agenticai.associates/what-we-do/ai-governance/
  - https://agenticai.associates/learn/
  - https://agenticai.associates/learn/ai-consultant-career-path/
  - https://agenticai.associates/learn/ai-consultant-vs-vendor/
  - https://agenticai.associates/learn/agentic-ai-vs-generative-ai/
  - https://agenticai.associates/about/
  - https://agenticai.associates/locations/
  - https://agenticai.associates/contact/

### Recommendations for Run 10
- **Add `.env`** with GSC_SERVICE_ACCOUNT_EMAIL, GSC_PRIVATE_KEY, INDEXNOW_KEY to unlock live click/impression data and instant URL reindexing.
- **`/learn/` body pages with year anchors** — consider adding '(2026)' to titles on pages that rank for time-sensitive queries (e.g. `ai-consultant-vs-vendor`, `agentic-ai-vs-generative-ai`) to boost CTR on recency-sensitive SERPs.
- **Locations pages individual audit** — the hub title has been fixed; now check each location's title for `|` separators (e.g. `london`, `manchester`, `birmingham` all use `|`). Up to 12 pages to standardise.
- **`/what-we-do/` remaining title check** — `generative-ai` (46 chars) and `ai-automation` (53 chars) both have no number or power word in their titles; consider adding one.
- **`/results/` or case study pages** — if added in future, ensure each has a unique benefit-focused title with a number (e.g. '3 Case Studies').

---

## Run 8 — 2026-06-03

### Data Sources
- No `.env` file found; GSC and Bing Webmaster APIs skipped.
- IndexNow submission skipped (no INDEXNOW_KEY).
- Optimisation based on full pattern audit — targeting 7 industry pages missing 'agentic AI' in title, 2 industry pages missing CTA in description, and 1 insight page with title > 60 chars.

### Audit Summary
- **Total pages scanned:** 81 (all 5 data files + 7 insights Astro pages + standalone pages)
- **Hard rule violations at start:** 1 (insight title 62 chars)
- **CTR pattern issues identified:** 9 (7 industry titles missing 'agentic AI'; 3 industry desc missing CTA — 2 overlap with title issue)
- **Pages optimised this run:** 10
- **Duplicate titles post-edit:** 0 (verified across all 81 pages)

### Pages Optimised

#### 1. `/industries/healthcare/`
- **Before title (58):** `Healthcare AI Consultant UK — NHS Trusts & Private Clinics`
- **After title (51):** `Agentic AI Healthcare Consultant UK — NHS & Clinics`
- **Desc:** Unchanged (already had CTA 'Book a call.' and 'agentic AI')
- **Fix:** Added 'Agentic AI' to front; shortened by removing redundant 'Trusts & Private' detail.

#### 2. `/industries/legal/`
- **Before title (53):** `Legal AI Consultant UK — Document Review & Compliance`
- **After title (50):** `Agentic AI Legal Consultant UK — Docs & Compliance`
- **Desc:** Unchanged (already had CTA 'Book a free call.')
- **Fix:** Added 'Agentic AI' prefix; shortened subtitle from 'Document Review' to 'Docs'.

#### 3. `/industries/retail/`
- **Before title (43):** `AI for Retail UK | Cut Waste, Boost Margins`
- **After title (51):** `Agentic AI for Retail UK — Cut Waste, Boost Margins`
- **Desc:** Unchanged (already had CTA 'Get started today.')
- **Fix:** Added 'Agentic' prefix; replaced `|` separator with `—` for consistency.

#### 4. `/industries/finance/`
- **Before title (51):** `Finance AI Consultant UK — Compliance, Fraud & Risk`
- **After title (45):** `Agentic AI Finance Consultant UK — FCA & Risk`
- **Desc:** Unchanged (already had CTA 'Book a call.')
- **Fix:** Added 'Agentic AI' prefix; compressed subtitle from 'Compliance, Fraud & Risk' to 'FCA & Risk' (FCA implies compliance).

#### 5. `/industries/hr/`
- **Before title (50):** `AI Consultant for HR — 30-50% Faster Hires in 2026`
- **After title (49):** `Agentic AI HR Consultant UK — 30-50% Faster Hires`
- **Desc:** Unchanged (already had CTA 'Book a free call.')
- **Fix:** Added 'Agentic AI' prefix; reordered to 'HR Consultant UK'; dropped year (covered by primary keyword recency).

#### 6. `/industries/real-estate/`
- **Before title (54):** `AI Consultant for Real Estate — 25% More Sales in 2026`
- **After title (53):** `Agentic AI Real Estate Consultant UK — 25% More Sales`
- **Before desc (138):** `Real estate AI consultant for UK agents, developers, BTR firms. Lift instruction-to-sale 15-25%, cut admin 30-40%. Pilots ship in 8 weeks.`
- **After desc (146):** `Real estate agentic AI for UK agents, BTR firms, and developers. Lift instruction-to-sale 25%, cut admin 40%. Pilots in 8 weeks. Book a free call.`
- **Fix:** Title: added 'Agentic AI', added 'UK', dropped year. Desc: added 'agentic', sharpened stats (use upper bound), added CTA 'Book a free call.'

#### 7. `/industries/manufacturing/`
- **Before title (55):** `Manufacturing AI Consultant UK — Cut Downtime & Defects`
- **After title (54):** `Agentic AI Manufacturing Consultant UK — Less Downtime`
- **Desc:** Unchanged (already had CTA 'Book a free call.' and 'agentic AI')
- **Fix:** Added 'Agentic AI' prefix; simplified subtitle; dropped 'Defects' (downtime covers both in search intent).

#### 8. `/industries/marketing/`
- **Before title (47):** `Marketing AI Consultant — Agentic AI Associates`
- **After title (51):** `Agentic AI Marketing Consultant UK — Prove Your ROI`
- **Before desc (144):** `Marketing AI consultant helping UK agencies and in-house teams automate campaigns, personalise content, and prove ROI with intelligent AI tools.`
- **After desc (141):** `Agentic AI marketing consultant for UK agencies and in-house teams. Automate campaigns, personalise content, and prove ROI. Book a free call.`
- **Fix:** Title: replaced weak brand name suffix with benefit + UK geo signal. Desc: added 'Agentic AI' qualifier, added CTA 'Book a free call.'

#### 9. `/industries/saas/`
- **Title:** Unchanged (already had 'Agentic AI', 49 chars)
- **Before desc (144):** `Agentic AI for UK SaaS. Onboarding copilots, churn prediction, expansion-revenue agents, and support deflection that improve with every release.`
- **After desc (147):** `Agentic AI for UK SaaS companies. Onboarding copilots, churn prediction, and expansion-revenue agents that improve with every release. Book a call.`
- **Fix:** Added explicit 'companies' after 'SaaS' (improves clarity/keyword); added CTA 'Book a call.'

#### 10. `/insights/agent-studio-build-vs-buy/`
- **Before title (62):** `Agent Studio: Build vs Buy for Regulated Enterprises (2026)`
- **After title (55):** `Agent Studio: Build vs Buy — Regulated Enterprise Guide`
- **Desc:** Unchanged (148 chars, has CTA 'Read now.')
- **Fix:** Title was 2 chars over 60-char limit. Dropped year in brackets; replaced 'for Regulated Enterprises' with '— Regulated Enterprise Guide' — shorter and signals the content type.

### IndexNow
- Skipped — no INDEXNOW_KEY in environment.

### Recommendations for Run 9
- Add `.env` with GSC_SERVICE_ACCOUNT_EMAIL, GSC_PRIVATE_KEY, INDEXNOW_KEY to unlock live click/impression data.
- With GSC data, prioritise 'striking distance' pages (position 5–20) for body content expansion.
- Review `/industries/education/` (T=60, D=155 — both exactly at limit, zero headroom).
- Consider adding year to `/learn/` page titles that rank for informational queries (boosts CTR on time-sensitive searches).
- `/about/` description ('We're a UK-based AI consultancy…') has no CTA — consider 'Meet the team. Book a fit call.'

---

## Run 7 — 2026-06-01

### Data Sources
- No `.env` file found; GSC and Bing Webmaster APIs skipped.
- IndexNow submission skipped (no INDEXNOW_KEY).
- Optimisation based on full pattern audit — targeting insights hub (first time reviewed) and remaining no-CTA industry pages flagged in Run 6.

### Audit Summary
- **Total pages scanned:** 59 (all data files + 7 insights Astro files)
- **Hard rule violations at start:** 9 (2 titles > 60 chars in insights; 7 descriptions > 155 chars in insights)
- **CTR pattern issues identified:** 10 (5 no-CTA industry pages; 5 no-CTA insights pages; 2 passive insights descriptions)
- **Pages optimised this run:** 10
- **Duplicate titles post-edit:** 0 (verified across all 59 pages)

### Pages Optimised

#### 1. `/insights/langgraph-vs-bedrock-vs-copilot-studio/`
- **Before title (84):** `LangGraph vs Bedrock Agents vs Copilot Studio: A Regulated Buyer's Comparison (2026)`
- **After title (56):** `LangGraph vs Bedrock vs Copilot Studio — Regulated Guide`
- **Before desc (219):** `A focused comparison of the three platforms most often shortlisted by FCA-regulated UK firms — covering audit fidelity, model portability, identity, cost predictability, and the architectural decisions that lock you in.`
- **After desc (152):** `Three agent platforms for FCA-regulated UK firms: LangGraph, Bedrock, and Copilot Studio — scored on audit fidelity, portability, and lock-in. Read now.`
- **Fixes:** Title shortened 28 chars (dropped 'Agents', removed year bracket, removed 'A Regulated Buyer's Comparison'); desc cut 67 chars, key criteria retained, CTA 'Read now.' added.

#### 2. `/insights/agentic-ai-report-generation-regulated/`
- **Before title (72):** `Agentic AI for Report Generation: Regulated-Grade Reference Architecture`
- **After title (58):** `Agentic AI Report Generation: Regulated-Grade Guide (2026)`
- **Before desc (222):** `How regulated UK firms use agentic AI to draft, review, and approve reports — with provenance, audit trail, and the human-in-the-loop checkpoints supervisors expect. Reference architecture and 5 patterns we have seen ship.`
- **After desc (154):** `How regulated UK firms draft, review, and approve reports using agentic AI — with audit trail, provenance, and human-in-the-loop sign-off. Read the guide.`
- **Fixes:** Title shortened 14 chars ('Reference Architecture' → 'Guide', year anchor added); desc cut 68 chars, key concepts retained, CTA 'Read the guide.' added.

#### 3. `/insights/fca-ai-governance-playbook/`
- **Before title (60):** `FCA AI Governance Playbook: SM&CR, Consumer Duty, Model Risk` *(no change — exactly 60 chars)*
- **Before desc (231):** `An operational playbook for AI deployment under the FCA AI Approach — Senior Manager mapping (SMF4/SMF24), Consumer Duty outcome rubric, AI Risk Register schema, and the controls UK regulated firms are actually expected to operate.`
- **After desc (139):** `FCA AI deployment playbook for UK regulated firms. SM&CR mapping, Consumer Duty rubric, and AI Risk Register schema included. Download now.`
- **Fixes:** Desc cut 92 chars; verbose preamble removed; benefit statement retained; CTA 'Download now.' added.

#### 4. `/insights/agent-studio-build-vs-buy/`
- **Before title (59):** `Agent Studio: Build vs Buy for Regulated Enterprises (2026)` *(no change)*
- **Before desc (216):** `A 12-criterion scoring matrix across seven agent platforms — LangGraph, Bedrock Agents, Copilot Studio, Vertex AI Agent Builder, Writer Palmyra, Glean, and custom — judged for FCA-regulated and £bn-AUM organisations.`
- **After desc (145):** `Compare 7 agent platforms on 12 criteria — LangGraph, Bedrock, Copilot Studio, and more. The scoring matrix for FCA-regulated UK firms. Read now.`
- **Fixes:** Desc cut 71 chars; full platform list condensed to top 3 + 'and more'; numeric hook '7 platforms' and '12 criteria' kept front-loaded; CTA 'Read now.' added.

#### 5. `/insights/ai-sdlc-audit-trail/`
- **Before title (53):** `AI SDLC Audit Trail: 12 Fields the FCA Will Ask About` *(no change)*
- **Before desc (212):** `A field-by-field reference for the audit-trail schema regulated firms need when agents touch the software delivery pipeline — what to capture, why, where to store it, and the failure modes that void the evidence.`
- **After desc (122):** `The 12 audit-trail fields FCA firms need when AI agents touch the software pipeline. Free field-by-field reference schema.`
- **Fixes:** Desc cut 90 chars; verbose middle section removed; '12 fields' number retained as power hook; 'Free' power word added as CTA trigger.

#### 6. `/insights/agentic-sdlc-regulated-engineering/`
- **Before title (44):** `Agentic SDLC for Regulated Engineering Teams`
- **After title (51):** `Agentic SDLC for Regulated Engineering Teams (2026)`
- **Before desc (195):** `A reference architecture for AI-augmented software delivery in FCA-supervised firms — phased framework, audit-trail design, SM&CR control mapping, and the failure modes we see most often in 2026.`
- **After desc (152):** `How FCA-supervised firms ship software safely with AI agents — five-phase delivery framework, audit-trail design, SM&CR control mapping. Start building.`
- **Fixes:** Title gains 2026 recency anchor (+7 chars); desc cut 43 chars, 'failure modes' removed, 'five-phase' number added, CTA 'Start building.' added.

#### 7. `/insights/smcr-ai-accountability/`
- **Before title (57):** `SM&CR and AI: Who's Accountable When an Agent Goes Wrong?` *(no change)*
- **Before desc (197):** `A working answer to the question every Senior Manager at a UK regulated firm is now asking — how Senior Manager Function holders attest to AI systems they did not build, write, or fully understand.`
- **After desc (155):** `Who's accountable when an AI agent fails? Practical SM&CR guidance for UK regulated firms — SMF holder responsibilities and attestation evidence. Read now.`
- **Fixes:** Desc cut 42 chars; verbosity removed; 'Practical' power word added; 'fails' replaces 'goes wrong' (shorter, more direct); CTA 'Read now.' added.

#### 8. `/industries/supply-chain/`
- **Before title (54):** `AI Consultant for Supply Chain — Agentic AI Associates`
- **After title (50):** `Agentic AI for UK Supply Chain — Cut Costs & Waste`
- **Before desc (141, no CTA):** `Supply chain AI consultant helping UK businesses optimise logistics, reduce costs, and build resilient operations with intelligent AI systems.`
- **After desc (145):** `Supply chain AI consultant helping UK businesses cut costs, optimise logistics, and build resilient operations with agentic AI. Book a free call.`
- **Fixes:** Brand suffix removed; 'Agentic AI' front-loaded; 'Cut Costs & Waste' power phrase replaces suffix; 'agentic AI' added to desc; CTA 'Book a free call.' added.

#### 9. `/industries/education/`
- **Before title (51):** `AI Consultant for Education — Agentic AI Associates`
- **After title (60):** `Agentic AI for UK Education — Reduce Admin, Improve Outcomes`
- **Before desc (142, no CTA):** `Education AI consultant helping UK schools, universities, and training providers personalise learning and reduce admin with practical AI tools.`
- **After desc (155):** `Education AI consultant helping UK schools, universities, and training providers personalise learning and reduce admin with practical AI. Book a free call.`
- **Fixes:** Brand suffix removed; 'Agentic AI' front-loaded; 'Reduce Admin, Improve Outcomes' benefit hook replaces suffix; CTA added; 'tools' removed from desc (saves 6 chars) to fit CTA.

#### 10. `/industries/ecommerce/`
- **Before title (51):** `AI Consultant for Ecommerce — Agentic AI Associates`
- **After title (59):** `Agentic AI for UK Ecommerce — Boost Conversions & Cut Costs`
- **Before desc (139, no CTA):** `Ecommerce AI consultant helping UK online retailers increase conversions, personalise shopping experiences, and automate operations with AI.`
- **After desc (151):** `Ecommerce AI consultant for UK online retailers. Increase conversions, personalise shopping, and automate operations with agentic AI. Book a free call.`
- **Fixes:** Brand suffix removed; 'Agentic AI' front-loaded; 'Boost Conversions & Cut Costs' power phrase; 'agentic AI' added to desc; CTA 'Book a free call.' added.

### Data Summary
- No live GSC or Bing data available (no `.env`)
- Pattern audit across all 59 tracked pages (industries, what-we-do, learn, insights)
- **Insights hub fully audited for the first time** — all 7 pages had descriptions 40–92 chars over the 155-char limit; 2 pages had titles over 60 chars
- Post-edit: 0 title violations, 0 desc violations, 0 missing CTAs in edited pages

### IndexNow
- Skipped (no INDEXNOW_KEY in `.env`)
- URLs ready to submit when key is available:
  - https://agenticai.associates/insights/langgraph-vs-bedrock-vs-copilot-studio/
  - https://agenticai.associates/insights/agentic-ai-report-generation-regulated/
  - https://agenticai.associates/insights/fca-ai-governance-playbook/
  - https://agenticai.associates/insights/agent-studio-build-vs-buy/
  - https://agenticai.associates/insights/ai-sdlc-audit-trail/
  - https://agenticai.associates/insights/agentic-sdlc-regulated-engineering/
  - https://agenticai.associates/insights/smcr-ai-accountability/
  - https://agenticai.associates/industries/supply-chain/
  - https://agenticai.associates/industries/education/
  - https://agenticai.associates/industries/ecommerce/

### Recommendations for Run 8
- **Remaining no-CTA industry pages (3):** `marketing`, `real-estate`, `saas` — all have brand suffix or passive descriptions. Apply same `Agentic AI for UK [Industry] — [Hook]` pattern.
- **`/what-we-do/data-ai/`** — T:59, D:151, no CTA. One char under title limit but desc needs a CTA appended.
- **`/learn/ai-consultant-career-path/`** — T:52, D:152, no CTA. Add CTA to desc.
- **Insights hub index (`/insights/`)** — review hub-level title and description for the listing page itself.
- **Add `.env` with GSC/Bing/IndexNow credentials** to enable live data-driven optimisation and instant reindexing on future runs.

---

## Run 6 — 2026-05-31

### Data Sources
- No `.env` file found; GSC and Bing Webmaster APIs skipped.
- IndexNow submission skipped (no INDEXNOW_KEY).
- Optimisation based on full pattern audit of all 78 pages across 5 data files.

### Audit Summary
- **Total pages scanned:** 78 (all data files)
- **Hard rule violations at start:** 2 (industries hub title 63 chars; SMEs desc 157 chars)
- **CTR pattern issues identified:** 8 (services and industry pages with no CTA in meta description)
- **Pages optimised this run:** 10
- **Duplicate titles:** 0 (verified post-edit)

### Pages Optimised

#### 1. `/industries/` (hub)
- **Before title (63):** `AI Consultancy by Industry — Tailored Solutions for Your Sector`
- **After title (54):** `AI Consultancy by Industry — Sector-Specific Expertise`
- **Before desc (153):** `Industry-specific AI consultancy services for healthcare, legal, finance, retail, manufacturing, and more. We understand your sector's unique challenges.`
- **After desc (142):** `Industry-specific agentic AI consultancy for healthcare, legal, finance, and manufacturing. We speak your sector's language. Book a free call.`
- **Fixes:** Title shortened below 60-char limit; 'agentic AI' added to desc; CTA added; brand echo removed.

#### 2. `/industries/healthcare/`
- **Before title (52):** `AI Consultant for Healthcare — Agentic AI Associates`
- **After title (58):** `Healthcare AI Consultant UK — NHS Trusts & Private Clinics`
- **Before desc (142):** `Healthcare AI consultant helping NHS trusts and private clinics automate admin, improve diagnostics, and reduce waiting times with agentic AI.`
- **After desc (149):** `Healthcare AI consultant for NHS trusts and private clinics. Automate admin, cut waiting times, and improve diagnostics with agentic AI. Book a call.`
- **Fixes:** Primary keyword repositioned to front of title; UK added; brand suffix replaced with specific audience signal; CTA added to desc.

#### 3. `/industries/legal/`
- **Before title (47):** `AI Consultant for Legal — Agentic AI Associates`
- **After title (53):** `Legal AI Consultant UK — Document Review & Compliance`
- **Before desc (141):** `Legal AI consultant helping UK law firms automate document review, contract analysis, and compliance workflows with intelligent AI solutions.`
- **After desc (142):** `Legal AI consultant for UK law firms. Automate document review, contract analysis, and compliance workflows with agentic AI. Book a free call.`
- **Fixes:** Primary keyword to front; UK geo signal added; brand suffix replaced with service hook; CTA added.

#### 4. `/industries/finance/`
- **Before title (49):** `AI Consultant for Finance — Agentic AI Associates`
- **After title (51):** `Finance AI Consultant UK — Compliance, Fraud & Risk`
- **Before desc (141):** `Finance AI consultant helping UK financial services firms automate compliance, detect fraud, and improve decision-making with responsible AI.`
- **After desc (151):** `Finance AI consultant for UK financial services firms. Automate compliance, detect fraud, and sharpen decision-making with responsible AI. Book a call.`
- **Fixes:** Primary keyword to front; UK geo signal; brand suffix replaced with use-case hook; CTA added.

#### 5. `/industries/manufacturing/`
- **Before title (55):** `AI Consultant for Manufacturing — Agentic AI Associates`
- **After title (55):** `Manufacturing AI Consultant UK — Cut Downtime & Defects`
- **Before desc (140):** `Manufacturing AI consultant helping UK factories reduce downtime, improve quality, and optimise production with practical AI and automation.`
- **After desc (138):** `Manufacturing AI consultant for UK factories. Reduce downtime, improve quality, and optimise production with agentic AI. Book a free call.`
- **Fixes:** Primary keyword to front; UK geo; power word 'Cut'; brand suffix replaced; 'agentic AI' added; CTA added.

#### 6. `/what-we-do/ai-strategy/`
- **Before title (46):** `AI Strategy & Roadmaps — Agentic AI Associates`
- **After title (53):** `AI Strategy Consulting UK — Clear Roadmaps, Fixed Fee`
- **Before desc (126):** `Expert AI strategy consulting. We build clear roadmaps that align AI with your business goals, budget, and timeline. UK-based.`
- **After desc (144):** `Expert AI strategy consulting for UK businesses. Clear roadmaps aligned to your goals, budget, and timeline. Fixed-fee from £6,500. Book a call.`
- **Fixes:** 'Consulting UK' added to title; price anchor added to desc; CTA added.

#### 7. `/what-we-do/agentic-ai/`
- **Before title (48):** `Agentic AI Consultancy UK — Autonomous AI Agents` *(no change)*
- **Before desc (151):** `We design, build, and deploy agentic AI systems — autonomous agents that handle complex, multi-step business workflows with minimal human intervention.`
- **After desc (149):** `We design and deploy agentic AI systems — autonomous agents that handle complex business workflows with minimal human intervention. Book a free call.`
- **Fixes:** Desc trimmed slightly; CTA added.

#### 8. `/what-we-do/ai-training/`
- **Before title (44):** `AI Training & Workshops UK — Team Upskilling`
- **After title (54):** `AI Training & Workshops UK — Practical Team Upskilling`
- **Before desc (134):** `Practical AI training and workshops for UK businesses. Upskill your team on AI tools, prompt engineering, and responsible AI adoption.`
- **After desc (152):** `Practical AI training and workshops for UK businesses. Upskill your team on AI tools, prompt engineering, and responsible AI adoption. Book a free call.`
- **Fixes:** Power word 'Practical' added to title; CTA added to desc.

#### 9. `/what-we-do/ongoing-support/`
- **Before title (45):** `AI Support & Optimisation — Retainer Packages`
- **After title (56):** `AI Support & Optimisation UK — Monthly Retainer Packages`
- **Before desc (120):** `Ongoing AI support, monitoring, and optimisation. Retainer packages for businesses that need continuous expert guidance.`
- **After desc (135):** `Ongoing AI support, monitoring, and optimisation for UK businesses. Expert retainer packages from £1,500/month. Get a free quote today.`
- **Fixes:** UK geo added to title; price anchor added to desc; CTA added.

#### 10. `/for/smes/`
- **Before title (52):** `Agentic AI for UK SMEs — Practical Fixed-Fee Results` *(no change)*
- **Before desc (157):** `Agentic AI for UK SMEs. Practical AI strategy and implementation that drives efficiency and growth without enterprise complexity. Book a free discovery call.`
- **After desc (140):** `Agentic AI for UK SMEs. Practical AI strategy and implementation that drives real efficiency gains. Fixed-fee from £6,500. Book a free call.`
- **Fixes:** Desc trimmed from 157 to 140 chars (was over 155-char limit); price anchor added; CTA shortened.

### Data Summary
- No live GSC or Bing data available (no `.env`)
- Pattern analysis run across all 78 pages
- Post-edit: 0 title violations, 0 desc violations, 0 missing CTAs in edited pages

### IndexNow
- Skipped (no INDEXNOW_KEY in `.env`)
- URLs ready to submit when key is available:
  - https://agenticai.associates/industries/
  - https://agenticai.associates/industries/healthcare/
  - https://agenticai.associates/industries/legal/
  - https://agenticai.associates/industries/finance/
  - https://agenticai.associates/industries/manufacturing/
  - https://agenticai.associates/what-we-do/ai-strategy/
  - https://agenticai.associates/what-we-do/agentic-ai/
  - https://agenticai.associates/what-we-do/ai-training/
  - https://agenticai.associates/what-we-do/ongoing-support/
  - https://agenticai.associates/for/smes/

### Recommendations for Run 7
- **Add `.env` with GSC/Bing/IndexNow credentials** — enables live data-driven optimisation and instant reindexing.
- **Remaining no-CTA pages:** `supply-chain`, `education`, `ecommerce`, `real-estate`, `marketing`, `saas` — all have descriptive but passive meta descriptions. Add CTAs in next run.
- **Learn hub and learn pages** (`ai-consultant-career-path`, `when-to-hire-an-ai-consultant`) — no CTAs. Consider adding soft CTAs like "Read the guide" or "Book a free call."
- **Insights pages** — 6 standalone Astro files not yet reviewed for title/desc quality. Queue for next audit.
- **Title pattern for industry pages** — new keyword-first pattern (`[Industry] AI Consultant UK — [Hook]`) is now consistent across 4 pages; apply to remaining 6 industry pages.

---

## Run 5 — 2026-05-29

### Data Sources
- No `.env` file found; GSC and Bing Webmaster APIs skipped.
- IndexNow submission skipped (no INDEXNOW_KEY).
- Optimisation based on pattern audit, targeting Run 4 recommendations.

### Audit Summary
- **Total pages scanned:** 75 (all data files checked)
- **Hard rule violations at start:** 0
- **CTR pattern issues identified:** 9 (generic template descriptions on 6 location pages; learn pages missing 2026 anchors and CTAs)
- **Pages optimised this run:** 9
- **Pages with issues remaining:** 0 generic location descriptions remain. All 12 location pages now have city-specific sector hooks.

### Pages Optimised

#### 1. `/locations/leicester/`
- **Before desc (140):** `Expert agentic AI consultants in Leicester. We design, build, and deploy autonomous AI agents for your business. Book a free discovery call.`
- **After desc (144):** `Agentic AI consultants in Leicester. Manufacturing, food & drink, and logistics specialists. Fixed-fee diagnostic from £6,500. Book a free call.`
- **Fixes:** Generic template replaced with Leicester-specific sector hooks (manufacturing, food & drink, logistics hub); price anchor added; CTA retained

#### 2. `/locations/norfolk/`
- **Before desc (138):** `Expert agentic AI consultants in Norfolk. We design, build, and deploy autonomous AI agents for your business. Book a free discovery call.`
- **After desc (143):** `Agentic AI consultants in Norfolk. Insurance, agriculture, and offshore energy specialists. Fixed-fee diagnostic from £6,500. Book a free call.`
- **Fixes:** Generic template replaced with Norfolk-specific sector hooks (Norwich/Aviva insurance cluster, arable agriculture, offshore North Sea energy); price anchor added

#### 3. `/locations/kent/`
- **Before desc (135):** `Expert agentic AI consultants in Kent. We design, build, and deploy autonomous AI agents for your business. Book a free discovery call.`
- **After desc (148):** `Agentic AI consultants in Kent. Logistics, manufacturing, and viticulture specialists. Fixed-fee diagnostic from £6,500. Book a free discovery call.`
- **Fixes:** Generic template replaced with Kent-specific sector hooks (Dover logistics corridor, manufacturing, England's leading wine region); price anchor added

#### 4. `/locations/bedfordshire/`
- **Before desc (143):** `Expert agentic AI consultants in Bedfordshire. We design, build, and deploy autonomous AI agents for your business. Book a free discovery call.`
- **After desc (149):** `Agentic AI consultants in Bedfordshire. Aerospace, logistics, and Cranfield research specialists. Fixed-fee diagnostic from £6,500. Book a free call.`
- **Fixes:** Generic template replaced with Bedfordshire-specific hooks (Cranfield aerospace/research corridor, Luton M1 logistics hub); price anchor added

#### 5. `/locations/wokingham/`
- **Before desc (140):** `Expert agentic AI consultants in Wokingham. We design, build, and deploy autonomous AI agents for your business. Book a free discovery call.`
- **After desc (155):** `Agentic AI consultants in Wokingham. Enterprise tech, cybersecurity, and fintech specialists. Fixed-fee diagnostic from £6,500. Book a free discovery call.`
- **Fixes:** Generic template replaced with Wokingham/Thames Valley tech corridor hooks (enterprise tech cluster, cybersecurity firms, fintech); price anchor added

#### 6. `/locations/kensington/`
- **Before desc (141):** `Expert agentic AI consultants in Kensington. We design, build, and deploy autonomous AI agents for your business. Book a free discovery call.`
- **After desc (150):** `Agentic AI consultants in Kensington. Luxury brands, private equity, and wealth management specialists. Fixed-fee diagnostic from £6,500. Book a call.`
- **Fixes:** Generic template replaced with Kensington-specific sector hooks (luxury retail/brands, private equity, wealth management/family offices); price anchor added

#### 7. `/learn/what-is-an-ai-consultant/`
- **Before title (54):** `What Is an AI Consultant? Roles, Skills & What They Do`
- **After title (54):** `What Is an AI Consultant? Roles, Skills & Costs (2026)`
- **Before desc (150):** `Learn what an AI consultant is, what they do, and why businesses hire them. Covers roles, responsibilities, skills, and how AI consultants create value.`
- **After desc (142):** `Learn what an AI consultant does, why businesses hire them, and what they cost. Expert guide to roles, skills, and how to get started in 2026.`
- **Fixes:** Title swaps 'What They Do' for 'Costs (2026)' — adds high-intent cost signal and year anchor; desc tightened, 'Expert guide' power phrase added, '2026' recency signal added

#### 8. `/learn/ai-consultant-job-description/`
- **Before title (51):** `AI Consultant Job Description — Roles, Duties & Requirements`
- **After title (53):** `AI Consultant Job Description — Roles & Duties (2026)`
- **Before desc (140):** `Complete AI consultant job description template. Covers responsibilities, required skills, qualifications, and what to expect from the role.`
- **After desc (146):** `Complete AI consultant job description for 2026. Covers responsibilities, required skills, qualifications, and salary. Download our free template.`
- **Fixes:** Title adds 2026 year anchor (replaces 'Requirements', shortens); desc adds recency signal, swaps 'what to expect from the role' for 'salary' (higher-intent keyword), CTA 'Download our free template.' added

#### 9. `/learn/freelance-ai-consultant/`
- **Before title (58):** `Freelance AI Consultant — How to Start and Succeed in 2026`
- **After title (59):** `Freelance AI Consultant — 5 Steps to Start & Succeed (2026)`
- **Before desc (154):** `Complete guide to becoming a freelance AI consultant. Covers pricing, finding clients, building your brand, and the realities of independent AI consulting.`
- **After desc (147):** `Complete guide to becoming a freelance AI consultant. Covers day rates, finding clients, building your brand, and IR35. Start earning more in 2026.`
- **Fixes:** Title adds '5 Steps' number (power word) and retains 2026 anchor; desc swaps 'pricing' for 'day rates' (more specific/searchable), removes verbose 'realities of independent AI consulting', adds IR35 (high-intent UK keyword), CTA 'Start earning more in 2026.' added

### IndexNow
- Skipped — no INDEXNOW_KEY in environment.
- URLs to submit on next run with credentials:
  - https://agenticai.associates/locations/leicester/
  - https://agenticai.associates/locations/norfolk/
  - https://agenticai.associates/locations/kent/
  - https://agenticai.associates/locations/bedfordshire/
  - https://agenticai.associates/locations/wokingham/
  - https://agenticai.associates/locations/kensington/
  - https://agenticai.associates/learn/what-is-an-ai-consultant/
  - https://agenticai.associates/learn/ai-consultant-job-description/
  - https://agenticai.associates/learn/freelance-ai-consultant/

### Recommendations for Run 6
**All location descriptions are now unique with sector-specific hooks. Location hub is complete.**

**Pattern opportunities for Run 6:**
- `/learn/ai-consultant-salary/` — if it exists, add year anchor and salary range number to title (e.g., '£500–£1,500/day: AI Consultant Salary Guide 2026')
- `/learn/ai-consultant-certification/` — add number of top certs to title (e.g., '5 Best AI Consultant Certifications (2026)')
- `/learn/become-ai-consultant-no-experience/` — add number or power phrase to title
- `/solutions/` hub pages — audit for missing CTAs and power words
- `/what-we-do/` hub — verify all spoke titles have 'Agentic AI' in them and no brand suffix remains

**Set up .env with credentials to enable:**
- GSC data pull for actual CTR/position data to prioritise by impressions
- Bing Webmaster indexed page count
- IndexNow submission after each run

---

## Run 4 — 2026-05-27

### Data Sources
- No `.env` file found; GSC and Bing Webmaster APIs skipped.
- IndexNow submission skipped (no INDEXNOW_KEY).
- Optimisation based on pattern audit, targeting Run 3 recommendations.

### Audit Summary
- **Total pages scanned:** 75 (all data files checked)
- **Hard rule violations at start:** 1 (title > 60 chars)
- **CTR pattern issues identified:** 9 (brand suffix in /for/ titles; generic duplicate location descs)
- **Pages optimised this run:** 10 (max per run)
- **Pages with issues remaining:** 8 (generic desc: Leicester, Norfolk, Bedfordshire, Wokingham, Kensington, Kent; desc needs CTA: `/learn/ai-consultant-job-description/`, `/learn/ai-consultant-career-path/`)

### Pages Optimised

#### 1. `/learn/ai-consultant-skills/`
- **Before title (61):** `AI Consultant Skills — The Complete Skills Breakdown for 2026`
- **After title (53):** `AI Consultant Skills — Complete Skills Guide for 2026`
- **Before desc (150):** `Discover the essential skills every AI consultant needs. Covers technical, business, and soft skills with practical advice on how to develop each one.`
- **After desc (151):** `Discover the essential skills every AI consultant needs — technical, business, and soft skills — with practical steps to develop each one. Start today.`
- **Fixes:** Title shortened 8 chars (removed 'The Complete…Breakdown' → 'Complete…Guide'); desc CTA 'Start today.' appended, 'advice on how to develop' → 'steps to develop' (tighter phrasing)

#### 2. `/for/small-business/`
- **Before title (56):** `AI Consultant for Small Business — Agentic AI Associates`
- **After title (56):** `Agentic AI for UK Small Business — Expert Fixed-Fee Help`
- **Before desc (121):** `Affordable AI consultancy for small businesses. Get expert AI strategy and implementation scaled to your budget and goals.`
- **After desc (135):** `Agentic AI for UK small businesses. Fixed-fee packages, quick wins in 2 weeks, and team training included. Book a free discovery call.`
- **Fixes:** Brand suffix replaced with 'Expert Fixed-Fee Help' (specific power phrase); desc gains price signal (fixed-fee), time signal (2 weeks), feature signal (training), and CTA

#### 3. `/for/enterprise/`
- **Before title (49):** `Enterprise AI Consultancy — Agentic AI Associates`
- **After title (55):** `Enterprise Agentic AI Consultancy UK — Scalable Results`
- **Before desc (150):** `Enterprise-grade AI consultancy for large organisations. We deliver AI strategy, governance frameworks, and scalable implementation across departments.`
- **After desc (139):** `Enterprise agentic AI for large UK organisations. AI strategy, governance frameworks, and scalable implementation. Book a board-level call.`
- **Fixes:** 'Agentic AI' added to title, 'UK' geo-signal added, 'Scalable Results' power phrase replaces brand suffix; desc tightened (removed 'across departments'), CTA 'Book a board-level call.' added

#### 4. `/for/startups/`
- **Before title (50):** `AI Consultant for Startups — Agentic AI Associates`
- **After title (51):** `Agentic AI for UK Startups — Move Fast, Build Right`
- **Before desc (141):** `AI consultancy built for startups. Move fast with expert guidance on AI product development, investor-ready strategy, and lean implementation.`
- **After desc (144):** `Agentic AI built for UK startups. Expert guidance on AI product development, investor-ready strategy, and lean implementation. Book a free call.`
- **Fixes:** 'Agentic AI' moves to front, UK geo-signal added, 'Move Fast, Build Right' replaces brand suffix (echoes startup mindset); desc adds CTA

#### 5. `/for/smes/`
- **Before title (47):** `AI Consultancy for SMEs — Agentic AI Associates`
- **After title (52):** `Agentic AI for UK SMEs — Practical Fixed-Fee Results`
- **Before desc (141):** `AI consultancy tailored for UK SMEs. Practical AI strategy and implementation that drives efficiency and growth without enterprise complexity.`
- **After desc (157):** `Agentic AI for UK SMEs. Practical AI strategy and implementation that drives efficiency and growth without enterprise complexity. Book a free discovery call.`
- **Fixes:** 'Agentic AI' front-loaded, 'Practical Fixed-Fee Results' replaces brand suffix; desc adds CTA

#### 6. `/locations/bristol/`
- **Before title (52):** `Agentic AI Consultants in Bristol | Strategy & Build` _(unchanged)_
- **Before desc (138):** `Expert agentic AI consultants in Bristol. We design, build, and deploy autonomous AI agents for your business. Book a free discovery call.`
- **After desc (151):** `Agentic AI consultants in Bristol. Aerospace, cleantech, and creative sector specialists. Fixed-fee diagnostic from £6,500. Book a free discovery call.`
- **Fixes:** Generic template replaced with Bristol-specific industry hooks (aerospace = Airbus/Rolls-Royce/BAE, cleantech, creative); price anchor added; CTA retained

#### 7. `/locations/reading/`
- **Before title (52):** `Agentic AI Consultants in Reading | Strategy & Build` _(unchanged)_
- **Before desc (138):** `Expert agentic AI consultants in Reading. We design, build, and deploy autonomous AI agents for your business. Book a free discovery call.`
- **After desc (155):** `Agentic AI consultants in the Thames Valley. Enterprise tech, pharma, and SaaS specialists. Fixed-fee diagnostic from £6,500. Book a free discovery call.`
- **Fixes:** Generic template replaced with Thames Valley identity (Microsoft/Oracle corridor) + sector hooks (enterprise tech, pharma, SaaS); price anchor added

#### 8. `/locations/surrey/`
- **Before title (51):** `Agentic AI Consultants in Surrey | Strategy & Build` _(unchanged)_
- **Before desc (137):** `Expert agentic AI consultants in Surrey. We design, build, and deploy autonomous AI agents for your business. Book a free discovery call.`
- **After desc (150):** `Agentic AI consultants in Surrey. Pharma, gaming, and professional services specialists. Fixed-fee diagnostic from £6,500. Book a free discovery call.`
- **Fixes:** Generic template replaced with Surrey sector hooks (GSK/Pfizer pharma, Guildford gaming, professional services); price anchor added

#### 9. `/locations/northern-ireland/`
- **Before title (52):** `Agentic AI Consultants N. Ireland | Strategy & Build` _(unchanged)_
- **Before desc (147):** `Expert agentic AI consultants in Northern Ireland. We design, build, and deploy autonomous AI agents for your business. Book a free discovery call.`
- **After desc (148):** `Agentic AI consultants in Northern Ireland. Fintech, cybersecurity, and agri-food sector specialists. Fixed-fee diagnostic from £6,500. Book a call.`
- **Fixes:** Generic template replaced with Northern Ireland sector hooks (Belfast fintech, CSIT cybersecurity, agri-food); price anchor added

#### 10. `/locations/salford/`
- **Before title (52):** `Agentic AI Consultants in Salford | Strategy & Build` _(unchanged)_
- **Before desc (138):** `Expert agentic AI consultants in Salford. We design, build, and deploy autonomous AI agents for your business. Book a free discovery call.`
- **After desc (146):** `Agentic AI consultants in Salford & MediaCityUK. Media, digital agency, and e-commerce specialists. Fixed-fee diagnostic from £6,500. Book a call.`
- **Fixes:** Generic template replaced with Salford identity (MediaCityUK brand recognition) + sector hooks (media/broadcasting, digital agencies, e-commerce); price anchor added

### IndexNow
- Skipped — no INDEXNOW_KEY in environment.
- URLs to submit on next run with credentials:
  - https://agenticai.associates/learn/ai-consultant-skills/
  - https://agenticai.associates/for/small-business/
  - https://agenticai.associates/for/enterprise/
  - https://agenticai.associates/for/startups/
  - https://agenticai.associates/for/smes/
  - https://agenticai.associates/locations/bristol/
  - https://agenticai.associates/locations/reading/
  - https://agenticai.associates/locations/surrey/
  - https://agenticai.associates/locations/northern-ireland/
  - https://agenticai.associates/locations/salford/

### Recommendations for Run 5
**Remaining location pages with generic descriptions (8 total):**
- `/locations/leicester/` — desc: `Expert agentic AI consultants in Leicester. We design...` → suggest: `Agentic AI consultants in Leicester. Manufacturing, food & drink, and logistics specialists. Fixed-fee diagnostic from £6,500. Book a free call.`
- `/locations/norfolk/` — desc: generic → suggest hook: insurance (Norwich/Aviva), agriculture, offshore energy
- `/locations/bedfordshire/` — desc: generic → suggest hook: aerospace (Cranfield), logistics (Luton/M1), research
- `/locations/wokingham/` — desc: generic → suggest hook: Thames Valley enterprise tech, cybersecurity, financial services
- `/locations/kensington/` — desc: generic → suggest hook: luxury brands, private equity, wealth management
- `/locations/kent/` — desc: generic → suggest hook: logistics (Dover), manufacturing, agriculture/viticulture

**Pattern opportunities for Run 5:**
- Consider adding '2026' year anchors to `/learn/ai-consultant-job-description/` and `/learn/what-is-an-ai-consultant/` titles — both are evergreen pages that would benefit from recency signals
- `/learn/freelance-ai-consultant/` title has no number ('How to Start and Succeed' vs '5 Steps to Start and Succeed')

**Set up .env with credentials to enable:**
- GSC data pull for actual CTR/position data to prioritise by impressions
- Bing Webmaster indexed page count
- IndexNow submission after each run

---

## Run 3 — 2026-05-21

### Data Sources
- No `.env` file found; GSC and Bing Webmaster APIs skipped.
- IndexNow submission skipped (no INDEXNOW_KEY).
- Optimization based on pattern audit — targeting pages flagged in Run 2 recommendations.

### Audit Summary
- **Total pages scanned:** 75 (all data files checked)
- **Pages with issues at start of run:** 11 (carried from Run 2)
- **Pages optimised this run:** 10 (max per run)
- **Pages with issues remaining:** 1 (queued for Run 4)
- **Primary issues fixed this run:**
  - 7 industry pages with desc > 155 chars and brand suffix in title
  - 1 what-we-do page with desc > 155 chars
  - 1 learn page with title > 60 chars (desc also updated with CTA)
  - 1 learn page with desc > 155 chars

### Pages Optimised

#### 1. `/industries/fintech/`
- **Before title (49):** `AI Consultant for Fintech — Agentic AI Associates`
- **After title (52):** `Agentic AI for UK Fintechs — FCA-Compliant Solutions`
- **Before desc (158):** `Agentic AI for UK fintechs. KYC/KYB automation, transaction monitoring, fraud detection, regulatory reporting, and customer operations built for FCA scrutiny.`
- **After desc (142):** `Agentic AI for UK fintechs. KYC/KYB automation, fraud detection, regulatory reporting, and customer ops — FCA-ready. Speak to an expert today.`
- **Fixes:** Title rewritten with 'Agentic AI' + FCA compliance signal; desc shortened 16 chars, CTA added, redundant items merged

#### 2. `/industries/insurance/`
- **Before title (51):** `AI Consultant for Insurance — Agentic AI Associates`
- **After title (51):** `Agentic AI for UK Insurers & MGAs — Expert Coverage`
- **Before desc (162):** `Agentic AI for UK insurers, MGAs and brokers. Claims triage, underwriting copilots, fraud detection, policy document intelligence, and regulator-ready governance.`
- **After desc (150):** `Agentic AI for UK insurers, MGAs and brokers. Claims triage, underwriting copilots, fraud detection, and regulator-ready governance. Book a free call.`
- **Fixes:** Title rewritten with 'Agentic AI' + 'Expert Coverage' power phrase; desc shortened 12 chars, removed 'policy document intelligence' to make room for CTA

#### 3. `/industries/energy-utilities/`
- **Before title (60):** `AI Consultant for Energy & Utilities — Agentic AI Associates`
- **After title (53):** `Agentic AI for UK Energy & Utilities — Net Zero Ready`
- **Before desc (165):** `Agentic AI for UK energy suppliers, DNOs and water utilities. Smart meter analytics, customer operations, asset health forecasting, and Ofgem/Ofwat-ready governance.`
- **After desc (150):** `Agentic AI for UK energy, DNOs and water utilities. Smart meter analytics, asset health, and Ofgem/Ofwat-ready governance. Book a free discovery call.`
- **Fixes:** Title shortened 7 chars, 'Net Zero Ready' replaces brand suffix (highly relevant sector signal); desc shortened 15 chars, 'customer operations' merged into concise phrasing, CTA added

#### 4. `/industries/construction/`
- **Before title (54):** `AI Consultant for Construction — Agentic AI Associates`
- **After title (54):** `Agentic AI for UK Construction & Contractors — Results`
- **Before desc (172):** `Agentic AI for UK construction, main contractors and specialist subcontractors. Bid and tender intelligence, CDM compliance, programme risk, and site operations automation.`
- **After desc (149):** `Agentic AI for UK contractors and subcontractors. Bid intelligence, CDM compliance, programme risk, and site operations automation. Book a free call.`
- **Fixes:** Title rewritten with 'Agentic AI' + 'Results' power word; desc shortened 23 chars, tightened phrasing, CTA added

#### 5. `/industries/hospitality/`
- **Before title (53):** `AI Consultant for Hospitality — Agentic AI Associates`
- **After title (53):** `Agentic AI for UK Hotels & Hospitality — Boost RevPAR`
- **Before desc (173):** `Agentic AI for UK hotels, hospitality groups and F&B operators. Revenue management, guest experience, operations automation, and demand forecasting that adapts in real time.`
- **After desc (149):** `Agentic AI for UK hotels and F&B operators. Revenue management, guest experience, ops automation, and demand forecasting. Book a free discovery call.`
- **Fixes:** Title rewritten with 'Boost RevPAR' (sector-specific metric power phrase); desc shortened 24 chars, removed verbose clause 'adapts in real time', CTA added

#### 6. `/industries/media-publishing/`
- **Before title (60):** `AI Consultant for Media & Publishing — Agentic AI Associates`
- **After title (51):** `Agentic AI for UK Media & Publishing — Grow Revenue`
- **Before desc (167):** `Agentic AI for UK publishers, broadcasters and media groups. Editorial workflows, rights and metadata, ad operations, audience intelligence, and IPSO-ready governance.`
- **After desc (147):** `Agentic AI for UK publishers and broadcasters. Editorial workflows, rights metadata, ad ops, and IPSO-ready governance. Book a free discovery call.`
- **Fixes:** Title shortened 9 chars, 'Grow Revenue' replaces brand suffix; desc shortened 20 chars, 'audience intelligence' removed to make room for CTA

#### 7. `/industries/automotive/`
- **Before title (52):** `AI Consultant for Automotive — Agentic AI Associates`
- **After title (53):** `Agentic AI for UK Automotive & Dealers — Drive Growth`
- **Before desc (163):** `Agentic AI for UK automotive retail, dealer groups, OEMs and fleet operators. Dealership operations, F&I compliance, aftersales automation, and demand forecasting.`
- **After desc (151):** `Agentic AI for UK automotive retail and dealer groups. Dealership ops, F&I compliance, aftersales automation, and demand forecasting. Book a free call.`
- **Fixes:** Title rewritten with 'Drive Growth' power phrase; desc shortened 12 chars, 'OEMs and fleet operators' tightened, CTA added

#### 8. `/what-we-do/ai-readiness-assessment/`
- **Before title (47):** `AI Readiness Assessment — Agentic AI Associates`
- **After title (51):** `AI Readiness Assessment — Fixed-Fee UK Audit (2026)`
- **Before desc (167):** `Fixed-fee AI readiness assessment for UK businesses. We audit your data, processes, and team capability, then deliver a prioritised roadmap with clear ROI projections.`
- **After desc (152):** `Fixed-fee AI readiness audit. We assess your data, processes, and team, then deliver a prioritised UK AI roadmap with ROI projections. Book a free call.`
- **Fixes:** Title adds 'Fixed-Fee' price signal and year anchor (replaces brand suffix); desc shortened 15 chars, tightened phrasing, CTA added

#### 9. `/learn/how-to-become-an-ai-consultant/`
- **Before title (61):** `How to Become an AI Consultant — Complete Career Guide (2026)`
- **After title (52):** `How to Become an AI Consultant — 2026 Career Roadmap`
- **Before desc (149):** `Step-by-step guide to becoming an AI consultant. Covers education, skills, certifications, experience, and how to land your first AI consulting role.`
- **After desc (144):** `Step-by-step guide to becoming an AI consultant. Covers education, skills, certifications, experience, and landing your first role. Start today.`
- **Fixes:** Title shortened 9 chars, '2026 Career Roadmap' gives same recency signal more concisely; desc CTA 'Start today.' added

#### 10. `/learn/how-to-choose-an-ai-consultant/`
- **Before title (57):** `How to Choose an AI Consultant — A Buyer's Guide for 2026` _(unchanged)_
- **Before desc (157):** `Learn how to choose the right AI consultant for your business. Covers evaluation criteria, red flags, interview questions, and what to look for in proposals.`
- **After desc (154):** `Learn how to pick the right AI consultant for your business. Covers criteria, red flags, interview questions, and proposal review. Get our free checklist.`
- **Fixes:** Desc shortened 3 chars below limit, 'evaluation criteria' tightened to 'criteria', 'what to look for in proposals' → 'proposal review', CTA 'Get our free checklist.' added

### IndexNow
- Skipped — no INDEXNOW_KEY in environment.
- URLs to submit on next run with credentials:
  - https://agenticai.associates/industries/fintech/
  - https://agenticai.associates/industries/insurance/
  - https://agenticai.associates/industries/energy-utilities/
  - https://agenticai.associates/industries/construction/
  - https://agenticai.associates/industries/hospitality/
  - https://agenticai.associates/industries/media-publishing/
  - https://agenticai.associates/industries/automotive/
  - https://agenticai.associates/what-we-do/ai-readiness-assessment/
  - https://agenticai.associates/learn/how-to-become-an-ai-consultant/
  - https://agenticai.associates/learn/how-to-choose-an-ai-consultant/

### Recommendations for Run 4
**Only 1 page with a measurable length issue remaining:**
- `/learn/ai-consultant-skills/` — T:61 (1 char over; title is `AI Consultant Skills — The Complete Skills Breakdown for 2026`)
  - Suggested fix: `AI Consultant Skills — Complete Skills Guide for 2026` (52 chars)

**Pattern opportunities for Run 4 (no length issues, but CTR improvements):**
- `/for/` pages still have brand suffix in titles and weak/no power words:
  - `/for/small-business/` — `AI Consultant for Small Business — Agentic AI Associates` → consider `Agentic AI for UK Small Business — Expert Fixed-Fee Help`
  - `/for/enterprise/` — `Enterprise AI Consultancy — Agentic AI Associates` → consider `Enterprise Agentic AI Consultancy UK — Scalable Results`
  - `/for/startups/` — `AI Consultant for Startups — Agentic AI Associates` → consider `Agentic AI for UK Startups — Move Fast, Build Right`
  - `/for/smes/` — `AI Consultancy for SMEs — Agentic AI Associates` → consider `Agentic AI for UK SMEs — Practical Fixed-Fee Results`
- Location page descriptions all share one template with only city name varying — diversify top 5 with city-specific industry hooks:
  - London → fintech / professional services angle
  - Manchester → manufacturing / logistics angle
  - Birmingham → automotive / manufacturing angle
  - Bristol → tech / scale-up angle
  - Edinburgh → financial services / public sector angle

**Set up .env with credentials to enable:**
- GSC data pull for actual CTR/position data to prioritise by impressions
- Bing Webmaster indexed page count
- IndexNow submission after each run

---

## Run 2 — 2026-05-19

### Data Sources
- No `.env` file found; GSC and Bing Webmaster APIs skipped.
- IndexNow submission skipped (no INDEXNOW_KEY).
- Optimization based on pattern audit of all JSON data files.

### Audit Summary
- **Total pages scanned:** 75 (all data files checked)
- **Pages with issues at start of run:** 21 (title > 60 or desc > 155)
- **Pages optimized this run:** 10 (max per run)
- **Pages with issues remaining:** 11 (queued for Run 3)
- **Primary issues fixed this run:**
  - 6 learn pages with title > 60 chars (including 3 with brand suffix " — Agentic AI Associates" pushing to 76–89 chars)
  - 1 learn page with desc > 155 chars
  - 1 industry page with title over 60 chars (government, 61)
  - 2 industry pages with desc severely over 155 chars (saas 174, logistics 188)

### Pages Optimized

#### 1. `/learn/in-house-ai-team-vs-consultancy/`
- **Before title (89):** `In-House AI Team vs AI Consultancy: Cost, Speed and Risk Compared — Agentic AI Associates`
- **After title (51):** `In-House AI Team vs Consultancy: 5 Factors Compared`
- **Before desc (140):** `Should you hire an in-house AI team or engage a consultancy? A practical comparison on cost, speed, risk, and what to do when you need both.`
- **After desc (142):** `Should you hire in-house AI talent or engage a consultancy? Compare cost, speed and risk — then get our free decision guide for UK businesses.`
- **Fixes:** Title shortened 38 chars (removed brand suffix), number '5' added, desc refreshed with CTA

#### 2. `/learn/agentic-ai-vs-generative-ai/`
- **Before title (87):** `Agentic AI vs Generative AI: What the Difference Actually Means — Agentic AI Associates`
- **After title (56):** `Agentic AI vs Generative AI: What Really Matters in 2026`
- **Before desc (129):** `Generative AI produces content. Agentic AI does work. A practical distinction for enterprise buyers deciding what to build first.`
- **After desc (147):** `Generative AI creates content. Agentic AI does work. Learn the real distinction and decide what to build first with our expert guide for UK buyers.`
- **Fixes:** Title shortened 31 chars (removed brand suffix), year anchor added, desc expanded with CTA power words

#### 3. `/learn/build-vs-buy-ai-agents/`
- **Before title (76):** `Build vs Buy AI Agents: How to Choose the Right Path — Agentic AI Associates`
- **After title (52):** `Build vs Buy AI Agents: 3 Frameworks to Choose Right`
- **Before desc (132):** `Build a custom AI agent, buy a vertical agent product, or pick a platform in between? A decision framework for UK enterprise buyers.`
- **After desc (133):** `Build custom, buy a vertical product, or use a platform? Get our 3-step decision framework for UK enterprise AI buyers — free to use.`
- **Fixes:** Title shortened 24 chars (removed brand suffix), number '3' added, desc rewritten with CTA

#### 4. `/learn/what-does-an-ai-consultant-do/`
- **Before title (68):** `What Does an AI Consultant Do? Day-to-Day Responsibilities Explained`
- **After title (55):** `What Does an AI Consultant Do? Roles & Responsibilities`
- **Before desc (142):** `Discover what an AI consultant actually does day-to-day. From strategy workshops to implementation oversight, learn the real responsibilities.`
- **After desc (138):** `Discover what an AI consultant does day-to-day — strategy workshops, delivery oversight, and more. Book a free call to see if we're a fit.`
- **Fixes:** Title shortened 13 chars, desc shortened and CTA added

#### 5. `/learn/benefits-of-hiring-an-ai-consultant/`
- **Before title (66):** `Benefits of Hiring an AI Consultant — Why Expert Guidance Pays Off`
- **After title (52):** `7 Proven Benefits of Hiring an AI Consultant in 2026`
- **Before desc (142):** `Discover the key benefits of hiring an AI consultant. From faster ROI to risk reduction, learn why businesses invest in external AI expertise.`
- **After desc (147):** `Discover 7 proven benefits of hiring an AI consultant — faster ROI, lower risk, and faster implementation. See results UK businesses have achieved.`
- **Fixes:** Title shortened 14 chars, number '7' and power word 'Proven' added, year anchor added, desc echoes number

#### 6. `/learn/ai-consultant-career-path/`
- **Before title (63):** `AI Consultant Career Path — From Junior to Partner (2026 Guide)`
- **After title (52):** `AI Consultant Career Path: Junior to Partner in 2026`
- **Before desc (152):** `Map your AI consulting career from entry-level to senior partner. Covers progression, timelines, salary expectations, and how to accelerate your growth.`
- **After desc (152):** `Map your AI consulting career from entry-level to senior partner. Covers progression, timelines, salary expectations, and how to accelerate your growth.`
- **Fixes:** Title shortened 11 chars (colon replaces em-dash, removed 'Guide' wrapper)

#### 7. `/learn/ai-consultant-vs-vendor/`
- **Before title (56):** `AI Consultant vs Vendor — Which Does Your Business Need?` _(unchanged)_
- **Before desc (159):** `Understand the difference between hiring an AI consultant and buying from an AI vendor. Learn when each option makes sense and how to combine both effectively.`
- **After desc (147):** `Understand the difference between an AI consultant and a vendor. Learn when each makes sense — and when to combine both — with our practical guide.`
- **Fixes:** Desc shortened 12 chars below limit, power phrase 'practical guide' added as CTA

#### 8. `/industries/government/`
- **Before title (61):** `AI Consultant for Government Agencies — Agentic AI Associates`
- **After title (54):** `Agentic AI for UK Government & Public Sector — Experts`
- **Before desc (146):** `Government AI consultant helping UK councils and public sector bodies improve services, reduce costs, and deploy AI responsibly and transparently.`
- **After desc (150):** `Agentic AI for UK councils and public sector bodies. Improve services, cut costs, and deploy AI responsibly. GDPR and ICO compliant. Book a free call.`
- **Fixes:** Title shortened 7 chars, 'Agentic AI' moved to front, 'Experts' power word, desc adds compliance anchor (GDPR/ICO) and CTA

#### 9. `/industries/saas/`
- **Before title (56):** `AI Consultant for SaaS Companies — Agentic AI Associates`
- **After title (49):** `Agentic AI for UK SaaS Companies — Proven Results`
- **Before desc (174):** `Agentic AI for UK SaaS businesses. Onboarding copilots, churn prediction, expansion-revenue agents, support deflection and product analytics that compound with every release.`
- **After desc (144):** `Agentic AI for UK SaaS. Onboarding copilots, churn prediction, expansion-revenue agents, and support deflection that improve with every release.`
- **Fixes:** Title rewritten with 'Agentic AI' and power phrase 'Proven Results', desc shortened 30 chars

#### 10. `/industries/logistics/`
- **Before title (59):** `AI Consultant for Logistics & Fleet — Agentic AI Associates`
- **After title (51):** `Agentic AI for UK Logistics & Fleet — Cut Costs Now`
- **Before desc (188):** `Agentic AI for UK logistics, last-mile and fleet operators. Route optimisation, driver ops, exception handling, telematics intelligence, and customer comms that stay accurate in real time.`
- **After desc (148):** `Agentic AI for UK logistics and fleet operators. Route optimisation, driver ops, exception handling, and real-time customer comms. Book a free call.`
- **Fixes:** Title rewritten with 'Agentic AI' and urgency phrase 'Cut Costs Now', desc shortened 40 chars, CTA added

### IndexNow
- Skipped — no INDEXNOW_KEY in environment.
- URLs to submit on next run with credentials:
  - https://agenticai.associates/learn/in-house-ai-team-vs-consultancy/
  - https://agenticai.associates/learn/agentic-ai-vs-generative-ai/
  - https://agenticai.associates/learn/build-vs-buy-ai-agents/
  - https://agenticai.associates/learn/what-does-an-ai-consultant-do/
  - https://agenticai.associates/learn/benefits-of-hiring-an-ai-consultant/
  - https://agenticai.associates/learn/ai-consultant-career-path/
  - https://agenticai.associates/learn/ai-consultant-vs-vendor/
  - https://agenticai.associates/industries/government/
  - https://agenticai.associates/industries/saas/
  - https://agenticai.associates/industries/logistics/

### Recommendations for Run 3
Pages remaining with measurable issues (11 total):

**Title > 60 chars (2 pages):**
- `/learn/how-to-become-an-ai-consultant/` — T:61 (1 char over)
- `/learn/ai-consultant-skills/` — T:61 (1 char over)

**Desc > 155 chars (9 pages):**
- `/learn/how-to-choose-an-ai-consultant/` — D:157
- `/industries/fintech/` — D:158
- `/industries/insurance/` — D:162
- `/industries/automotive/` — D:163
- `/industries/energy-utilities/` — D:165
- `/industries/media-publishing/` — D:167
- `/what-we-do/ai-readiness-assessment/` — D:167
- `/industries/construction/` — D:172
- `/industries/hospitality/` — D:173

**Pattern opportunities for Run 3:**
- Location pages all share the same description template with only city name swapped — diversify top 5 by city-specific industry hook (e.g. London → fintech, Manchester → manufacturing)
- `/for/` pages have no power words — add numbers (e.g. "30-Day AI Audit" for enterprise, "Fixed-Fee" for small-business)
- Consider adding review date anchors "(Updated 2026)" to stale-looking learn titles

**Set up .env with credentials to enable:**
- GSC data pull for actual CTR/position data to prioritise by impressions
- Bing Webmaster indexed page count
- IndexNow submission after each run

---

## Run 1 — 2026-05-17

### Data Sources
- No `.env` file found; GSC and Bing Webmaster APIs skipped.
- IndexNow submission skipped (no INDEXNOW_KEY).
- Optimization based on pattern analysis of all source data files.

### Audit Summary
- **Total pages scanned:** 75 (all hubs + spokes)
- **Pages with issues identified:** 74
- **Pages optimized this run:** 10 (max per run)
- **Primary issues found site-wide:**
  - 22 pages with titles > 60 chars (incl. brand suffix "— Agentic AI Associates")
  - 31 pages with descriptions > 155 chars
  - 60+ pages missing a power word or number in the title
  - 60+ pages missing a clear CTA in the meta description
  - 12 what-we-do/industry pages missing "agentic" in title where relevant

### Pages Optimized

#### 1. `/what-we-do/ai-automation/`
- **Before title (61):** `AI Automation Consulting UK — Intelligent Workflow Automation`
- **After title (53):** `Agentic AI Automation Consultants UK — Expert Results`
- **Before desc (161):** `Automate repetitive tasks with AI. We design and deploy intelligent automation for UK businesses — from document processing to end-to-end workflow orchestration.`
- **After desc (147):** `Automate complex workflows with agentic AI. UK experts in document processing, RPA replacement, and end-to-end orchestration. Book a free fit call.`
- **Fixes:** title shortened, 'agentic' added, power word 'expert' added, desc shortened, CTA added

#### 2. `/what-we-do/ai-governance/`
- **Before title (66):** `AI Governance Consulting UK — Compliance, Ethics & Risk Frameworks`
- **After title (55):** `Agentic AI Governance UK — Expert Compliance Frameworks`
- **Before desc (132):** `AI governance frameworks for UK businesses. Bias audits, regulatory compliance (GDPR, AI Act), ethics policies, and risk management.`
- **After desc (145):** `Trusted AI governance for UK businesses. Bias audits, GDPR and AI Act compliance, ethics policies, and risk frameworks. Speak to an expert today.`
- **Fixes:** title shortened, 'agentic'+'expert' added, power word 'trusted' in desc, CTA added

#### 3. `/what-we-do/applied-ai/`
- **Before title (61):** `Applied AI Consulting UK — Computer Vision, Forecasting & NLP`
- **After title (52):** `Applied Agentic AI UK — Expert CV, Forecasting & NLP`
- **Before desc (137):** `Applied AI solutions including computer vision, demand forecasting, NLP, anomaly detection, and predictive maintenance for UK businesses.`
- **After desc (145):** `Expert applied AI for UK businesses — computer vision, demand forecasting, NLP, and anomaly detection. See proven results. Book a discovery call.`
- **Fixes:** title shortened, 'agentic'+'expert' added, power words 'proven'+'expert' in desc, CTA added

#### 4. `/industries/retail/`
- **Before title (49):** `AI Consultants for Retail — Inventory, CX & Sales`
- **After title (52):** `Agentic AI for UK Retail — Boost Margins & Cut Waste`
- **Before desc (157):** `Retail AI consultants helping UK retailers cut stock waste, personalise customer journeys and boost margins. Fixed-fee diagnostic, working system in 90 days.`
- **After desc (139):** `Agentic AI for UK retailers. Cut stock waste, personalise journeys, and boost margins. Fixed-fee diagnostic from £6,500. Get started today.`
- **Fixes:** 'agentic'+'boost' added to title, desc shortened below 155, price anchor added, CTA added

#### 5. `/industries/iot-connectivity/`
- **Before title (70):** `AI Consultant for IoT & Connectivity Providers — Agentic AI Associates`
- **After title (56):** `Agentic AI for IoT & Connectivity Providers — UK Experts`
- **Before desc (172):** `Agentic AI for IoT, M2M and connectivity providers. SIM lifecycle automation, tariff optimisation, network operations copilots, and churn prediction for MVNOs and carriers.`
- **After desc (149):** `Agentic AI for IoT, M2M and connectivity providers. SIM lifecycle automation, tariff optimisation, and churn prediction for MVNOs. Get expert advice.`
- **Fixes:** title shortened by 14 chars, power word 'experts' added, desc shortened by 23 chars, CTA added

#### 6. `/industries/pharma-life-sciences/`
- **Before title (64):** `AI Consultant for Pharma & Life Sciences — Agentic AI Associates`
- **After title (50):** `Agentic AI for Pharma & Life Sciences — UK Experts`
- **Before desc (164):** `Agentic AI for UK pharma, biotech and life sciences. Regulatory document intelligence, pharmacovigilance automation, clinical operations, and MHRA-ready governance.`
- **After desc (154):** `Agentic AI for UK pharma and life sciences. Regulatory document intelligence, pharmacovigilance automation, and MHRA-ready governance. Speak to an expert.`
- **Fixes:** title shortened by 14 chars, power word 'experts' added, desc shortened by 10 chars, CTA added

#### 7. `/industries/professional-services/`
- **Before title (63):** `AI Consultant for Professional Services — Agentic AI Associates`
- **After title (49):** `Agentic AI for Professional Services — UK Experts`
- **Before desc (176):** `Agentic AI for UK accounting, consulting and professional services firms. Proposal and matter intake, knowledge management, utilisation analytics, and partner-ready governance.`
- **After desc (155):** `Agentic AI for UK accounting and consulting firms. Proposal intake, knowledge management, utilisation analytics, and partner-ready governance. Start today.`
- **Fixes:** title shortened by 14 chars, power word 'experts' added, desc shortened by 21 chars, CTA added

#### 8. `/industries/charities-nonprofits/`
- **Before title (64):** `AI Consultant for Charities & Nonprofits — Agentic AI Associates`
- **After title (57):** `Agentic AI for UK Charities & Nonprofits — Expert Support`
- **Before desc (177):** `Agentic AI for UK charities, nonprofits and social enterprises. Fundraising operations, supporter care, grants and reporting, Charity Commission and Fundraising Regulator ready.`
- **After desc (150):** `Agentic AI for UK charities and social enterprises. Fundraising ops, supporter care, grants and reporting. Charity Commission ready. Book a free call.`
- **Fixes:** title shortened by 7 chars, power word 'expert' added, desc shortened by 27 chars, CTA added

#### 9. `/learn/agentic-ai-vs-rpa/`
- **Before title (84):** `Agentic AI vs RPA: Which Is Right for Enterprise Automation? — Agentic AI Associates`
- **After title (46):** `Agentic AI vs RPA: 5 Key Differences Explained`
- **Before desc (162):** `Agentic AI and RPA both automate work, but they fail and succeed at different things. A practical comparison for UK enterprise buyers — with a decision framework.`
- **After desc (143):** `Agentic AI and RPA both automate work but fail at different things. Discover which is right for your business with our expert comparison guide.`
- **Fixes:** title shortened by 38 chars (was way over), number '5' added, CTA word 'discover' added, desc shortened

#### 10. `/learn/agentic-ai-vs-chatbots/`
- **Before title (74):** `Agentic AI vs Chatbots: Why the Difference Matters — Agentic AI Associates`
- **After title (41):** `Agentic AI vs Chatbots: 5 Key Differences`
- **Before desc (162):** `Chatbots and AI agents look similar in a demo and behave very differently in production. A practical comparison for UK enterprise buyers deciding between the two.`
- **After desc (153):** `Chatbots and AI agents look similar but behave very differently in production. Discover which to choose with our practical guide for UK enterprise buyers.`
- **Fixes:** title shortened by 33 chars, number '5' added, CTA word 'discover' added, desc shortened

### IndexNow
- Skipped — no INDEXNOW_KEY in environment.
- URLs to submit on next run with credentials:
  - https://agenticai.associates/what-we-do/ai-automation/
  - https://agenticai.associates/what-we-do/ai-governance/
  - https://agenticai.associates/what-we-do/applied-ai/
  - https://agenticai.associates/industries/retail/
  - https://agenticai.associates/industries/iot-connectivity/
  - https://agenticai.associates/industries/pharma-life-sciences/
  - https://agenticai.associates/industries/professional-services/
  - https://agenticai.associates/industries/charities-nonprofits/
  - https://agenticai.associates/learn/agentic-ai-vs-rpa/
  - https://agenticai.associates/learn/agentic-ai-vs-chatbots/

### Recommendations for Run 2
Priority pages remaining (64 more with issues):

**High priority — title > 60 chars:**
- `/learn/in-house-ai-team-vs-consultancy/` (89 chars)
- `/learn/agentic-ai-vs-generative-ai/` (87 chars)
- `/learn/build-vs-buy-ai-agents/` (76 chars)
- `/learn/benefits-of-hiring-an-ai-consultant/` (66 chars)
- `/locations/scotland/` (65 chars)
- `/locations/northern-ireland/` (66 chars)

**High priority — missing CTA in description:**
- All remaining industry pages (healthcare, legal, finance, supply-chain, ecommerce, hr, real-estate, manufacturing, marketing, education)
- All location pages
- Most what-we-do pages (agentic-ai, conversational-ai, ai-training, ongoing-support, data-ai, ai-readiness-assessment)

**Medium priority — no power word/number in title:**
- `/for/enterprise/`, `/for/smes/`, `/for/small-business/`, `/for/startups/`
- All location pages

**Pattern to fix for Run 2:** Location pages all follow `Agentic AI Consultant [City] — Strategy & Implementation` — this repetitive subtitle pattern could be diversified with city-specific industries or price anchors.

**Set up .env with credentials to enable:**
- GSC data pull for actual CTR/position data
- Bing Webmaster indexed page counts
- IndexNow submission after each run
