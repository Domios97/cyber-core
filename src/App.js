import React, { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Navbar from "./Components/NavBar/Navigbar";
import SiteFooter from "./Components/Footer/sitefooter";
import HomePage from "./Pages/HomePage/HomePage";
import Cart from "./Pages/Cart/Cart";
import LoginForm from "./Pages/LoginForm/LoginForm";
import SignupForm from "./Pages/SignForm/SignupForm";
import ResetPasswordForm from "./Pages/ResetPasswordForm/ResetPasswordForm";
import ProductDetail from "./Pages/ProductDetails/ProductDetail";
import WishlistPage from "./Pages/WishlistPage/WishlistPage";
import AdminDashbord from "./Pages/AdminDashbordPage/AdminDashbord";
import AuthenticateContext from "./Contexts/AuthenticateContext";
import ProductCart from "./Components/OneProduct/ProductCart";
import CartProvider from "./Contexts/CartProvider";
import FavoriteProvider from "./Contexts/FavoriteProvider";

const App = () => {
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);
  const [isSignupFormVisible, setSignupFormVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const hideNavAndFooter =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/reset-password";

  const hideForms = () => {
    setLoginFormVisible(false);
    setSignupFormVisible(false);
  };

  return (
    <div>
      <FavoriteProvider>
        <WishlistPage />
        <CartProvider>
          {!hideNavAndFooter && <Navbar />}
          <Cart />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm onClose={hideForms} />} />
            <Route
              path="/signup"
              element={<SignupForm onClose={hideForms} />}
            />
            <Route
              path="/reset-password"
              element={<ResetPasswordForm onClose={hideForms} />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<WishlistPage />} />

            <Route
              path="/product-detail/:productId"
              element={<ProductDetail />}
            />
          </Routes>
          {!hideNavAndFooter && <SiteFooter />}
          {isLoginFormVisible && <LoginForm onClose={hideForms} />}
          {isSignupFormVisible && <SignupForm onClose={hideForms} />}
        </CartProvider>
      </FavoriteProvider>
    </div>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
