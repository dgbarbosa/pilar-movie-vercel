<script setup lang="ts">
import { MovieListItem } from "@/types";
import { formatDate } from "@/utils";
import { useRouter } from "vue-router";

defineProps<{ movies: MovieListItem[] }>();

const router = useRouter();

function redirectToMovie(movieId: number) {
  router.push({ name: "movie", params: { id: movieId } });
}
function buildMovieRoutePath(movieId: number) {
  return router.resolve({ name: "movie", params: { id: movieId.toString() } })
    .href;
}
</script>
<template>
  <div
    class="container mx-auto flex w-full flex-col gap-8 px-10 py-10"
    v-if="movies.length"
  >
    <div
      v-for="movie in movies"
      :key="movie.id"
      class="flex rounded-l-lg rounded-tr-xl border border-zinc-500/30"
    >
      <img
        @click="redirectToMovie(movie.id)"
        :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
        class="h-auto w-32 cursor-pointer rounded-l-lg duration-300 hover:opacity-80"
      />
      <div class="flex flex-col px-4 py-3">
        <div>
          <a
            :href="buildMovieRoutePath(movie.id)"
            class="text-xl font-bold text-zinc-900 hover:cursor-pointer hover:text-zinc-600 hover:underline"
            >{{ movie.title }}</a
          >
          <p class="text-md font-semibold text-zinc-400">
            {{ formatDate(movie.release_date) }}
          </p>
        </div>
        <div class="flex flex-grow flex-col justify-end">
          <p class="line-clamp-3">
            {{ movie.overview }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
