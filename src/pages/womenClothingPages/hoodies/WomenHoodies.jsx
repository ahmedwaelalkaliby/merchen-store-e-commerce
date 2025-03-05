import React, { useEffect } from "react";
import ProductItem from "../../../components/product/ProductItem";
import ReactLoading from "react-loading";
import ProductsContainer from "../../../components/common/ProductsContainer";
import { useSelector, useDispatch } from "react-redux";
import { collection } from "firebase/firestore";
import { db } from "../../../services/firebaseConfig";
import { fetchWomenData } from "../../../store/slices/fetchingWomenDataSlice";

export default function WomenHoodies() {
  const dispatch = useDispatch();
  const womenHoodies = useSelector(
    (state) => state.fetchingWomenData.womenHoodies
  );
  const loading = useSelector(
    (state) => state.fetchingWomenData.fetchingWomenHoodiesStates.loading
  );
  const womenHoodiesCollectionRef = collection(db, "womenHoodies");

  useEffect(() => {
    dispatch(fetchWomenData("womenHoodies", womenHoodiesCollectionRef));
  }, [dispatch]);

  return (
    <ProductsContainer>
      {!loading ? (
        <>
          <div className="w-fit mx-auto flex items-center gap-2 sm:gap-3">
            <span className="text-lg sm:text-xl font-bold">Hoodies</span>
            <span className="text-sm sm:text-md font-bold"> / </span>
            <span className="text-lg sm:text-xl font-bold text-gray-300">
              {womenHoodies.length} items
            </span>
          </div>
          <div
            className={`mt-8 sm:mt-14 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10 sm:gap-x-0 md:gap-x-5 md:gap-y-12 xl:gap-x-0 2xl:gap-x-5 w-full px-4 sm:px-6 md:px-8 lg:px-10 `}
          >
            {womenHoodies.map((product) => (
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
