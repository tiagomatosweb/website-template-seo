<script setup lang="ts">
import heroBg from '~/assets/img/pexels-reneterp-13821194.jpg'

useSeoMeta({
  title: 'Hero — variants',
  robots: 'noindex, nofollow',
})
</script>

<template>
  <div>
    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Hero1 — background image + overlay header
    </div>
    <SectionsHero1 :bg-image="heroBg" overlay-header>
      <template #title>
        Lawn care &amp; weed control specialists in <span class="text-primary-300">Sydney</span>
      </template>
    </SectionsHero1>

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Hero1 — clear (white)
    </div>
    <SectionsHero1 />
  </div>
</template>
