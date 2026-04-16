# AgenticAI Associates — Site Restructure Design Spec

**Date:** 2026-04-16
**Status:** Approved
**Trigger:** Inbound lead from wirelesslogic.com within 7 days of launch validates the site concept. Competitive research reveals clear positioning whitespace. Site needs restructuring to convert enterprise leads more effectively.

---

## 1. Positioning & Messaging

### Core Positioning
"We build AI systems that generate revenue from week one — not strategy decks that sit in a drawer."

**Supporting proof:** "Our own site ranked on Google and generated an enterprise lead within 7 days of launch. We build with the same speed and rigour for our clients."

### Messaging Pillars
1. **Speed to value** — working systems in weeks, not 6-month discovery phases
2. **Transparent pricing** — one clear entry point, no hidden fees
3. **Founder-led expertise** — work directly with the person who built the systems
4. **UK-focused, AI-native** — built from day one around agentic AI, not a bolted-on practice

### Voice
- Professional but direct. British English. Short sentences. No jargon.
- "We" throughout (scales to a team). Sunny Patel as named founder, not sole identity.
- Brand name "Agentic AI Associates" stays — works for a team.

### Strip (Fabricated Content)
- "50+ AI projects delivered" stat
- "98% client satisfaction" stat
- "12 industries served" stat
- Three fake testimonials (Sarah Mitchell, James Okafor, Rachel Thornton)
- Tech "partner" logos framing — reframe as "Our Technology Stack"

### Replace With (Authentic Proof)
- Wireless Logic proof point (anonymised as "UK IoT connectivity provider" unless permission granted)
- Site-as-proof case study: built, ranked, converted in 7 days
- Honest founder credentials — no inflated claims
- "Results" page that starts small and grows with each engagement

---

## 2. Navigation & Page Structure

### Navigation Change
**Current (7 items):** Services | Industries | Solutions | Learn | Locations | About | Pricing

**New (5 items):** What We Do | Industries | Learn | About | Get Started

### Merge: Services + Solutions → "What We Do"
Current 9 services + 10 solutions (19 pages with confusing overlap) merge into one hub with ~12 pages:

| New Page | Slug | Maps From |
|----------|------|-----------|
| AI Readiness Assessment | /what-we-do/ai-readiness-assessment/ | NEW — money page, single entry point |
| AI Strategy & Roadmaps | /what-we-do/ai-strategy/ | services/ai-strategy |
| Agentic AI Systems | /what-we-do/agentic-ai/ | services/agentic-ai |
| Generative AI & LLMs | /what-we-do/generative-ai/ | services/generative-ai |
| AI Automation & Workflows | /what-we-do/ai-automation/ | services/ai-implementation + solutions/automation + lead-gen + report-gen + process-improvement |
| Data & AI Infrastructure | /what-we-do/data-ai/ | services/data-ai + solutions/data-analysis |
| Conversational AI | /what-we-do/conversational-ai/ | services/conversational-ai + solutions/customer-support |
| AI Governance & Compliance | /what-we-do/ai-governance/ | services/ethical-ai + solutions/compliance (NEW positioning — Gap 5 from research) |
| AI Training & Workshops | /what-we-do/ai-training/ | services/ai-training |
| Ongoing Support & Optimisation | /what-we-do/ongoing-support/ | NEW — maps to retainer model |
| Applied AI | /what-we-do/applied-ai/ | services/applied-ai + solutions/forecasting + inventory-management |
| AI for Content & Marketing | /what-we-do/ai-content-marketing/ | solutions/content-creation |

### Keep: Industries (12 pages)
Hub + 12 spokes stay. Content rewritten with real regulatory references (FCA, NHS/CQC, SRA, MHRA) and specific pain points from competitive research.

### Keep: Locations (12 pages)
Stay as-is. Light copy refresh only. Pure local SEO play.

### Keep: Learn (16 pages)
Stay. Becomes the SEO content engine. New articles added targeting research-identified terms over time.

### Deprioritise: Business Size (/for/)
Remove from navigation. 4 pages (small-business, startups, smes, enterprise) stay live for SEO but aren't linked from main nav. Mid-market messaging on homepage covers this.

### Restructure: Pricing → "Get Started"
- Rename /pricing/ to /get-started/
- Single entry point: **AI Readiness Assessment** — fixed fee, clearly scoped, 2-4 weeks
- "What happens next" section — explains strategy → pilot → implementation with indicative ranges
- CTA: Book a Discovery Call (free, 30 min via Trafft)

