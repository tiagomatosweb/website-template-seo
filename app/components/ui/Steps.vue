<template>
  <UCard class="overflow-hidden" :ui="{ body: 'p-0 sm:p-0' }">
    <UPageGrid :class="[gridClass, dividerClass]">
      <div
        v-for="(item, i) in props.items"
        :key="i"
        class="relative"
      >
        <UiFeatureItem :item="item" orientation="vertical" :ui="props.itemUi" />
        <span
          v-if="i < props.items.length - 1"
          aria-hidden="true"
          class="absolute -right-4 top-1/2 z-10 hidden size-8 -translate-y-1/2 items-center justify-center rounded-full bg-default ring ring-default lg:flex"
        >
          <UiIconTile icon="i-fa6-solid-arrow-right" variant="naked" class="size-3.5" />
        </span>
      </div>
    </UPageGrid>
  </UCard>
</template>

<script setup lang="ts">
import type { GridColumns } from '~/composables/useGridColumns'
import type { FeatureItem, FeatureItemUi } from './FeatureItem.vue'

const props = defineProps<{
  items: FeatureItem[]
  itemUi?: FeatureItemUi
}>()

const columns = computed<GridColumns>(() => Math.min(props.items.length, 4) as GridColumns)
const gridClass = useGridColumns(columns, 4)
const dividerClass = useGridDividers(columns, 4)
</script>
