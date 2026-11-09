<template>
  <div>
    <section class="bg-route-band text-white">
      <UContainer class="pt-12 pb-32 sm:pt-16 sm:pb-40">
        <div class="mx-auto max-w-2xl">
          <h1 class="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Get ready for your trip
          </h1>
          <p class="mt-3 max-w-xl text-lg text-white/90">
            A little preparation goes a long way. Check off the essentials as you pack.
          </p>
        </div>
      </UContainer>
    </section>

    <UContainer class="-mt-24 pb-16 sm:-mt-28">
      <div class="mx-auto max-w-2xl">
        <TravelChecklist />

        <p class="mt-6 text-sm text-muted">
          A fictional workshop example. Your checklist resets when you reload this page.
        </p>
      </div>
    </UContainer>
  </div>
</template>
