import React from 'react';
import './AddWishlistButt.css';
import { WishlistButt } from '../../images';


function AddWishlistButt({customAddWishlist}) {
  return (
    <div>
        <div className={`wishlist-button ${customAddWishlist}`}>
            <button type='' onClick=""><img src={WishlistButt} /></button>
        </div>
    </div>
  )
}

export default AddWishlistButt
