import React from "react";
import './navigbar.css';
import { shop, favori, loupe, panier, account, sitelogo, home } from "../../images";

const Navbar = () => {
    return (
        <nav>
            <div className="site-logo">
                <img src={sitelogo} alt="Sites Logo" />
                <span>CyberCore</span>
            </div>
            <div className="home-shop-group">
            <div className="home-shop tooltip">
                <img src={home} alt="Home" />
                <span className="tooltiptext">Home</span>
            </div>
            <div className="home-shop tooltip">
                <img src={shop} alt="Shop" />
                <span className="tooltiptext">Shop</span>
            </div>
            </div>
            <div className="search-bar">
                <form action="" method="">
                    <input type="search" className="search-input" placeholder="Laptops, Desktops, Accessories ...Etc " />
                    <button type="submit" className="search-button">
                        <img src={loupe} alt="Search" />
                    </button>
                </form>
            </div>
            <div className="about-contact">
                <ul>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            <div className="right-nav">
                <div className="tooltip">
                    <img src={favori} alt="Wishlist" />
                    <span className="tooltiptext">Wishlist</span>
                </div>
                <div className="tooltip">
                    <img src={panier} alt="Cart" />
                    <span className="tooltiptext">Cart</span>
                </div>
                <div className="tooltip">
                    <img src={account} alt="Account" />
                    <span className="tooltiptext">Account</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
