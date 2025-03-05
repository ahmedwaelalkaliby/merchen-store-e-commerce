import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { calcCartSummery } from "../../../store/slices/cartSlice";
export default function CartSummery() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orderSummary = useSelector((state) => state.cart.orderSummary);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const gender = useSelector((state) => state.auth.gender);
  const { isAuthenticated } = useSelector((state) => state.auth.user);
  function calcCartSummary() {
    const originalPrice = Number(
      cartItems.reduce((acc, curr) => curr.price * curr.count + acc, 0)
    );
    const savings = 0;
    const storePickup = 0;
    const tax = Number((originalPrice * 25) / 100);
    const total = Number(originalPrice + tax + storePickup - savings);

    dispatch(
      calcCartSummery({
        originalPrice: originalPrice.toFixed(2),
        savings: savings.toFixed(2),
        storePickup: storePickup.toFixed(2),
        tax: tax.toFixed(2),
        total: total.toFixed(2),
      })
    );
  }

  useEffect(() => {
    calcCartSummary();
  }, [cartItems]);

  function checkOut() {
    if (!isAuthenticated) {
      navigate("/login", { state: { from: { pathname: "/cart" } } });
    } else {
      navigate("/checkout");
    }
  }

  return (
    <div className="mx-auto mt-6 space-y-6 lg:mt-0 w-full lg:w-1/2 ">
      <Link
        to={"/wishlist"}
        className="flex w-full items-center  justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white  bg-black"
      >
        Go to your wish list
      </Link>
      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm  sm:p-6">
        <p className="text-xl font-semibold text-gray-900 ">Order summary</p>

        <div className="space-y-4">
          <div className="space-y-2">
            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 ">
                Original price
              </dt>
              <dd className="text-base font-medium text-gray-900 ">
                ${orderSummary.originalPrice}
              </dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 ">Savings</dt>
              <dd className="text-base font-medium text-green-600">
                -${orderSummary.savings}
              </dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 ">
                Store Pickup
              </dt>
              <dd className="text-base font-medium text-gray-900 ">
                ${orderSummary.storePickup}
              </dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 ">Tax</dt>
              <dd className="text-base font-medium text-gray-900 ">
                ${orderSummary.tax}
              </dd>
            </dl>
          </div>

          <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
            <dt className="text-base font-bold text-gray-900 ">Total</dt>
            <dd className="text-base font-bold text-gray-900 ">
              {orderSummary.total}
            </dd>
          </dl>
        </div>

        <button
          onClick={checkOut}
          href="#"
          className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white bg-green-600"
        >
          Proceed to Checkout
        </button>

        <div className="flex items-center justify-center gap-2">
          <span className="text-sm font-normal text-gray-500 "> or </span>
          <Link to={`/${gender}`}>
            <p className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline ">
              Continue Shopping
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </p>
          </Link>
        </div>
      </div>

      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm  sm:p-6">
        <form className="space-y-4">
          <div>
            <label
              htmlFor="voucher"
              className="mb-2 block text-sm font-medium text-gray-900 "
            >
              Do you have a voucher or gift card?
            </label>
            <input
              type="text"
              id="voucher"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 "
              placeholder=""
              required
            />
          </div>
          <button
            type="submit"
            className="flex w-full items-center  justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 bg-black"
          >
            Apply Code
          </button>
        </form>
      </div>
    </div>
  );
}
