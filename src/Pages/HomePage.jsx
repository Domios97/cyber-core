import React from 'react';
import { wallpaper } from '../images';
import '../CSS/HomePage.css';
import '../CSS/CategorieCarousel.css';
import CatgorieCarousel from '../Components/CategorieCarousel';
import Promotion from '../Components/Promotion';
import BrandingCarousel from '../Components/BrandingCarousel';
import ProductCart from '../Components/ProductCart';
import RightNextButton from '../Components/RightNextButton'
import LeftNextButton from '../Components/LeftNextButton';
import Navbar from '../Components/NavBar/Navigbar';

function HomePage() {
  return (
    <div>
      <div className="hero-section">
        
        <h1>Discver The Latest Hardware Computing Products !</h1>
        <button type='' onClick='' class="shopnow-button" role="button">Shop Now </button>
      </div>
      <div className="brandings-section">
        <h2>We Deal Only With The Best Brands </h2>
        <BrandingCarousel />
      </div>
      <div className="categories">
        <h3>Top Categories</h3>
        <CatgorieCarousel />
      </div>
      <div className="promo-section">
        <div className="promotions">
          <Promotion />
          <Promotion />
        </div>
      </div>
      <div className="latest-prodcuts">
        <h3>Latest Products</h3>
       <div className="latest-products-carousel">
        <LeftNextButton />
        <ProductCart /> 
        <ProductCart /> 
        <ProductCart /> 
        <ProductCart /> 
        <ProductCart /> 
        <RightNextButton />
       </div>
      </div>
    </div>
  )
}

export default HomePage
