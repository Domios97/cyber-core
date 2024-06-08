import React, { useContext, useState } from "react";
import "./WishlistPage.css";
import ProductInWishlist from "../../Components/ProductInWishlist/ProductInWishlist";
import { FavoriteContext } from "../../Contexts/FavoriteProvider";

function WishlistPage() {
  const {displayFavorite,setDisplayFavorite, favoriteItems, setFavoriteItems} = useContext(FavoriteContext);
  return (
    <div
      className="sub-wishlist-wrap"
      id="subWishlist"
      style={{ display: !displayFavorite ? "none" : "block" }}
    >
      <p>My Wishlist</p>
      <hr />
      {favoriteItems && favoriteItems.data.map((item, index)=>{
        return <ProductInWishlist index ={index} key = {item.id} favoriteItemInfo = {item} />
      })}
    </div>
  );
}

export default WishlistPage;
