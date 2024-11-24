"use client";

import Cookies from "js-cookie";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { AuthProvider } from "./AuthProvider";
import { usePathname } from "next/navigation";
import React, { createContext, useContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const pathname = usePathname();
  const accessToken = Cookies.get("accessToken");
  return (
    <Provider store={store}>
      <GlobalContext.Provider value={{ pathname, accessToken }}>
        <AuthProvider>{children}</AuthProvider>
      </GlobalContext.Provider>
    </Provider>
  );
};

export const useGlobal = () => {
  return useContext(GlobalContext);
};
