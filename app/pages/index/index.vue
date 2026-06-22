<template>
  <div>
    <main>
      <!-- Page rhythm (CLAUDE.md): image bookends (hero/cta); three dark statements
           (Why2, About1, Trust2) spaced so none are adjacent; light as connective tissue.
           image → light → DARK → light → DARK → light → light → DARK → light → image → dark footer -->
      <Hero1 :bg-image="heroBg" overlay-header />
      <Services2 />
      <Why2 />
      <Process2 />
      <About1 />
      <Reviews1 />
      <Areas1 />
      <Trust2 />
      <Faq1 />
      <Cta1 :bg-image="ctaBg" />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import heroBg from '~/assets/img/pexels-reneterp-13821194.jpg'
import ctaBg from '~/assets/img/pexels-reneterp-13821194.jpg'

const { site } = useAppConfig()

useSeoMeta({
  title: `${site.name} — ${site.tagline}`,
  description: 'Placeholder meta description. Replace with the business pitch and primary service area for local SEO.',
})
</script>
