import { IMovie } from "@/types/movie";
import { IMoviesSectionData } from "@/components/MoviesSection/MoviesSection.types";
import { IOMDbAPIMoviesReponse } from "../types/moviesResponse";
import { MovieTypeMapper } from "../types/movieType";
import { forceParseStringToNumer } from "@/utils/number.util";

export const convertOMDbAPIMoviesResponseToGridMoviesData = (
  isFetching: boolean,
  isLoading: boolean,
  response?: IOMDbAPIMoviesReponse
): IMoviesSectionData => {
  return {
    error: response?.Response === "False" ? response?.Error : undefined,
    isFetching,
    isLoading,
    totalResults: forceParseStringToNumer(response?.totalResults),
    movies: response?.Search?.map((movie) => {
      const data: IMovie = {
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        type: MovieTypeMapper[movie.Type],
        image: movie.Poster,
      };

      return data;
    }),
  };
};
