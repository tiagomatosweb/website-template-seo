<script setup lang="ts">
useSeoMeta({
  title: 'Trust — variants',
  robots: 'noindex, nofollow',
})

const variants = [
  { label: 'Trust1', component: resolveComponent('Trust1') },
  { label: 'Trust2', component: resolveComponent('Trust2') },
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
