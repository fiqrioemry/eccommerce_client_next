"use client";

import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../redux/action/AuthAction";
import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import LoadingPage from "@/components/LoadingPage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const pathname = usePathname();
  const accessToken = Cookies.get("accessToken") | null;
  const refreshToken = Cookies.get("refreshToken") | null;
  const router = useRouter();
  const dispatch = useDispatch();
  const [hidden, setHidden] = useState(true);
  const [pageLoading, setPageLoading] = useState(true);
  const [input, setInput] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    search: "",
  });

  const { user, success, failed, loading, message } = useSelector(
    (state) => state.login
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(input));
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
    if (pageLoading) {
      setPageLoading(false);
    } else if (!accessToken && refreshToken) {
      setPageLoading(false);
      dispatch(getUserDetails());
    }
  }, [pageLoading, accessToken, refreshToken, dispatch]);

  return (
    <AuthContext.Provider
      value={{
        user,
        input,
        failed,
        hidden,
        loading,
        message,
        setInput,
        handleClick,
        handleSubmit,
        handleChange,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
