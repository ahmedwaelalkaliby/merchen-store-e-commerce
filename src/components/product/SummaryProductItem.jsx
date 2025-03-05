import React from "react";

export default function SummaryProductItem({ title, image, price, count }) {
  return (
    <div className="grid grid-cols-7 gap-2.5 w-full items-start border-b pb-1.5 border-gray-100">
      <div className="col-span-7 md:col-span-1">
        <img src={image} alt="Product Image" className="w-full" />
      </div>
      <div className="col-span-7 min-[500px]:col-span-5 md:col-span-6 min-[500px]:pl-3.5 max-sm:mt-3.5 flex flex-col justify-center">
        <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center justify-between">
          <div className="">
            <h5 className="font-manrope font-semibold text-xs leading-6 text-black mb-4.5">
              {title}
            </h5>
            <p className="font-normal text-xs leading-6 text-gray-500">
              <span className="text-black font-semibold">
                Quantity: {count}
              </span>
            </p>
          </div>

          <h5 className="font-manrope font-semibold text-sm leading-7.5 text-black mt-2">
            ${price}
          </h5>
        </div>
      </div>
    </div>
  );
}
