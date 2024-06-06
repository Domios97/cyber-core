import React, { useState } from "react";
import { useLocation } from 'react-router-dom'; // Import useLocation hook

import '../../CSS/navigbar.css';
import { shop, favori, loupe, panier, account, sitelogo, home } from "../../images";
import { Link } from 'react-router-dom';
import SearchBar from "../SearchBar";


const Navigbar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation(); // Initialize useLocation

    const handleSearch = (query) => {
        setSearchQuery(query);
        onSearch(query); // Call the onSearch function passed from App.js
        // Redirect to ShopPage with search query
        window.location.href = `/shop?search=${encodeURIComponent(query)}`;
    };

    return (
        <nav>
            <div className="site-logo">
                <img src={sitelogo} alt="" />
                <span>CyberCore</span>
            </div>
            <div className="home-shop">
                <Link to="/"><img src={home} alt="home" /></Link>
                <Link to="/shop"><img src={shop} alt="shop" /></Link>
            </div>
            <div className="search-bar">
                <SearchBar onSearch={onSearch} />
            </div>
            <div className="about-contact">
                <ul>
                    <li><Link to="/about">AboutUs</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="right-nav">
                <img src={favori} alt="favorites" />
                <img src={panier} alt="cart" />
                <img src={account} alt="account" />
            </div>
        </nav>
    );
}

export default Navigbar;