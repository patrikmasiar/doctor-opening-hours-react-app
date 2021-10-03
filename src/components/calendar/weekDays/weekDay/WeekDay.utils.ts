import moment from "moment";
import { getQueryParameters } from "utils/url";

export const isDayClosed = (date: string) => {
  const queryParams = getQueryParameters(['week']);

  if (!!queryParams.week) {
    const weekNumber = Number.parseInt(queryParams.week);
    const day = moment(date).day();

    if (weekNumber % 2 === 0) {
      return day === 0;
    }

    return [6,0].includes(day);
  }

  return false;
};