import {
  GET_USER_PROCESS,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
} from "../constant/UserType";

const initialState = {
  profile: null,
  loading: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PROCESS:
      return { ...state, loading: true };

    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: action.payload,
      };

    default:
      return state;
  }
};
