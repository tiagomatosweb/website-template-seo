<script setup lang="ts">
const state = reactive({
  name: '',
  phone: '',
  email: '',
})

function onSubmit() {
  // PLACEHOLDER: wire up to a real endpoint / form service
}
</script>

<template>
  <UForm :state="state" class="grid gap-4" @submit="onSubmit">
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
