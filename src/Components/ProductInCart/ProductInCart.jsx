import React from 'react';
import './ProductInCart.css';
import DeleteProdButt from '../../Components/DeleteProductButton/DeleteProdButt';
import ProductQuantity from '../ProductQuantity/ProductQuantity';

function ProductInCart({ productImage, productName, productPrice, totalPrice }) {
  return (
    <div className="product-in-cart" id="product-delete">
      <img src={productImage} alt={productName} />
      <div className="product-info">
        <p>{productName}</p>
        <p>{productPrice}</p>
        <p>Total Price: {totalPrice}</p>
      </div>
      <ProductQuantity />
      <DeleteProdButt />
    </div>
  );
}

export default ProductInCart;