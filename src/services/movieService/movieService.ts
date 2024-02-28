import { axiosFactory } from "@/plugins/HttpRequester/axiosFactory";
import { MoviesResponse } from "./types/MoviesResponse";
import { MovieResponse } from "./types/MovieResponse";
import { MovieCreditResponse } from "./types/MovieCreditResponse";

export function movieService() {
  const axios = axiosFactory();

  function getNowPlayingMovies(): Promise<MoviesResponse> {
    return axios.get<MoviesResponse>("/movie/now_playing", { language: "pt" });
  }

  function getTopRatedMovies(): Promise<MoviesResponse> {
    return axios.get<MoviesResponse>("/movie/top_rated", { language: "pt" });
  }

  function getUpcomingMovies(): Promise<MoviesResponse> {
    const currentDate = new Date()
    const day = currentDate.getDate() + 1
    const month = currentDate.getMonth() + 1
    const year = currentDate.getFullYear()
    
    return axios.get<MoviesResponse>("/movie/discover", { language: "pt", "primary_release_date.gte": `${year}-${month}-${day}` });
  }

  function getMovie(id: string): Promise<MovieResponse> {
    return axios.get<MovieResponse>(`/movie/${id}`, { language: "pt" });
  }

  function getMovieCredits(id: string): Promise<MovieCreditResponse> {
    return axios.get<MovieCreditResponse>(`/movie/${id}/credits`, {
      language: "pt",
    });
  }

  return {
    getNowPlayingMovies,
    getTopRatedMovies,
    getUpcomingMovies,
    getMovie,
    getMovieCredits,
  };
}
