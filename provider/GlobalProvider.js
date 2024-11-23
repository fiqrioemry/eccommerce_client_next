"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import React, { createContext, useState } from "react";
import { AuthProvider } from "./AuthProvider";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [data, setData] = useState(null);
  return (
    <Provider store={store}>
      <GlobalContext.Provider value={{ data }}>
        <AuthProvider>{children}</AuthProvider>
      </GlobalContext.Provider>
    </Provider>
  );
};
