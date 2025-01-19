import {
  CustomDataGridFilterInput,
  customDataGridFilter,
} from "./CustomDataGridFilters";

export const CustomDataGridStringFilters = [
  customDataGridFilter({
    filterType: "equals",
    InputComponent: CustomDataGridFilterInput,
  }),
];
