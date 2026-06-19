<template>
  <UPageSection
    id="process"
    :headline="props.headline"
    :title="props.title"
    :description="props.description"
  >
    <ol class="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <li
        v-for="(step, i) in props.steps"
        :key="step.title"
        class="relative"
      >
        <div class="flex items-center gap-4 lg:flex-col lg:items-start">
          <span class="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary font-display font-black text-lg text-inverted">
            {{ i + 1 }}
          </span>
          <span
            v-if="i < props.steps.length - 1"
            aria-hidden="true"
            class="hidden h-px flex-1 bg-neutral-200 lg:block lg:absolute lg:left-12 lg:top-6 lg:right-0 lg:-z-10"
          />
        </div>
        <div class="mt-4">
          <UIcon :name="step.icon" class="size-6 text-primary" />
          <h4 class="mt-3">{{ step.title }}</h4>
          <p class="mt-1.5 text-toned">{{ step.description }}</p>
        </div>
      </li>
    </ol>
  </UPageSection>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  steps?: { icon: string, title: string, description: string }[]
}>(), {
  headline: 'How it works',
  title: 'Getting started is simple',
  description: 'Four easy steps from first call to job done — no surprises, no hassle.',
  steps: () => [
    { icon: 'i-fa6-solid-phone', title: 'Get in touch', description: 'Call us or request a quote online. Tell us what you need.' },
    { icon: 'i-fa6-solid-calendar-check', title: 'Book a time', description: 'We confirm a time that suits you, often same or next day.' },
    { icon: 'i-fa6-solid-wrench', title: 'We get it done', description: 'Our team arrives on time and completes the work to a high standard.' },
    { icon: 'i-fa6-solid-face-smile', title: 'Job complete', description: 'Pay the price we quoted, backed by our workmanship guarantee.' },
  ],
})
</script>
