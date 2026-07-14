// Augments the typed return of useAppConfig() with our custom `site` block.
// Edit the actual values in app/app.config.ts.
declare module 'nuxt/schema' {
  interface AppConfigInput {
    site?: SiteConfig
  }
  interface AppConfig {
    site: SiteConfig
  }
}

export interface SiteConfig {
  name: string
  description: string
  phone: { display: string, href: string }
  google_rating: string
  social: {
    facebook: string
    instagram: string
  }
}

export {}
