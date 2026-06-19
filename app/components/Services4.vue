<template>
  <section id="services" class="relative overflow-hidden py-16 lg:py-24">
    <div aria-hidden="true" class="absolute inset-0">
      <div
        class="absolute inset-0 scale-105 bg-cover bg-center"
        :style="{ backgroundImage: `url(${resolvedBg})` }"
      />
      <div class="absolute inset-0 bg-white/70" />
      <div class="absolute inset-0 bg-linear-to-br from-white/85 via-white/55 to-primary-50/30" />
      <div class="absolute inset-0 opacity-[0.35] mix-blend-multiply [background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]" />
    </div>

    <UContainer class="relative">
      <div class="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:grid-rows-2 lg:gap-5">
        <div class="reveal flex flex-col justify-center py-4 sm:col-span-2 lg:col-span-1 lg:row-span-1 lg:py-0 lg:pr-6">
          <p class="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
            {{ headline }}
          </p>
          <h2 class="mt-4 max-w-sm font-display text-4xl font-bold leading-[1.05] tracking-tight text-neutral-900 text-balance sm:text-[2.65rem]">
            {{ title }}
          </h2>
          <div class="mt-8">
            <UButton
              :label="cta.label"
              :to="cta.to"
              color="primary"
              size="lg"
              class="uppercase tracking-[0.18em]"
            />
          </div>
        </div>

        <NuxtLink
          v-for="(service, i) in services"
          :key="service.title"
          :to="service.to ?? '#contact'"
          class="reveal group/card block h-full"
          :style="{ animationDelay: `${(i + 1) * 75}ms` }"
        >
          <UCard
            :ui="{
              root: 'h-full flex flex-col bg-white shadow-md ring-1 ring-neutral-900/5 transition-all duration-300 group-hover/card:-translate-y-0.5 group-hover/card:shadow-lg',
              body: 'flex flex-1 flex-col p-7 sm:p-8',
              footer: 'px-7 pb-7 pt-6 sm:px-8 sm:pb-8',
            }"
          >
            <UIcon :name="service.icon" class="size-9 text-primary transition-transform duration-300 group-hover/card:scale-105" />
            <h3 class="mt-6 font-display text-xl font-bold tracking-tight text-neutral-900">
              {{ service.title }}
            </h3>
            <p class="mt-3 flex-1 text-[15px] leading-relaxed text-neutral-500">
              {{ service.description }}
            </p>

            <template #footer>
              <span class="group/link inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-neutral-800 transition-colors group-hover/card:text-primary">
                <span class="relative pb-1">
                  Learn more
                  <span
                    aria-hidden="true"
                    class="absolute inset-x-0 bottom-0 h-px origin-left scale-x-[0.42] bg-neutral-300 transition-all duration-300 group-hover/card:scale-x-100 group-hover/card:bg-primary"
                  />
                </span>
                <UIcon
                  name="i-fa6-solid-arrow-right-long"
                  class="size-3.5 shrink-0 text-neutral-400 transition-all duration-300 group-hover/card:translate-x-1 group-hover/card:text-primary"
                />
              </span>
            </template>
          </UCard>
        </NuxtLink>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import defaultBgImage from '~/assets/img/pexels-reneterp-13821194.jpg'

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
  cta?: { label: string, to: string }
  services?: ServiceItem[]
}>(), {
  bgImage: '',
  headline: 'Featured services',
  title: 'Residential building for everyday living',
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
