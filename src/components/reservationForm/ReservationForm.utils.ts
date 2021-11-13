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
    canCreateReservationInSelectedDay(reservations.reservations, reservation)
  ) {
    isValid = false;
    message = `You can not book more than ${config.MAX_DAY_RESERVATIONS} term per day.`;
  }

  if (
    canCreateReservationInSelectedWeek(reservations.reservations, reservation)
  ) {
    isValid = false;
    message = `You can not book more than ${config.MAX_WEEK_RESERVATIONS} terms per week.`;
  }

  if (isTermAlreadyOccupied(reservations, reservation)) {
    isValid = false;
    message =
      'This term seems to be already occupied. Please, select another date and time.';
  }

  return {
    isValid,
    message,
  };
};

const canCreateReservationInSelectedDay = (
  reservations: Reservation[],
  reservation: Reservation,
) => {
  return (
    reservations.filter((item) => {
      return reservation.date === item.date;
    }).length === config.MAX_DAY_RESERVATIONS
  );
};

const canCreateReservationInSelectedWeek = (
  reservations: Reservation[],
  reservation: Reservation,
) => {
  return (
    reservations.filter((item) => {
      return moment(item.date).isoWeek() === moment(reservation.date).isoWeek();
    }).length === config.MAX_WEEK_RESERVATIONS
  );
};

const isTermAlreadyOccupied = (
  reservations: {
    reservations: Reservation[];
    occupiedItems: Moment[];
  },
  reservation: Reservation,
) => {
  return (
    reservations.reservations.some((item) => {
      return (
        reservation.start === item.start &&
        reservation.end === item.end &&
        reservation.date === item.date
      );
    }) ||
    reservations.occupiedItems.some((item) =>
      item.isBetween(
        moment(`${reservation.date} ${reservation.start}`),
        moment(`${reservation.date} ${reservation.end}`),
      ),
    )
  );
};
