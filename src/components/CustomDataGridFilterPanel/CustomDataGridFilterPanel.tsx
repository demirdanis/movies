import { GridFilterPanel } from "@mui/x-data-grid-pro";

export default function CustomDataGridFilterPanel() {
  return (
    <GridFilterPanel
      filterFormProps={{
        columnInputProps: {
          variant: "outlined",
          size: "medium",
        },
        operatorInputProps: {
          variant: "outlined",
          size: "medium",
        },
        valueInputProps: {
          variant: "outlined",
          size: "medium",
          value: new Date(),
        },
        logicOperatorInputProps: {
          variant: "outlined",
          size: "medium",
          sx: {
            width: "84px",
          },
        },
      }}
    ></GridFilterPanel>
  );
}
