import React from 'react';
import './WishlistPage.css';
import ProductInWishlist from '../../Components/ProductInWishlist/ProductInWishlist';
import { router, desktop, headset } from '../../images';

function WishlistPage() {
  const wishlistItems = [
    {
      id: 1,
      productImage: headset,
      productName: 'Product 1',
      productPrice: '25000',
    },
    {
      id: 2,
      productImage: router,
      productName: 'Product 2',
      productPrice: '18000',
    },
    {
      id: 3,
      productImage: desktop,
      productName: 'Product 3',
      productPrice: '32000',
    },
  ];

  return (
    <div className="sub-wishlist-wrap" id="subWishlist">
      <p>My Wishlist</p>
      <hr />
      {wishlistItems.map((item) => (
        <ProductInWishlist
          key={item.id}
          productId={item.id}
          productImage={item.productImage}
          productName={item.productName}
          productPrice={item.productPrice}
        />
      ))}
    </div>
  );
}

export default WishlistPage;
