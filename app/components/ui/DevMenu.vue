<template>
  <UDropdownMenu
    :items="items"
    :content="{ side: 'top', align: 'end' }"
    :ui="{ content: 'w-56' }"
  >
    <UButton
      icon="i-fa6-solid-shapes"
      color="neutral"
      size="xl"
      class="fixed bottom-6 right-6 z-100 rounded-full shadow-lg ring-1 ring-white/10"
      aria-label="Component showcase menu"
    />
  </UDropdownMenu>
</template>

<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items: DropdownMenuItem[][] = [
  [
    { label: 'Design System', icon: 'i-fa6-solid-swatchbook', to: '/blocks/design-system' },
  ],
  [
    { label: 'Hero', icon: 'i-fa6-solid-star', to: '/blocks/hero' },
    { label: 'Content', icon: 'i-fa6-solid-shapes', to: '/blocks/content' },
    { label: 'TrustBar', icon: 'i-fa6-solid-shield-halved', to: '/blocks/trustbar' },
    { label: 'Areas', icon: 'i-fa6-solid-map-location-dot', to: '/blocks/areas' },
    { label: 'Reviews', icon: 'i-fa6-solid-star', to: '/blocks/reviews' },
    { label: 'FAQ', icon: 'i-fa6-solid-comments', to: '/blocks/faq' },
    { label: 'CTA', icon: 'i-fa6-solid-bullhorn', to: '/blocks/cta' },
  ],
  [
    { label: 'Back to website', icon: 'i-fa6-solid-arrow-left', to: '/' },
  ],
]
</script>
