import { createSlice } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
import axios from "axios";

// Define initial state
const initialState = {
  signup: {
    loading: false,
    error: null,
    success: false,
  },
  user: {
    isAuthenticated: false,
    loading: false,
    error: null,
    userInfo: null,
  },
  gender: "men",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signupRequest: (state) => {
      state.signup = { loading: true, error: null, success: false };
    },
    signupSuccess: (state) => {
      state.signup = { loading: false, error: null, success: true };
    },
    signupFailure: (state, action) => {
      state.signup = { loading: false, error: action.payload, success: false };
    },
    endSignupRequest: (state) => {
      state.signup = { ...state.signup, loading: false, error: null };
    },
    loginRequest: (state) => {
      state.user = { ...state.user, loading: true, error: null };
    },
    loginSuccess: (state, action) => {
      state.user = {
        isAuthenticated: true,
        userInfo: action.payload,
        loading: false,
        error: null,
      };
    },
    loginFailure: (state, action) => {
      state.user = { ...state.user, loading: false, error: action.payload };
    },
    endLoginRequest: (state) => {
      state.user = { ...state.user, loading: false, error: false };
    },
    logout: (state) => {
      state.user = {
        isAuthenticated: false,
        userInfo: null,
        error: null,
        loading: false,
      };
    },
    changeGender: (state, action) => {
      state.gender = action.payload;
    },
  },
});

export const handleLogin =
  (email, password, navigate, location) => async (dispatch) => {
    dispatch(loginRequest());
    console.log(email, password);
    try {
      const res = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        { email, password }
      );
      console.log(res);
      dispatch(loginSuccess(res.data.user));
      // Determine where to navigate based on the previous route
      const { from } = location.state || { from: { pathname: "/" } };
      if (from.pathname === "/cart") {
        navigate("/cart", { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.log(error);
      dispatch(
        loginFailure(
          error?.response?.data?.errors?.msg || error.response.data.message
        )
      );
    }
    dispatch(endLoginRequest());
  };

export const handleLogout = () => (dispatch) => {
  auth.signOut();
  dispatch(logout());
};

export const handleCreateAccount = (values, navigate) => async (dispatch) => {
  dispatch(signupRequest());
  const valuesFormated = {
    name: values.firstName + " " + values.lastName,
    email: values.email,
    password: values.password,
    rePassword: values.confirmPassword,
    phone: "01050505050",
  };

  try {
    const res = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/signup",
      valuesFormated
    );
    console.log(res);
    dispatch(signupSuccess());
    navigate("/login");
  } catch (error) {
    console.log(error);
    dispatch(signupFailure(error.response?.data?.message));
  }
  dispatch(endSignupRequest());
  console.log("Account creation function executed");
};

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Export the action creators and reducer
export const {
  signupRequest,
  signupSuccess,
  signupFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  changeGender,
} = authSlice.actions;

export default authSlice.reducer;
