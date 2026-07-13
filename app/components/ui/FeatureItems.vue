<template>
  <UCard class="overflow-hidden" :ui="{ body: 'p-0 sm:p-0' }">
    <UPageGrid :class="[gridClass, dividerClass]">
      <UiFeatureItem
        v-for="(item, i) in props.items"
        :key="i"
        :item="item"
        :orientation="props.itemOrientation"
        :ui="props.itemUi"
      />
    </UPageGrid>
  </UCard>
</template>

<script setup lang="ts">
import type { GridColumns } from '~/composables/useGridColumns'
import type { FeatureItem, FeatureItemUi } from './FeatureItem.vue'

const props = withDefaults(defineProps<{
  items: FeatureItem[]
  orientation?: 'horizontal' | 'vertical'
  columns?: GridColumns
  itemOrientation?: 'horizontal' | 'vertical'
  itemUi?: FeatureItemUi
}>(), {
  orientation: 'vertical',
  columns: 3,
  itemOrientation: 'horizontal',
})

const gridColumns = computed<GridColumns>(() => (props.orientation === 'vertical' ? 1 : props.columns))
const gridClass = useGridColumns(gridColumns, 1)
const dividerClass = useGridDividers(gridColumns, 1)
</script>
