import { createSlice } from "@reduxjs/toolkit";
import { getDocs } from "firebase/firestore";
const initialState = {
  womenTops: [],
  fetchingWomenTopsStates: {
    error: null,
    loading: false,
  },
  womenTshirts: [],
  fetchingWomenTshirtsStates: {
    error: null,
    loading: false,
  },
  womenDresses: [],
  fetchingWomenDressesStates: {
    error: null,
    loading: false,
  },
  womenJeans: [],
  fetchingWomenJeansStates: {
    error: null,
    loading: false,
  },
  womenPants: [],
  fetchingWomenPantsStates: {
    error: null,
    loading: false,
  },
  womenSkirts: [],
  fetchingWomenSkirtsStates: {
    error: null,
    loading: false,
  },
  womenShorts: [],
  fetchingWomenShortsStates: {
    error: null,
    loading: false,
  },
  womenBlouses: [],
  fetchingWomenBlousesStates: {
    error: null,
    loading: false,
  },
  womenBikinis: [],
  fetchingWomenBikinisStates: {
    error: null,
    loading: false,
  },
  womenJumpsuits: [],
  fetchingWomenJumpsuitsStates: {
    error: null,
    loading: false,
  },
  womenHoodies: [],
  fetchingWomenHoodiesStates: {
    error: null,
    loading: false,
  },
  womenJackets: [],
  fetchingWomenJacketsStates: {
    error: null,
    loading: false,
  },
  womenTotalLook: [],
  fetchingWomenTotalLookStates: {
    error: null,
    loading: false,
  },
  womenKintwear: [],
  fetchingWomenKintwearStates: {
    error: null,
    loading: false,
  },
  womenVests: [],
  fetchingWomenVestsStates: {
    error: null,
    loading: false,
  },
  womenBlazers: [],
  fetchingWomenBlazersStates: {
    error: null,
    loading: false,
  },
  womenLingerie: [],
  fetchingWomenLingerieStates: {
    error: null,
    loading: false,
  },
};

const fetchingWomenDataSlice = createSlice({
  name: "fetchingWomenData",
  initialState,
  reducers: {
    fetchWomenDataRequest: (state, action) => {
      const category =
        action.payload.category.charAt(0).toUpperCase() +
        action.payload.category.slice(1);

      state[`fetching${category}States`].loading = true;
      state[`fetching${category}States`].error = null;
    },
    fetchWomenDataSuccess: (state, action) => {
      const category =
        action.payload.category.charAt(0).toUpperCase() +
        action.payload.category.slice(1);
      state[action.payload.category] = action.payload.data;
      state[`fetching${category}States`].loading = false;
    },
    fetchWomenDataFailure: (state, action) => {
      const category =
        action.payload.category.charAt(0).toUpperCase() +
        action.payload.category.slice(1);
      state[`fetching${category}States`].loading = false;
      state[`fetching${category}States`].error = action.payload.error;
    },
  },
});

export const fetchWomenData = (category, collectionRef) => async (dispatch) => {
  dispatch(fetchWomenDataRequest({ category }));
  try {
    const querySnapshot = await getDocs(collectionRef);
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(fetchWomenDataSuccess({ category, data }));
  } catch (error) {
    dispatch(fetchWomenDataFailure({ category, error: error.message }));
  }
};

export const {
  fetchWomenDataRequest,
  fetchWomenDataSuccess,
  fetchWomenDataFailure,
} = fetchingWomenDataSlice.actions;

export default fetchingWomenDataSlice.reducer;
