<template>
  <div class="container mx-auto flex w-full flex-col gap-8 px-10 py-10">
    <div
      v-for="index in 3"
      :key="index"
      class="flex rounded-l-lg rounded-tr-xl border border-zinc-500/30"
    >
      <div
        class="h-52 w-32 animate-pulse rounded-l-lg bg-zinc-500 duration-300"
      ></div>

      <div class="flex flex-grow flex-col px-4 py-3">
        <div class="h-full w-full">
          <div class="h-2 w-2/3 animate-pulse bg-zinc-500"></div>
          <div class="mt-2 h-2 w-1/3 animate-pulse bg-zinc-500"></div>
        </div>
        <div class="flex flex-grow flex-col justify-end">
          <div class="mb-2 h-2 w-full animate-pulse bg-zinc-500"></div>
          <div class="mb-2 h-2 w-full animate-pulse bg-zinc-500"></div>
          <div class="mb-2 h-2 w-4/6 animate-pulse bg-zinc-500"></div>
        </div>
      </div>
    </div>
  </div>
</template>
