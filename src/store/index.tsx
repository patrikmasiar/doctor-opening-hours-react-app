import React, { FC, useState, useContext } from 'react';

// @ts-ignore we do not need to implement default value
const AppContext = React.createContext<{}>({});

type Props = {
  children: React.ReactNode;
};

export const AppContextProvider: FC<Props> = ({ children }) => {
  const [state, setState] = useState({});

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
