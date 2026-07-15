<template>
  <div>
    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Areas
    </div>
    <UPageSection
      id="areas"
      headline="Coverage"
      title="Areas We Service"
    >
      <template #body>
        <UiAreas :areas="areas1" />
      </template>
    </UPageSection>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Areas — variants',
  robots: 'noindex, nofollow',
})
</script>
