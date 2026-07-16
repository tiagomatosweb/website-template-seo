<template>
  <UApp>
    <UMain>
      <NuxtPage />
    </UMain>
    <UiDevMenu />
  </UApp>
</template>

<script setup lang="ts">
const { site } = useAppConfig()
const { siteUrl } = useCanonical()

const ogImage = `${siteUrl}/og-image.jpg` // PLACEHOLDER: add a 1200x630 image at public/og-image.jpg per site

useHead({
  htmlAttrs: { lang: 'en' },
  titleTemplate: title => (title ? `${title} · ${site.name}` : site.name),
})

useSeoMeta({
  ogSiteName: site.name,
  ogLocale: 'en',
  ogImage,
  twitterCard: 'summary_large_image',
  twitterImage: ogImage,
})
</script>
