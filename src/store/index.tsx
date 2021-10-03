import { generateAndLoadOccupiedTerms } from 'api/terms';
import { Moment } from 'moment';
import React, { FC, useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router';

const AppContext = React.createContext<{
  state: {
    reservations: any[];
    isLoadingTerms: boolean;
    occupiedTerms: Moment[];
  };
  actions: {
    createReservation(reservation: {
      date: string;
      start: string;
      end: string;
    }): void;
  };
  // @ts-ignore
}>({});

type Props = {
  children: React.ReactNode;
};

export const AppContextProvider: FC<Props> = ({ children }) => {
  const [state, setState] = useState<{
    reservations: {
      date: string;
      start: string;
      end: string;
    }[];
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
    const response = await generateAndLoadOccupiedTerms();
    setState((prevState) => ({
      ...prevState,
      occupiedTerms: response,
      isLoadingTerms: false,
    }));
  };

  const createReservation = (reservation: {
    date: string;
    start: string;
    end: string;
  }) => {
    // validation

    setState((prevState) => {
      const reservations = [...prevState.reservations];

      reservations.push(reservation);

      return {
        ...prevState,
        reservations,
      };
    });

    history.goBack();
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
