"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IncludeNavbarFooter, initialInputState } from "@/config";
import { useRouter } from "next/navigation";
import { useGlobal } from "./GlobalProvider";
import { useDispatch, useSelector } from "react-redux";
import { reset, userLogin, userLogout } from "../redux/action/AuthAction";
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { pathname } = useGlobal();
  const [hidden, setHidden] = useState(true);
  const [input, setInput] = useState({ initialInputState });
  const { success, failed } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (failed) dispatch(reset());
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(input));
    resetInputState();
  };

  const handleLogout = () => {
    dispatch(userLogout());
  };

  const resetInputState = () => {
    setInput(initialInputState);
  };

  useEffect(() => {
    if (success) {
      if (pathname === "/login") {
        router.push("/");
      } else if (pathname === "/register") {
        router.push("/login");
      } else if (AuthRoute.includes(pathname)) {
        router.push("/login");
      }
      dispatch(reset());
    }
  }, [dispatch, router, success, pathname]);

  return (
    <AuthContext.Provider
      value={{
        input,
        hidden,
        setHidden,
        handleSubmit,
        handleChange,
        handleLogout,
      }}
    >
      {IncludeNavbarFooter.includes(pathname) && <Header />}
      {children}
      {IncludeNavbarFooter.includes(pathname) && <Footer />}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
