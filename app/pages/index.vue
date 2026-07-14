<template>
  <div>
    <UiHero
      :bg-image="heroBg"
      overlay-header
      headline="Local · Trusted · Reliable"
      title="A headline that says exactly what you do"
      description="One or two sentences that explain the service, the area you cover, and why customers should choose you over the competition."
    />

    <UPageSection
      headline="What we do"
      title="Big jobs. Small jobs. Done right."
    >
      <UPageGrid class="sm:auto-rows-fr lg:grid-cols-3">
        <UiCard
          v-for="(item, i) in services"
          :key="i"
          v-bind="item"
        />
      </UPageGrid>
    </UPageSection>

    <UPageSection
      orientation="horizontal"
      headline="Why choose us"
      title="Not your average tradies."
      class="bg-muted"
      :ui="{ container: 'lg:items-center' }"
    >
      <template #description>
        <p>We earned our reputation the hard way — one honest job at a time, for customers who called us back and told their neighbours.</p>
        <p>Fully licensed, fully insured, and upfront about the price before we start. No surprises on the invoice, no mess left behind.</p>
      </template>

      <UiFeatureItems :items="whyChooseUs" />
    </UPageSection>

    <UPageSection
      headline="How it works"
      title="Four steps. Zero hassle."
      description="From the first call to the final handshake — here is exactly what to expect."
    >
      <template #body>
        <UiSteps :items="howItWorks" />
      </template>
    </UPageSection>

    <UPageSection
      orientation="horizontal"
      headline="Our capability"
      title="Managing complexity with care"
      description="Many of our projects involve existing structures, heritage conditions, or technical constraints. Our role is to coordinate these elements clearly, working closely with architects, engineers, and consultants."
      class="bg-muted"
    >
      <template #body>
        <UiList
          :items="capabilities"
          :icon="{ size: 'md' }"
          :ui="{ root: 'space-y-6', icon: 'text-primary' }"
        />
      </template>

      <UiFigure alt="Recent project" />
    </UPageSection>

    <UPageSection
      id="reviews"
      headline="Reviews"
      title="What Our Customers Are Saying"
    >
      <template #body>
        <UPageGrid class="lg:grid-cols-4">
          <UiReview
            v-for="(review, i) in reviews"
            :key="i"
            :review="review"
          />
        </UPageGrid>
      </template>
    </UPageSection>

    <UPageSection
      id="areas"
      headline="Coverage"
      title="Areas We Service"
      class="bg-muted"
    >
      <template #body>
        <UiAreas :areas="areas1" />
      </template>
    </UPageSection>

    <UPageSection :ui="{ container: 'py-8 lg:py-6' }">
      <div class="relative overflow-hidden rounded-2xl bg-neutral-950 shadow-[0_30px_80px_-20px] shadow-neutral-950/50 ring-1 ring-soft-inverted">
        <div aria-hidden="true" class="pointer-events-none absolute inset-0 opacity-6 bg-[radial-gradient(var(--color-white)_1px,transparent_1px)] bg-size-[1.25rem_1.25rem]" />
        <div aria-hidden="true" class="pointer-events-none absolute -top-1/2 left-1/2 size-160 -translate-x-1/2 rounded-full bg-white/8 blur-[130px]" />

        <div class="relative grid sm:grid-cols-3">
          <div class="relative flex flex-col items-center px-6 py-12 text-center">
            <div class="font-display font-black text-6xl leading-none tabular-nums bg-linear-to-b from-white to-white/55 bg-clip-text text-transparent">
              {{ site.rating }}
            </div>
            <div class="mt-2 inline-flex items-center gap-2 rounded-full bg-surface-faint-inverted px-3 py-1 ring-1 ring-soft-inverted backdrop-blur">
              <UIcon name="i-logos-google-icon" class="size-3.5" />
              <div class="flex gap-0.5 text-star" aria-hidden="true">
                <UIcon v-for="i in 5" :key="i" name="i-fa6-solid-star" class="size-2.5" />
              </div>
            </div>
            <div class="mt-2 text-sm text-dimmed-inverted">Rated by our customers</div>
          </div>

          <div
            v-for="stat in trustStats"
            :key="stat.label"
            class="group relative flex flex-col items-center px-6 py-12 text-center"
          >
            <span class="absolute inset-y-8 left-0 hidden w-px bg-linear-to-b from-transparent via-white/15 to-transparent sm:block" />
            <div class="font-display font-black text-6xl leading-none tabular-nums bg-linear-to-b from-white to-white/55 bg-clip-text text-transparent transition-transform duration-300 group-hover:-translate-y-0.5">
              {{ stat.value }}
            </div>
            <div class="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-primary-300">{{ stat.label }}</div>
            <div v-if="stat.caption" class="mt-0.5 text-sm text-dimmed-inverted">{{ stat.caption }}</div>
          </div>
        </div>

        <div class="relative flex flex-wrap items-center justify-center gap-x-8 gap-y-2 border-t border-soft-inverted bg-linear-to-r from-transparent via-white/4 to-transparent px-6 py-5">
          <span
            v-for="pill in trustPills"
            :key="pill"
            class="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-toned-inverted"
          >
            <UIcon name="i-fa6-solid-circle-check" class="size-4 text-primary-400" />
            {{ pill }}
          </span>
        </div>
      </div>
    </UPageSection>

    <UPageSection
      id="faq"
      headline="FAQ"
      title="Frequently Asked Questions"
      :ui="{ headline: 'justify-center', title: 'text-center', description: 'text-center', body: 'w-full' }"
    >
      <template #body>
        <div class="mx-auto w-full max-w-3xl text-left">
          <UAccordion :items="faqs" type="multiple" />
        </div>
      </template>
    </UPageSection>

    <UPageCTA
      title="Ready to grow your pipeline?"
      description="Tell us your goals and a senior marketer will get back to you with a free, no-obligation growth plan."
      :ui="{ root: 'rounded-none isolate', title: 'text-inverted', description: 'max-w-2xl mx-auto text-toned-inverted' }"
      :links="[
        quoteCta({ label: 'Get Your Free Growth Plan', size: 'xl', class: 'w-full sm:w-auto justify-center' }),
        callCta({ color: 'white', variant: 'solid', size: 'xl', class: 'w-full sm:w-auto justify-center' }),
      ]"
    >
      <template #top>
        <UiBackdrop :src="ctaBg" />
      </template>
    </UPageCTA>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import type { CardProps } from '~/components/ui/Card.vue'
