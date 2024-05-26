import React from 'react';
import { wallpaper } from '../images';
import '../CSS/HomePage.css';
import '../CSS/CategorieCarousel.css';
import CatgorieCarousel from './CategorieCarousel';
import { amd, nvidia, hp, asus, apple, intel } from '../images';
import Promotion from './Promotion';


function HomePage() {
  return (
    <div>
      <div className="hero-section">
        <h1>Discver The Latest Hardware Computing Products !</h1>
        <button type='' onClick='' class="shopnow-button" role="button">Shop Now </button>
      </div>
      <div className="brandings-section">
        <h2>We Deal Only With The Best Brands </h2>
        <div className="brandigs-carousel">
          <img src={nvidia} alt="" />
          <img src={asus} alt="" />
          <img src={apple} alt="" />
          <img src={intel} alt="" />
          <img src={amd} alt="" />
          <img src={hp} alt="" />
        </div>
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
        
      </div>
    </div>
  )
}

export default HomePage
