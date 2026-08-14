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
    compressPublicAssets: { gzip: true, brotli: true },
    prerender: {
      crawlLinks: true,
      routes: ['/'],
      autoSubfolderIndex: false,
      failOnError: true,
    },
  },

  hooks: {
    // `assets`: Nuxt prefetches every image in a route's manifest entry as
    // <link rel="prefetch" as="image">, pulling below-fold photos down during
    // the LCP window. `preload`: the modulepreload hints fetch ~200 KB of JS at
    // High priority while the HTML is still arriving, delaying first paint on a
    // throttled connection. Chunks are still discovered from the entry script's
    // own imports — only the hint is dropped, which costs a little hydration
    // latency and bought FCP 2.3s → 1.8s on a simulated mobile run.
    'build:manifest': (manifest) => {
      for (const entry of Object.values(manifest)) {
        entry.assets = []
        entry.preload = false
      }
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
