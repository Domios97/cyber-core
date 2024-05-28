import React from "react";
import '../CSS/navigbar.css';
import { shop, favori, loupe, panier, account, sitelogo, home } from "../images";

const Navbar = () => {
    return (
        <nav>
            <div className="site-logo">
                <span>CyberCore</span>
            </div>
            <div className="home-shop">
           
            </div>
            <div className="search-bar">
                <input type="search" placeholder="Laptops, Desktops, Accessories ...Etc " />
                <button type="submit" class="search-button">
                </button>
            </div>
            <div className="about-contact">
                <ul>
                    <li><a href="">AboutUs</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            <div className="right-nav">
           
            </div>
        </nav>
    )
}

export default Navbar;