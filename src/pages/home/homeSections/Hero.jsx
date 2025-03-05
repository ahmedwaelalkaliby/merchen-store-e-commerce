import React from "react";
import TransparentButton from "../../../components/common/TransparentButton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Hero() {
  const gender = useSelector((state) => state.auth.gender);
  return (
    <section className="h-[48rem] relative min-h-screen ">
      <Link to={"/newArrival"}>
        <TransparentButton buttonText={"New in"} />
      </Link>

      <div
        className={`${
          gender === "men"
            ? "bg-hero-image-men-sm md:bg-hero-image-men"
            : "bg-hero-image-women-sm md:bg-hero-image-women"
        } min-h-screen bg-no-repeat bg-cover bg-center `}
      ></div>
    </section>
  );
}
