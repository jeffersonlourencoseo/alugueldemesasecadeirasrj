import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';
import { SITE_CONFIG } from './src/data/config';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  site: SITE_CONFIG.domain,
  integrations: [
    tailwind(),
  ],
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },
});
