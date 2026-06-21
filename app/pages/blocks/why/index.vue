<script setup lang="ts">
useSeoMeta({
  title: 'Why — variants',
  robots: 'noindex, nofollow',
})

const variants = [
  { label: 'Why1', component: resolveComponent('Why1') },
  { label: 'Why2', component: resolveComponent('Why2') },
  { label: 'Why3', component: resolveComponent('Why3') },
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
