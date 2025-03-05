import React from "react";
import TransparentButton from "../../../components/common/TransparentButton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Tshirts() {
  const gender = useSelector((state) => state.auth.gender);

  return (
    <div
      className={`${
        gender === "men"
          ? "bg-t-shirt-men-sm md:bg-t-shirt-men"
          : "bg-tops-women-sm md:bg-tops-women"
      } min-h-screen bg-cover bg-no-repeat bg-center  relative`}
    >
      <Link to={`${gender === "men" ? "/men-tshirts" : "/women-tops"} `}>
        <TransparentButton
          buttonText={`${gender === "men" ? "T-shirts" : "Tops"}`}
        />
      </Link>
    </div>
  );
}
