<template>
  <UPageSection
    id="faq"
    orientation="horizontal"
    :headline="props.headline"
    :title="props.title"
    :description="props.description"
    :ui="{
      root: 'bg-muted',
      container: 'lg:items-start',
    }"
  >
    <template #description>
      <p class="max-w-md text-toned">{{ props.description }}</p>

      <UPageCard
        class="mt-8"
        :title="props.ctaTitle"
        :description="props.ctaDescription"
      >
        <template #footer>
          <UButton
            :label="`Call  ${site.phone.display}`"
            :to="site.phone.href"
            icon="i-fa6-solid-phone"
            color="primary"
            variant="outline"
            size="lg"
          />
        </template>
      </UPageCard>
    </template>

    <!-- Carded accordion: each item is a Card-role surface, overriding the
         default divider-list look. trigger/body inherit from the accordion config. -->
    <UAccordion
      :items="accordionItems"
      type="multiple"
      :default-value="['0']"
      :ui="{
        root: 'w-full space-y-4',
        item: 'rounded-xl bg-default ring ring-default px-5 sm:px-6 border-0',
      }"
    />
  </UPageSection>
</template>

<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'
import type { Faq } from './Faq1.vue'

const { site } = useAppConfig()

const props = withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  ctaTitle?: string
  ctaDescription?: string
  items?: Faq[]
}>(), {
  headline: 'FAQ',
  title: 'Frequently Asked Questions',
  description: 'Everything local homeowners ask before booking — answered.',
  ctaTitle: 'Still have questions?',
  ctaDescription: 'Talk to a local specialist — no pressure, no obligation.',
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
  ],
})

const accordionItems = computed<AccordionItem[]>(() => props.items)
</script>
