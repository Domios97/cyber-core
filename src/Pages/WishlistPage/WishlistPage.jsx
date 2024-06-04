import React, { useContext } from 'react';
import Navbar from '../../Components/NavBar/Navigbar';
import Footer from '../../Components/Footer/sitefooter';
import { WishlistContext } from '../../Contexts/WishlistContext'
import './WishlistPage.css';

function WishlistPage() {
    const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  
    return (
      <div className="wishlist-page">
        <Navbar/>
        <h2>Your Wishlist</h2>
        <div className="wishlist-container">
          {wishlist.length > 0 ? (
            wishlist.map((product, index) => (
              <div key={index} className="wishlist-item">
                <img src={product.image} alt={product.name} />
                <div className="wishlist-details">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  <button onClick={() => removeFromWishlist(product.id)}>Remove</button>
                </div>
              </div>
            ))
          ) : (
            <p>Your wishlist is empty.</p>
          )}
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default WishlistPage;