import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { SITE_CONFIG } from './src/data/config';

export default defineConfig({
  site: SITE_CONFIG.domain,
  integrations: [
    tailwind(),
  ],
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },
});
