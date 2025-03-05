import React, { useEffect, useState } from "react";

import ReactLoading from "react-loading";

import { MdError } from "react-icons/md";

// redux
import { useDispatch, useSelector } from "react-redux";

// router
import { Link, useNavigate, useLocation } from "react-router-dom";
import { handleLogin } from "../../store/slices/authSlice";

export default function SigninForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const { isAuthenticated, loading, error } = useSelector(
    (state) => state.auth.user
  );
  console.log(error);
  const Signin = async (e) => {
    console.log("object");
    e.preventDefault();
    dispatch(handleLogin(emailValue, passwordValue, navigate, location));
  };

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     // This will handle the navigation inside the login action
  //   }
  // }, [isAuthenticated]);

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={Signin}>
      <div className="flex flex-col gap-2 w-full">
        <label
          htmlFor="signup-email"
          className="text-gray-700 text-sm tracking-wide font-bold"
        >
          Email
        </label>
        <input
          className="bg-gray-200 bg-opacity-50 px-3 py-4 outline-none focus:bg-opacity-100 rounded-lg"
          id="signup-email"
          type="email"
          name="signin-email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="signin-password"
          className="text-gray-700 text-sm tracking-wide font-bold"
        >
          Password
        </label>
        <input
          className="bg-gray-200 bg-opacity-50 px-3 py-4 outline-none focus:bg-opacity-100 rounded-lg"
          autoComplete="off"
          id="password"
          type="password"
          name="signin-password"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
        />
      </div>

      {error && (
        <div className="flex justify-center text-center items-center text-red-600 gap-1">
          <MdError />
          <p>{error}</p>
        </div>
      )}
      <button
        type="submit"
        className="w-full text-white bg-black hover:bg-primary-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        // disabled={loading}
      >
        {loading ? (
          <ReactLoading
            type="spin"
            color="white"
            width={"20px"}
            height={"20px"}
            className="mx-auto"
          />
        ) : (
          "Sign in"
        )}
      </button>
      <p className="text-sm font-light text-gray-500">
        Don’t have an account yet?
        <Link
          to={"/signup"}
          className="font-medium text-primary-600 hover:underline"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
}