import type { FeatureItem } from '~/components/ui/FeatureItem.vue'
import type { ListItem } from '~/components/ui/List.vue'
import type { Review } from '~/components/ui/Review.vue'
import heroBg from '~/assets/img/placeholder-image.png'
import ctaBg from '~/assets/img/placeholder-image.png'

const { site } = useAppConfig()

const services: CardProps[] = [
  { icon: 'i-fa6-solid-bolt', title: 'Emergency call-outs', description: 'Something gone wrong? We respond fast, day or night, and get you sorted the same day — no drama.', to: '#contact' },
  { icon: 'i-fa6-solid-wrench', title: 'Repairs & maintenance', description: 'Honest diagnosis, fixed right the first time.', to: '#contact' },
  { icon: 'i-fa6-solid-screwdriver-wrench', title: 'New installations', description: 'Quality fit-outs, fully guaranteed.', to: '#contact' },
  { icon: 'i-fa6-solid-building', title: 'Commercial & strata', description: 'Reliable support for businesses and buildings.', to: '#contact' },
  { icon: 'i-fa6-solid-clipboard-check', title: 'Inspections & advice', description: 'Clear recommendations, zero upselling.', to: '#contact' },
  { icon: 'i-fa6-solid-house', title: 'Residential service', description: 'Tidy, respectful work in homes across the area.', to: '#contact' },
]

const whyChooseUs: FeatureItem[] = [
  { icon: 'i-fa6-solid-shield-halved', title: 'Licensed & insured', description: 'Fully qualified, fully covered.' },
  { icon: 'i-fa6-solid-hand-holding-dollar', title: 'Upfront pricing', description: 'The price we quote is the price you pay.' },
  { icon: 'i-fa6-solid-clock', title: 'On time, every time', description: 'We show up within the window we promise.' },
  { icon: 'i-fa6-solid-thumbs-up', title: 'Guaranteed work', description: 'Not right? We come back and fix it.' },
]

