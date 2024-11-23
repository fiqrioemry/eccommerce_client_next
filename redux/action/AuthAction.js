import {
  LOGIN_PROCESS,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_PROCESS,
  LOGOUT_SUCCESS,
  REGISTER_PROCESS,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  RESET,
} from "../constant/AuthType";

import callApi from "../../services/index";
import Cookies from "js-cookie";

export const userLogin = (formData) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_PROCESS });

    const response = await callApi.post("/api/auth/login", formData);

    Cookies.set("accessToken", response.data.data.accessToken, {
      secure: true,
      expires: 15 / 1440, // Set expired 15 minutes
    });
    dispatch({ type: LOGIN_SUCCESS, payload: response.data.data.user });
  } catch (error) {
    dispatch({ type: LOGIN_FAILED, payload: error.response.data.message });
  }
};

export const reset = () => async (dispatch) => {
  dispatch({ type: RESET });
};
