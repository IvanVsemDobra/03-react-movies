import type { AxiosResponse } from "axios";
import type { Movie } from "../types/Movie";
import { api } from "./api";

interface FetchMoviesResponse {
  results: Movie[];
  total_results: number;
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response: AxiosResponse<FetchMoviesResponse> = await api.get(
    "/search/movie",
    {
      params: {
        query,
        include_adult: false,
        language: "en-US",
        page: 1,
      },
    }
  );

  return response.data.results;
};