const howItWorks = [
  { icon: 'i-fa6-solid-phone', title: 'Get in touch', description: 'Call us or request a quote online. Tell us what you need and we will take it from there.' },
  { icon: 'i-fa6-solid-calendar-check', title: 'Book a time', description: 'We confirm a slot that suits you — often same or next day.' },
  { icon: 'i-fa6-solid-wrench', title: 'We get it done', description: 'Our team arrives on time and completes the work to a high standard, tidy and respectful.' },
  { icon: 'i-fa6-solid-fa ce-smile', title: 'Job complete', description: 'Pay the price we quoted, backed by our workmanship guarantee. Simple.' },
]

const capability = (term: string, description: string): ListItem => ({
  label: () => h('span', [h('span', { class: 'font-bold text-highlighted' }, term), ` — ${description}`]),
})

const capabilities: ListItem[] = [
  capability('Renovations & additions', 'Extensive experience working within existing homes, coordinating structural changes and upgrades while respecting what is already in place.'),
  capability('Heritage & complex builds', 'Proven experience across heritage-listed and technically complex projects, with careful coordination alongside consultants and approval authorities.'),
  capability('High-performance construction', 'Certified Passive House knowledge applied on site, supporting energy-efficient, comfortable homes through coordinated detailing and construction.'),
]

const reviews: Review[] = [
  { quote: 'Reliable, professional and they had our hot water back on the same day. Honest pricing and no surprises — exactly what you want when the hot water goes out.', name: 'Sarah M.', date: '3 weeks ago', rating: 5 },
  { quote: 'They explained exactly what our system needed and stuck to a clear quote. No pressure, no upselling — just a great job done properly.', name: 'James T.', date: '1 month ago', rating: 5 },
  { quote: 'The team knows hot water systems inside out. Our recurring problem is finally sorted for good. Worth every dollar for the peace of mind.', name: 'Priya K.', date: '1 month ago', rating: 5 },
  { quote: 'Fantastic service and fairly priced. The team turned up on time, were respectful of our home and left everything spotless. Highly recommend!', name: 'Celine M.', date: '2 months ago', rating: 5 },
]

const trustStats = [
  { value: '5,000+', label: 'Jobs completed', caption: 'Across your local area' },
  { value: '10+', label: 'Years on the tools', caption: 'Est. 2014' },
]

const trustPills = ['Family owned & operated', 'Fully licensed & insured']

const faqs = [
  { label: 'How quickly will we see results?', content: 'Paid campaigns can start generating leads within days of launch. SEO and content build over three to six months. We chase the quick wins first while the longer-term channels compound.' },
  { label: 'Do you lock us into a long contract?', content: 'No. We work month to month with no long lock-ins. We would rather keep your business with results than with a contract.' },
  { label: 'How do you report on performance?', content: 'You get a live dashboard and a plain-English monthly report — leads, cost per lead and revenue. No vanity metrics, no surprise invoices.' },
  { label: 'Which channels do you cover?', content: 'Google and Meta ads, SEO and content, email and nurture, landing pages and CRO. Every channel covered — and we only recommend the ones that fit your goals.' },
  { label: 'How much does it cost?', content: 'It depends on scope and ad spend, but pricing is transparent: you get a clear proposal upfront and the price we quote is the price you pay.' },
  { label: 'Who will actually do the work?', content: 'Senior specialists do the work — no hand-offs to juniors. You get a dedicated team and a direct line to the people running your campaigns.' },
  { label: 'What happens if a channel underperforms?', content: 'We set clear targets together and review them monthly. If something is not performing we tell you, fix it, or move the budget to what is working.' },
]

useSeoMeta({
  title: `${site.name} — Your trusted local specialists`,
  description: 'Placeholder meta description. Replace with the business pitch and primary service area for local SEO.',
})
</script>
