import { thunk } from "redux-thunk";
import { userReducer } from "./reducer/UserReducer";
import { authReducer, loginReducer } from "./reducer/AuthReducer";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const reducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
