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
import CartProvider from "./Contexts/CartProvider";
import FavoriteProvider from "./Contexts/FavoriteProvider";
import CatigoryProvider from "./Contexts/CatigoryProvider";
import ProductProvider from "./Contexts/ProductProvider";
import OrderProvider from "./Contexts/OrderProvider";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";
import MyAccountPage from "./Pages/MyAccountPage/MyAccountPage";
import UserOrdersProvider from "./Contexts/UserOrdersProvider";
import NotificationsProvider from "./Contexts/NotificationsProvider";
import RequireAuth from "./Contexts/RequireAuth";
import RequireAdmin from "./Contexts/RequireAdmin";
import ShopPage from "./Pages/ShopPage/ShopPage";
import AboutUs from "./Pages/AboutUs/AboutUs";


const App = () => {
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);
  const [isSignupFormVisible, setSignupFormVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const hideNavAndFooter =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/reset-password"||
    location.pathname === "/admin/dashboard";
    
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
            <Route path="/MyAccount" element={
              <RequireAuth>
                <UserOrdersProvider>
                  <NotificationsProvider>
                    <MyAccountPage />
                  </NotificationsProvider>
                </UserOrdersProvider>
              </RequireAuth>
             } />
            <Route path="/checkout" element={<RequireAuth>
              <CheckoutPage />
            </RequireAuth>} />
            <Route path="/AboutUs" element={<RequireAuth>
              <AboutUs />
            </RequireAuth>} />
            <Route path="/" element={<RequireAuth>
              <HomePage />
            </RequireAuth>} />
            <Route path="/Shop" element={<RequireAuth>
              <ProductProvider>
                <CatigoryProvider>
                  <ShopPage />
                </CatigoryProvider>
              </ProductProvider>
            </RequireAuth>} />
            <Route path="/login" element={<LoginForm onClose={hideForms} />} />
            <Route
              path="/signup"
              element={<SignupForm onClose={hideForms} />}
            />
            <Route
              path="/reset-password"
              element={<RequireAuth>
                <ResetPasswordForm onClose={hideForms} />
              </RequireAuth>}
            />
            <Route path="/cart" element={<RequireAuth>
              <Cart />
            </RequireAuth>} />
            <Route path="/wishlist" element={<RequireAuth>
              <WishlistPage />
            </RequireAuth>} />
            <Route
              path="/product-detail/:productId"
              element={<RequireAuth>
                <ProductDetail />
              </RequireAuth>}
            />
              <Route path="/admin/dashboard" 
              element={
                <OrderProvider>
                  <ProductProvider>
                    <CatigoryProvider>
                      <RequireAuth>
                        <RequireAdmin>
                          <AdminDashbord />
                        </RequireAdmin>
                      </RequireAuth>
                    </CatigoryProvider>
                </ProductProvider>
                </OrderProvider>
              }/>
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
