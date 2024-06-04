import React, { useContext } from 'react';
import AddCartButt from '../AddToCartButton/AddCartButt';
import './ProductCart.css';
import { router, headset } from '../../images';
import { WishlistContext } from '../../Contexts/WishlistContext';

function ProductCart() {
  const { addToWishlist } = useContext(WishlistContext);

  const product = {
    id: 1,
    name: 'Router',
    price: 234700,
    image: headset,
  };


  return (
    <div>
      <div className="product-cart" onClick={() => console.log("clicked")}>
        <img src={product.image} alt={product.name} />
        <p>{product.name}</p>
        <p id='price'>{product.price}</p>
        <AddCartButt addCartHomePage="latest-products"/>
        <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
      </div>
    </div>
  );
}

export default ProductCart
