// ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import products from './products';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(product => product.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} />
      <div className="details">
        <h1>{product.title}</h1>
        <p>Price: {product.price} DZD</p>
        <p>Category: {product.category}</p>
        <p>Rating: {product.rating} / 5</p>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
