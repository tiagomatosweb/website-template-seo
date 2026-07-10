<template>
  <UCard
    :ui="{ body: ui.container({ class: props.ui?.container }), footer: ui.footer({ class: props.ui?.footer }) }"
    :class="props.class"
  >
    <div :class="ui.media({ class: props.ui?.media })">
      <ClientOnly>
        <ImgComparisonSlider :class="ui.slider({ class: props.ui?.slider })">
          <img
            slot="first"
            :src="beforeImage.src"
            :alt="beforeImage.alt"
            loading="lazy"
            :class="ui.image({ class: props.ui?.image })"
          >
          <img
            slot="second"
            :src="afterImage.src"
            :alt="afterImage.alt"
            loading="lazy"
            :class="ui.image({ class: props.ui?.image })"
          >

          <div slot="handle" :class="ui.handle({ class: props.ui?.handle })">
            <UIcon name="i-fa6-solid-angle-left" :class="ui.handleIcon()" />
            <UIcon name="i-fa6-solid-angle-right" :class="ui.handleIcon()" />
          </div>
        </ImgComparisonSlider>

        <template #fallback>
          <img :src="afterImage.src" :alt="afterImage.alt" :class="ui.image({ class: props.ui?.image })">
        </template>
      </ClientOnly>

      <UBadge
        v-if="beforeBadge"
        v-bind="beforeBadge"
        :class="ui.beforeBadge({ class: props.ui?.beforeBadge })"
      />
      <UBadge
        v-if="afterBadge"
        v-bind="afterBadge"
        :class="ui.afterBadge({ class: props.ui?.afterBadge })"
      />
    </div>

    <template v-if="props.title || props.description" #footer>
      <h4 v-if="props.title" :class="ui.title({ class: props.ui?.title })">{{ props.title }}</h4>
      <p v-if="props.description" :class="ui.description({ class: props.ui?.description })">{{ props.description }}</p>
    </template>
  </UCard>
</template>

<script setup lang="ts">
import { ImgComparisonSlider } from '@img-comparison-slider/vue'
import { tv } from 'tailwind-variants'
import type { BadgeProps } from '@nuxt/ui'
import defaultImage from '~/assets/img/placeholder-image.png'

export type BeforeAfterUi = Partial<Record<
  'container' | 'media' | 'slider' | 'image' | 'handle' | 'handleIcon'
  | 'beforeBadge' | 'afterBadge' | 'footer' | 'title' | 'description',
  string
>>

export interface BeforeAfterImage {
  src?: string
  alt?: string
  badge?: string | BadgeProps
}

export interface BeforeAfterItem {
  before?: BeforeAfterImage
  after?: BeforeAfterImage
  title?: string
  description?: string
  class?: string
  ui?: BeforeAfterUi
}

const props = defineProps<BeforeAfterItem>()

const normalizeImage = (image: BeforeAfterImage | undefined, defaultAlt: string): Required<Pick<BeforeAfterImage, 'src' | 'alt'>> => ({
  src: image?.src || defaultImage,
  alt: image?.alt ?? defaultAlt,
})

const normalizeBadge = (badge: BeforeAfterImage['badge'], defaultLabel: string): BadgeProps => ({
  size: 'sm',
  ...(typeof badge === 'string' ? { label: badge } : badge ?? { label: defaultLabel }),
})

const beforeImage = computed(() => normalizeImage(props.before, 'Before'))
const afterImage = computed(() => normalizeImage(props.after, 'After'))

const beforeBadge = computed(() => normalizeBadge(props.before?.badge, 'Before'))
const afterBadge = computed(() => normalizeBadge(props.after?.badge, 'After'))

const badge = 'absolute z-10 rounded-full bg-neutral-900/80 uppercase tracking-wide text-white backdrop-blur-sm'

const theme = tv({
  slots: {
    container: 'p-0 sm:p-0',
    media: 'relative overflow-hidden',
    slider: 'block w-full [--divider-width:2px] [--divider-color:theme(colors.white)] [--default-handle-opacity:1] [&_img]:block [&_img]:w-full',
    image: 'block w-full',
    handle: 'flex size-11 items-center justify-center gap-0.5 rounded-full bg-white text-neutral-700 shadow-lg',
    handleIcon: 'size-3.5',
    beforeBadge: `${badge} left-3 top-3`,
    afterBadge: `${badge} right-3 top-3`,
    footer: 'p-4 sm:p-5',
    title: '',
    description: 'mt-1 text-base text-muted',
  },
})

const ui = theme()
</script>
