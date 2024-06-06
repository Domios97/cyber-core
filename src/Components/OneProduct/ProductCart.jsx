import React from 'react';
import './ProductCart.css';
import AddWishlistButt from '../AddWishlistButton/AddWishlistButt';
import headsetImage from '../../images/headset.jpg';
import SeeDetail from '../SeeDetailsButton/SeeDetail';

const products = [
  {
    id: 1,
    image: headsetImage,
    title: 'Pc',
    price: 400,
    category: 'Electronics'
  },
  {
    id: 1,
    image: headsetImage,
    title: 'Router',
    price: 300,
    category: 'Phones'
  },  {
    id: 1,
    image: headsetImage,
    title: 'Test',
    price: 200,
    category: 'Tablets'
  },
];
const ProductCart = ({ products }) => {
  return (
    <div className="product-cart-container">
      {products.map((product) => (
        <div className="product-cart" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p> {product.category}</p>
          <p className="price">{product.price} DZD</p>
          <div className="actions">

          <button className="see-details">See Details</button>
          </div>

          <AddWishlistButt customAddWishlist="product-detail" />
        
        </div>
      ))}
    </div>
  );
};

export { products };
export default ProductCart;