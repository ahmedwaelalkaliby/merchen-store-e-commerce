import React, { useEffect } from "react";

// components
import ProductItem from "../../../components/product/ProductItem";
import ReactLoading from "react-loading";
import ProductsContainer from "../../../components/common/ProductsContainer";

// redux
import { useSelector, useDispatch } from "react-redux";

// store
import { fetchWomenData } from "../../../store/slices/fetchingWomenDataSlice";

import { collection } from "firebase/firestore";
import { db } from "../../../services/firebaseConfig";

export default function WomenVests() {
  const dispatch = useDispatch();
  const womenVests = useSelector((state) => state.fetchingWomenData.womenVests);
  const loading = useSelector(
    (state) => state.fetchingWomenData.fetchingWomenVestsStates.loading
  );
  const womenVestsCollectionRef = collection(db, "womenVests");

  useEffect(() => {
    dispatch(fetchWomenData("womenVests", womenVestsCollectionRef));
  }, [dispatch]);

  return (
    <ProductsContainer>
      {!loading ? (
        <>
          <div className="w-fit mx-auto  flex items-center gap-3">
            <span className="text-xl font-bold">Vests</span>
            <span className="text-md font-bold"> / </span>
            <span className="text-xl font-bold text-gray-300">
              {womenVests.length} items
            </span>
          </div>
          <div
            className={`mt-8 sm:mt-14 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10 sm:gap-x-0 md:gap-x-5 md:gap-y-12 xl:gap-x-0 2xl:gap-x-5 w-full px-4 sm:px-6 md:px-8 lg:px-10 `}
          >
            {womenVests.map((product) => (
              <ProductItem
                product={{
                  ...product,
                  count: 1,
                }}
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
