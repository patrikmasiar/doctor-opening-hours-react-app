import moment, { Moment } from 'moment';
import { Reservation } from 'store';

export const validateCreateReservation = (
  reservation: Reservation,
  reservations: {
    reservations: Reservation[];
    occupiedItems: Moment[];
  },
) => {
  if (reservations.reservations.some(item => {
    return reservation.date === item.date
  })) {
    return 'You can not book more than 1 term per day.';
  }

  // WEEk terms validation

  if (
    reservations.reservations.some((item) => {
      return reservation.start === item.start &&
        reservation.end === item.end &&
        reservation.date === item.date;
    })
  ) {
    return 'This term seems to be already occupied. Please, select another date and time.';
  }

  if (reservations.occupiedItems.some(item => item.isBetween(
    moment(`${reservation.date} ${reservation.start}`),
    moment(`${reservation.date} ${reservation.end}`),
  ))) {
    return 'This term seems to be already occupied. Please, select another date and time.';
  }


  return 'OK';
};
