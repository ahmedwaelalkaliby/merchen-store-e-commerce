import React from "react";
import { Link } from "react-router-dom";
export default function MenClothingCategories() {
  return (
    <div>
      <ul className="flex flex-col gap-2 xl:gap-2 text-sm xl:text-[0.98rem] 2xl:text-[1rem]">
        <li className="hover:translate-x-2 duration-300 ">
          <Link to={"/men-jeans"}>Jeans</Link>
        </li>
        <li className="hover:translate-x-2 duration-300">
          <Link to={"/men-pants"}>Pants</Link>
        </li>
        <li className="hover:translate-x-2 duration-300">
          <Link to={"/men-tshirts"}>T-Shirts</Link>
        </li>
        <li className="hover:translate-x-2 duration-300">
          <Link to={"/men-shorts"}>Shorts</Link>
        </li>
        <li className="hover:translate-x-2 duration-300">
          <Link to={"/men-hoodies"}>Sweatshirts & Hoodies</Link>
        </li>
        <li className="hover:translate-x-2 duration-300">
          <Link to={"/men-shirts"}>Shirts</Link>
        </li>
        <li className="hover:translate-x-2 duration-300">
          <Link to={"/men-jackets"}>Jackets</Link>
        </li>
        <li className="hover:translate-x-2 duration-300">
          <Link to={"/men-swimwear"}>Swimwear</Link>
        </li>{" "}
        <li className="hover:translate-x-2 duration-300">
          <Link to={"/men-kint"}>Knit</Link>
        </li>{" "}
        <li className="hover:translate-x-2 duration-300">
          <Link to={"/men-underwear"}>Underwear</Link>
        </li>{" "}
        <li className="hover:translate-x-2 duration-300">
          <Link to={"/men-packs"}>Packs</Link>
        </li>
        <li className="hover:translate-x-2 duration-300">
          <Link to={""}>Best sellers 🖤</Link>
        </li>
      </ul>
    </div>
  );
}
