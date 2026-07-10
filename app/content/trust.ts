import appConfig from '~/app.config'
import type { ListItem } from '~/components/ui/List.vue'

const site = appConfig.site!

export const trustList1: ListItem[] = [
  { icon: 'i-logos-google-icon', label: `${site.rating} Google Reviews` },
  { icon: 'i-fa6-solid-chart-line', label: 'Results you can measure' },
  { icon: 'i-fa6-solid-lock-open', label: 'No long lock-ins' },
]
