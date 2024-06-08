import React from 'react';
import './AddWishlistButt.css';
import { WishlistButt } from '../../images';


function AddWishlistButt() {
  return (
    <div>
        <div className="wishlist-button">
            <button ><img   className="wishlist-butto " alt ="image"/>Add to cart</button>
        </div>
    </div>
  )
}

export default AddWishlistButt
