import {
  ExtraSelectProps,
  ExtraSelectValueType,
} from "./CustomDataGridFilters.select";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { GridFilterOperator } from "@mui/x-data-grid-pro";
import { ISelect } from "@/types/select";
import debounce from "lodash.debounce";

export const customDataGridFilter = ({
  filterType,
  InputComponent,
  InputComponentProps,
}: {
  filterType: FilterTypeKey;
  InputComponent: React.JSXElementConstructor<any>;
  InputComponentProps?: Record<string, any>;
}): GridFilterOperator => {
  let props = {
    variant: "outlined",
  };

  if (InputComponentProps) {
    props = { ...props, ...InputComponentProps };
  }

  return {
    label: FilterTypes[filterType].label,
    value: FilterTypes[filterType].value,

    getApplyFilterFn: () => {
      return null;
    },

    InputComponent: InputComponent,
    InputComponentProps: {
      ...props,
    },
  };
};

export const CustomDataGridFilterInput = (props: any) => {
  const { item, applyValue } = props;
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    if (props) {
      if (inputValue !== props.item.value) {
        setInputValue(props.item.value);
      }
    }
  }, [props.item.value]);

  const debouncedApplyValue = useMemo(
    () =>
      debounce((value: string | number) => {
        applyValue({
          ...item,
          value: value,
        });
      }, 400),
    [applyValue, item]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    debouncedApplyValue(value);
  };

  return <TextField value={inputValue ?? ""} onChange={handleChange} />;
};

export const CustomDataGridFilterSelect = <T extends ExtraSelectValueType>(
  props: any
) => {
  const { item, applyValue, extraProps } = props;

  const { items, label }: ExtraSelectProps<T> = extraProps;
  const [inputValue, setInputValue] = useState<ISelect<T>>(items[0]);

  useEffect(() => {
    if (props) {
      setInputValue(props.item.value);
    }
  }, [props]);

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel id={"select-filter-label"}>{label}</InputLabel>

      <Select
        labelId={"select-filter-label"}
        label={label}
        value={inputValue ?? ""}
        onChange={(event) => {
          applyValue({
            ...item,
            value: event.target.value,
          });
        }}
      >
        {items?.map(({ label, value }: { label: string; value: any }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export const FilterTypes = {
  contains: { label: "Contains", value: "contains" },
  equals: { label: "Equal", value: "equals" },
  equalNumber: { label: "=", value: "=" },
  biggerThanAndEqual: { label: ">=", value: ">=" },
  biggerThan: { label: ">", value: ">" },
  smallerThanAndEqual: { label: "<=", value: "<=" },
  smallerThan: { label: "<", value: "<" },
};

type FilterTypeKey = keyof typeof FilterTypes;
