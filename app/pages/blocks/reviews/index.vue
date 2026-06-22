<script setup lang="ts">
useSeoMeta({
  title: 'Reviews — variants',
  robots: 'noindex, nofollow',
})

const variants = [
  { label: 'Reviews1', component: resolveComponent('SectionsReviews1') },
]
</script>

<template>
  <div>
    <template v-for="v in variants" :key="v.label">
      <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
        {{ v.label }}
      </div>
      <component :is="v.component" />
    </template>
  </div>
</template>
