import { get } from 'utils/client';

export const loadOccupiedItems = (): Promise<{ data: string[] }> => {
  return get('occupied-terms');
};
