import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../common/ErrorMessage";
import { Link } from "react-router-dom";
import { handleCreateAccount } from "../../store/slices/authSlice";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.auth.signup);

  const validateScheme = Yup.object({
    firstName: Yup.string()
      .matches(
        /^[a-zA-Z]+$/,
        "This value cannot contain numbers or special characters"
      )
      .min(3, "This value should be at least 3 characters")
      .max(20, "This value should be a maximum of 20 characters")
      .required("This value is required"),
    lastName: Yup.string()
      .matches(
        /^[a-zA-Z]+$/,
        "This value cannot contain numbers or special characters"
      )
      .min(3, "This value should be at least 3 characters")
      .max(20, "This value should be a maximum of 20 characters")
      .required("This value is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("This value is required"),
    password: Yup.string()
      .matches(
        /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        "The password should be at least eight characters, including one uppercase letter, one lowercase letter, and one number or special character."
      )
      .required("This value is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("This value is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validateScheme,
    onSubmit: (values) => {
      dispatch(handleCreateAccount(values, navigate)); // Pass values to handleCreateAccount
    },
  });

  return (
    <form
      className="flex flex-col gap-1 sm:gap-2 md:gap-4"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex flex-col sm:flex-row sm:gap-2 md:gap-4 w-full">
        <div className="flex flex-col gap-1 w-full sm:w-1/2">
          <label
            htmlFor="firstName"
            className="text-gray-700 text-xs sm:text-xs md:text-sm tracking-wide font-bold"
          >
            First Name
          </label>
          <input
            className="bg-gray-200 bg-opacity-50 px-2 text-xs sm:px-2 py-2 sm:py-2 outline-none focus:bg-opacity-100 rounded-lg"
            id="firstName"
            type="text"
            name="firstName"
            autoComplete="off"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <ErrorMessage
            errorMessage={formik.touched.firstName && formik.errors.firstName}
          />
        </div>
        <div className="flex flex-col gap-1 w-full sm:w-1/2">
          <label
            htmlFor="lastName"
            className="text-gray-700 text-xs sm:text-xs md:text-sm tracking-wide font-bold"
          >
            Last Name
          </label>
          <input
            className="bg-gray-200 text-xs bg-opacity-50 px-2 sm:px-2 py-2 sm:py-2 outline-none focus:bg-opacity-100 rounded-lg"
            autoComplete="off"
            id="lastName"
            type="text"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <ErrorMessage
            errorMessage={formik.touched.lastName && formik.errors.lastName}
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor="signup-email"
            className="text-gray-700 text-xs sm:text-xs md:text-sm tracking-wide font-bold"
          >
            Email
          </label>
          <input
            className="bg-gray-200 bg-opacity-50 text-xs px-2 sm:px-2 py-2 sm:py-2 outline-none focus:bg-opacity-100 rounded-lg"
            autoComplete="off"
            id="signup-email"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <ErrorMessage
            errorMessage={formik.touched.email && formik.errors.email}
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-2 md:gap-4 w-full">
        <div className="flex flex-col gap-1 w-full sm:w-1/2">
          <label
            htmlFor="password"
            className="text-gray-700 text-xs sm:text-xs md:text-sm tracking-wide font-bold"
          >
            Password
          </label>
          <input
            className="bg-gray-200 bg-opacity-50 text-xs px-2 sm:px-2 py-2 sm:py-2 outline-none focus:bg-opacity-100 rounded-lg"
            autoComplete="off"
            id="password"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <ErrorMessage
            errorMessage={formik.touched.password && formik.errors.password}
          />
        </div>
        <div className="flex flex-col gap-1 w-full sm:w-1/2">
          <label
            className="text-gray-700 text-xs sm:text-xs md:text-sm tracking-wide font-bold"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            disabled={formik.errors.password}
            className="bg-gray-200 bg-opacity-50 px-2 text-xs  sm:px-2 py-2 sm:py-2 outline-none focus:bg-opacity-100 rounded-lg"
            autoComplete="off"
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <ErrorMessage
            errorMessage={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
        </div>
      </div>
      <div>
        <button
          disabled={!(formik.isValid && formik.dirty)}
          type="submit"
          className="disabled:bg-opacity-80 disabled:cursor-not-allowed w-full font-bold text-white bg-black hover:bg-primary-700 focus:outline-none tracking-wide rounded-lg text-xs sm:text-xs md:text-sm px-2 sm:px-3 py-1 sm:py-1.5 text-center"
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
            "Sign Up"
          )}
        </button>
        <ErrorMessage errorMessage={error} paddingTop="1rem" />
      </div>
      <p className="text-xs sm:text-xs font-light text-gray-500">
        Already have an account?
        <Link
          to="/login"
          className="font-medium text-primary-600 hover:underline"
        >
          Login here
        </Link>
      </p>
    </form>
  );
}
