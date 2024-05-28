import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoryFilter from './Components/CategoryFilter/CategoryFilter';
import FilterSort from './Components/FilterSort/FilterSort';
import SearchBar from './Components/SearchBar/SearchBar';
import Navbar from './Components/NavBar/Navigbar';
import SiteFooter from './Components/Footer/sitefooter';
import HomePage from '../src/Pages/HomePage/HomePage';
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';


function App() {
 

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="main-content">
        
        </div>
        <CheckoutPage/>
        <SiteFooter />
      </div>
    </Router>
  );
}

export default App;
