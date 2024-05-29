import React from 'react';
import { wallpaper, wallpaper1 } from '../../images';
import './HomePage.css';
import CatgorieCarousel from '../../Components/CategoryCarousel/CategorieCarousel';
import Promotion from '../../Components/OnePromotion/Promotion';
import BrandingCarousel from '../../Components/BrandingsCarousel/BrandingCarousel';
import ProductCart from '../../Components/OneProduct/ProductCart';
import RightNextButton from '../../Components/RightButton/RightNextButton'
import LeftNextButton from '../../Components/LeftButton/LeftNextButton';
import HeroSection from '../../Components/HeroSection/HeroSection';
import ShopNowButton from '../../Components/ShopNowButton/ShopNowButton'


function HomePage() {
  
  return (
    <div>
      <div className="hero-section">
        <h1>Discver The Latest Hardware Computing Products !</h1>
        <ShopNowButton />
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
      <div className="second-hero-section">
        <h2>Unlock Your Potential with Our Innovative Solutions</h2>
        <ShopNowButton />
      </div>
      <div className="best-sales">
          <h3>Best Sales</h3>
          <div className="best-sales-carousel">
            <LeftNextButton />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <RightNextButton />
          </div>
      </div>
      <div className="bottom-promotion">
        <Promotion className="buttom-promo"></Promotion>
      </div>

    </div>
  )
}

export default HomePage
