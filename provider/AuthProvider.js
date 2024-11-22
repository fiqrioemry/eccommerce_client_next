"use client";

import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../redux/action/AuthAction";
import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import LoadingPage from "@/components/LoadingPage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const refreshToken = Cookies.get("token") || null;
  const router = useRouter();
  const dispatch = useDispatch();
  const pathname = usePathname();
  const [user, setUser] = useState(null);
  const [hidden, setHidden] = useState(true);
  const [pageLoading, setPageLoading] = useState(true);
  const [input, setInput] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    search: "",
  });
  const { success, failed, loading, message } = useSelector(
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
    } else if (success & failed) dispatch(reset());
  }, [dispatch, router, failed, success]);

  useEffect(() => {
    if (refreshToken) {
      setUser(refreshToken);
    }
    setPageLoading(false);
  }, [refreshToken]);

  const authorizedUser = [
    "/users",
    "/users/settings",
    "/users/address",
    "/users/transaction",
    "/cart/shipment",
  ];

  const authenticatedUser = ["/login", "/register"];

  if (pathname.includes(authorizedUser)) {
    if (!user) router.push("/login");
  } else if (pathname.includes(authenticatedUser)) {
    if (user) router.push("/");
  }
  return (
    <AuthContext.Provider
      value={{
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
      {pageLoading && <LoadingPage />}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
