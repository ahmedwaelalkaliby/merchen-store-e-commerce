import React from "react";
import { Link } from "react-router-dom";
export default function WomenClothingCategories() {
  return (
    <div>
      <ul className="flex flex-col gap-2 xl:gap-2 text-sm xl:text-[0.98rem] 2xl:text-[1rem]">
        <li className="hover:translate-x-2 duration-300">
          <Link to={"/women-tops"}>Tops and bodysuits</Link>
        </li>
        <li className="hover:translate-x-2 duration-300">
          <Link to={"/women-tshirts"}>T-Shirts</Link>
        </li>
        <li className="hover:translate-x-2 duration-300">
          <Link to={"/women-dresses"}>Dresses</Link>
        </li>
        <li className="hover:translate-x-2 duration-300">
          <Link to={"/women-jeans"}>Jeans</Link>
        </li>
        <li className="hover:translate-x-2 duration-300">
          <Link to={"/women-pants"}>Pants</Link>
        </li>
        <li className="hover:translate-x-2 duration-300">
          <Link to={"/women-skirts"}>Skirts</Link>
        </li>
        <li className="hover:translate-x-2 duration-300">
          <Link to={"/women-shorts"}>Shorts and bermuda shorts</Link>
        </li>
        <li className="hover:translate-x-2 duration-300">
          <Link to={"/women-blouses"}>Shirts and blouses</Link>
        </li>
        <li className="hover:translate-x-2 duration-300">
          <Link to={"/women-bikinis"}>Bikinis and bathing suits</Link>
        </li>
        <li className="hover:translate-x-2 duration-300">
          <Link to={"/women-jumpsuits"}>Overalls and jumpsuits</Link>
        </li>{" "}
        <li className="hover:translate-x-2 duration-300">
          <Link to={"/women-hoodies"}>Sweatshirts & Hoodies</Link>
        </li>{" "}
        <li className="hover:translate-x-2 duration-300">
          <Link to={"/women-jackets"}>Jackets</Link>
        </li>{" "}
        {/* <li className="hover:translate-x-2 duration-300">
          <Link to={"/women-total-look"}>Total look</Link>
        </li> */}
        <li className="hover:translate-x-2 duration-300">
          <Link to={"/women-knitwear"}>Knitwear</Link>
        </li>{" "}
        <li className="hover:translate-x-2 duration-300">
          <Link to={"/women-vests"}>Vests</Link>
        </li>{" "}
        <li className="hover:translate-x-2 duration-300">
          <Link to={"/women-blazers"}>Blazers and suits</Link>
        </li>
        <li className="hover:translate-x-2 duration-300">
          <Link to={"/women-lingerie"}>Lingerie</Link>
        </li>{" "}
        <li className="hover:translate-x-2 duration-300">
          <Link to={""}>Best sellers 🖤</Link>
        </li>
      </ul>
    </div>
  );
}
