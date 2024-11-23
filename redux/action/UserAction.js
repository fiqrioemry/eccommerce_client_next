import {
  GET_USER_PROCESS,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
} from "../constant/AuthType";

import callApi from "../../services/index";

export const getUserDetails = () => async () => {
  dispatch({ type: GET_USER_PROCESS });

  const response = await callApi.post("/api/user/profile");

  console.log(response);
  dispatch({ type: GET_USER_SUCCESS, payload: response.data.data.user });
};
