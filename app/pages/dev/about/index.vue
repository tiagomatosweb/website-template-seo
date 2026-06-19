<script setup lang="ts">
useSeoMeta({
  title: 'About — variants',
  robots: 'noindex, nofollow',
})

const variants = [
  { label: 'About1', component: resolveComponent('About1') },
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
