const DAYS = {
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
  Sunday: 0,
}

const config = {
  API_URL: process.env.REACT_APP_API_URL,
  MAX_DAY_RESERVATIONS: 1,
  MAX_WEEK_RESERVATIONS: 2,
  DEFAULT_DAY_CLOSED: DAYS.Sunday,
  DEFAULT_CLOSED_DAYS: [DAYS.Saturday, DAYS.Sunday],
  EVEN_DAY_HOURS: {
    start: 8,
    end: 14,
  },
  ODD_DAY_HOURS: {
    start: 14,
    end: 19,
  },
  EVEN_DAY_LUNCH_BREAK: {
    start: '11:00',
    end: '11:30',
  },
  ODD_DAY_LUCNH_BREAK: {
    start: '16:00',
    end: '16:30',
  },
};

export default config;