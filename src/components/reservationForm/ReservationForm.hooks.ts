import { useAppContext } from 'store';
import { getQueryParameters } from 'utils/url';

export const useReservationForm = () => {
  const queryParams = getQueryParameters(['date', 'start', 'end']);
  const {
    actions: { createReservation },
  } = useAppContext();

  const submitForm = () => {
    if (queryParams.date && queryParams.start && queryParams.end) {
      createReservation({
        date: queryParams.date,
        start: queryParams.start,
        end: queryParams.end,
      });
    } else {
    }
  };

  return {
    date: queryParams.date ?? '',
    start: queryParams.start ?? '',
    end: queryParams.end ?? '',
    submit: submitForm,
  };
};
