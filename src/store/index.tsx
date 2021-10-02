import React, { FC, useState, useContext } from 'react';

const AppContext = React.createContext<{
  state: {
    reservations: any[];
  };
  actions: {
    createReservation(params: {
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
  const [state, setState] = useState({
    reservations: [],
  });

  const createReservation = (params: {
    date: string;
    start: string;
    end: string;
  }) => {
    console.log('reservation', params);
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
