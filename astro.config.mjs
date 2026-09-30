import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://melisa-portfolioo.netlify.app',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'fr'],
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
});
