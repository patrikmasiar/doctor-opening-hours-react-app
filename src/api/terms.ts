import { Reservation } from 'store';
import { get, post } from 'utils/client';

export const loadReservations= (): Promise<{ data: Reservation[] }> => {
  return get('reservation/all');
};

export const createReservation = (reservation: Reservation): Promise<any> => {
  return post('reservation', null, {
    params: reservation,
  });
}  