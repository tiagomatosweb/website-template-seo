<template>
  <NuxtLink :to="to" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <!-- PLACEHOLDER: replace wordmark with logo image at build time -->
    <span :class="ui.title({ class: props.ui?.title })">{{ title }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
import { tv } from 'tailwind-variants'

type Size = 'sm' | 'md'

export interface LogoUi {
  root?: string
  title?: string
}

export interface LogoProps {
  to?: string
  title?: string
  size?: Size
  light?: boolean
  class?: string
  ui?: LogoUi
}

const { site } = useAppConfig()

const props = withDefaults(defineProps<LogoProps>(), {
  to: '/',
  size: 'md',
  light: false,
})

const title = computed(() => props.title ?? site.name)

const theme = tv({
  slots: {
    root: 'flex items-center shrink-0',
    title: 'font-display font-black tracking-tight transition-colors duration-300',
  },
  variants: {
    size: {
      sm: { title: 'text-xl' },
      md: { title: 'text-2xl' },
    },
    light: {
      true: { title: 'text-inverted' },
      false: { title: 'text-highlighted' },
    },
  },
})

const ui = computed(() => theme({ size: props.size, light: props.light }))
</script>
