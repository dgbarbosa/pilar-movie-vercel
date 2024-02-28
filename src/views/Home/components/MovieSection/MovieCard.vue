<script setup lang="ts">
import { MovieListItem } from "@/types";
import CircularProgress from "./CircularProgress.vue";

const emit = defineEmits<{
  (e: "selectMovie", id: number): void;
}>();

defineProps<{
  movie: MovieListItem;
}>();

function calculateVoteAverage(voteAvarage: number): number {
  return Math.round(voteAvarage * 10);
}
</script>
<template>
  <div
    class="group relative cursor-pointer"
    @click="emit('selectMovie', movie.id)"
  >
    <img
      :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
      class="h-72 w-auto rounded-lg object-fill"
    />
    <div
      class="absolute bottom-0 left-0 right-0 top-0 rounded-lg bg-zinc-800/60 duration-300 group-hover:bg-zinc-800/30"
    ></div>
    <div
      class="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full p-4 text-white duration-300 group-hover:bottom-4 group-hover:right-4 group-hover:scale-150"
    >
      <CircularProgress
        :percentage="calculateVoteAverage(movie.vote_average)"
      />
    </div>
  </div>
</template>
