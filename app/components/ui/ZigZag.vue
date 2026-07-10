<template>
  <div :class="ui.root({ class: props.ui?.root })">
    <template v-for="(item, i) in props.items" :key="i">
      <component :is="item" v-if="isRenderFn(item)" />

      <div
        v-else
        :class="ui.item({ class: [props.ui?.item, item.ui?.item, i % 2 === 1 && reverseClass] })"
      >
        <component :is="item.image" v-if="isRenderFn(item.image)" :class="ui.figure({ class: [props.ui?.figure, item.ui?.figure] })" />
        <UiFigure v-else v-bind="item.image" :class="ui.figure({ class: [props.ui?.figure, item.ui?.figure] })" />

        <div :class="ui.content({ class: [props.ui?.content, item.ui?.content] })">
          <div :class="ui.body({ class: [props.ui?.body, item.ui?.body] })">
            <div v-if="item.headline" :class="ui.headline({ class: [props.ui?.headline, item.ui?.headline] })">
              <component :is="item.headline" v-if="isRenderFn(item.headline)" />
              <template v-else>{{ item.headline }}</template>
            </div>

            <h3 v-if="item.title" :class="ui.title({ class: [props.ui?.title, item.ui?.title] })">
              <component :is="item.title" v-if="isRenderFn(item.title)" />
              <template v-else>{{ item.title }}</template>
            </h3>

            <div v-if="item.description" :class="ui.description({ class: [props.ui?.description, item.ui?.description] })">
              <component :is="item.description" v-if="isRenderFn(item.description)" />
              <p v-else>{{ item.description }}</p>
            </div>
          </div>

          <div v-if="item.links?.length" :class="ui.links({ class: [props.ui?.links, item.ui?.links] })">
            <UButton v-for="(link, j) in item.links" :key="j" size="lg" v-bind="link" />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { VNodeChild } from 'vue'
import { tv } from '@nuxt/ui/utils/tv'
import type { ButtonProps } from '@nuxt/ui'
import pageSectionTheme from '#build/ui/page-section'
import type { SectionText } from '~/composables/usePageSection'
import type { RenderItem } from '~/utils/render'
import type { FigureImage } from './Figure.vue'

export interface ZigZagItemUi {
  item?: string
  figure?: string
  content?: string
  body?: string
  headline?: string
  title?: string
  description?: string
  links?: string
}

export interface ZigZagItem {
  image?: FigureImage | (() => VNodeChild)
  headline?: SectionText
  title?: SectionText
  description?: SectionText
  links?: ButtonProps[]
  ui?: ZigZagItemUi
}

export interface ZigZagUi extends ZigZagItemUi {
  root?: string
}

const props = defineProps<{
  items: RenderItem<ZigZagItem>[]
  ui?: ZigZagUi
}>()

const appConfig = useAppConfig()
const pageSectionOverride = appConfig.ui?.pageSection as Record<string, unknown> | undefined
const section = tv({ extend: tv(pageSectionTheme), ...(pageSectionOverride || {}) })({
  orientation: 'horizontal',
  headline: true,
  title: true,
})

const theme = tv({
  slots: {
    root: 'space-y-16 lg:space-y-24',
    item: 'grid lg:grid-cols-2 lg:items-center gap-8 lg:gap-16',
    figure: '',
    content: '',
    body: '',
    headline: section.headline(),
    title: section.title({ class: 'font-display text-2xl sm:text-3xl lg:text-3xl font-black text-balance' }),
    description: section.description(),
    links: [section.footer(), section.links()],
  },
})

const reverseClass = 'lg:[&>*:first-child]:order-last'
const ui = computed(() => theme())
</script>
