import { GridOverlay } from "@mui/x-data-grid-pro";
import { ICustomDataGridNoRowsOverlay } from "./CustomDataGridNoRowsOverlay.types";
import { Typography } from "@mui/material";

export default function CustomDataGridNoRowsOverlay({
  error,
}: Readonly<ICustomDataGridNoRowsOverlay>) {
  return (
    <GridOverlay>
      {error ? (
        <Typography variant="subtitle1" fontSize={18}>
          {error}
        </Typography>
      ) : (
        <Typography variant="subtitle1" fontSize={18}>
          No rows available
        </Typography>
      )}
    </GridOverlay>
  );
}
