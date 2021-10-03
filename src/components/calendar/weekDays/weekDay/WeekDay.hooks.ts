import moment, { Moment } from 'moment';
import { isDayClosed } from './WeekDay.utils';

type DayTerm = {
  start: string;
  end: string;
  isOccupied: boolean;
  isLunchBreak: boolean;
};

export const useWeekDay = (
  date: string,
  day: number,
  occupiedItems: Moment[],
) => {
  const isEven = () => {
    return day % 2 === 0;
  };

  const isLunchBreak = (start: string, end: string) => {
    if (isEven()) {
      return start === '11:00' && end === '11:30';
    }

    return start === '16:00' && end === '16:30';
  };

  const isClosed = () => {
    return isDayClosed(date);
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
        isLunchBreak: isLunchBreak(range[index], range[index + 1]),
      });
    });

    return output.filter((item) => !!item.start && !!item.end);
  };

  return {
    terms: getAllDayTerms(),
    isClosed: isClosed(),
  };
};
