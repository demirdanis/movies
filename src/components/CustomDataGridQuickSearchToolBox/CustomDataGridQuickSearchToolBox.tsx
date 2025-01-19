/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, InputAdornment } from "@mui/material";

import { GridToolbarQuickFilter } from "@mui/x-data-grid-pro";
import { ICustomDataGridQuickSearchToolBox } from "./CustomDataGridQuickSearchToolBox.types";
import SearchIcon from "@mui/icons-material/Search";
import debounce from "lodash.debounce";
import { useState } from "react";

export default function CustomDataGridQuickSearchToolBox({
  initialKeyword,
  onSearchKeywordChange,
}: Readonly<ICustomDataGridQuickSearchToolBox>) {
  const [keyword, setKeyword] = useState<string>(initialKeyword ?? "");

  const handleChange = debounce(async (e: any) => {
    const value = e.target.value;
    if (value || value === "") {
      onSearchKeywordChange?.(value);
    }
  }, 700);

  return (
    <Box
      sx={{
        alignSelf: "flex-end",
      }}
    >
      <GridToolbarQuickFilter
        variant="outlined"
        size="small"
        placeholder="Search"
        value={keyword || ""}
        onChange={(e: any) => {
          setKeyword(e.target.value || "");
          handleChange(e);
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon width={24} height={24} />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
