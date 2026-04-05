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
- Calendly embed on /contact/

## Deploy
GitHub → Cloudflare Pages auto-deploy
