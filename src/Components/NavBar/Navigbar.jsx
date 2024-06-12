import React, { useContext } from "react";
import './navigbar.css';
import { shop, favori, loupe, panier, account, sitelogo, home } from "../../images";
import { CartContext } from "../../Contexts/CartProvider";
import { FavoriteContext } from "../../Contexts/FavoriteProvider";

const Navbar = () => {

  const {displayCart , setDisplayCart, cartItems , setCartItems} = useContext(CartContext);
  const {displayFavorite, setDisplayFavorite, favoriteItems, setFavoriteItems} = useContext(FavoriteContext);

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
          <a href="/Shop">
            <img src={shop} alt="Shop" />
            <span className="tooltiptext">Shop</span>
          </a>
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
          <div className= "navbar-counter">{favoriteItems && favoriteItems.data.length}</div>
          <img src={favori} alt="Wishlist" onClick={()=>{setDisplayFavorite(!displayFavorite && !displayCart ? true : false)}}/>
          <span className="tooltiptext">Wishlist</span>
        </div>
        <div className="tooltip">
        <div className= "navbar-counter">{cartItems && cartItems.data.length}</div>
          <img src={panier} alt="Cart" onClick={()=>{setDisplayCart(!displayCart && !displayFavorite ? true : false) }}/>
          <span className="tooltiptext">Cart</span>
        </div>
        <div className="tooltip">
          <a href="/MyAccount"><img src={account} alt="Account" /></a>
          <span className="tooltiptext">Account</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
