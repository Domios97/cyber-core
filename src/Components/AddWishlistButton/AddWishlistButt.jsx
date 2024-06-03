import React from 'react';
import './AddWishlistButt.css';
import { WishlistButt } from '../../images';


function AddWishlistButt() {
  return (
    <div>
        <div className="wishlist-button">
            <button type='' onClick=""><img src={WishlistButt} alt="" /></button>
        </div>
    </div>
  )
}

export default AddWishlistButt
