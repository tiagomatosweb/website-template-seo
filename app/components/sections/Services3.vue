<template>
  <UPageSection
    id="services"
    :headline="props.headline"
    :title="props.title"
  >
    <UPageGrid class="lg:grid-cols-4">
      <UPageCard
        v-for="service in props.services"
        :key="service.title"
        :title="service.title"
        :ui="{
          root: 'lift overflow-hidden',
          container: 'flex flex-col lg:flex',
          header: 'p-0 sm:p-0 -mx-5 -mt-5 sm:-mx-6 sm:-mt-6',
          footer: 'w-full mt-4'
        }"
      >
        <template #header>
          <img
            :src="service.image"
            :alt="service.title"
            loading="lazy"
            class="aspect-4/3 w-full object-cover bg-elevated"
          >
        </template>

        <template #description>
          <p
            v-if="service.subtitle"
            class="mt-2 text-sm italic text-primary"
          >
            {{ service.subtitle }}
          </p>

          <ul class="mt-4 space-y-2.5">
            <li v-for="feature in service.features" :key="feature" class="flex items-center gap-2.5 text-sm text-toned">
              <UIcon name="i-fa6-solid-check" class="size-3.5 shrink-0 text-primary" />
              {{ feature }}
            </li>
          </ul>
        </template>

        <template #footer>
          <UButton
            :label="service.cta.label"
            color="primary"
            variant="outline"
            block
            trailing-icon="i-fa6-solid-arrow-right"
            :to="service.cta.to"
            class="justify-center"
          />
        </template>
      </UPageCard>
    </UPageGrid>
  </UPageSection>
</template>

<script setup lang="ts">
interface ServiceItems {
  image: string
  title: string
  subtitle?: string
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
      image: 'https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Emergency call-outs',
      subtitle: 'Something gone wrong? Need help today?',
      features: ['Same-day service', 'Zero call-out fee', 'All brands & systems', 'Parts on the van'],
      cta: { label: 'Get help now', to: '#contact' },
    },
    {
      image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Installations & replacements',
      subtitle: 'Upgrading your system?',
      features: ['Quality fit-outs', 'Honest sizing advice', 'Fully guaranteed', 'Free assessment'],
      cta: { label: 'Get free quote', to: '#contact' },
    },
    {
      image: 'https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'General service',
      subtitle: 'Day-to-day repairs and maintenance',
      features: ['Fast diagnosis', 'Tidy workmanship', 'Upfront pricing', 'Friendly team'],
      cta: { label: 'View services', to: '#contact' },
    },
    {
      image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Commercial & strata',
      subtitle: 'Managing multiple properties?',
      features: ['Priority response', 'Reliable scheduling', 'Direct invoicing', 'Ongoing account'],
      cta: { label: 'Learn more', to: '#contact' },
    },
  ],
})
</script>
