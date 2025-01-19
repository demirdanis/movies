/* eslint-disable @next/next/no-img-element */
import { BaseCell } from "./CustomDataGridCells.base";
import { IImageCell } from "./CustomDataGripCells.types";

export const ImageCell = ({ ...props }: IImageCell) => {
  return (
    <BaseCell {...props}>
      <img src={props.src} height={48} width="auto" alt={props.alt}>
        {props.children}
      </img>
    </BaseCell>
  );
};
