import {
  LOGIN_PROCESS,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  RESET,
} from "../constant/AuthType";

import callApi from "../../services/index";
import Cookies from "js-cookie";
import axios from "axios";

export const userLogin = (formData) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_PROCESS });

    const response = await axios.post(
      "http://localhost:3300/api/auth/login",
      formData,
      {
        withCredentials: true,
      }
    );
    console.log("TESTING :", response);
    Cookies.set("accessToken", response.data.data.accessToken, {
      secure: true,
      expires: 15 / 1440, // Set expired 15 minutes
    });
    dispatch({ type: LOGIN_SUCCESS, payload: response.data.data.user });
  } catch (error) {
    console.log("CEK :", error);
    dispatch({ type: LOGIN_FAILED, payload: error.response.data.message });
  }
};

export const reset = () => async (dispatch) => {
  dispatch({ type: RESET });
};
