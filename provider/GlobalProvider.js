"use client";

import Cookies from "js-cookie";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PathWithNavbar } from "@/config";
import { AuthProvider } from "./AuthProvider";
import { usePathname } from "next/navigation";
import React, { createContext, useContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const pathname = usePathname();
  const accessToken = Cookies.get("accessToken") || null;
  const refreshToken = Cookies.get("refreshToken") || null;

  return (
    <Provider store={store}>
      <GlobalContext.Provider value={{ pathname, accessToken, refreshToken }}>
        <AuthProvider>
          {PathWithNavbar.includes(pathname) && <Header />}
          {children}
          {PathWithNavbar.includes(pathname) && <Footer />}
        </AuthProvider>
      </GlobalContext.Provider>
    </Provider>
  );
};

export const useGlobal = () => {
  return useContext(GlobalContext);
};
