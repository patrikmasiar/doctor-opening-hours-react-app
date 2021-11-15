import config from 'config';
import moment from 'moment';
import type { ReservationType } from 'store';

export const validateCreateReservation = (
  reservation: ReservationType,
  reservations: {
    reservations: ReservationType[];
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
  reservations: ReservationType[],
  reservation: ReservationType,
) => {
  return (
    reservations.filter((item) => {
      return reservation.date === item.date;
    }).length === config.MAX_DAY_RESERVATIONS
  );
};

const canCreateReservationInSelectedWeek = (
  reservations: ReservationType[],
  reservation: ReservationType,
) => {
  return (
    reservations.filter((item) => {
      return moment(item.date).isoWeek() === moment(reservation.date).isoWeek();
    }).length === config.MAX_WEEK_RESERVATIONS
  );
};

const isTermAlreadyOccupied = (
  reservations: {
    reservations: ReservationType[];
  },
  reservation: ReservationType,
) => {
  return (
    reservations.reservations.some((item) => {
      return (
        reservation.start === item.start &&
        reservation.end === item.end &&
        reservation.date === item.date
      );
    })
  );
};
