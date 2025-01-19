import { IDateCell } from "./CustomDataGripCells.types";
import { TextCell } from "./CustomDataGridCells.text";
import { dateFormatter } from "@/utils/date.util";

export const DateCell = ({ date, ...props }: IDateCell) => {
  return (
    <TextCell {...props} maxWidth={160}>
      {dateFormatter(date)}
    </TextCell>
  );
};
