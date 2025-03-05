// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import MenClothingCategories from "../clothingCategorySidebar/MenClothingCategories";
// import WomenClothingCategories from "../clothingCategorySidebar/WomenClothingCategories";
// import {
//   showProductCategories,
//   showClothingCategories,
// } from "../../../../store/slices/layoutsSlice";
// import { changeGender } from "../../../../store/slices/authSlice";
// export default function ProductCategories() {
//   const dispatch = useDispatch();
//   const showClothingCategoriesState = useSelector(
//     (state) => state.layouts.showClothingCategories
//   );

//   const gender = useSelector((state) => state.auth.gender);
//   useEffect(() => {
//     const handleScroll = () => {
//       hideProductCategories();
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const showProductCategoriesState = useSelector(
//     (state) => state.layouts.showProductCategories
//   );

//   function hideProductCategories() {
//     dispatch(showProductCategories(false));
//   }

//   function handleChangeGender(gender) {
//     dispatch(changeGender(gender));
//   }

//   function handleShowClothingCategories() {
//     dispatch(showClothingCategories(true));
//   }

//   return (
//     <>
//       <div
//         className={`duration-500  bg-white fixed top-0 bottom-0  w-5/12 z-50  shadow-xl ${
//           showProductCategoriesState ? "translate-x-0" : "translate-x-[-800px]"
//         }`}
//         onMouseLeave={hideProductCategories}
//       >
//         <div className="flex px-5 py-10">
//           <Link
//             to={"/men"}
//             className="font-bold cursor-pointer"
//             onClick={() => handleChangeGender("men")}
//           >
//             Men
//           </Link>
//           <div className="w-[0.09rem] mx-2 h-5 bg-black mt-1"></div>
//           <Link
//             to={"/women"}
//             className="font-bold cursor-pointer"
//             onClick={() => handleChangeGender("women")}
//           >
//             Women
//           </Link>
//         </div>
//         <div className="flex gap-28 items-start">
//           <div className="flex flex-col gap-14 px-6 py-14 text-lg font-extrabold">
//             <ul className="flex flex-col gap-2">
//               <li className="hover:translate-x-2 duration-300">
//                 <Link to={"/newArrival"}>NEW</Link>
//               </li>
//               <li className="hover:translate-x-2 duration-300">
//                 <Link href="" className="text-red-500 text-3xl">
//                   SALE
//                 </Link>
//               </li>
//             </ul>
//             <ul className="flex flex-col gap-2">
//               <li
//                 className="hover:translate-x-2 duration-300"
//                 onClick={handleShowClothingCategories}
//               >
//                 <Link href="">CLOTHING</Link>
//               </li>
//               <li className="hover:translate-x-2 duration-300">
//                 <Link href="">STWD</Link>
//               </li>
//               <li className="hover:translate-x-2 duration-300">
//                 <Link href="">SHOES</Link>
//               </li>
//               <li className="hover:translate-x-2 duration-300">
//                 <Link href="">ACCESSORIES</Link>
//               </li>
//               <li className="hover:translate-x-2 duration-300">
//                 <Link href="">BAGS | BACKPACKS</Link>
//               </li>
//               <li className="hover:translate-x-2 duration-300">
//                 <Link href="">COLLABORATIONS</Link>
//               </li>
//               <li className="hover:translate-x-2 duration-300">
//                 <Link href="">ONLINE EXCLUSIVE</Link>
//               </li>
//             </ul>
//             <ul className="flex flex-col gap-2 text-sm">
//               <li className="hover:translate-x-2 duration-300">
//                 <Link href="">Join life</Link>
//               </li>
//               <li className="hover:translate-x-2 duration-300">
//                 <Link href="">FAQs</Link>
//               </li>
//               <li className="hover:translate-x-2 duration-300">
//                 <Link href="">How to make a return</Link>
//               </li>
//               <li className="hover:translate-x-2 duration-300">
//                 <Link href="">GiftCard</Link>
//               </li>
//               <li className="hover:translate-x-2 duration-300">
//                 <Link href="">Newsletter</Link>
//               </li>
//             </ul>
//           </div>
//           <div>
//             {showClothingCategoriesState && gender === "men" ? (
//               <MenClothingCategories />
//             ) : null}

//             {showClothingCategoriesState && gender === "women" ? (
//               <WomenClothingCategories />
//             ) : null}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import MenClothingCategories from "../clothingCategorySidebar/MenClothingCategories";
import WomenClothingCategories from "../clothingCategorySidebar/WomenClothingCategories";
import {
  showProductCategories,
  showClothingCategories,
} from "../../../../store/slices/layoutsSlice";
import { changeGender } from "../../../../store/slices/authSlice";

export default function ProductCategories() {
  const dispatch = useDispatch();
  const showClothingCategoriesState = useSelector(
    (state) => state.layouts.showClothingCategories
  );

  const location = useLocation();

  const gender = useSelector((state) => state.auth.gender);

  useEffect(() => {
    const handleScroll = () => {
      hideProductCategories();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    hideProductCategories();
  }, [location.pathname]);

  const showProductCategoriesState = useSelector(
    (state) => state.layouts.showProductCategories
  );

  function hideProductCategories() {
    dispatch(showProductCategories(false));
  }

  function handleChangeGender(gender) {
    dispatch(changeGender(gender));
  }

  function handleShowClothingCategories() {
    dispatch(showClothingCategories(true));
  }

  return (
    <>
      <div
        className={`duration-500 bg-white fixed top-0 bottom-0 z-50 shadow-xl  
          w-full md:w-6/12 2xl:w-5/12
          ${
            showProductCategoriesState
              ? "translate-x-0"
              : "translate-x-[-1000px]"
          }
        `}
        onMouseLeave={hideProductCategories}
      >
        <div className="flex px-5 py-10 text-lg items-center  justify-between font-bold 2xl:font-extrabold">
          <div className="flex items-center">
            <Link
              to={"/men"}
              className="  cursor-pointer"
              onClick={() => handleChangeGender("men")}
            >
              Men
            </Link>
            <div className="w-[0.09rem] mx-2 h-5 bg-black mt-1"></div>
            <Link
              to={"/women"}
              className="cursor-pointer"
              onClick={() => handleChangeGender("women")}
            >
              Women
            </Link>
          </div>
          <div>
            <IoMdClose
              className="xl:hidden -mt-1"
              size={"1.5rem"}
              cursor={"pointer"}
              onClick={hideProductCategories}
            />
          </div>
        </div>
        <div className="flex gap-8 sm:gap-14 lg:gap-28 items-start">
          <div className="flex flex-col gap-6 sm:gap-10 md:gap-14 px-4 sm:px-6 py-6 sm:py-10 lg:py-14 text-sm 2xl:text-[1.1rem] font-extrabold">
            <ul className="flex flex-col gap-2">
              <li className="hover:translate-x-2 duration-300">
                <Link to={"/newArrival"}>NEW</Link>
              </li>
              <li className="hover:translate-x-2 duration-300">
                <Link
                  to={"/sale"}
                  className="text-red-500 text-2xl sm:text-3xl"
                >
                  SALE
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li
                className="hover:translate-x-2 duration-300"
                onClick={handleShowClothingCategories}
              >
                <Link to={"#"}>CLOTHING</Link>
              </li>
              <li className="hover:translate-x-2 duration-300">
                <Link to={"#"}>STWD</Link>
              </li>
              <li className="hover:translate-x-2 duration-300">
                <Link to={"#"}>SHOES</Link>
              </li>
              <li className="hover:translate-x-2 duration-300">
                <Link to={"#"}>ACCESSORIES</Link>
              </li>
              <li className="hover:translate-x-2 duration-300">
                <Link to={"#"}>BAGS | BACKPACKS</Link>
              </li>
              <li className="hover:translate-x-2 duration-300">
                <Link to={"#"}>COLLABORATIONS</Link>
              </li>
              <li className="hover:translate-x-2 duration-300">
                <Link to={"#"}>ONLINE EXCLUSIVE</Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm">
              <li className="hover:translate-x-2 duration-300">
                <Link to={"#"}>Join life</Link>
              </li>
              <li className="hover:translate-x-2 duration-300">
                <Link to={"#"}>FAQs</Link>
              </li>
              <li className="hover:translate-x-2 duration-300">
                <Link to={"#"}>How to make a return</Link>
              </li>
              <li className="hover:translate-x-2 duration-300">
                <Link to={"#"}>GiftCard</Link>
              </li>
              <li className="hover:translate-x-2 duration-300">
                <Link to={"#"}>Newsletter</Link>
              </li>
            </ul>
          </div>
          <div>
            {showClothingCategoriesState && gender === "men" ? (
              <MenClothingCategories />
            ) : null}

            {showClothingCategoriesState && gender === "women" ? (
              <WomenClothingCategories />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
