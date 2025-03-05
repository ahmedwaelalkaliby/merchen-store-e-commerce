import React from "react";

export default function TransparentButton({ buttonText, onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 bg-gray-900 text-white px-5 py-2 rounded-3xl bg-opacity-30 hover:bg-opacity-50 duration-300"
    >
      {buttonText}
    </button>
  );
}
