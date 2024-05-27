import React from "react";
import '../CSS/navigbar.css';
import { shop, favori, loupe, panier, account, sitelogo, home } from "../../images";

const Navbar = () => {
    return (
        <nav>
            <div className="site-logo">
                <img src={sitelogo} alt="" />
                <span>CyberCore</span>
            </div>
            <div className="home-shop">
                <img src={home} alt="" />
                <img src={shop} alt="the shop" />
            </div>
            <div className="search-bar">
                <input type="search" placeholder="Laptops, Desktops, Accessories ...Etc " />
                <button type="submit" class="search-button">
                    <img src={loupe} alt="" />
                </button>
            </div>
            <div className="about-contact">
                <ul>
                    <li><a href="">AboutUs</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            <div className="right-nav">
                <img src={favori} alt="" />
                <img src={panier} alt="" />
                <img src={account} alt="" />
            </div>
        </nav>
    )
}

export default Navbar;