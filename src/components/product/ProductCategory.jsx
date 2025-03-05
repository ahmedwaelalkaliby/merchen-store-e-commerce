import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import ReactLoading from "react-loading";
import ProductsContainer from "../common/ProductsContainer";
import { useSelector, useDispatch } from "react-redux";
import { collection } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import { fetchWomenData } from "../../store/slices/fetchingWomenDataSlice";
import { fetchMenData } from "../../store/slices/fetchingMenDataSlice";

function ProductCategory({ categoryName, collectionName, gender }) {
  const dispatch = useDispatch();
  const products = useSelector(
    (state) => state.fetchingWomenData[collectionName]
  );
  const loading = useSelector(
    (state) => state.fetchingWomenData[`fetching${categoryName}States`].loading
  );
  const collectionRef = collection(db, collectionName);

  useEffect(() => {
    gender === "women"
      ? dispatch(fetchWomenData(collectionName, collectionRef))
      : dispatch(fetchMenData(collectionName, collectionRef));
  }, [dispatch]);

  return (
    <ProductsContainer>
      {!loading ? (
        <>
          <div className="w-fit mx-auto flex items-center gap-3">
            <span className="text-xl font-bold">{categoryName}</span>
            <span className="text-md font-bold"> / </span>
            <span className="text-xl font-bold text-gray-300">
              {products.length} items
            </span>
          </div>
          <div
            className={`mt-8 sm:mt-14 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10 sm:gap-x-0 md:gap-x-5 md:gap-y-12 xl:gap-x-0 2xl:gap-x-5 w-full px-4 sm:px-6 md:px-8 lg:px-10 `}
          >
            {products.map((product) => (
              <ProductItem
                product={{ ...product, count: 1 }}
                key={product.id}
              />
            ))}
          </div>
        </>
      ) : (
        <ReactLoading type="bubbles" color="black" className="mx-auto mt-24" />
      )}
    </ProductsContainer>
  );
}

export default ProductCategory;
