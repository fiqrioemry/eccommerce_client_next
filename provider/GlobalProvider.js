"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { createContext } from "react";
import { usePathname } from "next/navigation";
import { AuthProvider } from "./AuthProvider";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const pathname = usePathname();

  return (
    <GlobalContext.Provider>
      <AuthProvider>
        <Header />
        {children}
        <Footer />
      </AuthProvider>
    </GlobalContext.Provider>
  );
};
