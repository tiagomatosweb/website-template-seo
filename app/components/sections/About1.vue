<template>
  <UPageSection id="about">
    <!-- Dark panel; the photo bleeds past its right & bottom edges. -->
    <div class="relative lg:pr-[34%]">
      <div class="relative overflow-visible rounded-2xl bg-neutral-950 p-8 sm:p-12 lg:p-16">
        <!-- Radial neutral glow — subtle lift, clipped to the panel, behind content. -->
        <div aria-hidden="true" class="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
          <div class="absolute -left-24 -top-24 size-96 rounded-full bg-white/8 blur-[120px]" />
          <div class="absolute -bottom-32 left-1/3 size-80 rounded-full bg-white/8 blur-[110px]" />
        </div>

        <div class="relative">
          <div :class="headlineClass">
            {{ props.headline }}
          </div>
          <h2 :class="titleClass">
            {{ props.title }}
          </h2>
          <p class="mt-6 max-w-lg text-lg text-muted-inverted">
            {{ props.description }}
          </p>

          <ul class="mt-10 max-w-xl space-y-6">
            <li v-for="item in props.items" :key="item.term" class="flex gap-3.5">
              <UIcon name="i-fa6-solid-check" class="mt-1 size-5 shrink-0 text-primary-400" />
              <p class="text-[15px] text-muted-inverted">
                <span class="font-bold text-inverted">{{ item.term }}</span>
                — {{ item.description }}
              </p>
            </li>
          </ul>
        </div>
      </div>

      <!-- Offset image: overlaps the panel on desktop, stacks below on mobile. -->
      <div class="mt-6 lg:absolute lg:inset-y-12 lg:right-0 lg:mt-0 lg:w-[46%]">
        <img
          :src="resolvedImage"
          :alt="props.imageAlt"
          loading="lazy"
          class="h-64 w-full rounded-2xl object-cover shadow-xl sm:h-80 lg:h-full"
        >
      </div>
    </div>
  </UPageSection>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import defaultImage from '~/assets/img/pexels-reneterp-13821194.jpg'

// Header sits inside a custom panel (not the UPageSection slot), so reuse the
// header slot classes from app.config, merged with the dark-bg color overrides via
// tailwind-merge (so text-primary-300 cleanly replaces the config's text-primary).
const sectionUi = useAppConfig().ui.pageSection.slots
const headlineClass = twMerge(sectionUi.headline, 'text-primary-300')
const titleClass = twMerge(sectionUi.title, 'mt-6 max-w-md text-inverted')

interface CapabilityItem {
  term: string
  description: string
}

const props = withDefaults(defineProps<{
  image?: string
  imageAlt?: string
  headline?: string
  title?: string
  description?: string
  items?: CapabilityItem[]
}>(), {
  image: '',
  imageAlt: 'Recent project',
  headline: 'Our capability',
  title: 'Managing complexity with care',
  description: 'Many of our projects involve existing structures, heritage conditions, or technical constraints. Our role is to coordinate these elements clearly, working closely with architects, engineers, and consultants.',
  items: () => [
    {
      term: 'Renovations & additions',
      description: 'Extensive experience working within existing homes, coordinating structural changes and upgrades while respecting what is already in place.',
    },
    {
      term: 'Heritage & complex builds',
      description: 'Proven experience across heritage-listed and technically complex projects, with careful coordination alongside consultants and approval authorities.',
    },
    {
      term: 'High-performance construction',
      description: 'Certified Passive House knowledge applied on site, supporting energy-efficient, comfortable homes through coordinated detailing and construction.',
    },
  ],
})

const resolvedImage = computed(() => props.image || defaultImage)
</script>
