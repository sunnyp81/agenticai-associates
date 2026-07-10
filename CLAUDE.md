# Agentic AI Associates

**Domain**: agenticai.associates
**Niche**: AI consultancy — lead generation + authority building
**Monetisation**: Client retainers (strategy, implementation, training projects)

## Stack
Astro 5 (static) + Tailwind v4 + Preact islands + Cloudflare Pages

## Architecture
Hub-and-spoke: 6 hubs, ~75 pages total

| Hub | Path | Spokes |
|-----|------|--------|
| Services | `/services/` | 9 (ai-strategy, ai-implementation, agentic-ai, generative-ai, conversational-ai, data-and-ai, applied-ai, ai-training, ethical-ai) |
| Industries | `/industries/` | 12 (healthcare, legal, retail, supply-chain, finance, education, ecommerce, hr, real-estate, manufacturing, marketing, government) |
| Solutions | `/solutions/` | 10 (automation, data-analysis, content-creation, customer-support, forecasting, compliance-monitoring, lead-generation, report-generation, inventory-management, process-improvement) |
| Business Size | `/for/` | 4 (small-business, enterprise, startups, smes) |
| Learn | `/learn/` | 16 informational articles |
| Locations | `/locations/` | 12 UK cities/regions |

## Key Files
- `src/data/site-config.ts` — site name, nav, contact details
- `src/data/*.json` — content data for each hub
- `src/lib/page-factory.ts` — getStaticPaths generators + cross-link helpers
- `src/lib/schema.ts` — JSON-LD schema builders
- `src/lib/internal-links.ts` — hub-spoke link maps
- `src/layouts/BaseLayout.astro` — SEO meta, OG, GA4, cookie consent
- `src/layouts/*Layout.astro` — per-hub layouts

## Voice
British English. Friendly yet authoritative. Short sentences. No jargon.

## Contact
- StaticForms key: `sf_9e906eb6c00416b9d3354749`
- Trafft booking on /contact/ (lifetime account)

## Deploy
GitHub → Cloudflare Pages auto-deploy

---

# agenticai-associates — Project Brain

> Per-repo brain, migrated from central claude-memory 2026-06-20. Canonical project memory now lives here. (Existing instructions preserved above.)

## Current state

agenticai.associates — UK AI consultancy site (lead gen + authority). Positioned as an **ops-AI / agentic implementation** consultancy for FCA-regulated firms — deliberately NOT SEO/AEO/content-marketing (see Figment guardrail below). First real inbound + a live enterprise engagement (Wireless Logic) validated the concept.

