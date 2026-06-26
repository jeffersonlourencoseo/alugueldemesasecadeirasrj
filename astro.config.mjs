import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';
import partytown from '@astrojs/partytown';
import { SITE_CONFIG } from './src/data/config';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  site: SITE_CONFIG.domain,
  trailingSlash: 'always',
  integrations: [
    tailwind({
      applyBaseStyles: true,
      configFile: './tailwind.config.mjs',
    }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },
  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
});
