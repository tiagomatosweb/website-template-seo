<template>
  <UPageSection
    id="services"
    class="relative overflow-hidden bg-muted"
  >
    <div aria-hidden="true" class="absolute inset-0 -z-10">
      <div
        class="absolute inset-0 scale-105 bg-cover bg-center"
        :style="{ backgroundImage: `url(${resolvedBg})` }"
      />
      <div class="absolute inset-0 bg-muted/85" />
      <div class="absolute inset-0 bg-linear-to-b from-neutral-50 via-neutral-50/70 to-primary-50/40" />
      <div class="absolute inset-0 opacity-[0.04] mix-blend-multiply [background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]" />
    </div>

    <UPageGrid class="lg:grid-cols-3">
      <!-- Intro block — no card, sits on the section background -->
      <div class="flex flex-col justify-center p-2 sm:col-span-2 sm:p-0 lg:col-span-1 lg:pr-6">
        <div :class="headlineClass">
          {{ props.headline }}
        </div>
        <h2 :class="titleClass">
          {{ props.title }}
        </h2>
        <p v-if="props.description" class="mt-3 text-lg">
          {{ props.description }}
        </p>
        <UButton
          :label="props.cta.label"
          :to="props.cta.to"
          color="cta"
          size="lg"
          trailing-icon="i-fa6-solid-arrow-right"
          class="mt-5 self-start"
        />
      </div>

      <!-- Service cards — prop-driven; `to` makes the whole card the link (no NuxtLink) -->
      <UPageCard
        v-for="service in props.services"
        :key="service.title"
        :to="service.to ?? '#contact'"
        :title="service.title"
        :description="service.description"
        class="lift"
        :ui="{ root: 'h-full' }"
      >
        <template #leading>
          <IconTile :icon="service.icon" />
        </template>
      </UPageCard>
    </UPageGrid>
  </UPageSection>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import defaultBgImage from '~/assets/img/pexels-reneterp-13821194.jpg'

// The intro sits inside the grid (not the UPageSection header slot), so reuse the
// header slot classes from app.config (identical to a real section header), merged
// with local classes via tailwind-merge so any conflicts resolve last-wins.
const sectionUi = useAppConfig().ui.pageSection.slots
const headlineClass = twMerge(sectionUi.headline, 'mb-2')
// Narrower intro column → step the section title down one size (font-black kept).
const titleClass = twMerge(sectionUi.title, 'text-2xl sm:text-3xl lg:text-4xl')

interface ServiceItem {
  icon: string
  title: string
  description: string
  to?: string
}

const props = withDefaults(defineProps<{
  bgImage?: string
  headline?: string
  title?: string
  description?: string
  cta?: { label: string, to: string }
  services?: ServiceItem[]
}>(), {
  bgImage: '',
  headline: 'Featured services',
  title: 'Residential building for everyday living',
  description: 'Considered, well-built work across new homes, renovations, and high-performance construction — tailored to how you live.',
  cta: () => ({ label: 'Enquire now', to: '#contact' }),
  services: () => [
    {
      icon: 'i-fa6-solid-toolbox',
      title: 'New home builds',
      description: 'From the ground up, our work responds to site conditions and orientation.',
    },
    {
      icon: 'i-fa6-solid-bath',
      title: 'Bathroom renovations',
      description: 'Layouts and finishes shaped around everyday routines, with experience across residential upgrades in your local area.',
    },
    {
      icon: 'i-fa6-solid-utensils',
      title: 'Kitchen renovations',
      description: 'Kitchen layouts shaped around movement, connection, and daily use — sitting naturally within the flow of the home.',
    },
    {
      icon: 'i-fa6-solid-stairs',
      title: 'First floor additions',
      description: 'Additional living space added through careful work with structure, proportion, and existing layouts.',
    },
    {
      icon: 'i-fa6-solid-leaf',
      title: 'Passive house (Passivhaus)',
      description: 'High-performance homes that prioritise energy efficiency, comfort, and well-resolved construction details.',
    },
  ],
})

const resolvedBg = computed(() => props.bgImage || defaultBgImage)
</script>
