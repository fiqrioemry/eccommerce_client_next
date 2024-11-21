"use client";

import Cookies from "js-cookie";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { redirect, usePathname, useRouter } from "next/navigation";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/app/firebase";
import LoadingPage from "@/components/LoadingPage";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const pathname = usePathname();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const excludePath = ["/dashboard"];
  const noLayoutRoute = !excludePath.includes(pathname);
  const route = useRouter();

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const googleSignOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // useEffect(() => {
  //   if (user?.accessToken) {
  //     const currentToken = Cookies.get("accessToken");
  //     if (currentToken !== user.accessToken) {
  //       Cookies.set("accessToken", user.accessToken, { expires: 7, path: "/" });
  //     }
  //   } else {
  //     Cookies.remove("accessToken");
  //     route.push("/");
  //   }
  // }, [user]);

  // Render loading page only for main content
  return (
    <GlobalContext.Provider
      value={{ user, loading, googleSignIn, googleSignOut }}
    >
      {noLayoutRoute && <Header />}

      {loading ? <LoadingPage /> : <>{children}</>}

      {noLayoutRoute && <Footer />}
    </GlobalContext.Provider>
  );
};

export const AuthProvider = () => useContext(GlobalContext);
