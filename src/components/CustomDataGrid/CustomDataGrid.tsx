/* eslint-disable react-hooks/exhaustive-deps */
import {
  GridFilterModel,
  GridPaginationModel,
  GridValidRowModel,
} from "@mui/x-data-grid-pro";
import { useCallback, useEffect, useState } from "react";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CustomDataGridFilterPanel from "../CustomDataGridFilterPanel/CustomDataGridFilterPanel";
import CustomDataGridNoRowsOverlay from "../CustomDataGridNoRowsOverlay/CustomDataGridNoRowsOverlay";
import CustomDataGridToolBox from "../CustomDataGridToolBox/CustomDataGridToolBox";
import { DataGridPro } from "@mui/x-data-grid-pro";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ICustomDataGridProps } from "./CustomDataGrid.types";
import debounce from "lodash.debounce";

export default function CustomDataGrid<TData extends GridValidRowModel>({
  rows,
  search,
  pagination,
  filter,
  loading,
  error,
  onRowClick,
  prepareColumns,
}: Readonly<ICustomDataGridProps<TData>>) {
  const [filterModel, setFilterModel] = useState<GridFilterModel>();

  useEffect(() => {
    if (filter?.defaultFilterModel) {
      setFilterModel(filter?.defaultFilterModel);
    }
  }, [filter?.defaultFilterModel]);

  const handleFilterModelChange = debounce(
    (newFilterModel: GridFilterModel) => {
      filter?.onFilterModelChange?.(newFilterModel);
      setFilterModel(newFilterModel);
    },
    500
  );

  const handlePaginationModelChange = useCallback(
    (model: GridPaginationModel) => {
      pagination?.onPageChanged?.(model.page);
    },
    []
  );

  return (
    <DataGridPro
      sx={{
        width: "100%",
      }}
      rows={rows ?? []}
      columns={prepareColumns()}
      rowSelection={false}
      disableColumnSelector={false}
      disableDensitySelector={false}
      disableColumnFilter={filter ? false : true}
      disableColumnMenu={true}
      disableRowSelectionOnClick={true}
      disableColumnResize={true}
      autoHeight
      getRowId={(row) => row.id}
      getRowHeight={() => "auto"}
      loading={loading ?? undefined}
      filterDebounceMs={1000}
      filterModel={filter ? filterModel : undefined}
      onFilterModelChange={filter ? handleFilterModelChange : undefined}
      filterMode="server"
      paginationMode={pagination ? "server" : undefined}
      pagination={pagination ? true : undefined}
      paginationModel={pagination?.paginationModel ?? undefined}
      rowCount={pagination?.totalRowCount ?? undefined}
      pageSizeOptions={pagination ? [10, 50, 100] : undefined}
      slots={{
        toolbar: () => (
          <CustomDataGridToolBox
            search={{
              ...search,
            }}
          />
        ),
        filterPanel: CustomDataGridFilterPanel,
        detailPanelCollapseIcon: ExpandMoreIcon,
        detailPanelExpandIcon: ChevronRightIcon,
        noRowsOverlay: () => <CustomDataGridNoRowsOverlay error={error} />,
      }}
      onRowClick={(data) => {
        onRowClick?.(data.row);
      }}
      onPaginationModelChange={
        pagination ? handlePaginationModelChange : undefined
      }
    />
  );
}
