import moment, { Moment } from 'moment';
import { getRandomDate } from 'utils/dates';

export const generateAndLoadOccupiedTerms = (): Promise<Moment[]> => {
  try {
    const dates: Moment[] = [];
    const start = moment();
    const end = moment().add(2, 'week');

    for (let i = 1; i <= 15; i++) {
      const randomDate = getRandomDate(start, end);

      dates.push(moment(randomDate));
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dates);
      }, 2000);
    });
  } catch (e) {
    return new Promise((resolve) => resolve([]));
  }
};
