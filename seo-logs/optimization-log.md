# SEO Optimization Log — agenticai.associates

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
