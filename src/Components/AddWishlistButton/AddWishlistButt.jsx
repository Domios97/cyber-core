import React from 'react';
import './AddWishlistButt.css';
import { WishlistButt } from '../../images';


function AddWishlistButt({customAddToWishlist}) {
  return (
    <div>
        <div className="wishlist-button">
            <button ><img src={WishlistButt} className={`wishlist-button ${customAddToWishlist}`} /></button>
        </div>
    </div>
  )
}

export default AddWishlistButt
