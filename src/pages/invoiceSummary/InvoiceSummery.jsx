import React from "react";
import { useSelector } from "react-redux";
import SummaryProductItem from "../../components/product/SummaryProductItem";

export default function InvoiceSummery({ user }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const orderSummary = useSelector((state) => state.cart.orderSummary);

  return (
    <section className="mt-[150px] mb-20 ">
      <div className="w-full max-w-7xl px-3 md:px-3.5 lg-4 mx-auto">
        <h2 className="font-manrope font-bold text-xl sm:text-lg leading-7 text-black mb-8">
          Your Order Confirmed, Thank you for shopping with us!
        </h2>
        <h6 className="font-medium text-lg leading-6 text-black mb-2">
          Hello, {user.name}
        </h6>
        <p className="font-normal text-base leading-6 text-gray-500 mb-8">
          Your order has been completed and will be delivered in only two days.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-5 py-4 border-y border-gray-100 mb-4">
          <div className="box group">
            <p className="font-normal text-sm leading-5 text-gray-500 mb-2 transition-all duration-500 group-hover:text-gray-700">
              Delivery Date
            </p>
            <h6 className="font-semibold font-manrope text-base leading-6 text-black">
              Dec 01, 2023
            </h6>
          </div>
          <div className="box group">
            <p className="font-normal text-sm leading-5 text-gray-500 mb-2 transition-all duration-500 group-hover:text-gray-700">
              Order
            </p>
            <h6 className="font-semibold font-manrope text-base leading-6 text-black">
              #1023498789
            </h6>
          </div>
          <div className="box group">
            <p className="font-normal text-sm leading-5 text-gray-500 mb-2 transition-all duration-500 group-hover:text-gray-700">
              Payment Method
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="32"
              viewBox="0 0 46 32"
              fill="none"
            >
              <rect
                x="0.5"
                y="0.5"
                width="40"
                height="25"
                rx="5.5"
                fill="#1F72CD"
              />
              <rect
                x="0.5"
                y="0.5"
                width="45"
                height="31"
                rx="5.5"
                stroke="#F3F4F6"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.1282 11.333L3.88672 20.9953H8.96437L9.59385 19.4548H11.0327L11.6622 20.9953H17.2512V19.8195L17.7493 20.9953H20.6404L21.1384 19.7947V20.9953H32.7621L34.1755 19.4948L35.4989 20.9953L41.4691 21.0078L37.2143 16.1911L41.4691 11.333H35.5915L34.2157 12.8058L32.9339 11.333H20.2888L19.203 13.8269L18.0917 11.333H13.0246V12.4688L12.461 11.333H8.1282ZM9.1107 12.7051H11.5858L14.3992 19.2571V12.7051H17.1105L19.2835 17.4029L21.2862 12.7051H23.984V19.6384H22.3424L22.329 14.2055L19.9358 19.6384H18.4674L16.0607 14.2055V19.6384H12.6837L12.0435 18.0841H8.58456L7.94566 19.6371H6.13627L9.1107 12.7051ZM32.1608 12.7051H25.4859V19.6343H32.0574L34.1755 17.3379L36.217 19.6343H38.3512L35.2493 16.1898L38.3512 12.7051H36.3096L34.2023 14.9752L32.1608 12.7051ZM10.3147 13.8782L9.17517 16.6471H11.453L10.3147 13.8782ZM27.1342 15.4063V14.1406V14.1394H31.2991L33.1165 16.1636L31.2186 18.1988H27.1342V16.817H30.7756V15.4063H27.1342Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="box group">
            <p className="font-normal text-sm leading-5 text-gray-500 mb-2 transition-all duration-500 group-hover:text-gray-700">
              Address
            </p>
            <h6 className="font-semibold font-manrope text-base leading-6 text-black">
              718 Robbyn Meadow, S...
            </h6>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          {cartItems.map((item) => {
            return (
              <SummaryProductItem
                title={item.title}
                image={item.image}
                price={item.price}
                count={item.count}
              />
            );
          })}
        </div>
        {/* summery  */}
        <div className="flex items-center justify-center sm:justify-end w-full my-4">
          <div className="w-full">
            <div className="flex items-center justify-between mb-4">
              <p className="font-normal text-sm leading-6 text-gray-500">
                Subtotal
              </p>
              <p className="font-semibold text-sm leading-6 text-gray-900">
                ${orderSummary.total - 8}
              </p>
            </div>
            <div className="flex items-center justify-between mb-4">
              <p className="font-normal text-lg leading-6 text-gray-500">
                Shipping Charge
              </p>
              <p className="font-semibold text-sm leading-6 text-gray-900">
                $8.00
              </p>
            </div>
            <div className="flex items-center justify-between mb-4">
              <p className="font-normal text-sm leading-6 text-gray-500">
                Taxes
              </p>
              <p className="font-semibold text-sm leading-6 text-gray-900">
                ${orderSummary.tax}
              </p>
            </div>
            <div className="flex items-center justify-between mb-4">
              <p className="font-normal text-sm leading-6 text-gray-500">
                Discount
              </p>
              <p className="font-semibold text-sm leading-6 text-gray-900">
                ${orderSummary.savings}
              </p>
            </div>
            <div className="flex items-center justify-between py-4 border-y border-gray-100">
              <p className="font-manrope font-semibold text-xl leading-6 text-gray-900">
                Total
              </p>
              <p className="font-manrope font-bold text-lg leading-6 text-indigo-600">
                ${orderSummary.total}
              </p>
            </div>
          </div>
        </div>
        <div className="data">
          <p className="font-normal text-base leading-6 text-gray-500 mb-8">
            We'll be sending a shipping confirmation email when the items have
            been successfully shipped.
          </p>

          <p className="font-medium text-lg leading-6 text-indigo-600">
            Discover more products
          </p>
        </div>
      </div>
    </section>
  );
}
