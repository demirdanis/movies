import {
  CustomDataGridFilterSelect,
  customDataGridFilter,
} from "./CustomDataGridFilters";

import { ISelect } from "@/types/select";

export interface ExtraSelectProps<T extends ExtraSelectValueType> {
  id: string;
  label: string;
  items: ISelect<T>[];
}

export type ExtraSelectValueType = string | number;

export const CustomDataGridOnlyEqualSelectFilter = <
  T extends ExtraSelectValueType
>({
  id,
  label,
  items,
}: ExtraSelectProps<T>) => {
  return [
    customDataGridFilter({
      filterType: "equals",
      InputComponent: CustomDataGridFilterSelect,
      InputComponentProps: {
        extraProps: {
          id: id,
          label: label,
          items: items,
        },
      },
    }),
  ];
};
