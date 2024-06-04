import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Components/NavBar/Navigbar';
import SiteFooter from './Components/Footer/sitefooter';
import HomePage from './Pages/HomePage/HomePage';
import ProductDetailsPage from './Pages/productDetails/ProductDetailsPage';
import Cart from './Pages/Cart/Cart';
import LoginForm from './Pages/LoginForm/LoginForm';
import SignupForm from './Pages/SignForm/SignupForm';

const App = () => {
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);
  const [isSignupFormVisible, setSignupFormVisible] = useState(false);

  const location = useLocation();
  const hideNavAndFooter = location.pathname === '/login' || location.pathname === '/signup';

 

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
        <Route path="/product-details" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<Cart />} />
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
