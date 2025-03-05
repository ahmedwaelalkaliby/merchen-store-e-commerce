// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./slices/cartSlice";
import authReducer from "./slices/authSlice";
import fetchingMenDataReducer from "./slices/fetchingMenDataSlice";
import fetchingWomenDataReducer from "./slices/fetchingWomenDataSlice";
import generalFetchingDataReducer from "./slices/generalFetchingDataSlice";
import layoutsReducer from "./slices/layoutsSlice";
import wishListReducer from "./slices/wishListSlice";
import { thunk } from "redux-thunk";

const loadState = () => {
  try {
    const authState = localStorage.getItem("authState");
    const cartItemsState = localStorage.getItem("cartItemsState");
    const wishListItemsState = localStorage.getItem("wishListItemsState");
    if (
      authState === null &&
      cartItemsState === null &&
      wishListItemsState === null
    ) {
      return undefined;
    }

    return {
      auth: authState ? JSON.parse(authState) : undefined,
      cart: cartItemsState ? JSON.parse(cartItemsState) : undefined,
      wishList: wishListItemsState ? JSON.parse(wishListItemsState) : undefined,
    };
  } catch (error) {
    console.error("Could not load state", error);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const { auth, cart, wishList } = state;

    // Save each part of the state separately
    localStorage.setItem("authState", JSON.stringify(auth));
    localStorage.setItem("cartItemsState", JSON.stringify(cart));
    localStorage.setItem("wishListItemsState", JSON.stringify(wishList));
  } catch (error) {
    console.error("Could not save state", error);
  }
};

const persistedState = loadState();

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishList: wishListReducer,
    fetchingMenData: fetchingMenDataReducer,
    fetchingWomenData: fetchingWomenDataReducer,
    fecthingGeneralData: generalFetchingDataReducer,
    layouts: layoutsReducer,
    auth: authReducer,
  },
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // A
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
