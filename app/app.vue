<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' }
})

useSeoMeta({
  title: 'Travel checklist',
  description: 'A fictional travel checklist for an AI workshop.'
})
</script>

<template>
  <UApp>
    <header class="border-b border-default">
      <UContainer class="py-4">
        <NuxtLink
          to="/"
          class="font-semibold"
        >
          Travel ready
        </NuxtLink>
      </UContainer>
    </header>
    <main>
      <NuxtPage />
    </main>
  </UApp>
</template>
