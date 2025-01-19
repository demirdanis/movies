import dayjs from "dayjs";

export const dateFormatter = (date: string | Date) => {
  return dayjs(date).format("DD.MM.YYYY");
};