### Restructure: About
- **Our Approach** — how we work, differentiators
- **Founder** — Sunny Patel, honest bio
- **Our Team** — starts with Sunny, structured to add team members
- **Technology Stack** — tools we use (not "partners")
- **Results** — replaces empty Case Studies. Starts with Wireless Logic proof point.

### Restructure: Contact
Stays at /contact/. Primary CTA everywhere becomes "Book a Discovery Call" (Trafft). Form is secondary.

### Final Page Count
| Section | Pages | In Nav? |
|---------|-------|---------|
| Homepage | 1 | — |
| What We Do (hub + spokes) | 13 | Yes |
| Industries (hub + spokes) | 13 | Yes |
| Locations (hub + spokes) | 13 | Yes |
| Learn (hub + spokes) | 17 | Yes |
| About (/about/ — single page with Approach, Founder, Team, Tech Stack sections) | 1 | Yes |
| Results (/about/results/ — standalone page for case studies/proof) | 1 | Yes (linked from About + nav) |
| Get Started | 1 | Yes |
| Contact | 1 | Footer |
| For / Business Size | 5 | No (SEO only) |
| Privacy / Terms / 404 / Thank You | 4 | Footer |
| **Total** | **~71** | |

---

## 3. Content & Data Architecture

### Data File Changes

**Merge:** `services.json` + `solutions.json` → `what-we-do.json`
Single file with ~12 entries. Each entry:
```json
{
  "slug": "ai-readiness-assessment",
  "title": "AI Readiness Assessment",
  "description": "...",
  "primaryKeyword": "ai readiness assessment uk",
  "icon": "...",
  "sections": [],
  "features": [],
  "faqs": [],
  "relatedServices": [],
  "relatedIndustries": [],
  "entryPoint": true
}
```

**Update:** `industries.json`
- Add real regulatory references (FCA, NHS/CQC, SRA, MHRA, Ofsted)
- Specific pain points from competitive research
- Link to What We Do pages (not separate services AND solutions)

**Update:** `site-config.ts`
- New 5-item navigation
- Remove fake testimonials
- Add results/proof points data structure
- Update founder bio
- Fix LinkedIn URL (confirm real URL or remove)

**New:** `results.json`
Proof points and case studies:
- Wireless Logic proof point
- "Site itself" case study

**Keep:** `locations.json`, `learn.json`, `business-sizes.json` — minimal changes.

### Layout Changes
- `ServiceLayout.astro` + `SolutionLayout.astro` → merge into `WhatWeDoLayout.astro`
- New `ResultsLayout.astro` (for Results page)
- Other layouts stay

### Page Route Changes
- `/pages/services/[slug].astro` → `/pages/what-we-do/[slug].astro`
- `/pages/solutions/[slug].astro` → delete (merged)
- `/pages/pricing/index.astro` → `/pages/get-started/index.astro`
- `/pages/case-studies/index.astro` → delete (replaced by Results in About)

---

## 4. Visual Design Changes

