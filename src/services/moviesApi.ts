import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IOMDbAPIMovieDetailReponse } from "./types/movieDetailResponse";
import { IOMDbAPIMovieDetailRequest } from "./types/movieDetailRequest";
import { IOMDbAPIMoviesReponse } from "./types/moviesResponse";
import { IOMDbAPIMoviesRequest } from "./types/moviesRequest";
import { moviesApiBaseUrl } from "@/constants/api";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const filmApi = createApi({
  reducerPath: "filmApi",
  baseQuery: fetchBaseQuery({ baseUrl: moviesApiBaseUrl }),
  endpoints: (builder) => ({
    getMovies: builder.query<IOMDbAPIMoviesReponse, IOMDbAPIMoviesRequest>({
      query: ({ keyword, type, year, page }) => ({
        url: "",
        params: {
          apikey: apiKey,
          s: keyword,
          type: type,
          y: year,
          page: page.toString(),
        },
      }),
    }),

    //if you use client side page you can use getMovieDetails
    getMovieDetails: builder.query<
      IOMDbAPIMovieDetailReponse,
      IOMDbAPIMovieDetailRequest
    >({
      query: ({ id }) => ({
        url: "",
        params: {
          apikey: apiKey,
          i: id,
          plot: "full",
        },
      }),
    }),
  }),
});
export const { useGetMoviesQuery, useGetMovieDetailsQuery } = filmApi;

export const getMovieDetailsSSR = async (id: string) => {
  const regex = /"Response":\s*"False"/;
  const response = await fetch(
    `${moviesApiBaseUrl}?apikey=${apiKey}&i=${id}&plot=full`
  );

  if (!response.ok) {
    return undefined;
  }

  const textResponse = await response.text();
  if (regex.test(textResponse)) {
    return undefined;
  } else {
    return JSON.parse(textResponse);
  }
};
