<script setup lang="ts">
import { computed, ref } from 'vue'

const items = ref([
  { label: 'Travel documents', packed: false },
  { label: 'Phone charger', packed: false },
  { label: 'Medication', packed: false },
  { label: 'Clothes', packed: false }
])
const newItemLabel = ref('')
const addItemError = ref('')

const packedCount = computed(() => items.value.filter(item => item.packed).length)

function addItem() {
  const label = newItemLabel.value.trim()
  if (!label) {
    addItemError.value = 'Enter an item.'
    return
  }

  if (items.value.some(item => item.label.toLowerCase() === label.toLowerCase())) {
    addItemError.value = 'This item is already on your checklist.'
    return
  }

  items.value.push({ label, packed: false })
  newItemLabel.value = ''
  addItemError.value = ''
}
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
          <span class="min-w-0 break-words">{{ item.label }}</span>
        </label>
      </li>
    </ul>
    <form
      class="mt-6 border-t border-mist pt-6"
      @submit.prevent="addItem"
    >
      <label
        for="personal-item"
        class="block text-sm font-semibold"
      >
        Add a personal item
      </label>
      <div class="mt-2 flex gap-2">
        <input
          id="personal-item"
          v-model="newItemLabel"
          type="text"
          :aria-invalid="Boolean(addItemError)"
          :aria-describedby="addItemError ? 'personal-item-error' : undefined"
          class="min-w-0 flex-1 rounded-md border border-mist px-3 py-2 focus-visible:focus-ring-ew"
        >
        <button
          type="submit"
          class="rounded-md bg-primary px-4 py-2 font-semibold text-white hover:bg-primary/90 focus-visible:focus-ring-ew"
        >
          Add
        </button>
      </div>
      <p
        v-if="addItemError"
        id="personal-item-error"
        role="alert"
        class="mt-2 text-sm text-red-700"
      >
        {{ addItemError }}
      </p>
    </form>
  </section>
</template>
