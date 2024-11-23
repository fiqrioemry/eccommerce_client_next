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

const initialState = {
  user: null,
  loading: false,
  success: false,
  failed: false,
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
        success: true,
        user: action.payload.data.user,
        message: action.payload.message,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        failed: true,
        message: action.payload,
      };

    case RESET:
      return {
        ...state,
        loading: false,
        failed: false,
        success: false,
        message: "",
      };

    default:
      return state;
  }
};
