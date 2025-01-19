/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
  IOMDbAPIMoviesRequest,
  IOMDbAPIMoviesRequestForFilters,
} from "@/services/types/moviesRequest";
import { useCallback, useEffect, useMemo, useState } from "react";

import { GridFilterModel } from "@mui/x-data-grid-pro";
import { IMovie } from "@/types/movie";
import { LicenseInfo } from "@mui/x-license";
import { MoviesGridColumnFieldNames } from "@/components/MoviesSection/MoviesSection.types";
import MoviesSection from "@/components/MoviesSection/MoviesSection";
import { convertOMDbAPIMoviesResponseToGridMoviesData } from "@/services/mappers/moviesMapper";
import { defaultSearchKeyword } from "@/constants/dafeults";
import isEqual from "lodash.isequal";
import { prepareMovieTitleSlug } from "@/utils/slugify";
import { useGetMoviesQuery } from "@/services/moviesApi";
import { useRouter } from "next/navigation";

LicenseInfo.setLicenseKey(process.env.MUI_DATAGRID_PRO_KEY ?? "");
export default function Movies() {
  const router = useRouter();

  const [request, setRequest] = useState<IOMDbAPIMoviesRequest>({
    keyword: defaultSearchKeyword,
    page: 1,
    type: undefined,
    year: undefined,
  });

  const { data, error, isLoading, isFetching, refetch } =
    useGetMoviesQuery(request);

  useEffect(() => {
    refetch();
  }, [request]);

  const prepareNewFilter = useCallback(
    (
      model: GridFilterModel,
      newFilters: IOMDbAPIMoviesRequestForFilters,
      filterModelFieldName: MoviesGridColumnFieldNames,
      requestFieldName: keyof IOMDbAPIMoviesRequestForFilters,
      useDefaultValue?: boolean
    ) => {
      const filter = model.items.find((f) => f.field === filterModelFieldName);
      let value: any;
      if (filter && filter.value) {
        value = filter.value;
      } else {
        if (useDefaultValue) value = request[requestFieldName] ?? undefined;
        else value = undefined;
      }

      newFilters[requestFieldName] = value;
    },
    [request]
  );

  const handleFilterModelChange = useCallback(
    (model: GridFilterModel) => {
      const newFilters: IOMDbAPIMoviesRequest = { ...request, page: 1 };
      prepareNewFilter(model, newFilters, "title", "keyword", true);
      prepareNewFilter(model, newFilters, "year", "year");
      prepareNewFilter(model, newFilters, "movieType", "type");
      if (!isEqual(request, newFilters)) setRequest(newFilters);
    },
    [request]
  );

  const handleKeywordChange = useCallback((keyword: string) => {
    setRequest((old) => ({
      ...old,
      keyword: keyword,
    }));
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setRequest((old) => ({
      ...old,
      page: page + 1,
    }));
  }, []);

  const handleRowClick = useCallback((selectedMovie: IMovie) => {
    router.push(
      `/movie/${prepareMovieTitleSlug(selectedMovie.title)}/${selectedMovie.id}`
    );
  }, []);

  const gridProps = useMemo(() => {
    const movieSectionData = convertOMDbAPIMoviesResponseToGridMoviesData(
      isFetching,
      isLoading,
      data
    );

    return {
      data: movieSectionData,
      pagination: {
        paginationModel: {
          pageSize: 10,
          page: request.page - 1,
        },
        totalRowCount: movieSectionData.totalResults,
        onPageChanged: handlePageChange,
      },
      search: {
        initialKeyword: request.keyword,
        onSearchKeywordChange: handleKeywordChange,
      },
      filter: {
        onFilterModelChange: handleFilterModelChange,
      },
      onRowClick: handleRowClick,
    };
  }, [request, data, error, isLoading, isFetching]);

  return <MoviesSection grid={gridProps} />;
}
