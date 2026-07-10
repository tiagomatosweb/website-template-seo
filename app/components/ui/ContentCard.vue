<template>
  <UPageCard v-bind="cardProps">
    <template v-if="image" #header>
      <img
        :src="image.src"
        :alt="image.alt ?? item.title"
        loading="lazy"
        :class="imageClass"
      >
    </template>

    <template v-if="icon" #leading>
      <UiIconTile v-bind="icon" />
    </template>

    <template v-if="item.description" #description>
      <component :is="item.description" v-if="typeof item.description === 'function'" />
      <template v-else>{{ item.description }}</template>
    </template>

    <template v-if="showCta" #footer>
      <UButton v-bind="ctaProps" />
    </template>
  </UPageCard>
</template>

<script setup lang="ts">
import type { VNodeChild } from 'vue'
import type { ButtonProps, PageCardProps } from '@nuxt/ui'
import { twMerge } from 'tailwind-merge'
import type { IconTileProps } from './IconTile.vue'

export interface ContentCardImage {
  src: string
  alt?: string
  bleed?: boolean
  class?: string
}

export interface ContentCardItem extends Omit<PageCardProps, 'description' | 'icon'> {
  cta?: ButtonProps | false
  image?: string | ContentCardImage
  icon?: string | IconTileProps
  description?: string | (() => VNodeChild)
  lift?: boolean
}

const props = defineProps<{
  item: ContentCardItem
}>()

const image = computed<ContentCardImage | undefined>(() =>
  typeof props.item.image === 'string' ? { src: props.item.image } : props.item.image,
)

const icon = computed<IconTileProps | undefined>(() =>
  typeof props.item.icon === 'string' ? { icon: props.item.icon } : props.item.icon,
)

// Inset images inherit their radius straight from the #header slot, whose radius is
// set once in app.config (pageCard.slots.header) — deliberately one step under the
// card's own radius for the concentric-corner look. rounded-[inherit] tracks that
// token with no hardcoding here. A bleeding image needs none; the card's
// overflow-hidden already clips it. image.class overrides either (twMerge).
const imageClass = computed(() =>
  twMerge(
    'aspect-4/3 w-full object-cover bg-elevated',
    image.value?.bleed ? '' : 'rounded-[inherit]',
    image.value?.class,
  ),
)

// bleed: run the header image flush to the card edges — zero the header padding, pull
// it past the card's own padding, and clip corners via overflow-hidden.
const bleedUi: PageCardProps['ui'] = {
  root: 'overflow-hidden',
  header: 'p-0 sm:p-0 -mx-5 -mt-5 sm:-mx-6 sm:-mt-6',
}

const cardProps = computed<PageCardProps>(() => {
  const { icon: _icon, cta: _cta, image: _image, description: _description, lift, ui: itemUi, class: itemClass, ...rest } = props.item
  return {
    ...rest,
    ui: { ...(image.value?.bleed ? bleedUi : {}), ...itemUi },
    class: [lift && 'lift', 'group', itemClass],
  }
})

const ctaBase: ButtonProps = {
  label: 'Learn more',
  variant: 'soft',
  size: 'xs',
  color: 'primary',
  trailingIcon: 'i-fa6-solid-arrow-right',
}

const cardLinkDefaults: ButtonProps = {
  variant: 'link',
  ui: { base: 'px-0' },
}

const showCta = computed(() =>
  props.item.to ? props.item.cta !== false : Boolean(props.item.cta && props.item.cta.to),
)

const ctaProps = computed<ButtonProps>(() => {
  const cta = props.item.cta || {}
  if (props.item.to) {
    const merged = { ...ctaBase, ...cardLinkDefaults, ...cta }
    return { ...merged, ui: { ...cardLinkDefaults.ui, ...cta.ui }, as: 'div', to: undefined }
  }
  return { ...ctaBase, ...cta }
})
</script>
