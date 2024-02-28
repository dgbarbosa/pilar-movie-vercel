<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps<{
  loading: boolean;
}>();

const emit = defineEmits<{
  (e: "search", query: string): void;
}>();

const searchQuery = ref<string>("");

function search() {
  const value = searchQuery.value;
  if (value) emit("search", searchQuery.value);
}

const buttonIcon = computed<string>(() => {
  console.log("WTF", props.loading);
  return props.loading ? "pr-spinner" : "md-search";
});
</script>

<template>
  <div
    class="bg-size-cover h-1/2 bg-cover bg-center bg-no-repeat"
    style="
      background-image: url(https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces/ley1eQzX6v2s7RyU6fKhE56SK1Q.jpg;);
    "
  >
    <div
      class="flex h-full w-full flex-col items-start justify-center bg-slate-900/70 px-8"
    >
      <h1 class="text-xl font-bold text-white md:text-4xl">Bem-Vindo(a).</h1>
      <h2 class="text-md mb-2 font-semibold text-white md:text-2xl">
        Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.
      </h2>
      <div class="flex w-full flex-col items-center md:flex-row">
        <input
          type="text"
          :disabled="loading"
          class="w-full rounded-md px-2 py-3"
          placeholder="Buscar por um Filme"
          v-model="searchQuery"
          @keypress.enter="search"
        />
        <button
          :disabled="loading"
          @click="search"
          class="group mt-4 flex cursor-pointer items-center justify-center self-center rounded-md border border-zinc-600 bg-zinc-900/85 px-3 py-3 hover:border-zinc-600/85 hover:bg-zinc-900/75 disabled:opacity-50 md:ml-3 md:mt-0"
        >
          <span
            class="text-md me-2 font-semibold text-white group-disabled:hidden"
            >Pesquisar</span
          >
          <v-icon
            :name="buttonIcon"
            scale="1.5"
            class="text-white group-disabled:animate-spin group-disabled:cursor-not-allowed"
          />
        </button>
      </div>
    </div>
  </div>
</template>
