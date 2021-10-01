import moment, { Moment } from 'moment';

type DayTerm = {
  start: string;
  end: string;
  isOccupied: boolean;
  isPause: boolean;
};

export const useWeekDay = (
  date: string,
  day: number,
  occupiedItems: Moment[],
) => {
  const isEven = () => {
    return day % 2 === 0;
  };

  const getAllDayTerms = () => {
    const times: any[] = [];
    const start = isEven() ? 8 : 13;
    const end = isEven() ? 14 : 19;

    for (var hour = start; hour <= end; hour++) {
      times.push([hour, 0]);
      times.push([hour, 30]);
    }

    const range = times
      .map((item) => {
        const [hour, minute] = item;

        return `${hour.toString().padStart(2, '0')}:${
          minute === 0 ? '00' : minute
        }`;
      })
      .filter((_, index, arr) => {
        return index !== arr.length - 1;
      });

    const output: DayTerm[] = [];

    range.forEach((_, index) => {
      output.push({
        start: range[index],
        end: range[index + 1],
        isOccupied: occupiedItems.some((item) =>
          item.isBetween(
            moment(`${date} ${range[index]}`),
            moment(`${date} ${range[index + 1]}`),
          ),
        ),
        isPause: false,
      });
    });

    return output.filter((item) => !!item.start && !!item.end);
  };

  return {
    terms: getAllDayTerms(),
  };
};
