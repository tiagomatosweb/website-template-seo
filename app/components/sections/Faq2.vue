<template>
  <UPageSection
    id="faq"
    orientation="horizontal"
    v-bind="sectionProps"
    :ui="{
      container: 'lg:items-start',
    }"
  >
    <template v-if="headlineFn" #headline>
      <component :is="headlineFn" />
    </template>

    <template v-if="titleFn" #title>
      <component :is="titleFn" />
    </template>

    <template #description>
      <p v-if="descriptionFn || props.description" class="max-w-md text-toned">
        <component :is="descriptionFn" v-if="descriptionFn" />
        <template v-else>{{ props.description }}</template>
      </p>

      <UPageCard v-if="props.cta" class="mt-8" v-bind="props.cta">
        <template #footer>
          <UButton v-bind="ctaButton" />
        </template>
      </UPageCard>
    </template>

    <template v-for="(_, name) in forwardedSlots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps ?? {}" />
    </template>

    <UAccordion
      :items="accordionItems"
      type="multiple"
      :default-value="['0']"
    />
  </UPageSection>
</template>

<script setup lang="ts">
import type { AccordionItem, ButtonProps, PageCardProps, PageSectionProps } from '@nuxt/ui'
import type { SectionText } from '~/composables/usePageSection'

// Shared so a page can emit matching FAQPage JSON-LD schema from the same data.
export interface Faq {
  label: string
  content: string
}

const props = withDefaults(defineProps<Omit<PageSectionProps, 'headline' | 'title' | 'description'> & {
  headline?: SectionText
  title?: SectionText
  description?: SectionText
  cta?: PageCardProps & { button?: ButtonProps }
  items: Faq[]
}>(), {
  headline: 'FAQ',
  title: 'Frequently Asked Questions',
})

const { sectionProps, headlineFn, titleFn, descriptionFn, forwardedSlots } = usePageSection(
  props,
  ['cta', 'items'],
  ['description'],
)

const ctaButton = computed<ButtonProps>(() => callCta({ ...props.cta?.button }))

const accordionItems = computed<AccordionItem[]>(() => props.items)
</script>
