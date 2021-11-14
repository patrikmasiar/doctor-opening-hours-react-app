import { loadReservations } from 'api/terms';
import { validateCreateReservation } from 'components/reservationForm/ReservationForm.utils';
import moment, { Moment } from 'moment';
import React, { FC, useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router';

export type Reservation = {
  date: string;
  start: string;
  end: string;
};

const AppContext = React.createContext<{
  state: {
    reservations: any[];
    isLoadingTerms: boolean;
  };
  actions: {
    createReservation(reservation: Reservation): void;
  };
}>({
  state: {
    reservations: [],
    isLoadingTerms: false,
  },
  actions: {
    createReservation: () => {},
  },
});

type Props = {
  children: React.ReactNode;
};

export const AppContextProvider: FC<Props> = ({ children }) => {
  const [state, setState] = useState<{
    reservations: Reservation[];
    isLoadingTerms: boolean;
  }>({
    reservations: [],
    isLoadingTerms: false,
  });
  const history = useHistory();

  useEffect(() => {
    loadOccupiedItems();
  }, []);

  const loadOccupiedItems = async () => {
    setState((prevState) => ({ ...prevState, isLoadingTerms: true }));
    const response = await loadReservations();

    setState((prevState) => ({
      ...prevState,
      reservations: response.data,
      isLoadingTerms: false,
    }));
  };

  const createReservation = (reservation: Reservation) => {
    const { reservations } = state;

    const reservationValidation = validateCreateReservation(reservation, {
      reservations,
    });

    if (reservationValidation.isValid) {
      setState((prevState) => {
        const reservations = [...prevState.reservations];

        reservations.push(reservation);

        return {
          ...prevState,
          reservations,
        };
      });

      history.goBack();
    } else {
      alert(reservationValidation.message);
    }
  };

  return (
    <AppContext.Provider
      value={{
        state,
        actions: {
          createReservation,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
