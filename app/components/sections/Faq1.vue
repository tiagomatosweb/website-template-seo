<template>
  <UPageSection
    id="faq"
    :headline="props.headline"
    :title="props.title"
    :description="props.description"
    :ui="{
      headline: 'justify-center',
      title: 'text-center',
      description: 'text-center',
      body: 'w-full',
    }"
  >
    <div class="mx-auto w-full max-w-3xl text-left">
      <UAccordion :items="accordionItems" type="multiple" />
    </div>
  </UPageSection>
</template>

<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

// Shared so a page can emit matching FAQPage JSON-LD schema from the same data.
export interface Faq {
  label: string
  content: string
}

const props = withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  items?: Faq[]
}>(), {
  headline: 'FAQ',
  title: 'Frequently Asked Questions',
  items: () => [
    {
      label: 'How quickly can you repair my hot water system?',
      content: 'In most cases we offer same-day service. Call us early and we will do everything we can to have hot water back on the same day, often within a couple of hours for emergencies.',
    },
    {
      label: 'Do you charge a call-out fee?',
      content: 'No. We do not charge a call-out fee. You only pay for the work we do, and we give you an upfront quote before we start.',
    },
    {
      label: 'Should I repair or replace my hot water system?',
      content: 'It depends on the age and condition of your unit. If it is more than 10 years old or the tank is leaking, replacement is usually the better value. For most other faults a repair will get you going again. We will give you an honest recommendation either way.',
    },
    {
      label: 'What hot water brands do you service?',
      content: 'We service all major brands including Rheem, Rinnai, Dux, Bosch, Vulcan, Aquamax, Everhot and Stiebel Eltron — across gas, electric, heat pump, solar and continuous flow systems.',
    },
    {
      label: 'Do you service the Wollongong area?',
      content: 'Yes. We cover Wollongong and the surrounding suburbs. Call us to confirm coverage for your exact location.',
    },
    {
      label: 'What does your no fix, no pay guarantee mean?',
      content: 'If we cannot fix the problem, you do not pay for the labour. It is our way of making sure you only pay when we deliver a result.',
    },
    {
      label: 'How much does an emergency hot water repair cost?',
      content: 'Cost depends on the fault and the parts required, but we always provide an upfront quote before any work begins — so there are no surprises on the final bill.',
    },
  ],
})

const accordionItems = computed<AccordionItem[]>(() => props.items)
</script>
