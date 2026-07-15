<template>
  <div>
    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      TrustBar — inline row
    </div>

    <UPageSection :ui="{ container: 'py-8 lg:py-6' }">
      <div class="flex flex-col items-center gap-6 lg:flex-row lg:justify-between lg:gap-8">
        <div class="inline-flex items-center gap-2">
          <UIcon name="i-logos-google-icon" class="size-4 shrink-0" />
          <span class="inline-flex items-center gap-1.5 leading-none">
            <UiGoogleStars :rating="Number(site.google_rating)" size="md" />
            <span class="translate-y-px text-sm font-semibold tabular-nums text-default">{{ site.google_rating }}</span>
          </span>
        </div>

        <div class="h-px w-16 bg-accented lg:h-8 lg:w-px" />

        <UiList
          orientation="horizontal"
          :items="trustBar1"
          :icon="{ size: 'md' }"
          :ui="{ root: 'justify-center gap-x-8 gap-y-3', label: 'font-semibold text-default' }"
        />
      </div>
    </UPageSection>

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      TrustBar — dark stats panel
    </div>

    <UPageSection>
      <div class="relative overflow-hidden rounded-2xl bg-neutral-950 shadow-[0_30px_80px_-20px] shadow-neutral-950/50 ring-1 ring-soft-inverted">
        <div aria-hidden="true" class="pointer-events-none absolute inset-0 opacity-6 bg-[radial-gradient(var(--color-white)_1px,transparent_1px)] bg-size-[1.25rem_1.25rem]" />
        <div aria-hidden="true" class="pointer-events-none absolute -top-1/2 left-1/2 size-160 -translate-x-1/2 rounded-full bg-white/8 blur-[130px]" />

        <div class="relative grid sm:grid-cols-3">
          <div class="relative flex flex-col items-center px-6 py-12 text-center">
            <div class="font-display font-black text-6xl leading-none tabular-nums bg-linear-to-b from-white to-white/55 bg-clip-text text-transparent">
              {{ site.google_rating }}
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
            v-for="stat in trustStats"
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
            v-for="pill in trustPills"
            :key="pill"
            class="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-toned-inverted"
          >
            <UIcon name="i-fa6-solid-circle-check" class="size-4 text-primary-400" />
            {{ pill }}
          </span>
        </div>
      </div>
    </UPageSection>
  </div>
</template>

<script setup lang="ts">
import type { ListItem } from '~/components/ui/List.vue'

const { site } = useAppConfig()

useSeoMeta({
  title: 'TrustBar — variants',
  robots: 'noindex, nofollow',
})

const trustBar1: ListItem[] = [
  { icon: 'i-fa6-solid-chart-line', label: 'Results you can measure' },
  { icon: 'i-fa6-solid-lock-open', label: 'No long lock-ins' },
  { icon: 'i-fa6-solid-user-check', label: 'Senior specialists do the work' },
  { icon: 'i-fa6-solid-hand-holding-dollar', label: 'Transparent pricing' },
]

const trustStats = [
  { value: '5,000+', label: 'Jobs completed', caption: 'Across your local area' },
  { value: '10+', label: 'Years on the tools', caption: 'Est. 2014' },
]

const trustPills = ['Family owned & operated', 'Fully licensed & insured']
</script>
