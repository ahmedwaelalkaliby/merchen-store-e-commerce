import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectCheckOutRoute({ children }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems.length);
  return cartItems.length ? children : <Navigate to={"/cart"} />;
}
