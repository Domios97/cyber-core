import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Components/NavBar/Navigbar';
import SiteFooter from './Components/Footer/sitefooter';
import HomePage from './Pages/HomePage/HomePage';
import Cart from './Pages/Cart/Cart';
import LoginForm from './Pages/LoginForm/LoginForm';
import SignupForm from './Pages/SignForm/SignupForm';
import ResetPasswordForm from './Pages/ResetPasswordForm/ResetPasswordForm';
import ProductDetail from './Pages/ProductDetails/ProductDetail';
import WishlistPage from './Pages/WishlistPage/WishlistPage';
import AboutUs from './Pages/AboutUs/AboutUs';
import ResetPasswordOne from './Pages/ResetPasswordOne/ResetPasswordOne';
import ResetPasswordTwo from './Pages/ResetPasswordTwo/ResetPasswordTwo';

const App = () => {
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);
  const [isSignupFormVisible, setSignupFormVisible] = useState(false);

  const location = useLocation();
  const hideNavAndFooter = location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/reset-password' || location.pathname === '/ResetPassword' || location.pathname === '/ResetPasswordTwo';

 

  const hideForms = () => {
    setLoginFormVisible(false);
    setSignupFormVisible(false);
  };

  return (
    <div>
      {!hideNavAndFooter && <Navbar/>}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm onClose={hideForms} />} />
        <Route path="/signup" element={<SignupForm onClose={hideForms} />} />
        <Route path="/reset-password" element={<ResetPasswordForm onClose={hideForms} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/ResetPassword" element={<ResetPasswordOne onClose={hideForms}/>}/>
        <Route path="/ResetPasswordTwo" element={<ResetPasswordTwo onClose={hideForms}/>}/>

      </Routes>

    

      {!hideNavAndFooter && <SiteFooter />}
      {isLoginFormVisible && <LoginForm onClose={hideForms} />}
      {isSignupFormVisible && <SignupForm onClose={hideForms} />}
    </div>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
