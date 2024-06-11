import React from 'react';
import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';
import { headset, router, desktop, kaspersky, gpu, dellUnit, harddrive, avast, clavier, mackbookpro } from '../../images';
import './ProductCart.css';
import { useNavigate } from 'react-router-dom';

export const product = [
  {
    id: 1,
    image: router,
    title: 'Router',
    price: 400,
    category: 'Networking',
  },
  {
    id: 2,
    image: headset,
    title: 'headset',
    price: 300,
    category: 'Peripherals',
  },
  {
    id: 3,
    image: desktop,
    title: 'asus desktop',
    price: 2000,
    category: 'PreBuiltPC',
  },
  {
    id: 4,
    image: kaspersky,
    title: 'Kaspersky',
    price: 310,
    category: 'Software',
  },
  {
    id: 5,
    image: gpu,
    title: 'gpu',
    price: 250,
    category: 'Components',
  },
  {
    id: 6,
    image: desktop,
    title: 'asus desktop',
    price: 600,
    category: 'PreBuiltPC',
  },
  {
    id: 7,
    image: harddrive,
    title: 'Hard Drive',
    price: 20,
    category: 'Components',
  },
  {
    id: 8,
    image: dellUnit,
    title: 'asus desktop',
    price: 90,
    category: 'PreBuiltPC',
  },
  {
    id: 9,
    image: avast,
    title: 'Avast Antivirus',
    price: 600,
    category: 'Software',
  },
  {
    id: 10,
    image: desktop,
    title: 'asus desktop',
    price: 8200,
    category: 'PreBuiltPC',
  },
  {
    id: 11,
    image: mackbookpro,
    title: 'asus desktop',
    price: 8200,
    category: 'PreBuiltPC',
  },
  {
    id: 12,
    image: clavier,
    title: 'Claver',
    price: 8200,
    category: 'Peripherals',
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
        <p id="price">{`DZD ${product.price}`} DZD</p>
        <div>
          <button onClick={handleViewDetails}>View Details</button>
          <button>
            <FaHeart className="togglable-heart" />
          </button>
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
