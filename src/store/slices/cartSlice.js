import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  orderSummary: {
    originalPrice: 0,
    savings: 0,
    storePickup: 0,
    tax: 0,
    total: 0,
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    calcCartSummery: (state, action) => {
      state.orderSummary = action.payload;
    },
    updateCartProducts: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const handleUpdateCartProducts = (cartItem) => (dispatch, getState) => {
  const state = getState();
  const cartItems = state.cart.cartItems || [];
  const itemExists = cartItems.some(
    (currCartItem) => cartItem.id === currCartItem.id
  );

  if (itemExists) {
    toast.error("Product is already in your cart", {
      autoClose: 5000,
      className: "w-[20rem]",
      draggable: true,
    });
  } else {
    dispatch(updateCartProducts([...cartItems, cartItem]));
    toast.success("Item added to cart!", {
      autoClose: 5000,
      className: "w-[20rem]",
      draggable: true,
    });
  }
};

export const { calcCartSummery, updateCartProducts } = cartSlice.actions;
export default cartSlice.reducer;
