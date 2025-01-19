import { BaseCell } from "./CustomDataGridCells.base";
import { ITextCell } from "./CustomDataGripCells.types";
import { Typography } from "@mui/material";
import styles from "./CustomDataGridCells.text.module.scss";
export const TextCell = ({ ...props }: ITextCell) => {
  return (
    <BaseCell {...props} className={styles["custom-data-grid-cells-text"]}>
      <Typography variant="body2">{props.children}</Typography>
    </BaseCell>
  );
};
