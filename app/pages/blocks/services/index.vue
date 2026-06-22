<script setup lang="ts">
useSeoMeta({
  title: 'Services — variants',
  robots: 'noindex, nofollow',
})

const variants = [
  { label: 'Services1', component: resolveComponent('SectionsServices1') },
  { label: 'Services2', component: resolveComponent('SectionsServices2') },
  { label: 'Services3', component: resolveComponent('SectionsServices3') },
  { label: 'Services4', component: resolveComponent('SectionsServices4') },
  { label: 'Services5', component: resolveComponent('SectionsServices5') },
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
