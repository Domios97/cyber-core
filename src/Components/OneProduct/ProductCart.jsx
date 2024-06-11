import React from 'react';
import PropTypes from 'prop-types';
import { FaHeart } from "react-icons/fa";
import {headset} from '../../images';
import './ProductCart.css';
import { useNavigate } from 'react-router-dom';


const product = [
  {
    id: 1,
    image: headset,
    title: 'Pc',
    price: 400,
    category: 'Electronics'
  },
  {
    id: 2,
    image: headset,
    title: 'Router',
    price: 300,
    category: 'Phones'
  },
  {
    id: 3,
    image: headset,
    title: 'Test',
    price: 200,
    category: 'Tablets'
  },
  {
    id: 4,
    image: headset,
    title: 'Test',
    price: 200,
    category: 'Tablets'
  },
  {
    id: 5,
    image: headset,
    title: 'Test',
    price: 200,
    category: 'Tablets'
  },
  {
    id: 6,
    image: headset,
    title: 'Test',
    price: 200,
    category: 'Tablets'
  },
  {
    id: 7,
    image: headset,
    title: 'Test',
    price: 200,
    category: 'Tablets'
  },
  {
    id: 8,
    image: headset,
    title: 'Test',
    price: 200,
    category: 'Tablets'
  },
  {
    id: 9,
    image: headset,
    title: 'Test',
    price: 200,
    category: 'Tablets'
  },
  {
    id: 10,
    image: headset,
    title: 'Test',
    price: 200,
    category: 'Tablets'
  },
  {
    id: 11,
    image: headset,
    title: 'Test',
    price: 200,
    category: 'Tablets'
  },
  {
    id: 12,
    image: headset,
    title: 'Test',
    price: 200,
    category: 'Tablets'
  },
  {
    id: 13,
    image: headset,
    title: 'Test',
    price: 200,
    category: 'Tablets'
  },
  {
    id: 14,
    image: headset,
    title: 'Test',
    price: 200,
    category: 'Tablets'
  },
  {
    id: 15,
    image: headset,
    title: 'Test',
    price: 200,
    category: 'Tablets'
  },
];

function ProductCart({ product }) {
  const navigate = useNavigate();

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleViewDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-cart-container">
      <div className="product-cart">
        <img src={product.image} alt={product.title} />
        <p>{product.title}</p>
        <p>Available</p>
        <p id='price'>{`DZD ${product.price}`}</p>
        <div>
          <button onClick={handleViewDetails}>View Details</button>
          <button><FaHeart className='togglable-heart' /></button>
        </div>
      </div>
    </div>
  );
}

ProductCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCart;
