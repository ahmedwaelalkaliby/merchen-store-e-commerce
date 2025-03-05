import { useSelector } from "react-redux";
import React from "react";
import CartItem from "./components/CartItem";
import CartSummery from "./components/CartSummery";
import PeopleAlsoBought from "./components/PeopleAlsoBought";
import CartIsEmpty from "./components/CartIsEmpty";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <section className=" py-40 antialiased min-h-screen ">
      {cartItems.length ? (
        <div className="mx-auto px-4 2xl:px-0">
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8 w-full md:w-10/12 lg:w-full  mx-auto ">
            <div className="w-full lg:w-11/12 mx-auto">
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl mb-5">
                Shopping Cart
              </h2>
              <div className="lg:flex lg:w-11/12 mx-auto gap-5">
                <div className="flex flex-col gap-3 md:gap-5  lg:w-1/2 xl:w-2/3">
                  {cartItems.map((cartItem) => {
                    return <CartItem product={cartItem} key={cartItem.id} />;
                  })}
                </div>
                {/* <PeopleAlsoBought /> */}
                <CartSummery />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <CartIsEmpty />
      )}
    </section>
  );
}
