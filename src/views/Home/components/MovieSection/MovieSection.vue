<script setup lang="ts">
import { MovieListItem } from "@/types";
import { Slide as SliderItem } from "vue3-carousel";
import { SliderCarousel, SliderCarouselLoading } from "@/components";
import MovieCard from "./MovieCard.vue";

const emit = defineEmits<{
  (e: "selectMovie", id: number): void;
}>();

defineProps<{
  movies: MovieListItem[];
  title: string;
  loading: boolean;
}>();
</script>
<template>
  <div class="mb-8">
    <SliderCarouselLoading v-if="loading" />

    <template v-else>
      <h1 class="mb-4 text-4xl font-bold">{{ title }}</h1>
      <SliderCarousel>
        <SliderItem v-for="movie in movies" :key="movie.id">
          <MovieCard
            :movie="movie"
            @select-movie="(id) => emit('selectMovie', id)"
          />
        </SliderItem>
      </SliderCarousel>
    </template>
  </div>
</template>

<!-- 192 288 -->
