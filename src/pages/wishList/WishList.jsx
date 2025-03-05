import React from "react";
import ProductItem from "../../components/product/ProductItem";
import { useSelector } from "react-redux";
import WishListsEmpty from "./WishListsEmpty";

export default function WishList() {
  const wishListItems = useSelector((state) => state.wishList.wishListItems);
  return (
    <section className="min-h-screen bg-white py-40 antialiased">
      {wishListItems.length ? (
        <div
          className={`mt-8 sm:mt-14 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10 sm:gap-x-0 md:gap-x-5 md:gap-y-12 xl:gap-x-0 2xl:gap-x-5 w-full px-4 sm:px-6 md:px-8 lg:px-10 `}
        >
          {wishListItems.map((wishListItem) => {
            return <ProductItem product={wishListItem} key={wishListItem.id} />;
          })}
        </div>
      ) : (
        <WishListsEmpty />
      )}
    </section>
  );
}
