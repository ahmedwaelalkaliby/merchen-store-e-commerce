import { createSlice } from "@reduxjs/toolkit";
import { getDocs } from "firebase/firestore";
export const initialState = {
  menJeans: [],
  fetchingMenJeansStates: {
    error: null,
    loading: false,
  },

  menPants: [],
  fetchingMenPantsStates: {
    error: null,
    loading: false,
  },

  menTshirts: [],
  fetchingMenTshirtsStates: {
    error: null,
    loading: false,
  },

  menShorts: [],
  fetchingMenShortsStates: {
    error: null,
    loading: false,
  },

  menHoodies: [],
  fetchingMenHoodiesStates: {
    error: null,
    loading: false,
  },

  menShirts: [],
  fetchingMenShirtsStates: {
    error: null,
    loading: false,
  },

  menJackets: [],
  fetchingMenJacketsStates: {
    error: null,
    loading: false,
  },

  menSwimwear: [],
  fetchingMenSwimwearStates: {
    error: null,
    loading: false,
  },

  menKint: [],
  fetchingMenKintStates: {
    error: null,
    loading: false,
  },

  menUnderwear: [],
  fetchingMenUnderwearStates: {
    error: null,
    loading: false,
  },

  menPacks: [],
  fetchingMenPacksStates: {
    error: null,
    loading: false,
  },
};
// fetchingMenKintStates
const fetchingMenDataSlice = createSlice({
  name: "fetchingMenData",
  initialState,
  reducers: {
    fetchMenDataRequest: (state, action) => {
      const category =
        action.payload.category.charAt(0).toUpperCase() +
        action.payload.category.slice(1);
      console.log(category);
      state[`fetching${category}States`].loading = true;

      state[`fetching${category}States`].error = null;
    },
    fetchMenDataSucess: (state, action) => {
      const category =
        action.payload.category.charAt(0).toUpperCase() +
        action.payload.category.slice(1);
      state[action.payload.category] = action.payload.data;
      state[`fetching${category}States`].loading = false;
      state[`fetching${category}States`].error = null;
    },
    fetchMenDataFailure: (state, action) => {
      const category =
        action.payload.category.charAt(0).toUpperCase() +
        action.payload.category.slice(1);
      state[`fetching${category}States`].error = action.payload.error;
      state[`fetching${category}States`].loading = false;
    },
  },
});

export const fetchMenData = (category, collectionRef) => async (dispatch) => {
  dispatch(fetchMenDataRequest({ category }));
  try {
    const querySnapshot = await getDocs(collectionRef);
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(fetchMenDataSucess({ category, data }));
  } catch (error) {
    dispatch(fetchMenDataFailure({ category, error: error.message }));
  }
};

export const { fetchMenDataRequest, fetchMenDataSucess, fetchMenDataFailure } =
  fetchingMenDataSlice.actions;
export default fetchingMenDataSlice.reducer;
