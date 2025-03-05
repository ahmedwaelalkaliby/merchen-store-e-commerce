import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchButtonClicked: false,
  showProductCategories: false,
  showClothingCategories: false,
};

const layoutsSlice = createSlice({
  name: "layouts",
  initialState,
  reducers: {
    showSearchComponent(state, action) {
      state.searchButtonClicked = action.payload;
    },
    hideSearchComponent(state, action) {
      state.searchButtonClicked = action.payload;
    },
    showProductCategories(state, action) {
      state.showProductCategories = action.payload;
      state.showClothingCategories = false;
    },
    showClothingCategories(state, action) {
      state.showClothingCategories = action.payload;
    },
  },
});

// Export the actions to be used in dispatching
export const {
  showSearchComponent,
  hideSearchComponent,
  showProductCategories,
  showClothingCategories,
} = layoutsSlice.actions;

// Export the reducer to be used in the store
export default layoutsSlice.reducer;
