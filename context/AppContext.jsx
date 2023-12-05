"use client";

import React, { createContext, useContext, useState } from "react";
import { GetLocalStorage } from "./UserLocalStorage";

const Context = createContext(undefined);

const AppContext = ({ children }) => {
  const [appState, setAppState] = useState({
    user: {
      id: "",
      username: "",
      email: "",
      image: "",
    },
    loggedIn: "",
    isLoggedIn: false,
  });

  const localStorageData = GetLocalStorage();

  return (
    <Context.Provider
      value={{
        appState: localStorageData ? localStorageData : appState,
        setAppState,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;

export const useAppContext = () => {
  const context = useContext(Context);

  if (!context) return;

  return context;
};
