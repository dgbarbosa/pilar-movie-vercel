import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjU5NTNhMjUyZTE3OWFkOTk4ZmU3ZDE5NDI1NjhhMCIsInN1YiI6IjY1ZGJmMWUyZjZmZDE4MDE3YzU3YzhiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ELsIer9BaIGhlAj0MPMJ375vrIMNcwWUelIS6ktnp6Q",
  },
});
