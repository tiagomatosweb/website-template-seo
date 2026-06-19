<template>
  <section class="py-12 lg:py-16">
    <UContainer>
      <div class="relative overflow-hidden rounded-3xl bg-primary-950 shadow-[0_30px_80px_-20px] shadow-primary-950/50 ring-1 ring-white/10">
        <div aria-hidden="true" class="pointer-events-none absolute inset-0 opacity-6 bg-[radial-gradient(var(--color-white)_1px,transparent_1px)] bg-size-[1.25rem_1.25rem]" />
        <div aria-hidden="true" class="pointer-events-none absolute -top-1/2 left-1/2 size-160 -translate-x-1/2 rounded-full bg-primary/25 blur-[130px]" />
        <div aria-hidden="true" class="pointer-events-none absolute -bottom-32 right-0 size-72 rounded-full bg-cta-500/10 blur-[100px]" />

        <div class="relative grid sm:grid-cols-3">
          <div class="reveal relative flex flex-col items-center px-6 py-12 text-center">
            <p class="font-display font-black text-6xl leading-none tabular-nums bg-linear-to-b from-white to-white/55 bg-clip-text text-transparent">
              {{ rating }}
            </p>
            <div class="mt-2 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10 backdrop-blur">
              <UIcon name="i-logos-google-icon" class="size-3.5" />
              <div class="flex gap-0.5 text-cta-400">
                <UIcon v-for="i in 5" :key="i" name="i-fa6-solid-star" class="size-2.5" />
              </div>
            </div>
            <p class="mt-2 text-sm text-white/40">Rated by our customers</p>
          </div>

          <div
            v-for="(stat, i) in stats"
            :key="stat.label"
            class="reveal group relative flex flex-col items-center px-6 py-12 text-center"
            :style="{ animationDelay: `${(i + 1) * 110}ms` }"
          >
            <span class="absolute inset-y-8 left-0 hidden w-px bg-linear-to-b from-transparent via-white/15 to-transparent sm:block" />
            <p class="font-display font-black text-6xl leading-none tabular-nums bg-linear-to-b from-white to-white/55 bg-clip-text text-transparent transition-transform duration-300 group-hover:-translate-y-0.5">
              {{ stat.value }}
            </p>
            <p class="mt-2 mb-0 text-sm font-bold uppercase tracking-[0.2em] text-primary-300">{{ stat.label }}</p>
            <p v-if="stat.caption" class="mt-0.5 text-sm text-white/40">{{ stat.caption }}</p>
          </div>
        </div>

        <div class="relative flex flex-wrap items-center justify-center gap-x-8 gap-y-2 border-t border-white/10 bg-linear-to-r from-transparent via-white/4 to-transparent px-6 py-5">
          <span
            v-for="pill in pills"
            :key="pill"
            class="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white/75"
          >
            <UIcon name="i-fa6-solid-circle-check" class="size-4 text-primary-400" />
            {{ pill }}
          </span>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  rating?: string
  stats?: { value: string, label: string, caption?: string }[]
  pills?: string[]
}>(), {
  rating: '4.9',
  stats: () => [
    { value: '5,000+', label: 'Jobs completed', caption: 'Across your local area' },
    { value: '10+', label: 'Years on the tools', caption: 'Est. 2014' },
  ],
  pills: () => ['Family owned & operated', 'Fully licensed & insured'],
})
</script>
