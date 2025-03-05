import { createSlice } from "@reduxjs/toolkit";
import { getDocs } from "firebase/firestore";
const initialState = {
  suggestedProducts: [],
  fetchingSuggestedProductsStates: {
    error: null,
    loading: false,
  },
  newArrival: [],
  fetchingNewArrivalStates: {
    error: null,
    loading: false,
  },
};

const generalFetchingDataSlice = createSlice({
  name: "generalFetchingData",
  initialState,
  reducers: {
    fetchGeneralDataRequest(state, action) {
      const category =
        action.payload.category.charAt(0).toUpperCase() +
        action.payload.category.slice(1);
      state[`fetching${category}States`].loading = true;
      state[`fetching${category}States`].error = null;
    },
    fetchGeneralDataSuccess(state, action) {
      const category =
        action.payload.category.charAt(0).toUpperCase() +
        action.payload.category.slice(1);
      state[action.payload.category] = action.payload.data;
      state[`fetching${category}States`].loading = false;
      state[`fetching${category}States`].error = null;
    },
    fetchGeneralDataFailure(state, action) {
      const category =
        action.payload.category.charAt(0).toUpperCase() +
        action.payload.category.slice(1);
      state[`fetching${category}States`].loading = false;
      state[`fetching${category}States`].error = action.payload.error;
    },
  },
});

export const fetchGeneralData =
  (category, menCollectionRef, womenCollectionRef) =>
  async (dispatch, getState) => {
    const state = getState();
    const gender = state.auth.gender;
    const collectionRef =
      gender === "men" ? menCollectionRef : womenCollectionRef;
    dispatch(fetchGeneralDataRequest({ category }));
    try {
      const querySnapshot = await getDocs(collectionRef);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch(fetchGeneralDataSuccess({ category, data }));
    } catch (error) {
      dispatch(fetchGeneralDataFailure({ category, error: error.message }));
    }
  };

export const {
  fetchGeneralDataRequest,
  fetchSuggestedDataSuccess,
  fetchGeneralDataSuccess,
  fetchGeneralDataFailure,
} = generalFetchingDataSlice.actions;

// Export the reducer to be used in the store
export default generalFetchingDataSlice.reducer;
