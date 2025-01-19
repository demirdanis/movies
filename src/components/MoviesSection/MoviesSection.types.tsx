import { GridColDef, GridValidRowModel } from "@mui/x-data-grid-pro";

import { ICustomDataGridXFeatures } from "../CustomDataGrid/CustomDataGrid.types";
import { IMovie } from "@/types/movie";

export interface IMoviesSection {
  grid: IMoviesSectionGrid;
}

export interface IMoviesSectionGrid extends ICustomDataGridXFeatures {
  data: IMoviesSectionData;
  onRowClick?: (selectedMovie: IMovie) => void;
}

export interface IMoviesSectionData {
  movies?: IMovie[];
  error?: string;
  isLoading: boolean;
  isFetching: boolean;
  totalResults: number;
}

export type CustomGridColDef<T extends GridValidRowModel> = Omit<
  GridColDef<T>,
  "field"
> & {
  field: MoviesGridColumnFieldNames;
};

export type MoviesGridColumnFieldNames =
  | "poster"
  | "title"
  | "movieType"
  | "year"
  | "id";