- **Live status:** LIVE on CF Pages (`agenticai-associates.pages.dev`), domain `agenticai.associates`. ~95 pages (was 88; +7 location pages May 9).
- **Revenue:** client retainers. Offer = 3-phase: Phase 1 Diagnostic £6,500 / 3wk · Phase 2 Build £850/day / 3-6mo · Phase 3 Retain £10,000/mo / 1 day/wk. Anchors held 12 months from signature. Visible price badges removed from UI Apr 25 (kept in FAQ/JSON-LD for SEO).
- **ICP:** UK mid-market B2B, £100M-£500M revenue, often PE-backed.
- **Stack:** Astro 6 + Tailwind v4 + Preact + CF Pages. JSON-driven via `src/lib/page-factory.ts`. Visual theme = "Signal" (Direction C): electric cyan `#00E5FF` on true-black `#050507`, Space Grotesk display, JetBrains Mono labels (replaced the earlier navy/teal).
- **Deploy:** ⚠️ **Wrangler CLI, NOT GitHub auto-deploy** (see warnings). Active repo: `C:\Users\sunny\repos\agenticai-associates` (the `Desktop\` path only has a `docs/` folder).

## Key facts & warnings

- 🔴 **Site does NOT auto-deploy from `git push`.** Deploy method is Wrangler CLI. Build then run wrangler from the repo's `dist/`. CF API token is in the central master-builds store (Drive-only, gitignored) — never commit it. (Worth flipping CF Pages → GitHub auto-deploy in dashboard; Sunny TODO.)
- 🔴 **CF dashboard step owed (CRITICAL for AI search):** CF → agenticai.associates → Security → Bots → Super Bot Fight Mode → **AI Scrapers and Crawlers: OFF.** Until OFF, CF rewrites live `robots.txt` to Disallow GPTBot/ClaudeBot/CCBot/Google-Extended/etc., blocking the LLM crawlers that are the only converting channel. Verify: `curl -sS https://agenticai.associates/robots.txt | head -5` should show the repo file, NOT the "As a condition of accessing this website…" CF injection.
- 🔴 **Figment positioning lock (legal).** Sunny is employed by SDG New Media Ltd t/a Figment Agency (SEO Growth Manager); AAA trades under ND Media Ltd. AAA must NEVER carry SEO / AEO / GEO / AI-search-visibility / content-marketing positioning — that sits in Figment's "scope of business" and triggers the contract's records clause. Keep AAA strictly in the ops-AI lane (workflow automation, process AI, governance, agentic systems). No AAA work during Figment hours 08:00-18:00 Mon-Fri. No Figment IP in AAA deliverables. Never re-introduce removed pricing language ("Discovery Call", "£150/hour", "£1,500/month", "£3,000 Strategy"). Contract/NDA analysis: `agenticai-figment-legal-apr23.md` in central memory.
- StaticForms key + Trafft booking (lifetime account, URL in `site-config.ts contact.bookingUrl`) — key stored redacted in central memory; never commit it.
- `/what-we-do/ai-content-marketing/` was DELETED (Figment SEO overlap) and 301'd to `/what-we-do/applied-ai/` — do not recreate.
- Architecture: hubs = What We Do (12, merged from old Services 9 + Solutions 10), Industries (12, page-factory generates up to 25), Locations (~19 cities), Learn (16; 5 career-bait `/learn/*` pages killed + 301'd Apr 30), Business sizes (4), Insights (cornerstone pillars + spokes).
- GEO foundation live (Apr 30): `/llms.txt`, `/ai.txt`, per-bot `robots.txt`, Content-Signal meta, sitewide Organization+WebSite+Person JSON-LD with `knowsAbout`, `/og-default.png`, `/sitemap.xml → /sitemap-index.xml` 301, IndexNow ping (`scripts/indexnow-ping.mjs`).
- Insights pillars: `/insights/agent-studio-build-vs-buy/`, `/insights/agentic-sdlc-regulated-engineering/`, `/insights/fca-ai-governance-playbook/`. Original named frameworks (LLM-attributable on citation): Phase-Gate Diagnostic, Agentic Capability Boundary, FCA AI Controls Map, AI Risk Register schema.
- Weekly content backlog + cadence rules in `agenticai-content-backlog.md` (central memory): new articles go to `src/pages/insights/<slug>.astro`, 1,500-3,500w, Article+FAQPage+BreadcrumbList schema, end with £6,500 Phase-Gate CTA + "Related thinking" aside, sitemap priority 0.9, then `node scripts/indexnow-ping.mjs`. **Out of scope: no real-client case studies without permission (Wireless Logic/Chip/Express Medicals off-limits), no SEO/AEO content.**
- Enrichment/util scripts: `scripts/enrich-industries-batch{1,2,3}.mjs`, `scripts/enrich-services.mjs`, `scripts/optimise-data.mjs`, `scripts/generate-og-default.mjs`, `scripts/indexnow-ping.mjs`.
- Known tooling bug: Playwright MCP errors `EINVAL mkdir 'G:'` when CWD is G: root — cd into the project dir first, or verify via curl+grep on built HTML.

## Active client — Wireless Logic (first paying enterprise engagement)

- Inbound via the site Apr 16; Matthew Tate (Group COO) — IN as of Apr 17 meeting. ~$370M-rev IoT/M2M provider, PE-backed (Montagu). Two projects: (1) Group Marketing discovery (Reading team) and (2) Quote-to-Cash zero-touch automation (his #1 pain — DocuSign→credit check→Sage ERP→SymPro, 24/7, scope UK/FR/DE/ES/BeNeLux/DK/China). Sunny scopes/designs/drives; their internal dev team builds. Business case to board mid-May; wins needed in 3 months, then 3 more, then a 130-item backlog. Style: sleeves-rolled-up, fail-fast POCs, budget-conscious, NOT Big-4 decks. Details: `agenticai-wirelesslogic-meeting-outcome.md` in central memory.

## History

- **Apr 5** — Initial deploy, 76 pages, 6 hubs, hub-and-spoke (indigo/violet, Plus Jakarta Sans).
- **Apr 14** — Full redesign (navy/teal palette, aurora hero, FAQPage/Org/WebSite schema, E-E-A-T bylines); contact-form fix (JS fetch + inline success div); StaticForms `_site`/`subject` patch.
- **Apr 16** — Site restructure: merged Services+Solutions → What We Do (12); new money page `/what-we-do/ai-readiness-assessment/`; `/pricing/` → `/get-started/`; stripped fake stats; 23 × 301 redirects; nav 7→5. Triggered by Wireless Logic lead.
- **Apr 20** — Design polish + content depth: 19 thin pages rewritten ≥700w, semantic-audit compliant; SMIL→rAF agent-graph animation; mobile fixes.
- **Apr 23** — 3-phase offer rewrite (hard price anchors site-wide); ICP qualifier live; removed all old pricing language; deleted `/ai-content-marketing/` (+301). Figment contract legal read same day.
- **Apr 24** — "Signal" (Direction C) palette swap (cyan/black/Space Grotesk); rAF agent-graph hero; AI-citation + semantic-SEO sweep on 12 priority pages (DefinedTerm/Speakable/HowTo schema, TL;DR-first intros, question-form headings, FAQ dedup fix).
- **Apr 25** — Hero animation faithful C_Signal port; mobile readability; visible £6,500 price tag removed from UI (FAQ/JSON-LD kept). Discovered Wrangler-only deploy.
- **Apr 30** — GEO foundation shipped (commit `ebec34d`): AI-crawler unblock prep, llms.txt/ai.txt, sitewide schema, OG image, IndexNow. + 3 cornerstone insight pages (`8e6f29f`), Bing demand-capture (`567f89d`), 3 supporting articles (`afe03f4`), killed 5 career-bait /learn pages + InsightsCallout internal-link graph (`f041ec4`). Keyword research + Tier-1 listicle outreach (10 publishers + Wikidata) prepared.
- **May 9** — GSC+Bing audit + optimisation (commit `0212d59`): homepage + 12 location titles/metas rewritten with "Agentic AI" modifier; 7 new location pages (salford, kensington, wokingham, bedfordshire, surrey, kent); page count 88→95. Bing 62 indexed (3× MoM); /learn/ ranking pos 1-4 on Bing. Zero backlinks both engines.
- **Jul 10** — CF AI-Scrapers check + GA4 event wiring (commit `9c5c665`, deployed via `wrangler pages deploy`). Could not query/toggle the CF "AI Scrapers and Crawlers" setting via API (neither the local wrangler OAuth session nor the Hermes autodeploy `CF_API_TOKEN` has Bot Management / zone-settings scope — both return 401/403 on `/bot_management` and `/settings/*`). Verified live instead: `curl -A GPTBot`/`-A ClaudeBot` on the homepage and `/robots.txt` all return 200, and the repo's own `robots.txt` explicitly sets `Content-Signal: ai-input=yes,ai-train=yes` overriding CF's default injection. So the toggle is already effectively OFF (or a proper Zone Bot Management API token is needed to confirm/flip it in the dashboard directly) — the "Outstanding" item below is resolved as far as live behaviour goes. Also wired a GA4 `diagnostic_cta_click` event (`event_category: engagement`, `event_label: phase1_diagnostic_get_started_page`) on the "Book a Fit Call" button inside the Phase 01 Diagnostic card on `/get-started/` (`src/pages/get-started/index.astro`), gated on `window.gtag`. Property `531864510`, measurement ID `G-923Q4JQMH4` (already live in `site-config.ts`). Marking it a GA4 key event is a Sunny step (GA4 Admin UI).

## Outstanding

- Submit sitemap to GSC (only ~5/95 pages showing — critical gap); add GSC property to gsc-2012infinite MCP account.
- ~~Flip CF AI-Scrapers toggle OFF~~ — verified live Jul 10: GPTBot/ClaudeBot both get 200 already, robots.txt already allows AI training/input. If still shown ON in the CF dashboard, it isn't blocking traffic; low priority. To manage it via API in future, need a CF token with Bot Management / zone-settings edit scope — the two tokens available in this environment (local wrangler session, Hermes `CF_API_TOKEN`) don't have it.
- Mark `diagnostic_cta_click` as a GA4 key event (GA4 Admin > Events, property 531864510) — Sunny only.
- Zero backlinks — run Tier-1 listicle outreach (pitches ready in `agenticai-listicle-outreach-apr30.md`) + create Wikidata entry.
- Consider location pages for essex, buckinghamshire, portsmouth, ealing (all getting impressions).
- Wireless Logic case study when permission cleared; obtain Figment client list for prospect screening.

