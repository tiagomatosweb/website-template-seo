<template>
  <div>
    <main>
      <!-- Page rhythm (CLAUDE.md): image bookends (hero/cta); three dark statements
           (Why2, About1, Trust2) spaced so none are adjacent; light as connective tissue.
           image → light → DARK → light → DARK → light → light → DARK → light → image → dark footer -->
      <SectionsHero1 :bg-image="heroBg" overlay-header />
      <SectionsServices2 />
      <SectionsWhy2 />
      <SectionsProcess2 />
      <SectionsAbout1 />
      <SectionsReviews1 />
      <SectionsAreas1 />
      <SectionsTrust2 />
      <SectionsFaq1 />
      <SectionsCta1 :bg-image="ctaBg" />
    </main>
    <SiteFooter />
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
