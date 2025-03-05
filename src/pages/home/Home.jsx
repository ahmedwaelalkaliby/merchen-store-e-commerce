import React from "react";
import Hero from "./homeSections/Hero";
import MoreItems from "./homeSections/MoreItems";
import Tshirts from "./homeSections/Tshirts";
import { useSelector } from "react-redux";
import Pants from "./homeSections/Pants";

export default function Home() {
  const searchButtonClicked = useSelector(
    (state) => state.layouts.searchButtonClicked
  );

  return (
    <div>
      {!searchButtonClicked ? (
        <>
          <Hero />
          <Tshirts />
          <Pants />
          <MoreItems />
        </>
      ) : null}
    </div>
  );
}
