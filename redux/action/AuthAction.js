import {
  LOGIN_PROCESS,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_PROCESS,
  LOGOUT_SUCCESS,
  REGISTER_PROCESS,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
} from "../constant/AuthType";

import callApi from "../../services/index";

export const login = (formData) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_PROCESS });

    const response = await callApi.get(`/api/auth/login`, {
      formData,
    });

    dispatch({ type: LOGIN_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: LOGIN_FAILED, payload: error });
  }
};
