import React from "react";

export default function MoreItmesButton({ buttonText }) {
  return (
    <button className="bg-white px-2 py-3 rounded-3xl font-bold text-sm w-48 hover:bg-black hover:text-white duration-300">
      {buttonText}
    </button>
  );
}
