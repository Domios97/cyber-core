
import React, { useContext, useState } from 'react';
import { FaHeart } from "react-icons/fa";
import './ProductCart.css';
import { useNavigate } from 'react-router-dom';
import FavoriteController from '../../controllers/FavoriteController';
import { FavoriteContext } from '../../Contexts/FavoriteProvider';

function ProductCart(props) {
  var productInfo = props.productInfo ;
  const [isFavorited , setIsFavorited] = useState(productInfo.favorited);
  const {displayFavorite , setDisplayFavorite , favoriteItems , setFavoriteItems} = useContext(FavoriteContext);
  const navigate = useNavigate();
  return (
    <div className="product-cart-container" >
      <div className="product-cart">
        {/* <AddWishlistButt customAddWishlist="product-detail" /> */}
        <img src={productInfo.images[0]["image_path"]} alt="Headset" />
        <p>{productInfo.name}</p>
        <p style={{ textDecoration: productInfo.state === 0 ? "line-through" : "none" }}>Available</p>
        <p id='price'>{productInfo.price} DZD</p>
        <div>
          <button onClick={(e)=>{
            e.preventDefault();
            navigate(`/product-detail/${productInfo.id}`, { state: {productInfo} });
           }}>View Details</button>
           <button onClick={async ()=>{
              if(isFavorited === 1){
                setIsFavorited(0);
                await FavoriteController.popFromFavorite(productInfo.id);
                setFavoriteItems(await FavoriteController.getFavoriteProducts());
              }else if (isFavorited === 0){
                setIsFavorited(1);
                favoriteItems.data.push(productInfo);
                setFavoriteItems(favoriteItems);
                await FavoriteController.addToFavorite(productInfo.id);
              }

           }}><FaHeart className='togglable-heart' style={{color : isFavorited === 1 ? "rgba(255,0,0,0.8)" : "rgba(0,0,0,0.2)"}}/></button>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
