<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { MovieListItem } from "@/types";
import { movieService, searchService } from "@/services";
import { Hero, MovieSection } from "./components";
import { useSearchStore } from "@/stores";
import { useRouter } from "vue-router";

const { setSearchResponse } = useSearchStore();
const { getNowPlayingMovies, getTopRatedMovies, getUpcomingMovies } =
  movieService();

const router = useRouter();

const { getSearch } = searchService();
type MovieLoad = {
  data: MovieListItem[];
  loading: boolean;
};
const nowPlaying = ref<MovieLoad>({ data: [], loading: false });
const topRated = ref<MovieLoad>({ data: [], loading: false });
const upcoming = ref<MovieLoad>({ data: [], loading: false });
const isSearchLoading = ref<boolean>(false);

async function searchMovie(query: string) {
  try {
    isSearchLoading.value = true;
    const response = await getSearch(query);
    setSearchResponse(response);
    router.push({ name: "search", query: { q: query } });
  } catch (e) {
    console.error("Home::searchMovie", e);
  } finally {
    isSearchLoading.value = false;
  }
}

async function fetchNowPlayingMovies() {
  try {
    nowPlaying.value.loading = true;
    const response = await getNowPlayingMovies();
    nowPlaying.value.data = response.results;
  } catch (e) {
    console.error("Home::fetchNowPlayingMovies", e);
  } finally {
    nowPlaying.value.loading = false;
  }
}
async function fetchTopRatedMovies() {
  try {
    topRated.value.loading = true;
    const response = await getTopRatedMovies();
    topRated.value.data = response.results;
  } catch (e) {
    console.error("Home::fetchTopRatedMovies", e);
  } finally {
    topRated.value.loading = false;
  }
}

async function fetchUpcomingMovies() {
  try {
    upcoming.value.loading = true;
    const response = await getUpcomingMovies();
    upcoming.value.data = response.results;
  } catch (e) {
    console.error("Home::fetchUpcomingMovies", e);
  } finally {
    upcoming.value.loading = false;
  }
}

function selectMovie(id: number) {
  router.push({ name: "movie", params: { id: id.toString() } });
}

onBeforeMount(async () => {
  fetchNowPlayingMovies();
  fetchTopRatedMovies();
  fetchUpcomingMovies();
});
</script>
<template>
  <Hero @search="searchMovie" :loading="isSearchLoading" />
  <div class="container mx-auto w-full px-10 py-10">
    <MovieSection
      :movies="nowPlaying.data"
      title="Em cartaz"
      :loading="nowPlaying.loading"
      @select-movie="selectMovie"
    />

    <MovieSection
      :movies="topRated.data"
      title="Mais votados"
      :loading="topRated.loading"
      @select-movie="selectMovie"
    />

    <MovieSection
      :movies="upcoming.data"
      title="Em breve"
      :loading="upcoming.loading"
      @select-movie="selectMovie"
    />
  </div>
</template>
