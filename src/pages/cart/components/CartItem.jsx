import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { updateCartProducts } from "../../../store/slices/cartSlice";
import { handleToggleWishListItem } from "../../../store/slices/wishListSlice";

export default function CartItem({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishListItems = useSelector((state) => state.wishList.wishListItems);

  function incrementProduct() {
    const newCartItems = cartItems.map((item) => {
      if (item.id === product.id) {
        return { ...item, count: item.count + 1 };
      } else {
        return item;
      }
    });

    dispatch(updateCartProducts(newCartItems));
  }

  function decrementProduct() {
    const newCartItems = cartItems
      .map((item) => {
        if (item.id === product.id) {
          if (item.count > 1) {
            return { ...item, count: item.count - 1 };
          } else {
            // Remove the item from the cart if count is 1 or less
            return null;
          }
        }
        return item;
      })
      .filter((item) => item !== null); // Filter out any null items

    dispatch(updateCartProducts(newCartItems));
  }

  function removeProduct(id) {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    dispatch(updateCartProducts(newCartItems));
  }

  function moveToWishList(cartItem) {
    const itemExists = wishListItems.some(
      (currWishItem) => currWishItem.id === cartItem.id
    );
    if (!itemExists) {
      dispatch(handleToggleWishListItem(cartItem));
      removeProduct(cartItem.id);
      toast.success(`Product moved to wishlist successfully`, {
        autoClose: 5000,
        className: "w-[20rem] ",
        draggable: true,
      });
    } else {
      toast.error(`Product is already in your wishlist`, {
        autoClose: 5000,
        className: "w-[20rem] ",
        draggable: true,
      });
    }
  }

  return (
    <div
      className="rounded-lg border border-gray-200 w-full  2xl:p-4 shadow-sm "
      key={product.id}
    >
      <div className="flex gap-5 ">
        {/* image */}
        <div className="flex items-start gap-4 w-1/3  xl:w-1/4 h-full">
          <Link
            className="w-full"
            to={`/product-details/${product.title}`}
            state={product}
          >
            <img
              className="h-56 md:h-64 w-full 2xl:h-full 2xl:w-18 "
              src={product.image}
              alt="imac image"
            />
          </Link>
        </div>
        {/* title  */}
        <div className="flex flex-col gap-5  pt-5">
          <Link
            to={`/product-details/${product.title}`}
            state={product}
            className="text-base font-medium text-gray-900 hover:underline "
          >
            {product.title}
          </Link>

          {/* price  */}
          <div>
            <p className="text-base font-bold text-gray-900 ">
              {Number((product.price * product.count).toFixed(2))} $
            </p>
          </div>

          {/* inc and dec buttons */}
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-4">
              <button
                type="button"
                id="decrement-button"
                onClick={decrementProduct}
                data-input-counter-decrement="counter-input"
                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 "
              >
                <svg
                  className="h-2.5 w-2.5 text-gray-900 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 2"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h16"
                  />
                </svg>
              </button>

              <span>{product.count}</span>
              <button
                onClick={incrementProduct}
                type="button"
                id="increment-button"
                data-input-counter-increment="counter-input"
                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 "
              >
                <svg
                  className="h-2.5 w-2.5 text-gray-900 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* move and delete  */}
          <div className="w-full ">
            <div className="flex  justify-between gap-4  mt-10  md:mt-16 xl:mt-28 mx-auto w-full">
              <button
                onClick={() => moveToWishList(product)}
                type="button"
                className="flex items-center text-sm  hover:underline"
              >
                <svg
                  className="me-1.5 h-5 w-5 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                  />
                </svg>
                Move to Favorites
              </button>

              <button
                type="button"
                className="inline-flex items-center text-sm font-medium text-red-600 hover:underline "
                onClick={() => removeProduct(product.id)}
              >
                <svg
                  className="me-1.5 h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18 17.94 6M18 18 6.06 6"
                  />
                </svg>
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
