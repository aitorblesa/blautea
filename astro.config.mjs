import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import vercel from '@astrojs/vercel'
import path from 'node:path'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.blautea.com',
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
  i18n: {
    defaultLocale: 'ca',
    locales: ['es', 'ca', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  adapter: vercel(),
})
