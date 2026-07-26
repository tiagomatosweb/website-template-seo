// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
      failOnError: false,
    },
  },
  css: ['~/assets/css/main.css', 'img-comparison-slider/dist/styles.css'],
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag === 'img-comparison-slider',
    },
  },
  imports: {
    dirs: ['content'],
  },
  modules: ['@nuxt/ui', '@nuxtjs/seo', '@vueuse/nuxt'],
  site: {
    url: 'https://example.com',
    name: 'BusinessName',
    trailingSlash: false,
    indexable: true,
  },
  sitemap: {
    exclude: ['/blocks/**', '/design-system'],
  },
  robots: {
    disallow: ['/blocks', '/design-system'],
    blockNonSeoBots: true,
  },
  ogImage: { enabled: false },
  linkChecker: {
    failOnError: false,
  },
  ui: {
    colorMode: false,
    theme: {
      colors: [
        'primary',
        'secondary',
        'cta',
        'white',
        'info',
        'success',
        'warning',
        'error',
      ],
    },
  },
  fonts: {
    families: [
      { name: 'Roboto', weights: [400, 500, 600, 700, 800, 900] },
    ],
  },
})
