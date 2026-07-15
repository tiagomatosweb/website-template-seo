<template>
  <div>
    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Images1 — Badge
    </div>

    <UPageSection
      headline="Figure"
      title="Image with badge"
      description="A hanging figcaption badge — icon tile plus title and description — anchored to the bottom-right of the frame."
    >
      <template #body>
        <div class="mx-auto max-w-xl">
          <UiFigure
            :src="photo"
            alt="Recent project"
            :badge="{ icon: 'i-fa6-solid-chart-line', title: '500+', description: 'Campaigns delivered' }"
          />
        </div>
      </template>
    </UPageSection>

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Images2 — Overlay
    </div>

    <UPageSection
      headline="Figure"
      title="Image with overlay"
      description="Enable the dark bottom-up gradient with the overlay prop — ideal behind light text placed over the image."
    >
      <template #body>
        <div class="mx-auto max-w-xl">
          <UiFigure :src="photo" alt="Recent project" overlay />
        </div>
      </template>
    </UPageSection>

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Images3 — Top slot
    </div>

    <UPageSection
      headline="Figure"
      title="Image with top slot"
      description="Inject anything into the top band — here a live status pill."
    >
      <template #body>
        <div class="mx-auto max-w-xl">
          <UiFigure :src="photo" alt="Recent project" overlay>
            <template #top>
              <div class="inline-flex items-center gap-2 rounded-full bg-neutral-950/70 px-3.5 py-1.5 ring-1 ring-white/15 backdrop-blur-sm">
                <span class="relative flex size-2">
                  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
                  <span class="relative inline-flex size-2 rounded-full bg-primary-400" />
                </span>
                <span class="font-display text-xs font-semibold tracking-widest text-inverted uppercase">Live now</span>
              </div>
            </template>
          </UiFigure>
        </div>
      </template>
    </UPageSection>

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Images4 — Bottom slot
    </div>

    <UPageSection
      headline="Figure"
      title="Image with bottom slot"
      description="Inject a caption into the bottom band — title and supporting line over the gradient."
    >
      <template #body>
        <div class="mx-auto max-w-xl">
          <UiFigure :src="photo" alt="Recent project" overlay>
            <template #bottom>
              <p class="font-display text-lg leading-tight font-bold text-inverted mb-0">We diagnose before we quote</p>
              <p class="mt-1 text-sm text-toned-inverted">Every job traced to its actual cause — no guesswork.</p>
            </template>
          </UiFigure>
        </div>
      </template>
    </UPageSection>

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Images5 — Combined
    </div>

    <UPageSection
      headline="Figure"
      title="Overlay, top and bottom together"
      description="Everything at once — overlay gradient, a status pill up top and a caption at the bottom."
    >
      <template #body>
        <div class="mx-auto max-w-md">
          <UiFigure
            :src="photo"
            alt="Technician diagnosing a system"
            overlay
            :ui="{ image: 'aspect-4/5' }"
          >
            <template #top>
              <div class="inline-flex items-center gap-2 rounded-full bg-neutral-950/70 px-3.5 py-1.5 ring-1 ring-white/15 backdrop-blur-sm">
                <span class="relative flex size-2">
                  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
                  <span class="relative inline-flex size-2 rounded-full bg-primary-400" />
                </span>
                <span class="font-display text-xs font-semibold tracking-widest text-inverted uppercase">7 common faults</span>
              </div>
            </template>
            <template #bottom>
              <p class="font-display text-lg leading-tight font-bold text-inverted mb-0">We diagnose before we quote</p>
              <p class="mt-1 text-sm text-toned-inverted">Every fault traced to its actual cause — no guesswork.</p>
            </template>
          </UiFigure>
        </div>
      </template>
    </UPageSection>
  </div>
</template>

<script setup lang="ts">
import photo from '~/assets/img/pexels-reneterp-13821194.jpg'

useSeoMeta({
  title: 'Images — variants',
  robots: 'noindex, nofollow',
})
</script>
