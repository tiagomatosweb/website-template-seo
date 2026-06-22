<template>
  <UPageSection
    id="why"
    orientation="horizontal"
    :ui="{ container: 'lg:items-center' }"
  >
    <!-- Left column: header + image with overlays + CTA -->
    <div>
      <div :class="headlineClass">{{ props.headline }}</div>
      <h2 :class="titleClass">{{ props.title }}</h2>
      <p v-if="props.description" class="mt-4 text-lg text-toned max-w-md">
        {{ props.description }}
      </p>

      <!-- Contained image with badge + floating stat card -->
      <div class="relative mt-8">
        <div class="relative overflow-hidden rounded-2xl shadow-xl">
          <img
            :src="resolvedImage"
            :alt="props.imageAlt"
            loading="lazy"
            class="aspect-4/3 w-full object-cover"
          >
          <span
            v-if="props.imageBadge"
            class="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-neutral-950/80 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-inverted backdrop-blur"
          >
            <UIcon name="i-fa6-solid-circle-check" class="size-3.5 text-primary-300" />
            {{ props.imageBadge }}
          </span>
        </div>

        <div
          v-if="props.stat"
          class="absolute -bottom-5 right-4 flex items-center gap-3 rounded-xl bg-default p-4 shadow-lg ring ring-default sm:right-6"
        >
          <IconTile icon="i-fa6-solid-house" />
          <div>
            <div class="font-display text-xl font-black leading-none text-highlighted tabular-nums">
              {{ props.stat.value }}
            </div>
            <div class="mt-1 text-sm text-muted">{{ props.stat.label }}</div>
          </div>
        </div>
      </div>

      <UButton
        :label="props.cta.label"
        :to="props.cta.to"
        color="cta"
        size="lg"
        trailing-icon="i-fa6-solid-arrow-right"
        class="mt-12 self-start"
      />
    </div>

    <!-- Right column: reasons grid -->
    <UPageGrid class="sm:grid-cols-2 lg:grid-cols-2">
      <UPageCard
        v-for="reason in props.reasons"
        :key="reason.title"
        :title="reason.title"
        :description="reason.description"
      >
        <template #leading>
          <IconTile :icon="reason.icon" />
        </template>
      </UPageCard>
    </UPageGrid>
  </UPageSection>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import defaultImage from '~/assets/img/pexels-reneterp-13821194.jpg'

interface Reason {
  icon: string
  title: string
  description: string
}

const props = withDefaults(defineProps<{
  image?: string
  imageAlt?: string
  imageBadge?: string
  stat?: { value: string, label: string }
  headline?: string
  title?: string
  description?: string
  cta?: { label: string, to: string }
  reasons?: Reason[]
}>(), {
  image: '',
  imageAlt: 'Recent project',
  imageBadge: 'Maintained by us',
  stat: () => ({ value: '500+', label: 'Local jobs completed' }),
  headline: 'Why choose us',
  title: 'Why locals choose us',
  description: 'Specialist knowledge of your area, backed by results you can see.',
  cta: () => ({ label: 'Request my free quote', to: '#contact' }),
  reasons: () => [
    { icon: 'i-fa6-solid-location-dot', title: 'Local expertise', description: 'We know the area — the conditions, the common issues, and what actually lasts.' },
    { icon: 'i-fa6-solid-shield-halved', title: 'Prevention, not just repair', description: 'We fix the root cause so problems do not keep coming back.' },
    { icon: 'i-fa6-solid-award', title: 'Proven results', description: 'Hundreds of local homes trust us. The proof is in the work we deliver.' },
    { icon: 'i-fa6-solid-thumbs-up', title: 'Quality guaranteed', description: 'Workmanship done right the first time, fully backed by our guarantee.' },
    { icon: 'i-fa6-solid-hand-holding-dollar', title: 'No lock-in contracts', description: 'We earn your business through results, not paperwork. Start with no obligation.' },
    { icon: 'i-fa6-solid-clock', title: 'Reliable scheduling', description: 'Consistent crews, reliable visit times and clear communication. No chasing.' },
  ],
})

const sectionUi = useAppConfig().ui.pageSection.slots
const headlineClass = twMerge(sectionUi.headline, 'mb-4')
const titleClass = sectionUi.title
const resolvedImage = computed(() => props.image || defaultImage)
</script>
