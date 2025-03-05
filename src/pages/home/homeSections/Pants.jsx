import React from "react";
import TransparentButton from "../../../components/common/TransparentButton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Pants() {
  const gender = useSelector((state) => state.auth.gender);

  return (
    <div
      className={`${
        gender === "men"
          ? "bg-pants-men-sm md:bg-pants-men"
          : "bg-dresses-women-sm md:bg-dresses-women"
      } min-h-screen bg-cover bg-no-repeat bg-center  relative`}
    >
      <Link to={`${gender === "men" ? "/men-pants" : "/women-dresses"}`}>
        <TransparentButton
          buttonText={`${gender === "men" ? "Pants" : "Dresses"}`}
        />
      </Link>
    </div>
  );
}
