import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useParams,
} from "react-router-dom";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// protected routes
import ProtectUserProfileRoute from "./routes/ProtectUserProfileRoute";
import ProtectCheckOutRoute from "./routes/ProtectCheckOutRoute";

// pages
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import ProductItemDetails from "./components/product/productDetails/ProductItemDetails";
import WishList from "./pages/wishList/WishList";
import CheckOut from "./pages/checkOut/CheckOut";
import UserProfile from "./pages/userProfile/UserProfile";
import InvoiceSummery from "./pages/invoiceSummary/InvoiceSummery";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import DeliveryInfo from "./pages/deliveryInfo/DeliveryInfo";

//layouts
import Header from "./components/layout/header/Header";
import ProductCategories from "./components/layout/sidebars/mainCategorySidebar/ProductCategories";
import Search from "./components/search/Search";
import Footer from "./components/layout/footer/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import NewArrival from "./pages/newArrival/NewArrival";

// men clothing pages
import MenJeans from "./pages/menClothingPages/menJeans/MenJeans";
import MenPants from "./pages/menClothingPages/menPants/MenPants";
import MenTshirts from "./pages/menClothingPages/menTshirts/MenTshirts";
import MenShorts from "./pages/menClothingPages/menShorts/MenShorts";
import MenHoodies from "./pages/menClothingPages/menHoodies/MenHoodies";
import MenShirts from "./pages/menClothingPages/menShirts/MenShirts";
import MenJackets from "./pages/menClothingPages/menJackets/MenJackets";
import MenSwimwear from "./pages/menClothingPages/menSwimwear/MenSwinwear";
import MenKint from "./pages/menClothingPages/menKint/MenKint";
import MenUnderwear from "./pages/menClothingPages/menUnderwear/MenUnderwear";
import MenPacks from "./pages/menClothingPages/menPacks/MenPacks";

// women clothing pages
import WomenTops from "./pages/womenClothingPages/tops/WomenTops";
import WomenTshirts from "./pages/womenClothingPages/tshirts/WomenTshirts";
import WomenDresses from "./pages/womenClothingPages/dresses/WomenDresses";
import WomenJeans from "./pages/womenClothingPages/jeans/WomenJeans";
import WomenPants from "./pages/womenClothingPages/pants/WomenPants";
import WomenSkirts from "./pages/womenClothingPages/skirts/WomenSkirts";
import WomenShorts from "./pages/womenClothingPages/shorts/WomenShorts";
import WomenBlouses from "./pages/womenClothingPages/blouses/WomenBlouses";
import WomenBikinis from "./pages/womenClothingPages/bikinis/WomenBikinis";
import WomenJumpsuits from "./pages/womenClothingPages/jumpsuits/WomenJumpsuits";
import WomenHoodies from "./pages/womenClothingPages/hoodies/WomenHoodies";
import WomenJackets from "./pages/womenClothingPages/jackets/WomenJackets";
import WomenKnitwear from "./pages/womenClothingPages/knitwear/WomenKnitwear";
import WomenVests from "./pages/womenClothingPages/vests/WomenVests";
import WomenBlazers from "./pages/womenClothingPages/blazers/WomenBlazers";
import WomenLingerie from "./pages/womenClothingPages/lingerie/WomenLingerie";

///
import { changeGender } from "./store/slices/authSlice";

function App() {
  const dispatch = useDispatch();
  const gender = useSelector((state) => state.auth.gender);
  const searchButtonClicked = useSelector(
    (state) => state.layouts.searchButtonClicked
  );
  const showProductCategories = useSelector(
    (state) => state.layouts.showProductCategories
  );

  const user = useSelector((state) => state.auth.user.userInfo);
  const GenderRedirect = () => {
    const { gender } = useParams();

    useEffect(() => {
      if (gender === "men" || gender === "women") {
        dispatch(changeGender(gender));
      }
    }, [gender, dispatch]);

    if (gender === "men" || gender === "women") {
      return <Home />;
    }

    return <Navigate to="*" />;
  };
  return (
    <div>
      <ProductCategories />
      <div
        className={`${
          showProductCategories ? "opacity-45" : "opacity-100"
        } duration-500`}
      >
        <Header />
        <Search />
        <Routes>
          <Route path="/" element={<Navigate to={`${gender}`} />} />
          <Route path="/:gender" element={<GenderRedirect />} />
          <Route path="/delivery-info" element={<DeliveryInfo />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/checkout"
            element={
              <ProtectCheckOutRoute>
                <CheckOut />
              </ProtectCheckOutRoute>
            }
          />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/summery" element={<InvoiceSummery user={user} />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/userProfile"
            element={
              <ProtectUserProfileRoute>
                <UserProfile user={user} />
              </ProtectUserProfileRoute>
            }
          />
          <Route path="/newArrival" element={<NewArrival />} />
          {/* men */}
          <Route path="/men-jeans" element={<MenJeans />} />
          <Route path="/men-pants" element={<MenPants />} />
          <Route path="/men-tshirts" element={<MenTshirts />} />
          <Route path="/men-shorts" element={<MenShorts />} />
          <Route path="/men-hoodies" element={<MenHoodies />} />
          <Route path="/men-shirts" element={<MenShirts />} />
          <Route path="/men-jackets" element={<MenJackets />} />
          <Route path="/men-swimwear" element={<MenSwimwear />} />
          <Route path="/men-kint" element={<MenKint />} />
          <Route path="/men-underwear" element={<MenUnderwear />} />
          <Route path="/men-packs" element={<MenPacks />} />
          {/* women */}
          <Route path="/women-tops" element={<WomenTops />} />
          <Route path="/women-tshirts" element={<WomenTshirts />} />
          <Route path="/women-dresses" element={<WomenDresses />} />
          <Route path="/women-jeans" element={<WomenJeans />} />
          <Route path="/women-pants" element={<WomenPants />} />
          <Route path="/women-skirts" element={<WomenSkirts />} />
          <Route path="/women-shorts" element={<WomenShorts />} />
          <Route path="/women-blouses" element={<WomenBlouses />} />
          <Route path="/women-bikinis" element={<WomenBikinis />} />
          <Route path="/women-jumpsuits" element={<WomenJumpsuits />} />
          <Route path="/women-hoodies" element={<WomenHoodies />} />
          <Route path="/women-jackets" element={<WomenJackets />} />
          {/* <Route path="/women-total-look" element={<WomenTotalLook />} /> */}
          <Route path="/women-knitwear" element={<WomenKnitwear />} />
          <Route path="/women-vests" element={<WomenVests />} />
          <Route path="/women-blazers" element={<WomenBlazers />} />
          <Route path="/women-lingerie" element={<WomenLingerie />} />

          <Route
            path={`/product-details/:productTitle`}
            element={<ProductItemDetails />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      {!searchButtonClicked ? <Footer /> : null}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  );
}
