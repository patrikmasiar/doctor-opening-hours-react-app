import React, { FC, useState, useContext } from 'react';

const AppContext = React.createContext<{
  state: {
    reservations: any[];
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
  }>({
    reservations: [],
  });

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
