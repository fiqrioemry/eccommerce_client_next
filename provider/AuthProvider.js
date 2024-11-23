"use client";

import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { reset, userLogin } from "../redux/action/AuthAction";
import React, { createContext, useContext, useState, useEffect } from "react";

import { useGlobal } from "./GlobalProvider";
import { getUserDetails } from "@/redux/action/UserAction";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { refreshToken } = useGlobal();
  const [hidden, setHidden] = useState(true);
  const [pageLoading, setPageLoading] = useState(true);
  const [input, setInput] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    search: "",
  });

  const { login, success, failed, loading, message } = useSelector(
    (state) => state.auth
  );

  const handleClick = () => {
    setHidden((prevState) => setHidden(!prevState));
  };

  const handleChange = (e) => {
    if (failed) {
      dispatch(reset());
    }
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(input));
  };

  const handleLogout = () => {
    console.log("logout");
  };

  // login and register
  useEffect(() => {
    if (success) {
      router.push("/");
      dispatch(reset());
    } else if (success && failed) {
      dispatch(reset());
    }
  }, [dispatch, router, failed, success]);

  useEffect(() => {
    if (refreshToken) {
      setPageLoading(false);
      dispatch(getUserDetails());
    } else {
      setPageLoading(false);
    }
  }, [pageLoading, refreshToken, dispatch]);

  return (
    <AuthContext.Provider
      value={{
        login,
        input,
        failed,
        hidden,
        loading,
        message,
        setInput,
        handleClick,
        handleSubmit,
        handleChange,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
