import { IOMDbAPIMovie } from "./movie";

export interface IOMDbAPIMoviesReponse {
  Search: IOMDbAPIMovie[];
  totalResults: string;
  Response: "True" | "False";
  Error: string;
}
