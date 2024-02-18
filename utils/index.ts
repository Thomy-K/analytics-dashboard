import { format, subDays } from "date-fns";

export const getDate = (sub: number = 0) => {
  const daysAgo = subDays(new Date(), sub);
  return format(daysAgo, "dd/MM/yyyy");
};
