import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { MovieListItem } from "@/types";
import { SearchResponse } from "@/services/searchService/types";

export const useSearchStore = defineStore("search", () => {
  const searchResponse = ref<SearchResponse>();
  const pagination = ref<{
    page: number;
    totalPages: number;
    totalResults: number;
  }>({
    page: 1,
    totalPages: 0,
    totalResults: 0,
  });

  const movies = computed<MovieListItem[]>(
    () =>
      searchResponse.value?.results.filter(
        (movie) => movie.release_date && movie.poster_path && movie.title,
      ) || [],
  );

  function setSearchResponse(response: SearchResponse) {
    searchResponse.value = response;
    pagination.value = {
      page: response.page,
      totalPages: response.total_pages,
      totalResults: response.total_results,
    };
  }

  function setPage(page: number) {
    pagination.value.page = page;
  }

  return { setSearchResponse, setPage, movies, pagination };
});
