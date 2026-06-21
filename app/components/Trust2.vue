<template>
  <UPageSection>
    <div class="relative overflow-hidden rounded-2xl bg-neutral-950 shadow-[0_30px_80px_-20px] shadow-neutral-950/50 ring-1 ring-soft-inverted">
        <div aria-hidden="true" class="pointer-events-none absolute inset-0 opacity-6 bg-[radial-gradient(var(--color-white)_1px,transparent_1px)] bg-size-[1.25rem_1.25rem]" />
        <div aria-hidden="true" class="pointer-events-none absolute -top-1/2 left-1/2 size-160 -translate-x-1/2 rounded-full bg-white/8 blur-[130px]" />

        <div class="relative grid sm:grid-cols-3">
          <div class="relative flex flex-col items-center px-6 py-12 text-center">
            <div class="font-display font-black text-6xl leading-none tabular-nums bg-linear-to-b from-white to-white/55 bg-clip-text text-transparent">
              {{ props.rating }}
            </div>
            <div class="mt-2 inline-flex items-center gap-2 rounded-full bg-surface-faint-inverted px-3 py-1 ring-1 ring-soft-inverted backdrop-blur">
              <UIcon name="i-logos-google-icon" class="size-3.5" />
              <div class="flex gap-0.5 text-star" aria-hidden="true">
                <UIcon v-for="i in 5" :key="i" name="i-fa6-solid-star" class="size-2.5" />
              </div>
            </div>
            <div class="mt-2 text-sm text-dimmed-inverted">Rated by our customers</div>
          </div>

          <div
            v-for="stat in props.stats"
            :key="stat.label"
            class="group relative flex flex-col items-center px-6 py-12 text-center"
          >
            <span class="absolute inset-y-8 left-0 hidden w-px bg-linear-to-b from-transparent via-white/15 to-transparent sm:block" />
            <div class="font-display font-black text-6xl leading-none tabular-nums bg-linear-to-b from-white to-white/55 bg-clip-text text-transparent transition-transform duration-300 group-hover:-translate-y-0.5">
              {{ stat.value }}
            </div>
            <div class="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-primary-300">{{ stat.label }}</div>
            <div v-if="stat.caption" class="mt-0.5 text-sm text-dimmed-inverted">{{ stat.caption }}</div>
          </div>
        </div>

        <div class="relative flex flex-wrap items-center justify-center gap-x-8 gap-y-2 border-t border-soft-inverted bg-linear-to-r from-transparent via-white/4 to-transparent px-6 py-5">
          <span
            v-for="pill in props.pills"
            :key="pill"
            class="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-toned-inverted"
          >
            <UIcon name="i-fa6-solid-circle-check" class="size-4 text-primary-400" />
            {{ pill }}
          </span>
        </div>
      </div>
  </UPageSection>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
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
