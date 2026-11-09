<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' }
})

useSeoMeta({
  title: 'Travel checklist',
  description: 'A fictional travel checklist for an AI workshop.',
  themeColor: '#AF1E65'
})
</script>

<template>
  <UApp>
    <header class="bg-white">
      <UContainer class="flex items-center justify-between py-4">
        <NuxtLink
          to="/"
          class="
            rounded-sm text-lg font-bold text-primary
            focus-visible:focus-ring-ew
          "
        >
          Travel ready
        </NuxtLink>
        <span class="text-sm text-muted">Workshop demo</span>
      </UContainer>
    </header>
    <main>
      <NuxtPage />
    </main>
  </UApp>
</template>
