import { h } from 'vue'
import { UIcon } from '#components'
import appConfig from '~/app.config'
import type { ListItem } from '~/components/ui/List.vue'

const site = appConfig.site!

export const trustList1: ListItem[] = [
  {
    icon: 'i-logos-google-icon',
    label: () => h('span', { class: 'inline-flex items-center gap-1.5' }, [
      h('span', { class: 'inline-flex items-center gap-0.5' }, [
        site.rating,
        h(UIcon, { name: 'i-fa6-solid-star', class: 'size-3 text-star' }),
      ]),
      'Google Reviews',
    ]),
  },
  { icon: 'i-fa6-solid-chart-line', label: 'Results you can measure' },
  { icon: 'i-fa6-solid-lock-open', label: 'No long lock-ins' },
]
