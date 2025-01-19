import {
  GridColDef,
  GridFilterModel,
  GridPaginationModel,
  GridValidRowModel,
} from "@mui/x-data-grid-pro";

import { ICustomDataGridQuickSearchToolBox } from "../CustomDataGridQuickSearchToolBox/CustomDataGridQuickSearchToolBox.types";

export interface ICustomDataGridProps<TData extends GridValidRowModel>
  extends ICustomDataGridXFeatures {
  loading: boolean;
  rows?: TData[];
  error?: string;
  onRowClick?: (selectedMovie: TData) => void;
  prepareColumns: () => GridColDef<TData>[];
}

export interface ICustomDataGridXFeatures {
  search?: ICustomDataGridQuickSearchToolBox;
  pagination?: ICustomGridPagination;
  filter?: ICustomGridFilter;
}

export interface ICustomGridPagination {
  totalRowCount: number;
  paginationModel: GridPaginationModel;
  onPageChanged?: (page: number) => void;
}

export interface ICustomGridFilter {
  defaultFilterModel?: GridFilterModel;
  onFilterModelChange?: (model: GridFilterModel) => void;
}
