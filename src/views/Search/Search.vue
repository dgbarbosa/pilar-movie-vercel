<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { useSearchStore } from "@/stores";
import { searchService } from "@/services";
import { useRoute, useRouter } from "vue-router";
import NoData from "./NoData.vue";
import Loaded from "./Loaded.vue";
import Loading from "./Loading.vue";

const { getSearch } = searchService();
const searchStore = useSearchStore();

const searchQuery = ref<string>("");

const isSearchLoading = ref<boolean>(false);

const router = useRouter();
const route = useRoute();

onBeforeMount(() => {
  if (route.query.q) {
    searchQuery.value = route.query.q as string;
    searchMovie();
  }
});

async function searchMovie() {
  try {
    isSearchLoading.value = true;
    const response = await getSearch(searchQuery.value);
    searchStore.setSearchResponse(response);
    router.replace({ query: { q: searchQuery.value } });
  } catch (e) {
    console.error("Home::searchMovie", e);
  } finally {
    isSearchLoading.value = false;
  }
}
</script>
<template>
  <div class="flex h-full flex-grow flex-col">
    <input
      type="text"
      class="w-full rounded-md border-b-2 px-2 py-3"
      placeholder="Buscar por um Filme"
      v-model="searchQuery"
      @keypress.enter="searchMovie"
    />

    <Loading v-if="isSearchLoading" />
    <Loaded
      v-else-if="searchStore.movies.length"
      :movies="searchStore.movies"
    />
    <NoData v-else />
  </div>
</template>
