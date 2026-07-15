<template>
  <UCard as="figure" :ui="cardUi">
    <div :class="ui.frame">
      <img
        :src="resolvedSrc"
        :alt="props.alt"
        loading="lazy"
        :class="ui.image"
      >

      <div v-if="props.overlay" :class="ui.overlay" />

      <div v-if="$slots.top" :class="ui.top">
        <slot name="top" />
      </div>

      <div v-if="$slots.bottom" :class="ui.bottom">
        <slot name="bottom" />
      </div>
    </div>

    <UCard v-if="props.badge" as="figcaption" :ui="badgeUi">
      <UiIconTile v-if="icon" v-bind="icon" :class="ui.badge.icon" />

      <span v-if="props.badge.title || props.badge.description" :class="ui.badge.content">
        <span v-if="props.badge.title" :class="ui.badge.title">{{ props.badge.title }}</span>
        <span v-if="props.badge.description" :class="ui.badge.description">{{ props.badge.description }}</span>
      </span>
    </UCard>
  </UCard>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import type { CardProps } from '@nuxt/ui'
import type { IconTileProps } from './IconTile.vue'
import defaultImage from '~/assets/img/placeholder-image.png'

export interface FigureBadge {
  icon?: string | IconTileProps
  title?: string
  description?: string
}

export interface FigureCardUi {
  root?: string
  body?: string
}

export interface FigureBadgeUi extends FigureCardUi {
  icon?: string
  content?: string
  title?: string
  description?: string
}

export interface FigureUi {
  card?: FigureCardUi
  frame?: string
  image?: string
  overlay?: string
  top?: string
  bottom?: string
  badge?: FigureBadgeUi
}

export interface FigureImage {
  src?: string
  alt?: string
  overlay?: boolean
  badge?: FigureBadge
  ui?: FigureUi
}

const props = defineProps<FigureImage>()

const resolvedSrc = computed(() => props.src || defaultImage)

const icon = computed<IconTileProps | undefined>(() =>
  typeof props.badge?.icon === 'string' ? { icon: props.badge.icon } : props.badge?.icon,
)

const defaults = {
  card: {
    root: 'relative overflow-visible ring-0 divide-y-0',
    body: 'p-0 sm:p-0 rounded-[inherit]',
  },
  frame: 'relative isolate overflow-hidden rounded-[inherit] shadow-xl',
  image: 'aspect-4/3 w-full rounded-[inherit] object-cover',
  overlay: 'pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-neutral-950)_15%,transparent)_0%,transparent_35%,color-mix(in_srgb,var(--color-neutral-950)_85%,transparent)_100%)]',
  top: 'absolute inset-x-5 top-5',
  bottom: 'absolute inset-x-5 bottom-5',
  badge: {
    root: 'absolute -bottom-4 right-4 shadow-xl ring-0 divide-y-0',
    body: 'flex items-center gap-3 p-3 sm:p-3',
    icon: '',
    content: 'flex flex-col',
    title: 'font-display font-bold leading-tight text-highlighted',
    description: 'text-sm text-muted',
  },
}

const cardUi = computed<CardProps['ui']>(() => ({
  root: twMerge(defaults.card.root, props.ui?.card?.root),
  body: twMerge(defaults.card.body, props.ui?.card?.body),
}))

const badgeUi = computed<CardProps['ui']>(() => ({
  root: twMerge(defaults.badge.root, props.ui?.badge?.root),
  body: twMerge(defaults.badge.body, props.ui?.badge?.body),
}))

const ui = computed(() => ({
  frame: twMerge(defaults.frame, props.ui?.frame),
  image: twMerge(defaults.image, props.ui?.image),
  overlay: twMerge(defaults.overlay, props.ui?.overlay),
  top: twMerge(defaults.top, props.ui?.top),
  bottom: twMerge(defaults.bottom, props.ui?.bottom),
  badge: {
    icon: twMerge(defaults.badge.icon, props.ui?.badge?.icon),
    content: twMerge(defaults.badge.content, props.ui?.badge?.content),
    title: twMerge(defaults.badge.title, props.ui?.badge?.title),
    description: twMerge(defaults.badge.description, props.ui?.badge?.description),
  },
}))
</script>
