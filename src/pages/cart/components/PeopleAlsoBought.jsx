import React from "react";
import ProductCard from "../../../components/product/ProductItem";

export default function PeopleAlsoBought() {
  return (
    <div className="hidden xl:mt-8 xl:block">
      <h3 className="text-2xl font-semibold text-gray-900 ">
        People also bought
      </h3>
      <div className="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
        <ProductCard />
      </div>
    </div>
  );
}
