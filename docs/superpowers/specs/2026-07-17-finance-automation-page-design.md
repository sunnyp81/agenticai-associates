# Finance Automation money-page — design

Date: 2026-07-17
Status: approved

## Goal
Refocus agenticai.associates onto **AI automation for finance departments** (invoicing, credit
control) to feed the Total Ops Automation (TOA) referral partnership. TOA delivers builds; AAA's
site generates the finance-automation leads. AAA-branded, no TOA name surfaced.

## Constraints
- **Figment legal lock:** ops-AI lane only. Workflow/process automation for finance = safe.
  Never SEO/AEO/GEO/content-marketing framing. No AAA work Figment hours 08:00-18:00 Mon-Fri.
- **No new/removed pricing language.** Reuse the existing £6,500 Phase-Gate Diagnostic; do not
  reintroduce "Discovery Call", "£150/hour", "£1,500/month", "£3,000 Strategy".
- Match existing patterns — JSON-driven, no new components.

## Architecture
Add one spoke object, `finance-automation`, to `src/data/what-we-do.json` `pages[]`. It renders at
`/what-we-do/finance-automation/` via the existing `src/pages/what-we-do/[slug].astro` factory,
inheriting Service + FAQPage + BreadcrumbList JSON-LD, cross-links, and sitemap entry. Set
`entryPoint: true` (money page, mirrors `ai-readiness-assessment`).

## Content
Positioning: AI automation for UK finance departments. Target the four TOA "easy win" workflows:
1. Invoicing / accounts-payable automation
2. Credit control & collections (dunning, cash allocation)
3. Bank & ledger reconciliation
4. AP/AR reporting

Fields (mirror the money-page spoke shape):
- `slug`: finance-automation
- `name`: Finance Automation
- `title` / `description` / `primaryKeyword`: around "finance automation / invoice automation /
  credit control automation UK"
- `icon`: automation
- `entryPoint`: true
- `intro`: 1-2 paras
- `sections`: 4 — (a) the workflows we automate, (b) how the finance-ops audit works,
  (c) who it's for, (d) what you walk away with. Include definitional Q&A-style sentences for LLM
  extraction.
- `features`: 6 (one per workflow + governance + ROI/board case)
- `faq`: 6 (cost → reuse £6,500 diagnostic answer pattern; timeline; systems it works with —
  Sage/Xero/QuickBooks/NetSuite; data security/FCA; what happens after audit; ROI)
- `relatedServices`: [ai-automation, agentic-ai, ai-governance]
- `relatedIndustries`: [finance]

CTA framing: audit-first — the existing £6,500 Phase-Gate Diagnostic **scoped to finance ops**,
matching TOA's audit→dev→retain model.

## Wiring
- `src/data/site-config.ts`: add "Finance Automation" to the What We Do nav dropdown + footer.
- Homepage (`src/pages/index.astro`): add a link/feature entry pointing to the new page.
- Cross-links IN: add a contextual link to `/what-we-do/finance-automation/` from
  `/industries/finance/` (industries.json) and from the `ai-automation` spoke in what-we-do.json.

## Validation & deploy
- `npm run build` clean.
- Site does NOT git-auto-deploy → build then **Wrangler CLI** from `dist/`, then
  `node scripts/indexnow-ping.mjs`.
- Reminder (Sunny, CF dashboard): Bots → Super Bot Fight Mode → AI Scrapers and Crawlers OFF.
- Verify live URL 200 + schema after deploy.

## Out of scope
- No TOA branding/mention. No homepage repositioning. No new pricing tiers.
