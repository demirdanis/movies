import { SxProps, Theme } from "@mui/material";

import { ReactNode } from "react";

export interface IBaseCell {
  children?: ReactNode;
  maxWidth?: number;
  isDisabled?: boolean;
  sx?: SxProps<Theme> | undefined;
  isHeader?: boolean;
  isTableCell?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export interface IImageCell extends IBaseCell {
  src: string;
  alt: string;
}

export interface ITextCell extends IBaseCell {
  wrap?: boolean;
}

export interface IDateCell extends IBaseCell {
  date: string | Date;
}
