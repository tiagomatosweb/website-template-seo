<template>
  <UCard
    :ui="{
      root: ui.root({ class: [props.ui?.root, props.class] }),
      body: ui.body({ class: props.ui?.body }),
    }"
  >
    <div
      v-for="(column, c) in normalized"
      :key="c"
      :class="ui.column({ featured: column.featured, divider: c < normalized.length - 1, class: [props.ui?.column, column.ui?.column] })"
      :style="{ '--rows': rowCount + 1 }"
    >
      <div :class="ui.header({ featured: column.featured, class: [props.ui?.header, column.ui?.header] })">
        <UiIconTile v-bind="column.icon" :class="ui.headerLeadingIcon({ class: [props.ui?.headerLeadingIcon, column.ui?.headerLeadingIcon] })" />
        <div :class="ui.headerBody({ class: [props.ui?.headerBody, column.ui?.headerBody] })">
          <h4 :class="ui.title({ featured: column.featured, class: [props.ui?.title, column.ui?.title] })">
            <slot name="title" :column="column" :column-index="c" :featured="column.featured">
              <component :is="column.title" v-if="isRenderFn(column.title)" />
              <template v-else>{{ column.title }}</template>
            </slot>
          </h4>
          <div
            v-if="column.description || $slots.description"
            :class="ui.description({ featured: column.featured, class: [props.ui?.description, column.ui?.description] })"
          >
            <slot name="description" :column="column" :column-index="c" :featured="column.featured">
              <component :is="column.description" v-if="isRenderFn(column.description)" />
              <template v-else>{{ column.description }}</template>
            </slot>
          </div>
        </div>
      </div>

      <template v-for="(item, i) in column.items" :key="i">
        <component :is="item" v-if="isRenderFn(item)" />
        <div
          v-else
          :class="ui.item({ featured: column.featured, class: [props.ui?.item, column.ui?.item, item.ui?.item] })"
        >
          <UiIconTile v-bind="item.icon" :class="ui.itemLeadingIcon({ class: [props.ui?.itemLeadingIcon, column.ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })" />
          <span :class="ui.itemLabel({ featured: column.featured, class: [props.ui?.itemLabel, column.ui?.itemLabel, item.ui?.itemLabel] })">
            <slot name="item" :item="item" :column="column" :column-index="c" :index="i" :featured="column.featured">
              <component :is="item.label" v-if="isRenderFn(item.label)" />
              <template v-else>{{ item.label }}</template>
            </slot>
          </span>
        </div>
      </template>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import { tv } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'
import type { SectionText } from '~/composables/usePageSection'
import type { RenderItem } from '~/utils/render'
import type { IconTileProps } from './IconTile.vue'

export type ComparisonUi = Partial<Record<
  'root' | 'body' | 'column' | 'header' | 'headerLeadingIcon' | 'headerBody' | 'title' | 'description' | 'item' | 'itemLeadingIcon' | 'itemLabel',
  string
>>

// Icons render through UiIconTile, defaulting to the naked variant (bare glyph);
// pass IconTileProps with a variant (e.g. 'soft') to get the tile box.
export interface ComparisonItem {
  label: SectionText
  icon?: string | IconTileProps
  ui?: Pick<ComparisonUi, 'item' | 'itemLeadingIcon' | 'itemLabel'>
}

export interface ComparisonColumn {
  title: SectionText
  description?: SectionText
  icon?: string | IconTileProps
  itemIcon?: string | IconTileProps
  items: RenderItem<string | ComparisonItem>[]
  featured?: boolean
  ui?: Omit<ComparisonUi, 'root' | 'body'>
}

const props = defineProps<{
  columns: ComparisonColumn[]
  class?: string
  ui?: ComparisonUi
}>()

const theme = tv({
  slots: {
    root: 'overflow-hidden shadow-lg',
    body: 'grid p-0 sm:p-0 sm:grid-cols-2',
    column: 'sm:grid sm:grid-rows-subgrid sm:row-span-(--rows)',
    header: 'flex items-center gap-3 px-5 py-4 sm:px-6 sm:py-5',
    headerLeadingIcon: 'shrink-0',
    headerBody: 'min-w-0',
    title: '',
    description: 'mt-1 text-sm',
    item: 'flex items-start gap-3 border-t border-default px-5 py-4 sm:px-6',
    itemLeadingIcon: 'shrink-0 self-center',
    itemLabel: 'text-[15px] font-medium',
  },
  variants: {
    featured: {
      false: {
        header: 'bg-elevated/60',
        title: 'text-toned',
        description: 'text-muted',
        itemLabel: 'text-toned',
      },
      true: {
        column: 'bg-primary-soft',
        header: 'bg-primary',
        title: 'text-inverted',
        description: 'text-muted-inverted',
        itemLabel: 'text-highlighted',
      },
    },
    divider: {
      true: {
        column: 'border-default sm:border-r',
      },
    },
  },
})

const ui = theme()

const tile = (raw: string | IconTileProps, defaults: Partial<IconTileProps>, nakedClass: string): IconTileProps => {
  const merged: IconTileProps = typeof raw === 'string'
    ? { icon: raw, variant: 'naked', size: 'sm' }
    : { variant: 'naked', size: 'sm', ...defaults, ...raw }
  return merged.variant === 'naked' ? { ...merged, class: twMerge(nakedClass, merged.class) } : merged
}

const normalized = computed(() => {
  // A comparison is always two-way; extra columns are ignored.
  const columns = props.columns.slice(0, 2)
  const featuredDefault = columns.some(column => column.featured) ? -1 : 1
  return columns.map((column, i) => {
    const featured = column.featured ?? i === featuredDefault
    return {
      ...column,
      featured,
      icon: tile(
        column.icon ?? (featured ? 'i-fa6-solid-circle-check' : 'i-fa6-solid-circle-xmark'),
        featured ? { inverted: true } : {},
        featured ? 'text-inverted' : 'text-dimmed',
      ),
      items: column.items.map((item) => {
        if (isRenderFn(item)) return item
        const normal = typeof item === 'string' ? { label: item } : item
        return {
          ...normal,
          icon: tile(
            normal.icon ?? column.itemIcon ?? (featured ? 'i-fa6-solid-circle-check' : 'i-fa6-solid-xmark'),
            {},
            featured ? 'size-4 text-primary' : 'size-4 text-dimmed',
          ),
        }
      }),
    }
  })
})

const rowCount = computed(() => Math.max(0, ...normalized.value.map(column => column.items.length)))
</script>
