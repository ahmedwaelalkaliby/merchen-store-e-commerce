import React from "react";
import { Link } from "react-router-dom";

export default function WishListsEmpty() {
  return (
    <div className="w-1/2 mx-auto text-center flex flex-col gap-5 mt-20">
      <h2 className="text-3xl font-bold">Your wishlist is empty</h2>
      <p className="text-lg tracking-wide">
        Check if there are any products in your cart and snatch them up before
        they’re gone! You can also check out the latest arrivals ;)
      </p>
      <div className="flex flex-col gap-5 justify-center items-center">
        <Link
          className="bg-white border border-black rounded-full py-4 px-20 w-fit font-bold"
          to={"/cart"}
        >
          View basket
        </Link>
        <Link to={"/newArrival"}>
          <button className="text-white bg-black  rounded-full py-4 px-20 w-fit font-bold">
            See New Items
          </button>
        </Link>
      </div>
    </div>
  );
}
