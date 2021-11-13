import config from 'config';
import moment, { Moment } from 'moment';
import { Reservation } from 'store';

export const validateCreateReservation = (
  reservation: Reservation,
  reservations: {
    reservations: Reservation[];
    occupiedItems: Moment[];
  },
) => {
  let isValid = true;
  let message = 'OK';

  if (
    reservations.reservations.filter((item) => {
      return reservation.date === item.date;
    }).length === config.MAX_DAY_RESERVATIONS
  ) {
    isValid = false;
    message = `You can not book more than ${config.MAX_DAY_RESERVATIONS} term per day.`
  }

  if (
    reservations.reservations.filter((item) => {
      return moment(item.date).isoWeek() === moment(reservation.date).isoWeek();
    }).length === config.MAX_WEEK_RESERVATIONS
  ) {
    isValid = false;
    message = `You can not book more than ${config.MAX_WEEK_RESERVATIONS} terms per week.`
  }

  if (
    reservations.reservations.some((item) => {
      return (
        reservation.start === item.start &&
        reservation.end === item.end &&
        reservation.date === item.date
      );
    })
  ) {
    isValid = false;
    message = 'This term seems to be already occupied. Please, select another date and time.';
  }

  if (
    reservations.occupiedItems.some((item) =>
      item.isBetween(
        moment(`${reservation.date} ${reservation.start}`),
        moment(`${reservation.date} ${reservation.end}`),
      ),
    )
  ) {
    isValid = false;
    message = 'This term seems to be already occupied. Please, select another date and time.';
  }

  return {
    isValid,
    message,
  };
};
