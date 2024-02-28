<template>
  <div
    class="grid max-h-72 grid-cols-2 gap-5 overflow-hidden md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
  >
    <div
      v-for="index in 6"
      :key="index"
      class="h-72 w-full animate-pulse rounded-lg bg-zinc-600"
    />
  </div>
</template>
