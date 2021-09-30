import moment from 'moment';

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
  return DAY_NAMES.map((day) => (
    moment().day(day).isoWeek(week).format('YYYY-MM-DD')
  ));
};
