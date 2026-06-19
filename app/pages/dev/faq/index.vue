<script setup lang="ts">
useSeoMeta({
  title: 'FAQ — variants',
  robots: 'noindex, nofollow',
})

const variants = [
  { label: 'Faq1', component: resolveComponent('Faq1') },
  { label: 'Faq2', component: resolveComponent('Faq2') },
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
