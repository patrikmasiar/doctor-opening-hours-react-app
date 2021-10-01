import moment, { Moment } from 'moment';

const DAY_NAMES = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

export const getNumberOfTheWeek = (): number => {
  return moment().isoWeek();
};

export const getDaysInWeek = (week: number) => {
  return DAY_NAMES.map((day) =>
    moment().day(day).isoWeek(week).format('YYYY-MM-DD'),
  );
};

export const getRandomDate = (start: Moment, end: Moment) => {
  const endTime = +moment(end);
  const startTime = +moment(start);

  if (startTime > endTime) {
    throw new Error('Start date is after end date');
  }

  const randomNumber = Math.floor(
    Math.random() * (endTime - startTime) + startTime,
  );

  return moment(randomNumber);
};
