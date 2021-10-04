import { Moment } from "moment";
import { get } from "utils/client";



export const loadOccupiedItems = (): Promise<{data: Moment[]}> => {
  return get('occupied-terms');
};
