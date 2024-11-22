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

export const login = (formData) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_PROCESS });

    const response = await callApi.post(`/api/auth/login`, formData);
    Cookies.set("token", response.data.data.token, { expires: 1 });
    Cookies.set("user", JSON.stringify(response.data.data.user), {
      expires: 1,
    });

    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: LOGIN_FAILED, payload: error.response.data.message });
  }
};

export const reset = (formData) => async (dispatch) => {
  dispatch({ type: RESET });
};
