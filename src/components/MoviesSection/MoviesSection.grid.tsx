import { CustomGridColDef, IMoviesSectionGrid } from "./MoviesSection.types";
import { currentYear, startYear } from "@/constants/year";
import {
  dateCellWidth,
  movieIdCellWidth,
  movieTypeCellWidth,
  posterCellWidth,
} from "@/constants/cellSizes";

import CustomDataGrid from "../CustomDataGrid/CustomDataGrid";
import { CustomDataGridOnlyEqualSelectFilter } from "../CustomDataGridFilters/CustomDataGridFilters.select";
import { CustomDataGridStringFilters } from "../CustomDataGridFilters/CustomDataGridFilters.string";
import { GridRenderCellParams } from "@mui/x-data-grid-pro";
import { IMovie } from "@/types/movie";
import { IOMDbAPIMovieType } from "@/services/types/movieType";
import { ImageCell } from "../CustomDataGridCells/CustomDataGridCells.image";
import { TextCell } from "../CustomDataGridCells/CustomDataGridCells.text";

export default function MovieSectionGrid({
  data,
  pagination,
  filter,
  search,
  onRowClick,
}: Readonly<IMoviesSectionGrid>) {
  const prepareColumns = (): CustomGridColDef<IMovie>[] => {
    return [
      {
        field: "poster",
        headerName: "Poster",
        minWidth: posterCellWidth,
        filterable: false,
        sortable: false,
        renderCell: (params: GridRenderCellParams<IMovie>) => {
          const src =
            params.row.image === "N/A" ? "/noImage.jpeg" : params.row.image;
          return <ImageCell src={src} alt={params.row.title} />;
        },
      },
      {
        field: "id",
        headerName: "IMDB ID",
        minWidth: movieIdCellWidth,
        filterable: false,
        sortable: false,
        renderCell: (params: GridRenderCellParams<IMovie>) => {
          return <TextCell>{params.row.id}</TextCell>;
        },
      },
      {
        field: "title",
        headerName: "Title",
        minWidth: 200,
        flex: 1,
        filterable: true,
        sortable: false,
        filterOperators: CustomDataGridStringFilters,
        renderCell: (params: GridRenderCellParams<IMovie>) => {
          return <TextCell>{params.row.title}</TextCell>;
        },
      },
      {
        field: "movieType",
        headerName: "Type",
        minWidth: movieTypeCellWidth,
        filterable: true,
        sortable: false,
        filterOperators: CustomDataGridOnlyEqualSelectFilter({
          id: "movieType",
          label: "Type",
          items: Object.entries(IOMDbAPIMovieType).map(([key, value]) => ({
            label: key,
            value: value,
          })),
        }),
        renderCell: (params: GridRenderCellParams<IMovie>) => {
          return <TextCell>{params.row.type}</TextCell>;
        },
      },
      {
        field: "year",
        headerName: "Year",
        minWidth: dateCellWidth,
        filterable: true,
        sortable: false,
        filterOperators: CustomDataGridOnlyEqualSelectFilter({
          id: "year",
          label: "Year",
          items: Array.from(
            { length: currentYear - startYear + 1 },
            (_, index) => {
              const year = startYear + index;
              return {
                label: `${year}`,
                value: `${year}`,
              };
            }
          ),
        }),
        renderCell: (params: GridRenderCellParams<IMovie>) => {
          return <TextCell>{params.row.year}</TextCell>;
        },
      },
    ];
  };

  return (
    <CustomDataGrid
      loading={data.isFetching || data.isLoading}
      rows={data.movies}
      prepareColumns={prepareColumns}
      pagination={pagination}
      filter={filter}
      search={search}
      onRowClick={onRowClick}
      error={data.error}
    />
  );
}
