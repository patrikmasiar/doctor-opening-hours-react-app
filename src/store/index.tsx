import { loadOccupiedItems as loadOccupiedItemsFromAPI } from 'api/terms';
import { validateCreateReservation } from 'components/reservationForm/ReservationForm.utils';
import { Moment } from 'moment';
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
    occupiedTerms: Moment[];
  };
  actions: {
    createReservation(reservation: Reservation): void;
  };
  // @ts-ignore
}>({});

type Props = {
  children: React.ReactNode;
};

export const AppContextProvider: FC<Props> = ({ children }) => {
  const [state, setState] = useState<{
    reservations: Reservation[];
    isLoadingTerms: boolean;
    occupiedTerms: Moment[];
  }>({
    reservations: [],
    isLoadingTerms: false,
    occupiedTerms: [],
  });
  const history = useHistory();

  useEffect(() => {
    loadOccupiedItems();
  }, []);

  const loadOccupiedItems = async () => {
    setState((prevState) => ({ ...prevState, isLoadingTerms: true }));
    const response = await loadOccupiedItemsFromAPI();

    setState((prevState) => ({
      ...prevState,
      occupiedTerms: response.data,
      isLoadingTerms: false,
    }));
  };

  const createReservation = (reservation: Reservation) => {
    const { reservations, occupiedTerms } = state;

    const validationMessage = validateCreateReservation(reservation, {
      reservations,
      occupiedItems: occupiedTerms,
    });

    if (validationMessage === 'OK') {
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
      alert(validationMessage);
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
