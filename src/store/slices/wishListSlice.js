import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishListItems: [],
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addItemToWishList(state, action) {
      state.wishListItems.push(action.payload);
    },
    removeItemFromWishList(state, action) {
      state.wishListItems = state.wishListItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const handleToggleWishListItem = (cartItem) => (dispatch, getState) => {
  const wishListItems = getState().wishList.wishListItems || [];
  const isProductInWishList = wishListItems.some(
    (wishItem) => wishItem.id === cartItem.id
  );

  if (isProductInWishList) {
    dispatch(removeItemFromWishList(cartItem));
  } else {
    dispatch(addItemToWishList(cartItem));
  }
};

export const { addItemToWishList, removeItemFromWishList } =
  wishListSlice.actions;
export default wishListSlice.reducer;
