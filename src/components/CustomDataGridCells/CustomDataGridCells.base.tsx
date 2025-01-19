import { Stack, TableCell } from "@mui/material";

import { IBaseCell } from "./CustomDataGripCells.types";

export const BaseCell = ({
  children,
  isHeader = false,
  isTableCell = false,
  className,
  onClick,
}: IBaseCell) => {
  return isTableCell ? (
    <TableCell
      className={className}
      component={isHeader ? "th" : "td"}
      onClick={onClick}
    >
      {children}
    </TableCell>
  ) : (
    <Stack className={className} justifyContent="center" onClick={onClick}>
      {children}
    </Stack>
  );
};
