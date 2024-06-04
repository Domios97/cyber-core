import React from 'react';
import PropTypes from 'prop-types';
import './WishlistItem.css';


const WishlistItem = ({ product }) => {
  return (
    <div className="wishlist-item">
      <img src={product.image} alt={product.name} />
      <div className="item-details">
        <p>{product.name}</p>
        <p>{product.price} DZD</p>
      </div>
    </div>
  );
};

WishlistItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default WishlistItem;
