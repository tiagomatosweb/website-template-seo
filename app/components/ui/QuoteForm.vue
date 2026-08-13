<template>
  <UCard v-bind="props.card">
    <div
      v-if="submitted"
      class="flex flex-col items-center gap-3 rounded-xl py-8 text-center"
    >
      <UiIconTile icon="i-fa6-solid-check" variant="solid" />
      <div>
        <h2 class="heading-card">Thanks — we'll be in touch.</h2>
        <p class="mt-1 text-sm text-muted">One of our specialists will call you shortly.</p>
      </div>
    </div>

    <UForm v-else :schema="schema" :state="state" class="grid grid-cols-1 gap-4" @submit="onSubmit">
      <div class="mb-2 text-center">
        <h2 class="text-xl font-bold leading-snug">{{ props.title }}</h2>
        <p class="mt-2.5 text-sm leading-snug text-muted">{{ props.description }}</p>
      </div>

      <UFormField name="name" label="Name" required>
        <UInput v-model="state.name" type="text" name="name" autocomplete="name" placeholder="Jane Citizen" icon="i-fa6-solid-user" size="xl" />
      </UFormField>

      <UFormField name="phone" label="Phone" required>
        <UInput v-model="state.phone" type="tel" name="phone" autocomplete="tel" placeholder="0400 000 000" icon="i-fa6-solid-phone" size="xl" />
      </UFormField>

      <UFormField name="email" label="Email" required>
        <UInput v-model="state.email" type="email" name="email" autocomplete="email" placeholder="you@email.com" icon="i-fa6-solid-envelope" size="xl" />
      </UFormField>

      <UButton v-bind="buttonProps" />

      <UAlert v-if="error" color="error" variant="soft" icon="i-fa6-solid-circle-exclamation" :description="error" />

      <slot name="bottom" />
    </UForm>
  </UCard>
</template>

<script setup lang="ts">
import * as v from 'valibot'
import type { ButtonProps, CardProps, FormSubmitEvent } from '@nuxt/ui'

const schema = v.object({
  name: v.pipe(v.string('Please enter your name'), v.trim(), v.nonEmpty('Please enter your name')),
  phone: v.pipe(
    v.string('Please enter a phone number'),
    v.trim(),
    v.nonEmpty('Please enter a phone number'),
    v.regex(/^[\d\s()+-]{8,}$/, 'Enter a valid phone number'),
  ),
  email: v.pipe(
    v.string('Please enter your email'),
    v.trim(),
    v.nonEmpty('Please enter your email'),
    v.email('Enter a valid email'),
  ),
})

type Schema = v.InferOutput<typeof schema>

export interface QuoteFormProps {
  title?: string
  description?: string
  button?: ButtonProps
  card?: CardProps
}

const props = withDefaults(defineProps<QuoteFormProps>(), {
  title: 'Get Your Free Quote',
  description: 'Tell us what you need and one of our specialists will get in touch.',
})

const buttonProps = computed<ButtonProps>(() => ({
  type: 'submit',
  label: 'Request My Free Quote',
  color: 'cta',
  size: 'xl',
  loadingAuto: true,
  trailingIcon: 'i-fa6-solid-arrow-right',
  class: 'mt-1 w-full justify-center shadow-lg shadow-cta-500/40',
  ...props.button,
}))

const state = reactive<Partial<Schema>>({
  name: undefined,
  phone: undefined,
  email: undefined,
})

const submitted = ref(false)
const error = ref('')

const { site } = useAppConfig()

async function onSubmit({ data }: FormSubmitEvent<Schema>) {
  error.value = ''

  try {
    await $fetch(site.form_webhook, {
      method: 'POST',
      body: data,
    })
    submitted.value = true
  }
  catch {
    error.value = `Something went wrong. Please try again or call us on ${site.phone.display}.`
  }
}
</script>
