<template>
  <div
    v-if="submitted"
    class="flex flex-col items-center gap-3 rounded-xl bg-primary-soft p-8 text-center"
  >
    <UiIconTile icon="i-fa6-solid-check" variant="solid" />
    <div>
      <h4>Thanks — we'll be in touch.</h4>
      <p class="mt-1 text-sm text-muted">One of our specialists will call you shortly.</p>
    </div>
  </div>

  <UForm v-else :schema="schema" :state="state" class="grid grid-cols-1 gap-4" @submit="onSubmit">
    <div class="mb-2 text-center">
      <h4 class="text-xl">{{ props.title }}</h4>
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

    <slot name="bottom" />
  </UForm>
</template>

<script setup lang="ts">
import * as yup from 'yup'
import type { ButtonProps, FormSubmitEvent } from '@nuxt/ui'

const schema = yup.object({
  name: yup.string().required('Please enter your name'),
  phone: yup
    .string()
    .required('Please enter a phone number')
    .matches(/^[\d\s()+-]{8,}$/, 'Enter a valid phone number'),
  email: yup.string().required('Please enter your email').email('Enter a valid email'),
})

type Schema = yup.InferType<typeof schema>

export interface QuoteFormProps {
  title?: string
  description?: string
  button?: ButtonProps
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

const onSubmit = async (_event: FormSubmitEvent<Schema>) => {
  submitted.value = true
}
</script>
