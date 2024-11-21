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

const initialState = {
  data: [],
  loading: false,
  message: "",
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_PROCESS:
      return { ...state, loading: true, message: "" };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        message: action.payload,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };

    default:
      return state;
  }
};
