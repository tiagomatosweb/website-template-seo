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
  hooks: {
    // Co-located page partials live in pages/<page>/_partials/. They are
    // imported explicitly by their page and must never become routes.
    'pages:extend'(pages) {
      const stripPartials = (list: typeof pages) => {
        for (let i = list.length - 1; i >= 0; i--) {
          const page = list[i]
          if (page.file?.includes('/_partials/')) {
            list.splice(i, 1)
            continue
          }
          if (page.children?.length) stripPartials(page.children)
        }
      }
      stripPartials(pages)
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
  modules: ['@nuxt/ui', '@nuxtjs/seo'],
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
