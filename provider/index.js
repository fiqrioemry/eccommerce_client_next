"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { createContext } from "react";
import { usePathname } from "next/navigation";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const pathname = usePathname();

  return (
    <GlobalContext.Provider>
      <Header />
      {children}
      <Footer />
    </GlobalContext.Provider>
  );
};