### Keep (No Changes)
- Color palette: navy (#1e3a5f) + teal (#0d9488)
- Typography: Plus Jakarta Sans + Inter
- Spacing system: 1.5rem base, 5rem sections
- Card/button components and hover states
- Responsive breakpoints
- Accessibility foundations (semantic HTML, ARIA, focus states)
- Light-with-dark-sections approach (no dark mode needed)

### Fix: 7 Items

**1. Simplify hero section**
- Keep dark background (#080f1e)
- Remove dot grid overlay
- Remove noise texture SVG filter
- Reduce aurora blobs to one subtle gradient glow behind heading
- Let copy and CTA do the work

**2. Standardise gradient blues**
- Currently #2563eb (primary) vs #38bdf8 (hero text) — two different blues
- Standardise on #2563eb everywhere

**3. Fix testimonial card inline JS**
- Convert `onmouseenter`/`onmouseleave` inline handlers to CSS-only hover
- Match pattern used by other components

**4. Make aurora blobs responsive**
- Switch from fixed 600px/500px to percentage-based or CSS clamp()
- Prevent odd appearance on ultrawide screens

**5. Increase focus ring to 3px**
- Currently 2px — increase for better keyboard navigation visibility

**6. Standardise button font-size**
- Currently 0.9375rem (15px) — non-standard
- Switch to 0.875rem (text-sm) to match Tailwind scale

**7. Create og-default.png**
- Currently 404s on social share
- Create 1200x630 OG image with brand colors, logo, tagline

### New Sections

**Results section (homepage)**
- Replaces fake testimonials
- Clean card showing Wireless Logic proof point
- "Built, ranked, and converting in 7 days" stat
- Structured to grow — entries from results.json

**Buyer journey visual (homepage)**
- Replaces generic ProcessSteps
- 3 steps: Discovery Call (free) → AI Readiness Assessment (fixed fee) → Scoped Engagement
- Horizontal stepper on desktop, vertical on mobile
- Uses existing card-animated-border pattern

---

## 5. SEO & Redirects

### 301 Redirects (via /public/_redirects for CF Pages)

**Services → What We Do:**
```
/services/ /what-we-do/ 301
/services/ai-strategy/ /what-we-do/ai-strategy/ 301
/services/ai-implementation/ /what-we-do/ai-automation/ 301
/services/agentic-ai/ /what-we-do/agentic-ai/ 301
/services/generative-ai/ /what-we-do/generative-ai/ 301
/services/conversational-ai/ /what-we-do/conversational-ai/ 301
/services/data-ai/ /what-we-do/data-ai/ 301
/services/applied-ai/ /what-we-do/applied-ai/ 301
/services/ai-training/ /what-we-do/ai-training/ 301
/services/ethical-ai/ /what-we-do/ai-governance/ 301
```

**Solutions → What We Do:**
```
/solutions/ /what-we-do/ 301
/solutions/automation/ /what-we-do/ai-automation/ 301
/solutions/data-analysis/ /what-we-do/data-ai/ 301
/solutions/content-creation/ /what-we-do/ai-content-marketing/ 301
/solutions/customer-support/ /what-we-do/conversational-ai/ 301
/solutions/forecasting/ /what-we-do/applied-ai/ 301
/solutions/compliance/ /what-we-do/ai-governance/ 301
/solutions/lead-generation/ /what-we-do/ai-automation/ 301
/solutions/report-generation/ /what-we-do/ai-automation/ 301
/solutions/inventory-management/ /what-we-do/applied-ai/ 301
/solutions/process-improvement/ /what-we-do/ai-automation/ 301
```

**Other:**
```
/pricing/ /get-started/ 301
/case-studies/ /about/ 301
```

### Schema Updates

**Strip:** FAQPage schema with current content (rewrite with new FAQs). Organization schema fake metrics.

**Update:**
- Organization: remove partner refs, accurate founder info, add `hasOfferCatalog` for AI Readiness Assessment
- Person: honest founder bio
- WebSite: update navigation references

**Add:**
- Service schema on /what-we-do/ai-readiness-assessment/ — `priceRange`, `areaServed: GB`, `serviceType`
- BreadcrumbList updated for /what-we-do/ paths

### Sitemap Priorities
| Page | Priority |
|------|----------|
| Homepage | 1.0 |
| /what-we-do/ (hub) | 0.9 |
| /what-we-do/ai-readiness-assessment/ | 0.9 |
| /what-we-do/* (other) | 0.8 |
| /industries/* | 0.8 |
| /get-started/ | 0.8 |
| /about/ | 0.7 |
| /learn/* | 0.7 |
| /locations/* | 0.7 |
| /for/* | 0.5 |

### Internal Linking
Every page gets a CTA to one of:
- "Book a Discovery Call" → Trafft (primary)
- "Start with an Assessment" → /get-started/ (secondary)

Cross-linking:
- What We Do → related Industries + other What We Do pages
- Industries → relevant What We Do + related Industries
- Locations → relevant What We Do + /get-started/
- Learn → relevant What We Do (top-of-funnel → mid-funnel)
- All pages → /get-started/ via CTA banner

### New Keyword Targets
- "ai readiness assessment uk" → /get-started/
- "agentic ai consultant uk" → homepage + /what-we-do/agentic-ai/
- "ai governance consulting uk" → /what-we-do/ai-governance/
- "ai consultant pricing uk" → /get-started/
- "what does an ai consultant do" → /learn/ (new article)

### Post-Deploy
- Push all new URLs via IndexNow (key file exists in /public/)
- Submit updated sitemap to GSC
- Monitor redirect chains in GSC for 2 weeks

---

## 6. Scalability Design

The restructure is designed to scale from solo founder to team:

| Element | Now | Later |
|---------|-----|-------|
| Copy voice | "We" throughout | Already works for team |
| About page | "Founded by Sunny Patel" + team section | Add team members as entries |
| Brand name | Agentic AI Associates | Works for any size |
| Pricing | Single entry point (assessment) | Add tiers as team grows |
| Results page | 1-2 proof points | Grows with engagements |
| What We Do | 12 pages | Add specialisms as expertise grows |

---

## 7. Out of Scope

These are explicitly not part of this restructure:
- Dark mode implementation
- CMS integration (stays static JSON)
- Blog/insights section (Learn serves this purpose)
- Additional animation library
- Design system documentation file
- New domain or rebrand
