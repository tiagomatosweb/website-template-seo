<template>
  <div>
    <main>
      <Hero1 :bg-image="heroBg" overlay-header />
      <Trust1 />
      <Services2 />
      <Why2 />
      <Process2 />
      <Cta1 :bg-image="ctaBg" />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import heroBg from '~/assets/img/pexels-reneterp-13821194.jpg'
import ctaBg from '~/assets/img/pexels-reneterp-13821194.jpg'

useSeoMeta({
  title: 'BusinessName — Your trusted local specialists',
  description: 'Placeholder meta description. Replace with the business pitch and primary service area for local SEO.',
})
</script>
