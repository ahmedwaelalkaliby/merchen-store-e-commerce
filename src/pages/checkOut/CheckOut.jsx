import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckOutForm from "../../components/forms/CheckOutForm";
import ShippingMethodForm from "../../components/forms/ShippingMethodForm";
import CheckoutProductItem from "../../components/product/CheckoutProductItem";
export default function CheckOut() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const orderSummary = useSelector((state) => state.cart.orderSummary);

  return (
    <div className="mt-[150px] mb-20">
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>

          {/* products  */}
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {cartItems.map((item) => {
              return (
                <CheckoutProductItem
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  count={item.count}
                  key={item.title}
                />
              );
            })}
          </div>

          <p className="mt-8 text-lg font-medium">Shipping Methods</p>
          <ShippingMethodForm />
        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <CheckOutForm />
          {/* <!-- order summery --> */}
          <div className="space-y-4 mt-10">
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
                <dt className="text-base font-normal text-gray-500 ">
                  Savings
                </dt>
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

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 ">
                  shipping
                </dt>
                <dd className="text-base font-medium text-gray-900">$8</dd>
              </dl>
            </div>

            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
              <dt className="text-base font-bold text-gray-900 ">Total</dt>
              <dd className="text-base font-bold text-gray-900 ">
                ${orderSummary.total}
              </dd>
            </dl>
          </div>

          <Link to={"/summery"}>
            <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
              Place Order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
