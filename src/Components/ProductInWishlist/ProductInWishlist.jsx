
import React from 'react';
import './ProductInWishlist.css';
import AddCartButt from '../AddToCartButton/AddCartButt';
import DeleteProdButt from '../DeleteProductButton/DeleteProdButt';

function ProductInWishlist({ productImage, productName, productPrice, productId }) {
  const product = { id: productId, productImage, productName, productPrice };

  return (
    <div>
      <div className="product-in-wishlist" id="product-delete">
        <img src={productImage} alt={productName} />
        <div className="product-info-wishlist">
          <p>{productName}</p>
          <p>{productPrice}</p>
        </div>
        <AddCartButt addCartStyle="product-wishlist" product={product} />
        <DeleteProdButt />
      </div>
    </div>
  );
}

export default ProductInWishlist;
