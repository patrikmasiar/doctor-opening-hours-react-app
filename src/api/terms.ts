import { isDayClosed } from 'components/calendar/weekDays/weekDay/WeekDay.utils';
import moment, { Moment } from 'moment';
import { getRandomDate } from 'utils/dates';
import { getRandomInteger } from 'utils/helpers';

export const generateAndLoadOccupiedTerms = (): Promise<Moment[]> => {
  try {
    const dates: Moment[] = [];
    const start = moment().add(1, 'day');
    const end = moment().add(2, 'week');

    while(dates.length !== 15) {
      const randomDate = getRandomDate(start, end);

      const formattedDate = moment(randomDate).format('YYYY-MM-DD');
      if (!isDayClosed(formattedDate)) {
        dates.push(moment(formattedDate))
      }
    }

    dates.forEach((date, index) => {
      const formattedDate = date.format('YYYY-MM-DD');
      if (date.day() % 2 === 0) {
        let hour = getRandomInteger(8, 13);

        if (hour === 11) {
          hour += 1;
        }

        dates[index] = moment(`${formattedDate} ${hour.toString().padStart(2, '0')}:15`);
      } else {
        let hour = getRandomInteger(13, 18);
        
        if (hour === 16) {
          hour += 1;
        }

        dates[index] = moment(`${formattedDate} ${hour.toString().padStart(2, '0')}:15`);
      }
    });

    console.log(dates)
    console.log(dates.map(item => item.format('YYYY-MM-DD hh:mm')));

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dates);
      }, 2000);
    });
  } catch (e) {
    return new Promise((resolve) => resolve([]));
  }
};
