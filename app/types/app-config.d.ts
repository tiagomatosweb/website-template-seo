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
  shortName: string
  tagline: string
  blurb: string
  phone: { display: string, href: string }
  email: string
  serviceArea: string
  hours: string
  rating: string
  social: {
    facebook: string
    instagram: string
  }
}

export {}
