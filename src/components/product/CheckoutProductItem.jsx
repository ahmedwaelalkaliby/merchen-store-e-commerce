import React from "react";

export default function CheckoutProductItem({ title, image, price, count }) {
  return (
    <div className="flex flex-col rounded-lg bg-white sm:flex-row">
      <img
        className="m-2 h-32 w-28 rounded-md border object-cover object-center"
        src={image}
        alt=""
      />
      <div className="flex w-full flex-col px-4 py-4">
        <span className="font-semibold">{title}</span>
        <p>Quantity: {count}</p>
        <p className="mt-auto text-lg font-bold">${price}</p>
      </div>
    </div>
  );
}
