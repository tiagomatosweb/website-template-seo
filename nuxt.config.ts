// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  $production: {
    // nitro: {
    //   preset: 'cloudflare_module',
    //   cloudflare: {
    //     deployConfig: true,
    //     wrangler: { name: 'website-template' },
    //   },
    // },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
      autoSubfolderIndex: false,
      failOnError: true,
    },
  },
  css: ['~/assets/css/main.css', 'img-comparison-slider/dist/styles.css'],
  ignore: ['**/pages/**/_partials/**'],
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
  robots: {
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
