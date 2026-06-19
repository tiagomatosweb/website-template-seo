<template>
  <UPageSection
    id="services"
    :headline="headline"
    :title="title"
    :ui="{ container: 'lg:py-24' }"
  >
    <UPageGrid class="lg:grid-cols-4">
      <UPageCard
        v-for="service in services"
        :key="service.title"
        :ui="{
          root: 'h-full bg-white shadow-sm overflow-hidden',
          container: 'h-full p-0 sm:p-0 gap-0',
          body: 'flex flex-col flex-1 p-0',
        }"
      >
        <div class="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
          <img
            v-if="service.image"
            :src="service.image"
            :alt="service.title"
            loading="lazy"
            class="size-full object-cover"
          >
          <div v-else class="flex size-full items-center justify-center">
            <UIcon name="i-fa6-solid-image" class="size-10 text-neutral-300" />
          </div>
          <span
            v-if="service.badge"
            class="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-neutral-900/80 px-3 py-1 font-display text-xs font-bold text-white backdrop-blur"
          >
            {{ service.badge }}
          </span>
        </div>

        <div class="flex flex-1 flex-col p-4">
          <h3 class="font-display font-extrabold uppercase tracking-wide text-neutral-900">
            {{ service.title }}
          </h3>
          <p
            v-if="service.subtitle"
            class="mt-2 text-sm italic"
            :class="service.accent === 'cta' ? 'text-cta-600' : 'text-primary'"
          >
            {{ service.subtitle }}
          </p>

          <ul class="mt-4 space-y-2.5">
            <li v-for="feature in service.features" :key="feature" class="flex items-center gap-2.5 text-sm text-neutral-600">
              <UIcon name="i-fa6-solid-check" class="size-3.5 shrink-0 text-primary" />
              {{ feature }}
            </li>
          </ul>

          <div class="mt-auto pt-6">
            <UButton
              :label="service.cta.label"
              :color="service.accent === 'cta' ? 'cta' : 'primary'"
              variant="outline"
              block
              trailing-icon="i-fa6-solid-arrow-right"
              :to="service.cta.to"
              class="justify-center"
            />
          </div>
        </div>
      </UPageCard>
    </UPageGrid>
  </UPageSection>
</template>

<script setup lang="ts">
interface ServiceItems {
  image?: string
  badge?: string
  title: string
  subtitle?: string
  accent?: 'primary' | 'cta'
  features: string[]
  cta: { label: string, to: string }
}

withDefaults(defineProps<{
  headline?: string
  title?: string
  services?: ServiceItems[]
}>(), {
  headline: 'Scope of work',
  title: 'What do you need help with?',
  services: () => [
    {
      badge: '24/7',
      title: 'Emergency call-outs',
      subtitle: 'Something gone wrong? Need help today?',
      accent: 'cta',
      features: ['Same-day service', 'Zero call-out fee', 'All brands & systems', 'Parts on the van'],
      cta: { label: 'Get help now', to: '#contact' },
    },
    {
      title: 'Installations & replacements',
      subtitle: 'Upgrading your system?',
      features: ['Quality fit-outs', 'Honest sizing advice', 'Fully guaranteed', 'Free assessment'],
      cta: { label: 'Get free quote', to: '#contact' },
    },
    {
      title: 'General service',
      subtitle: 'Day-to-day repairs and maintenance',
      features: ['Fast diagnosis', 'Tidy workmanship', 'Upfront pricing', 'Friendly team'],
      cta: { label: 'View services', to: '#contact' },
    },
    {
      title: 'Commercial & strata',
      subtitle: 'Managing multiple properties?',
      features: ['Priority response', 'Reliable scheduling', 'Direct invoicing', 'Ongoing account'],
      cta: { label: 'Learn more', to: '#contact' },
    },
  ],
})
</script>
