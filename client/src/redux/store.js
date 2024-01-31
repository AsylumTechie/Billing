import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";

import { rootReducer } from "./rootReducer";

const finalReducer = combineReducers({
  rootReducer,
});

const initialState = {
  rootReducer: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
};

const middleware = () => [thunk];

const store = configureStore({
  reducer: finalReducer,
  preloadedState: initialState,
  middleware,
});

export default store;
