<template>
  <div>
    <main>
      <!-- Page rhythm (CLAUDE.md): image bookends (hero/cta); two dark statements
           (Content13, TrustBar2) spaced so they are not adjacent; light as connective tissue. -->
      <SectionsHero1
        :bg-image="heroBg"
        overlay-header
        headline="Local · Trusted · Reliable"
        title="A headline that says exactly what you do"
        description="One or two sentences that explain the service, the area you cover, and why customers should choose you over the competition."
      />
      <SectionsContent2 v-bind="content2" />
      <SectionsContent12 v-bind="content12" />
      <SectionsContent10 v-bind="content10" />
      <SectionsContent13 v-bind="content13" />
      <SectionsReviews1 :reviews="reviews1" />
      <SectionsAreas1 :areas="areas1" />
      <SectionsTrustBar2 />
      <SectionsFaq1 :items="faqs" />
      <SectionsCta1
        title="Ready to grow your pipeline?"
        description="Tell us your goals and a senior marketer will get back to you with a free, no-obligation growth plan."
        :ui="{ title: 'text-inverted', description: 'text-toned-inverted' }"
        :primary-cta="{ label: 'Get Your Free Growth Plan' }"
        :secondary-cta="{ class: 'text-inverted ring-white/25 w-full sm:w-auto justify-center' }"
      >
        <template #top>
          <UiBackdrop :src="ctaBg" />
        </template>
      </SectionsCta1>
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import heroBg from '~/assets/img/placeholder-image.png'
import ctaBg from '~/assets/img/placeholder-image.png'

const { site } = useAppConfig()

const content2 = {
  ghost: 'WORK',
  headline: 'What we do',
  title: 'Big jobs. Small jobs. Done right.',
  items: [
    { icon: 'i-fa6-solid-bolt', title: 'Emergency call-outs', description: 'Something gone wrong? We respond fast, day or night, and get you sorted the same day — no drama.', to: '#contact' },
    { icon: 'i-fa6-solid-wrench', title: 'Repairs & maintenance', description: 'Honest diagnosis, fixed right the first time.', to: '#contact' },
    { icon: 'i-fa6-solid-screwdriver-wrench', title: 'New installations', description: 'Quality fit-outs, fully guaranteed.', to: '#contact' },
    { icon: 'i-fa6-solid-building', title: 'Commercial & strata', description: 'Reliable support for businesses and buildings.', to: '#contact' },
    { icon: 'i-fa6-solid-clipboard-check', title: 'Inspections & advice', description: 'Clear recommendations, zero upselling.', to: '#contact' },
    { icon: 'i-fa6-solid-house', title: 'Residential service', description: 'Tidy, respectful work in homes across the area.', to: '#contact' },
  ],
}

const content12 = {
  headline: 'Why choose us',
  title: 'Not your average tradies.',
  description: () => h('div', [
    h('p', 'We earned our reputation the hard way — one honest job at a time, for customers who called us back and told their neighbours.'),
    h('p', 'Fully licensed, fully insured, and upfront about the price before we start. No surprises on the invoice, no mess left behind.'),
  ]),
  items: [
    { icon: 'i-fa6-solid-shield-halved', title: 'Licensed & insured', description: 'Fully qualified, fully covered.' },
    { icon: 'i-fa6-solid-hand-holding-dollar', title: 'Upfront pricing', description: 'The price we quote is the price you pay.' },
    { icon: 'i-fa6-solid-clock', title: 'On time, every time', description: 'We show up within the window we promise.' },
    { icon: 'i-fa6-solid-thumbs-up', title: 'Guaranteed work', description: 'Not right? We come back and fix it.' },
  ],
}

const content10 = {
  headline: 'How it works',
  title: 'Four steps. Zero hassle.',
  description: 'From the first call to the final handshake — here is exactly what to expect.',
  items: [
    { icon: 'i-fa6-solid-phone', title: 'Get in touch', description: 'Call us or request a quote online. Tell us what you need and we will take it from there.' },
    { icon: 'i-fa6-solid-calendar-check', title: 'Book a time', description: 'We confirm a slot that suits you — often same or next day.' },
    { icon: 'i-fa6-solid-wrench', title: 'We get it done', description: 'Our team arrives on time and completes the work to a high standard, tidy and respectful.' },
    { icon: 'i-fa6-solid-face-smile', title: 'Job complete', description: 'Pay the price we quoted, backed by our workmanship guarantee. Simple.' },
  ],
}

const content13 = {
  image: { alt: 'Recent project' },
  headline: 'Our capability',
  title: 'Managing complexity with care',
  description: 'Many of our projects involve existing structures, heritage conditions, or technical constraints. Our role is to coordinate these elements clearly, working closely with architects, engineers, and consultants.',
  items: [
    { term: 'Renovations & additions', description: 'Extensive experience working within existing homes, coordinating structural changes and upgrades while respecting what is already in place.' },
    { term: 'Heritage & complex builds', description: 'Proven experience across heritage-listed and technically complex projects, with careful coordination alongside consultants and approval authorities.' },
    { term: 'High-performance construction', description: 'Certified Passive House knowledge applied on site, supporting energy-efficient, comfortable homes through coordinated detailing and construction.' },
  ],
}

useSeoMeta({
  title: `${site.name} — ${site.tagline}`,
  description: 'Placeholder meta description. Replace with the business pitch and primary service area for local SEO.',
})
</script>
