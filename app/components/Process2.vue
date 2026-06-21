<template>
  <UPageSection
    id="process"
    orientation="horizontal"
    :headline="props.headline"
    :title="props.title"
    :description="props.description"
    :ui="{
      container: 'lg:grid-cols-[0.8fr_1.2fr] lg:items-start gap-8 lg:gap-16',
      header: 'lg:sticky lg:top-28 lg:self-start',
      title: 'text-5xl sm:text-6xl leading-[0.95]',
      description: 'text-xl text-muted max-w-sm',
    }"
  >
    <ol class="relative">
      <span aria-hidden="true" class="absolute left-9 top-4 bottom-4 w-px bg-accented" />
      <li
        v-for="(step, i) in props.steps"
        :key="step.title"
        class="relative flex gap-7 pb-12 last:pb-0"
      >
        <span class="relative z-10 flex size-18 shrink-0 items-center justify-center rounded-md bg-inverted font-display font-black text-2xl text-inverted">
          {{ String(i + 1).padStart(2, '0') }}
        </span>
        <div class="pt-3">
          <div class="flex items-center gap-2.5">
            <UIcon :name="step.icon" class="size-5 text-primary" />
            <h3>{{ step.title }}</h3>
          </div>
          <p class="mt-2 text-toned max-w-md">{{ step.description }}</p>
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
  title: 'Four steps. Zero hassle.',
  description: 'From the first call to the final handshake — here is exactly what to expect.',
  steps: () => [
    { icon: 'i-fa6-solid-phone', title: 'Get in touch', description: 'Call us or request a quote online. Tell us what you need and we will take it from there.' },
    { icon: 'i-fa6-solid-calendar-check', title: 'Book a time', description: 'We confirm a slot that suits you — often same or next day.' },
    { icon: 'i-fa6-solid-wrench', title: 'We get it done', description: 'Our team arrives on time and completes the work to a high standard, tidy and respectful.' },
    { icon: 'i-fa6-solid-face-smile', title: 'Job complete', description: 'Pay the price we quoted, backed by our workmanship guarantee. Simple.' },
  ],
})
</script>
