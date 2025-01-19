import { IOMDbAPIMovieType } from "./movieType";

export interface IOMDbAPIMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: IOMDbAPIMovieType;
  Poster: string;
}
