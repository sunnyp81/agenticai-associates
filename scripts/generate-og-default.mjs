// One-shot generator for public/og-default.png (1200×630)
// Run: node scripts/generate-og-default.mjs

import puppeteer from 'puppeteer';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, '..', 'public', 'og-default.png');

const html = `<!doctype html>
<html><head><meta charset="utf-8"><style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1200px;height:630px;background:linear-gradient(135deg,#080f1e 0%,#0e1a3a 50%,#1a2960 100%);color:#fff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;display:flex;flex-direction:column;justify-content:center;padding:80px;position:relative;overflow:hidden}
  .grid{position:absolute;inset:0;background-image:linear-gradient(rgba(56,189,248,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,.06) 1px,transparent 1px);background-size:48px 48px;mask-image:radial-gradient(circle at 60% 40%,#000 30%,transparent 70%)}
  .glow{position:absolute;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(56,189,248,.25),transparent 70%);top:-200px;right:-150px}
  .badge{display:inline-flex;align-items:center;gap:12px;padding:10px 20px;border:1px solid rgba(56,189,248,.4);border-radius:999px;background:rgba(56,189,248,.08);font-size:18px;font-weight:600;color:#7dd3fc;width:fit-content;margin-bottom:32px;letter-spacing:.02em}
  .dot{width:8px;height:8px;background:#22d3ee;border-radius:50%;box-shadow:0 0 12px #22d3ee}
  h1{font-size:72px;font-weight:800;line-height:1.05;letter-spacing:-.02em;max-width:1000px;margin-bottom:28px}
  .accent{background:linear-gradient(135deg,#22d3ee,#7dd3fc);-webkit-background-clip:text;background-clip:text;color:transparent}
  p{font-size:26px;color:#cbd5e1;max-width:900px;line-height:1.4;margin-bottom:48px}
  footer{display:flex;align-items:center;justify-content:space-between;padding-top:32px;border-top:1px solid rgba(125,211,252,.2)}
  .brand{font-size:24px;font-weight:700;letter-spacing:.02em}
  .url{font-size:20px;color:#7dd3fc;font-family:'SF Mono',Menlo,Consolas,monospace}
</style></head><body>
  <div class="grid"></div><div class="glow"></div>
  <div class="badge"><span class="dot"></span>UK AI CONSULTANCY</div>
  <h1>Agentic AI for <span class="accent">regulated enterprises</span>.</h1>
  <p>Architecture, governance, and operating-model design for organisations deploying agentic AI at scale.</p>
  <footer><div class="brand">Agentic AI Associates</div><div class="url">agenticai.associates</div></footer>
</body></html>`;

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'networkidle0' });
await page.screenshot({ path: out, type: 'png' });
await browser.close();
console.log(`✓ wrote ${out}`);
