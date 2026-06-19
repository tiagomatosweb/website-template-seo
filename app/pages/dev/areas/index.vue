<script setup lang="ts">
useSeoMeta({
  title: 'Areas — variants',
  robots: 'noindex, nofollow',
})

const variants = [
  { label: 'Areas1', component: resolveComponent('Areas1') },
]
</script>

<template>
  <div>
    <template v-for="v in variants" :key="v.label">
      <div class="sticky top-0 z-50 bg-neutral-900 px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-white">
        {{ v.label }}
      </div>
      <component :is="v.component" />
    </template>
  </div>
</template>
