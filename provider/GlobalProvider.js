"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import React, { createContext } from "react";
import { usePathname } from "next/navigation";
import { AuthProvider } from "./AuthProvider";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const pathname = usePathname();

  return (
    <Provider store={store}>
      <GlobalContext.Provider value={{}}>
        <AuthProvider>{children}</AuthProvider>
      </GlobalContext.Provider>
    </Provider>
  );
};
