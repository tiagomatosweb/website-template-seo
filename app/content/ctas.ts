import appConfig from '~/app.config'
import type { ButtonProps } from '@nuxt/ui'

const site = appConfig.site!

export const onDarkSolid = 'bg-white text-highlighted hover:bg-neutral-200 active:bg-neutral-200'

export const quoteCta = (overrides: Partial<ButtonProps> = {}): ButtonProps => ({
  label: 'Get a Free Quote',
  color: 'cta',
  to: '#contact',
  trailingIcon: 'i-fa6-solid-arrow-right',
  ...overrides,
})

export const callCta = (overrides: Partial<ButtonProps> = {}): ButtonProps => ({
  label: 'Call Now',
  color: 'primary',
  variant: 'outline',
  icon: 'i-fa6-solid-phone',
  to: site.phone.href,
  ...overrides,
})
