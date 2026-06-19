<template>
  <UPageSection
    id="services"
    :headline="props.headline"
    :title="props.title"
  >
    <UPageGrid class="lg:grid-cols-4">
      <UCard
        v-for="service in props.services"
        :key="service.title"
        :ui="{
          root: 'lift h-full flex flex-col overflow-hidden',
          // Local override: image header bleeds edge-to-edge (no padding, beats the
          // global p-5 sm:p-6 card padding). Image is clipped by root overflow-hidden.
          header: 'p-0 sm:p-0',
          body: 'flex flex-1 flex-col',
        }"
      >
        <template #header>
          <div class="relative aspect-4/3 w-full overflow-hidden bg-neutral-100">
            <img
              v-if="service.image"
              :src="service.image"
              :alt="service.title"
              loading="lazy"
              class="size-full object-cover"
            >
            <div v-else class="flex size-full items-center justify-center">
              <UIcon name="i-fa6-solid-image" class="size-10 text-dimmed" />
            </div>
            <span
              v-if="service.badge"
              class="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-neutral-900/80 px-3 py-1 font-display text-xs font-bold text-white backdrop-blur"
            >
              {{ service.badge }}
            </span>
          </div>
        </template>

        <h4 class="uppercase tracking-wide">
          {{ service.title }}
        </h4>
        <p
          v-if="service.subtitle"
          class="mt-2 text-sm italic"
          :class="service.accent === 'cta' ? 'text-cta-600' : 'text-primary'"
        >
          {{ service.subtitle }}
        </p>

        <ul class="mt-4 space-y-2.5">
          <li v-for="feature in service.features" :key="feature" class="flex items-center gap-2.5 text-sm text-toned">
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
      </UCard>
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

const props = withDefaults(defineProps<{
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
