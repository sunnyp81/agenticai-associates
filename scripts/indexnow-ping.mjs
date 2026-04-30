// IndexNow batch ping for agenticai.associates
// Pulls URLs from sitemap-0.xml and submits to Bing IndexNow.
// Run: node scripts/indexnow-ping.mjs

const KEY = 'fd0147cf4f4446f4984568ee673533e6';
const HOST = 'agenticai.associates';
const SITEMAP = `https://${HOST}/sitemap-0.xml`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const sitemap = await fetch(SITEMAP).then((r) => r.text());
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

console.log(`Pinging ${urls.length} URLs to IndexNow…`);

const res = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  }),
});

console.log(`Status: ${res.status} ${res.statusText}`);
console.log(await res.text());
