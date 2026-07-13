<template>
  <UPageCard v-bind="cardProps">
    <template v-if="$slots.header || image" #header>
      <slot name="header">
        <img
          v-if="image"
          :src="image.src"
          :alt="image.alt ?? props.title"
          loading="lazy"
          :class="imageClass"
        >
      </slot>
    </template>

    <template v-if="$slots.leading || iconTile" #leading>
      <slot name="leading">
        <UiIconTile v-if="iconTile" v-bind="iconTile" />
      </slot>
    </template>

    <template v-if="$slots.footer || showCta" #footer>
      <slot name="footer">
        <UButton v-if="showCta" v-bind="ctaProps" />
      </slot>
    </template>

    <template v-for="name in forwardedSlots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps ?? {}" />
    </template>
  </UPageCard>
</template>

<script setup lang="ts">
import type { ButtonProps, PageCardProps } from '@nuxt/ui'
import { twMerge } from 'tailwind-merge'
import type { IconTileProps } from './IconTile.vue'

export interface CardImage {
  src: string
  alt?: string
  bleed?: boolean
  class?: string
}

export interface CardProps extends Omit<PageCardProps, 'description' | 'icon'> {
  cta?: ButtonProps | false
  image?: string | CardImage
  icon?: string | IconTileProps
  description?: string
  lift?: boolean
}

const props = defineProps<CardProps>()

// header/leading/footer render prop-driven defaults (image, icon tile, CTA); every
// other UPageCard slot the caller provides is forwarded through untouched.
const slots = useSlots()
const forwardedSlots = computed(() =>
  Object.keys(slots).filter(name => !['header', 'leading', 'footer'].includes(name)),
)

const image = computed<CardImage | undefined>(() =>
  typeof props.image === 'string' ? { src: props.image } : props.image,
)

const iconTile = computed<IconTileProps | undefined>(() =>
  typeof props.icon === 'string' ? { icon: props.icon } : props.icon,
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
  const { icon: _icon, cta: _cta, image: _image, lift, ui: cardUi, class: cardClass, ...rest } = props
  return {
    ...rest,
    ui: { ...(image.value?.bleed ? bleedUi : {}), ...cardUi },
    class: [lift && 'lift', 'group', cardClass],
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
  props.to ? props.cta !== false : Boolean(props.cta && props.cta.to),
)

const ctaProps = computed<ButtonProps>(() => {
  const cta = props.cta || {}
  if (props.to) {
    const merged = { ...ctaBase, ...cardLinkDefaults, ...cta }
    return { ...merged, ui: { ...cardLinkDefaults.ui, ...cta.ui }, as: 'div', to: undefined }
  }
  return { ...ctaBase, ...cta }
})
</script>
