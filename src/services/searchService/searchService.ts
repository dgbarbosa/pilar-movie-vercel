import { axiosFactory } from "@/plugins/HttpRequester/axiosFactory";
import { SearchResponse } from "./types/SearchResponse";

export function searchService() {
  const axios = axiosFactory();

  function getSearch(query: string, page: number = 1): Promise<SearchResponse> {
    return axios.get<SearchResponse>("/search/movie", {
      language: "pt",
      include_adult: false,
      page,
      query,
    });
  }

  return {
    getSearch,
  };
}
