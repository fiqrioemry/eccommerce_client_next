import { thunk } from "redux-thunk";
import { loginReducer } from "./reducer/AuthReducer";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const reducer = combineReducers({
  login: loginReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
