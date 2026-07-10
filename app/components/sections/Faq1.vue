<template>
  <UPageSection
    id="faq"
    v-bind="sectionProps"
    :ui="{
      headline: 'justify-center',
      title: 'text-center',
      description: 'text-center',
      body: 'w-full',
    }"
  >
    <template v-if="headlineFn" #headline>
      <component :is="headlineFn" />
    </template>

    <template v-if="titleFn" #title>
      <component :is="titleFn" />
    </template>

    <template v-if="descriptionFn" #description>
      <component :is="descriptionFn" />
    </template>

    <template v-for="(_, name) in forwardedSlots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps ?? {}" />
    </template>

    <template #body>
      <div class="mx-auto w-full max-w-3xl text-left">
        <UAccordion 
          :items="accordionItems" 
          type="multiple"
        />
      </div>
    </template>
  </UPageSection>
</template>

<script setup lang="ts">
import type { AccordionItem, PageSectionProps } from '@nuxt/ui'
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
  items: Faq[]
}>(), {
  headline: 'FAQ',
  title: 'Frequently Asked Questions',
})

const { sectionProps, headlineFn, titleFn, descriptionFn, forwardedSlots } = usePageSection(props, ['items'])

const accordionItems = computed<AccordionItem[]>(() => props.items)
</script>
