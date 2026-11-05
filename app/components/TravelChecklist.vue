<script setup lang="ts">
import { computed, ref } from 'vue'

const items = ref([
  { label: 'Travel documents', packed: false },
  { label: 'Phone charger', packed: false },
  { label: 'Medication', packed: false },
  { label: 'Clothes', packed: false }
])

const packedCount = computed(() => items.value.filter(item => item.packed).length)
</script>

<template>
  <section
    aria-labelledby="checklist-heading"
    class="rounded-xl border border-default bg-default p-6 shadow-sm sm:p-8"
  >
    <div class="flex flex-wrap items-baseline justify-between gap-2">
      <h2
        id="checklist-heading"
        class="text-xl font-semibold"
      >
        Your essentials
      </h2>
      <p
        aria-live="polite"
        class="text-sm text-muted"
      >
        {{ packedCount }} of {{ items.length }} packed
      </p>
    </div>
    <progress
      class="mt-4 h-2 w-full accent-primary"
      :value="packedCount"
      :max="items.length"
      aria-label="Packing progress"
    />
    <ul class="mt-6 divide-y divide-default">
      <li
        v-for="item in items"
        :key="item.label"
      >
        <label class="flex cursor-pointer items-center gap-3 py-4">
          <input
            v-model="item.packed"
            type="checkbox"
            class="size-5 accent-primary"
          >
          <span>{{ item.label }}</span>
        </label>
      </li>
    </ul>
  </section>
</template>
