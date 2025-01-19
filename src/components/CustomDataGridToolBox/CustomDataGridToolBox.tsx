import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarFilterButton,
} from "@mui/x-data-grid-pro";

import CustomDataGridQuickSearchToolBox from "../CustomDataGridQuickSearchToolBox/CustomDataGridQuickSearchToolBox";
import { ICustomDataGridToolBox } from "./CustomDataGridToolBox.types";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack } from "@mui/material";

export default function CustomDataGridToolBox({
  search,
}: Readonly<ICustomDataGridToolBox>) {
  return (
    <GridToolbarContainer
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Stack direction={"row"} alignItems={"center"} gap={2}>
        <GridToolbarColumnsButton
          slotProps={{
            button: {
              variant: "text",
              sx: { backgroundColor: "none" },
            },
            tooltip: {
              title: "Columns",
            },
          }}
        />

        <GridToolbarFilterButton
          slotProps={{
            button: {
              variant: "text",
              sx: { backgroundColor: "none" },
            },
            tooltip: {
              title: "Filters",
            },
          }}
        />
      </Stack>

      <CustomDataGridQuickSearchToolBox {...search} />
    </GridToolbarContainer>
  );
}
