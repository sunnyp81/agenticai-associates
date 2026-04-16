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
