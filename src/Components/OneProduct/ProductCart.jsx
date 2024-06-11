import React from 'react';
import PropTypes from 'prop-types';
import { FaHeart } from "react-icons/fa";
import { headset, router, desktop,kaspersky, gpu, asus } from '../../images';
import './ProductCart.css';
import { useNavigate } from 'react-router-dom';

export const product = [
  {
    id: 1,
    image: router,
    title: 'Pc',
    price: 400,
    category: 'router'
  },
  {
    id: 2,
    image: headset,
    title: 'headset',
    price: 300,
    category: 'Peripherals'
  },
  {
    id: 3,
    image: desktop,
    title: 'asus desktop',
    price: 2000,
    category: 'PreBuiltPC'
  },
  {
    id: 4,
    image: kaspersky,
    title: 'Kaspersky',
    price: 310,
    category: 'Software'
  },
  {
    id: 5,
    image: gpu,
    title: 'gpu',
    price: 250,
    category: 'Components'
  },
  {
    id: 6,
    image: desktop,
    title: 'asus desktop',
    price: 600,
    category: 'PreBuiltPC'
  },
  {
    id: 7,
    image: desktop,
    title: 'asus',
    price: 20,
    category: 'PreBuiltPC'
  },
  {
    id: 8,
    image: desktop,
    title: 'asus desktop',
    price: 8200,
    category: 'PreBuiltPC'
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
