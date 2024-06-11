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
        <a href="/">
        <div className="home-shop tooltip">
          <img src={home} alt="Home" />
          <span className="tooltiptext">Home</span>
        </div>
        </a>
        <div className="home-shop tooltip">
          <a href="/shop"><img src={shop} alt="Shop" /></a>
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
          <li><a href="/about-us">About Us</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
      <div className="right-nav">
        <div className="tooltip">
          <a href="/wishlist"><img src={favori} alt="Wishlist" /></a>
          <span className="tooltiptext">Wishlist</span>
        </div>
        <div className="tooltip">
          <a href="/cart"><img src={panier} alt="Cart" /></a>
          <span className="tooltiptext">Cart</span>
        </div>
        <div className="tooltip">
          <a href="/account"><img src={account} alt="Account" /></a>
          <span className="tooltiptext">Account</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
