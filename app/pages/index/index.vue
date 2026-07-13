<template>
  <div>
    <SectionsHero1
      :bg-image="heroBg"
      overlay-header
      headline="Local · Trusted · Reliable"
      title="A headline that says exactly what you do"
      description="One or two sentences that explain the service, the area you cover, and why customers should choose you over the competition."
    />
    <SectionsContent2 v-bind="content.content2" />
    <SectionsContent12 v-bind="content.content12" class="bg-muted" />
    <SectionsContent10 v-bind="content.content10" />
    <SectionsContent13 v-bind="content.content13" class="bg-muted" />
    <SectionsReviews1 v-bind="content.reviewsSection" />
    <SectionsAreas1 :areas="areas1" class="bg-muted" />
    <SectionsTrustBar2 />
    <SectionsFaq1 :items="content.faqs" />
    <SectionsCta1
      title="Ready to grow your pipeline?"
      description="Tell us your goals and a senior marketer will get back to you with a free, no-obligation growth plan."
      :ui="{ title: 'text-inverted', description: 'text-toned-inverted' }"
      :primary-cta="{ label: 'Get Your Free Growth Plan' }"
      :secondary-cta="{ color: 'white', variant: 'solid', class: 'w-full sm:w-auto justify-center' }"
    >
      <template #top>
        <UiBackdrop :src="ctaBg" />
      </template>
    </SectionsCta1>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import * as content from './_partials/content'
import heroBg from '~/assets/img/placeholder-image.png'
import ctaBg from '~/assets/img/placeholder-image.png'

const { site } = useAppConfig()

useSeoMeta({
  title: `${site.name} — Your trusted local specialists`,
  description: 'Placeholder meta description. Replace with the business pitch and primary service area for local SEO.',
})
</script>
