import React from 'react';
import './WishlistPage.css';
import ProductInWishlist from '../../Components/ProductInWishlist/ProductInWishlist';

function WishlistPage() {
  
    return (
       <div className="sub-wishlist-wrap" id='subWishlist'>
            <p>My Wishlist</p>
            <hr />
            <ProductInWishlist />
        </div>
       
    );
  }
  
  export default WishlistPage;