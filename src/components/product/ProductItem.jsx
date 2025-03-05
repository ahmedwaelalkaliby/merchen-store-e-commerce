import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { handleToggleWishListItem } from "../../store/slices/wishListSlice";
import { handleUpdateCartProducts } from "../../store/slices/cartSlice";
import { BiSolidHeart } from "react-icons/bi";
import CustomDropdown from "../common/CustomDropdown";

import { Link } from "react-router-dom";
import { hideSearchComponent } from "../../store/slices/layoutsSlice";

export default function ProductCard({
  product = {
    title: "Contrast STWD sweatpants",
    price: 45.9,
    image:
      "https://static.pullandbear.net/assets/public/8133/a7be/fa2f44b793e4/d3776f537a26/0767950740001-E/0767950740001-E.jpg?ts=1722334078654&w=850",
    id: 1,
    galleryImages: [
      "https://static.pullandbear.net/assets/public/8133/a7be/fa2f44b793e4/d3776f537a26/0767950740001-E/0767950740001-E.jpg?ts=1722334078654&w=850",
    ],
  },
}) {
  const { title, price, image, id, count, galleryImages } = product;
  const [isMouseIn, setIsMouseIn] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const dispatch = useDispatch();
  const wishListItems = useSelector((state) => state.wishList.wishListItems);
  const searchButtonClicked = useSelector(
    (state) => state.layouts.searchButtonClicked
  );

  const isProductInWishList = wishListItems.some(
    (wishItem) => wishItem.id === id
  );

  function handleAddNewItemToCart() {
    dispatch(
      handleUpdateCartProducts({
        title,
        price,
        image,
        id,
        count,
        galleryImages,
      })
    );
  }

  function toggleWishListItem() {
    dispatch(
      handleToggleWishListItem({
        title,
        price,
        image,
        id,
        count,
        galleryImages,
      })
    );
  }

  function showAddButton() {
    setIsMouseIn(true);
  }

  function hideAddButton() {
    setIsMouseIn(false);
  }

  function hideSearchComponentAfterClickOnProduct() {
    if (searchButtonClicked) {
      dispatch(hideSearchComponent(false));
    }
  }

  return (
    <article
      className="w-full sm:w-11/12 md:w-full xl:w-11/12 2xl:w-full mx-auto relative text-center "
      onMouseLeave={hideAddButton}
      onMouseEnter={showAddButton}
    >
      <Link
        to={`/product-details/${title}`}
        state={product}
        onClick={hideSearchComponentAfterClickOnProduct}
      >
        <div className="w-full">
          <img
            src={image}
            alt={title}
            className="w-full h-[320px] sm:h-[390px] lg:h-[450px] xl:h-[450px] 2xl:h-[560px] object-fit"
          />
        </div>
      </Link>
      <div
        className={`absolute bottom-14 sm:bottom-[4.5rem] lg:bottom-14 w-11/12 mx-auto left-0 right-0 transform  text-xs duration-150 flex transition-all ${
          isMouseIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-1/2">
          <CustomDropdown
            options={["xs", "S", "M", "L", "XL"]}
            selected={selectedOption}
            onSelect={handleSelect}
          />
        </div>
        <button
          className="w-1/2 bg-black text-white text-xs px-1 py-1"
          onClick={handleAddNewItemToCart}
        >
          Add
        </button>
      </div>

      <div className="flex justify-between items-center mt-4">
        <Link
          to={`/product-details/${title}`}
          state={product}
          className="flex-1 text-center"
          onClick={hideSearchComponentAfterClickOnProduct}
        >
          <div>
            <p className="text-[0.6rem] md:text-xs">{title}</p>
            <p className="text-xs sm:text-sm font-bold">{price}$</p>
          </div>
        </Link>
        <div
          className="bg-white shadow-lg rounded-full p-2 ml-4  cursor-pointer"
          onClick={toggleWishListItem}
        >
          {isProductInWishList ? (
            <BiSolidHeart
              fill="red"
              className="text-md md:text-lg xl:text-xl"
            />
          ) : (
            <CiHeart className="text-md md:text-lg xl:text-xl" />
          )}
        </div>
      </div>
    </article>
  );
}
