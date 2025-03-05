import React from "react";
import { MdError } from "react-icons/md";

export default function ErrorMessage({
  errorMessage = "",
  height = "20px",
  paddingTop = "0px",
}) {
  return (
    <div
      style={{ minHeight: height, paddingTop: paddingTop }}
      className={`flex opacity-0  mb-5 ${
        errorMessage ? "opacity-100" : "opacity-0"
      } justify-start text-start text-xs items-center text-red-600 gap-1`}
    >
      {errorMessage && <MdError />}
      <p>{errorMessage}</p>
    </div>
  );
}
