<template>
  <section id="process" class="py-24 lg:py-32">
    <UContainer>
      <div class="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div class="lg:sticky lg:top-28 lg:self-start">
          <p class="font-display font-bold uppercase tracking-[0.25em] text-sm text-primary">{{ headline }}</p>
          <h2 class="mt-4 font-display font-black text-5xl sm:text-6xl leading-[0.95] tracking-tight text-neutral-900 text-balance">
            {{ title }}
          </h2>
          <p class="mt-6 text-xl text-neutral-500 max-w-sm">{{ description }}</p>
        </div>

        <ol class="relative">
          <span aria-hidden="true" class="absolute left-[2.25rem] top-4 bottom-4 w-px bg-neutral-200" />
          <li
            v-for="(step, i) in steps"
            :key="step.title"
            class="reveal relative flex gap-7 pb-12 last:pb-0"
            :style="{ animationDelay: `${i * 100}ms` }"
          >
            <span class="relative z-10 flex size-[4.5rem] shrink-0 items-center justify-center rounded-2xl bg-neutral-900 font-display font-black text-2xl text-white">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <div class="pt-3">
              <div class="flex items-center gap-2.5">
                <UIcon :name="step.icon" class="size-5 text-primary" />
                <h3 class="font-display font-black text-2xl tracking-tight text-neutral-900">{{ step.title }}</h3>
              </div>
              <p class="mt-2 text-neutral-600 max-w-md">{{ step.description }}</p>
            </div>
          </li>
        </ol>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
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
