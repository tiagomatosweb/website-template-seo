<script setup lang="ts">
useSeoMeta({
  title: 'Areas — variants',
  robots: 'noindex, nofollow',
})
</script>

<template>
  <div>
    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Areas1
    </div>
    <SectionsAreas1 :areas="areas1" />
  </div>
</template>
