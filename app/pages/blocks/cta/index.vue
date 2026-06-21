<script setup lang="ts">
import ctaBg from '~/assets/img/pexels-reneterp-13821194.jpg'

useSeoMeta({
  title: 'CTA — variants',
  robots: 'noindex, nofollow',
})
</script>

<template>
  <div>
    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Cta1 — with background image
    </div>
    <Cta1 :bg-image="ctaBg" />

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Cta1 — gradient fallback (no image)
    </div>
    <Cta1 />
  </div>
</template>
