import config from 'config';
import moment, { Moment } from 'moment';
import { Reservation } from 'store';
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
  reservations: Reservation[],
) => {
  const isEven = () => {
    return day % 2 === 0;
  };

  const isLunchBreak = (start: string, end: string) => {
    if (isEven()) {
      return (
        start === config.EVEN_DAY_LUNCH_BREAK.start &&
        end === config.EVEN_DAY_LUNCH_BREAK.end
      );
    }

    return (
      start === config.ODD_DAY_LUCNH_BREAK.start &&
      end === config.ODD_DAY_LUCNH_BREAK.end
    );
  };

  const isClosed = () => {
    return isDayClosed(date);
  };

  const getAllDayTerms = () => {
    const times: any[] = [];
    const start = isEven()
      ? config.EVEN_DAY_HOURS.start
      : config.ODD_DAY_HOURS.start;
    const end = isEven() ? config.EVEN_DAY_HOURS.end : config.ODD_DAY_HOURS.end;

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
        isOccupied: occupiedItems.some(
          (item) =>
            item.isBetween(
              moment(`${date} ${range[index]}`),
              moment(`${date} ${range[index + 1]}`),
            ) ||
            reservations.some(
              (item) =>
                item.date === date &&
                item.start === range[index] &&
                item.end === range[index + 1],
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
