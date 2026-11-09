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
    class="
      rounded-md border border-mist bg-white p-6
      shadow-[0_12px_32px_-16px_rgb(55_9_32/0.45)]
      sm:p-8
    "
  >
    <div class="flex flex-wrap items-baseline justify-between gap-2">
      <h2
        id="checklist-heading"
        class="text-xl font-bold"
      >
        Your essentials
      </h2>
      <p
        aria-live="polite"
        class="text-sm font-semibold text-primary"
      >
        {{ packedCount }} of {{ items.length }} packed
      </p>
    </div>
    <progress
      class="mt-4 h-2.5 w-full accent-primary"
      :value="packedCount"
      :max="items.length"
      aria-label="Packing progress"
    />
    <ul class="mt-6 divide-y divide-mist">
      <li
        v-for="item in items"
        :key="item.label"
      >
        <label
          class="
            -mx-2 flex cursor-pointer items-center gap-3 rounded-sm px-2 py-4
            hover:bg-magenta-50
          "
        >
          <input
            v-model="item.packed"
            type="checkbox"
            class="
              size-5 accent-primary
              focus-visible:focus-ring-ew
            "
          >
          <span>{{ item.label }}</span>
        </label>
      </li>
    </ul>
  </section>
</template>
