import React from "react";
import { useSelector } from "react-redux";
export default function ProductsContainer({ children }) {
  const searchButtonClicked = useSelector(
    (state) => state.layouts.searchButtonClicked
  );
  return (
    <section
      className={`${
        searchButtonClicked ? "mt-0 opacity-0" : "mt-[160px] opacity-100"
      } mb-20 `}
    >
      {children}
    </section>
  );
}
