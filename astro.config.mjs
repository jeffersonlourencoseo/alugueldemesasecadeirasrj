import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { SITE_CONFIG } from './src/data/config';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  site: SITE_CONFIG.domain,
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },
});
