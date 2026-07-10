<script setup lang="ts">
import type { ListItem } from '~/components/ui/List.vue'

useSeoMeta({
  title: 'TrustBar — variants',
  robots: 'noindex, nofollow',
})

const trustBar1: ListItem[] = [
  { icon: 'i-fa6-solid-chart-line', label: 'Results you can measure' },
  { icon: 'i-fa6-solid-lock-open', label: 'No long lock-ins' },
  { icon: 'i-fa6-solid-user-check', label: 'Senior specialists do the work' },
  { icon: 'i-fa6-solid-hand-holding-dollar', label: 'Transparent pricing' },
]
</script>

<template>
  <div>
    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      TrustBar1
    </div>
    <SectionsTrustBar1 :items="trustBar1" />

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      TrustBar2
    </div>
    <SectionsTrustBar2 />
  </div>
</template>
