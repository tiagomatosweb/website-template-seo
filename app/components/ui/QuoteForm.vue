<script setup lang="ts">
import * as yup from 'yup'
import type { FormSubmitEvent } from '@nuxt/ui'

// Validation schema (yup). UForm validates against this on submit and surfaces
// each error in the UFormField with the matching `name`.
const schema = yup.object({
  name: yup.string().required('Please enter your name'),
  phone: yup
    .string()
    .required('Please enter a phone number')
    .matches(/^[\d\s()+-]{8,}$/, 'Enter a valid phone number'),
  email: yup.string().required('Please enter your email').email('Enter a valid email'),
})

type Schema = yup.InferType<typeof schema>

const props = withDefaults(defineProps<{
  title?: string
  subtitle?: string
}>(), {
  title: 'Get Your Free Quote',
  subtitle: 'Tell us what you need and one of our specialists will get in touch.',
})

const state = reactive<Partial<Schema>>({
  name: undefined,
  phone: undefined,
  email: undefined,
})

const submitted = ref(false)

async function onSubmit(_event: FormSubmitEvent<Schema>) {
  // PLACEHOLDER: wire `_event.data` (validated) up to a real endpoint / form service.
  submitted.value = true
}
</script>

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

  <UForm v-else :schema="schema" :state="state" class="grid gap-4" @submit="onSubmit">
    <div class="mb-2 text-center">
      <h4 class="text-xl">{{ props.title }}</h4>
      <p class="mt-2.5 text-sm leading-snug text-muted">{{ props.subtitle }}</p>
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

    <UButton type="submit" label="Request My Free Quote" color="cta" size="xl" trailing-icon="i-fa6-solid-arrow-right" class="mt-1 w-full justify-center shadow-lg shadow-cta-500/40" />
  </UForm>
</template>
