import React from "react";
import MoreItmesButton from "../../../components/common/MoreItmesButton";
export default function MoreItems() {
  return (
    <div className="bg-more-items-men-sm lg:bg-more-itmes bg-cover  bg-no-repeat h-screen lg:h-[33rem] relative ">
      <div
        id="overlay"
        className="hidden lg:block absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70"
      >
        <h2 className="text-center text-4xl tracking-wider font-bold text-white  flex flex-col py-12">
          <span>More itmes added</span>
          <span className="mb-3">Further Reductions</span>
          <span className="font-extrabold text-6xl">Up to-50%</span>
        </h2>
        <p className="text-center text-white text-lg font-bold mb-8">
          In store and online
        </p>
        <div className="flex flex-col items-center gap-8 mb-4">
          <div className="flex justify-center gap-8 ">
            <MoreItmesButton buttonText={"T-shirt & Polo shirts"} />
            <MoreItmesButton buttonText={"Bermuda shorts"} />
            <MoreItmesButton buttonText={"Jeans and Pants"} />
            <MoreItmesButton buttonText={"Sweatshirts"} />
            <MoreItmesButton buttonText={"Shirts"} />
            <MoreItmesButton buttonText={"Shoes"} />
          </div>
          <div>
            <MoreItmesButton buttonText={"See favourites"} />
          </div>
        </div>
        <p className="text-white text-right px-2 text-xs mt-16 tracking-wide">
          *Cannot be combined with other promotions. Discount applied to
          seasonal prices. On selected itmes
        </p>
      </div>
    </div>
  );
}
