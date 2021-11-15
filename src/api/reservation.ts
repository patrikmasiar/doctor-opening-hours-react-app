import { get, post } from 'utils/client';
import type { ReservationType } from 'store';

export const Reservation = {
  getAll: (): Promise<{ data: ReservationType[] }> => {
    return get('reservation/all');
  },
  create: (
    reservation: ReservationType,
  ): Promise<{ data: ReservationType }> => {
    return post('reservation', null, {
      params: reservation,
    });
  },
};
