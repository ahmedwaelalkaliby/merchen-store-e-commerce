import React, { useEffect, useRef, useState } from "react";
// components
import ProductItem from "../product/ProductItem";
import ReactLoading from "react-loading";
import { IoSearch } from "react-icons/io5";

import styles from "./Search.module.css";

// redux
import { useDispatch, useSelector } from "react-redux";

// store
import { fetchGeneralData } from "../../store/slices/generalFetchingDataSlice";
import { collection } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

export default function Search() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const searchInput = useRef(null);

  const searchButtonClicked = useSelector(
    (state) => state.layouts.searchButtonClicked
  );
  const loading = useSelector(
    (state) => state.fecthingGeneralData.fetchingSuggestedProductsStates.loading
  );
  const suggestedProducts = useSelector(
    (state) => state.fecthingGeneralData.suggestedProducts
  );
  const gender = useSelector((state) => state.auth.gender);

  const menSuggestedProductsCollectionRef = collection(
    db,
    "menSuggestedProducts"
  );
  const womenSuggestedProductsCollectionRef = collection(
    db,
    "womenSuggestedProducts"
  );

  useEffect(() => {
    dispatch(
      fetchGeneralData(
        "suggestedProducts",
        menSuggestedProductsCollectionRef,
        womenSuggestedProductsCollectionRef
      )
    );
  }, [dispatch, gender]);

  useEffect(() => {
    const searchResults = suggestedProducts.filter((product) =>
      product.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredProducts(searchResults);
  }, [inputValue, suggestedProducts]);

  const togglePlaceholderVisibility = () => {
    searchInput.current.classList.toggle(styles.hiddenPlaceholder);
  };

  return (
    <div
      className={`bg-white absolute z-40 duration-1000 w-full pt-40 pb-10 min-h-screen ${
        searchButtonClicked ? "translate-y-0" : "-translate-y-[120%] delay-500"
      }`}
    >
      <div
        className={`w-11/12 mx-auto ${
          searchButtonClicked ? "opacity-100" : ""
        } duration-300 opacity-0`}
      >
        <div className={`relative`}>
          <input
            type="search"
            ref={searchInput}
            placeholder="What are you looking for"
            onBlur={togglePlaceholderVisibility}
            onFocus={togglePlaceholderVisibility}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className={`text-2xl font-bold placeholder:duration-200 border-b-2 border-l-gray-600 outline-none w-full py-3 px-6 placeholder:text-gray-400 placeholder:text-3xl placeholder:font-bold placeholder:tracking-wider `}
          />
          <IoSearch className="absolute top-2 -left-5" size={30} />
        </div>
        {!loading ? (
          <div className={`mt-14 grid grid-cols-4 gap-12 w-full`}>
            {filteredProducts.map((product) => (
              <ProductItem
                product={{
                  ...product,
                  count: 1,
                }}
                key={product.id}
              />
            ))}
          </div>
        ) : (
          <ReactLoading
            type="bubbles"
            color="black"
            className="mx-auto mt-24"
          />
        )}
      </div>
    </div>
  );
}
