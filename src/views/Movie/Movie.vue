<script setup lang="ts">
import { onBeforeMount, ref, computed } from "vue";
import { Slide as SliderItem } from "vue3-carousel";
import { movieService } from "@/services";
import { Movie, Genre } from "@/types";
import { formatDate, formatMinutes } from "@/utils";
import { useRoute } from "vue-router";
import CircularProgress from "../Home/components/MovieSection/CircularProgress.vue";
import { MovieCreditResponse } from "@/services/movieService/types/MovieCreditResponse";
import { SliderCarousel } from "@/components";

const { getMovie, getMovieCredits } = movieService();

const movieLoad = ref<{ data?: Movie; loading: boolean }>({ loading: true });
const creditLoad = ref<{ data?: MovieCreditResponse; loading: boolean }>({
  loading: true,
});

const movie = computed<Movie | undefined>(() => movieLoad.value.data);

const route = useRoute();

function mapGenres(genres: Genre[]) {
  return genres.map((genre) => genre.name).join(", ");
}

function releaseYear(date: string) {
  return new Date(date).getFullYear();
}

async function fetchMovie(id: string) {
  try {
    movieLoad.value.loading = true;
    const response = await getMovie(id);
    movieLoad.value.data = response;
  } catch {
    console.error("Movie::fetchMovie");
  } finally {
    movieLoad.value.loading = false;
  }
}

async function fetchCredits(id: string) {
  try {
    creditLoad.value.loading = true;
    const response = await getMovieCredits(id);
    creditLoad.value.data = response;
  } catch {
    console.error("Movie::fetchCredits");
  } finally {
    creditLoad.value.loading = false;
  }
}

onBeforeMount(async () => {
  const movieId = route.params.id as string;
  fetchCredits(movieId);
  fetchMovie(movieId);
});
</script>
<template>
  <div v-if="movie && !movieLoad.loading" class="xpto123 h-full text-white">
    <div
      class="min-h-1/2 relative flex w-full flex-col rounded-b-2xl bg-cover bg-top"
      :style="`background-image: url(https://image.tmdb.org/t/p/original${movie.backdrop_path});`"
    >
      <div
        class="flex h-full w-full flex-col items-start overflow-hidden rounded-b-2xl bg-slate-800/85 p-4 backdrop-blur-sm"
      >
        <div class="block md:hidden">
          <div class="mb-1 flex w-full items-center">
            <p class="text-2xl font-semibold text-white">{{ movie.title }}</p>
            <p class="ml-2 text-xl font-light text-gray-300">
              ({{ releaseYear(movie.release_date) }})
            </p>
          </div>
          <div class="flex">
            <div class="mr-2">{{ formatDate(movie.release_date) }} &#149;</div>

            <div class="mr-2">{{ mapGenres(movie.genres) }} &#149;</div>
            <div>{{ formatMinutes(movie.runtime) }}</div>
          </div>
        </div>

        <div class="my-2 flex flex-grow flex-col justify-around md:flex-col">
          <div class="flex items-start md:items-center">
            <img
              class="mr-4 hidden max-h-96 w-auto rounded-xl md:block"
              :src="`https://image.tmdb.org/t/p/w300${movie.poster_path})`"
              alt=""
            />
            <div>
              <div class="hidden md:block">
                <div class="mb-1 flex w-full items-center">
                  <p class="text-2xl font-semibold text-white">
                    {{ movie.title }}
                  </p>
                  <p class="ml-2 text-xl font-light text-gray-300">
                    ({{ releaseYear(movie.release_date) }})
                  </p>
                </div>
                <div class="flex">
                  <div class="mr-2">
                    {{ formatDate(movie.release_date) }} &#149;
                  </div>

                  <div class="mr-2">{{ mapGenres(movie.genres) }} &#149;</div>
                  <div>{{ formatMinutes(movie.runtime) }}</div>
                </div>
              </div>
              <div class="flex items-center md:mt-4">
                <CircularProgress
                  :percentage="Math.round(movie.vote_average * 10)"
                  size="medium"
                />
                <p
                  class="ms-2 text-xl font-bold md:max-w-24 md:text-lg md:font-semibold md:leading-5"
                >
                  Avaliação dos usuários
                </p>
              </div>
            </div>
          </div>

          <div class="mt-4 flex items-center justify-center">
            <p class="font-semibold">{{ movie.overview }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="creditLoad.data && !creditLoad.loading" class="pb-8 pt-4">
      <h2 class="mb-4 ml-3 text-2xl font-bold text-zinc-800">Elenco</h2>
      <SliderCarousel>
        <template v-for="credit in creditLoad.data.cast">
          <SliderItem :key="credit.id" v-if="credit.profile_path">
            <div class="rounded-t-xl border">
              <img
                :src="`https://image.tmdb.org/t/p/w300${credit.profile_path}`"
                class="h-72 w-auto rounded-t-lg object-fill"
              />

              <div class="p-2">
                <div
                  class="text-md text-ellipsis text-start font-semibold text-zinc-900"
                >
                  {{ credit.character }}
                </div>

                <div
                  class="text-ellipsis text-start text-xs font-semibold text-zinc-900"
                >
                  {{ credit.name }}
                </div>
              </div>
            </div>
          </SliderItem>
        </template>
      </SliderCarousel>
    </div>
  </div>
</template>
