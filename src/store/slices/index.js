import { combineReducers } from "redux";

import fetchingMenDataReducer, {
  initialState as fetchingMenDataInitialState,
} from "./fetchingMenData";

import fetchingWomenDataReducer, {
  initialState as fetchingWomenDataInitialState,
} from "./fetchingWomenData";

import cartReducer, { initialState as cartInitialState } from "./cart";

import wishListReducer, {
  initialState as wishListInitialState,
} from "./wishList";

import layoutsReducer, {
  initialState as layoutsInitialState,
} from "./layoutsReducer";
import authReducer, { initialState as authInitialState } from "./authReducer";

import generalFetchingDataReducer, {
  initialState as generalDataInitialState,
} from "./generalFetchingData";

export const initialState = {
  layouts: layoutsInitialState,
  menData: fetchingMenDataInitialState,
  womenData: fetchingWomenDataInitialState,
  cart: cartInitialState,
  wishList: wishListInitialState,
  auth: authInitialState,
  generalData: generalDataInitialState,
};

export const rootReducer = combineReducers({
  fetchingMenDataReducer,
  fetchingWomenDataReducer,
  cartReducer,
  wishListReducer,
  layoutsReducer,
  authReducer,
  generalFetchingDataReducer,
});

export default rootReducer;
