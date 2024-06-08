import React, { useContext, useState } from 'react';
import './ProductInWishlist.css';
import DeleteProdButt from '../DeleteProductButton/DeleteProdButt';
import { Trash } from '../../images';
import { FavoriteContext } from '../../Contexts/FavoriteProvider';
import FavoriteController from '../../controllers/FavoriteController';
import { FaHeart } from "react-icons/fa";

function ProductInWishlist(props) {
  const favoriteItem = props.favoriteItemInfo;
  const [displayToggle , setDisplayToggle] = useState(true);
  const {displayFavorite , setDisplayFavorite , favoriteItems , setFavoriteItems} = useContext(FavoriteContext);
  return (
    <div>
        <div className={displayToggle ? "product-in-wishlist" : "hide-withe-animation"} id='product-delete'>
                <img src={favoriteItem["images"][0]["image_path"]} alt="" />
                <div className="product-info-wishlist">
                    <div>
                      <p>{favoriteItem.name}</p>
                      <p>{favoriteItem.price} DA</p>
                    </div>
                    <div>
                      <p>color</p>
                      <span>|</span>
                      <p>{favoriteItem.catigory.name}</p>
                    </div>
                </div>
                <div onClick = {(e)=>{
                  e.preventDefault();
                   setDisplayToggle(false);
                }}>
                  <div className="wishlist-heart">
                    <button onClick={async ()=>{
                       await FavoriteController.popFromFavorite(favoriteItem.id);
                       favoriteItems.data.splice(props.index, 1); 
                       setFavoriteItems(favoriteItems);
                    }}><FaHeart className='toggle-heart' style={{color : "rgba(255,0,0,0.8)" }}/></button>
                  </div>
                </div>
            </div>
    </div>
  )
};


export default ProductInWishlist
