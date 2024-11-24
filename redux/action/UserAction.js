import {
  GET_USER_PROCESS,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
} from "../constant/UserType";

import callApi from "../../services/index";

export const getUserProfiles = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_PROCESS });

    const response = await callApi.get("/api/users/profile");

    dispatch({ type: GET_USER_SUCCESS, payload: response.data.user });
  } catch (error) {
    console.log(error);
  }
};
