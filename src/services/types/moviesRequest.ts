import { IOMDbAPIMovieType } from "./movieType";

export interface IOMDbAPIMoviesRequest extends IOMDbAPIMoviesRequestForFilters {
  page: number;
}

export interface IOMDbAPIMoviesRequestForFilters {
  keyword?: string;
  type?: IOMDbAPIMovieType;
  year?: string;
}
export type IOMDbAPIMoviesRequestForFiltersValues =
  | IOMDbAPIMovieType
  | string
  | undefined;
