"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PathWithNavbar } from "@/config";
import { useRouter } from "next/navigation";
import { useGlobal } from "./GlobalProvider";
import LoadingPage from "@/components/LoadingPage";
import { useDispatch, useSelector } from "react-redux";
import { reset, userLogin, userLogout } from "../redux/action/AuthAction";
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { pathname } = useGlobal();
  const [state, setState] = useState({
    hidden: true,
    pageLoading: true,
  });
  const [input, setInput] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    search: "",
  });

  const { success, failed } = useSelector((state) => state.auth);

  const handleClick = () => {
    setState((prevState) => ({
      ...prevState,
      hidden: !prevState.hidden,
    }));
  };

  const handleChange = (e) => {
    if (failed) dispatch(reset());
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(input));
    setInput({
      email: "",
      password: "",
    });
  };

  const handleLogout = () => {
    dispatch(userLogout());
  };

  useEffect(() => {
    if (success) {
      if (pathname === "/login") {
        router.push("/");
      } else if (pathname === "/register") {
        router.push("/login");
      }
      dispatch(reset());
    }
  }, [dispatch, router, success, pathname]);

  useEffect(() => {
    setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        pageLoading: false,
      }));
    }, 2500);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        input,
        state,
        setInput,
        handleClick,
        handleSubmit,
        handleChange,
        handleLogout,
      }}
    >
      {PathWithNavbar.includes(pathname) && <Header />}
      {state.pageLoading ? <LoadingPage /> : children}
      {PathWithNavbar.includes(pathname) && <Footer />}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
