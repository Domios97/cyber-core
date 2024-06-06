import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar/Navigbar';
import SiteFooter from './Components/Footer/sitefooter';
import HomePage from './Pages/HomePage';
import ShopPage from './Pages/ShopPage';


const App = () => {
    const filterProducts = (query) => {
      // Your filter logic here
      console.log("Filtering products with query:", query);
    };    return (
        <Router>
            <div className="App">
            <Navbar onSearch={filterProducts} /> 
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/shop" element={<ShopPage />} />
                </Routes>
                <SiteFooter />
            </div>
        </Router>
    );
}

export default App;
