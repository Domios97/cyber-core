import React from 'react';
import { wallpaper, wallpaper1 } from '../../images';
import './HomePage.css';
import CatgorieCarousel from '../../Components/CategoryCarousel/CategorieCarousel';
import Promotion from '../../Components/OnePromotion/Promotion';
import ProductCart from '../../Components/OneProduct/ProductCart';
import RightNextButton from '../../Components/RightButton/RightNextButton'
import LeftNextButton from '../../Components/LeftButton/LeftNextButton';
import ShopNowButton from '../../Components/ShopNowButton/ShopNowButton';
import AddCartButt from '../../Components/AddToCartButton/AddCartButt';
import ViewAllButton from '../../Components/ViewAllButton/ViewAllButton';
import { amd, nvidia, hp, asus, apple, intel, msi, gigabyte, acer } from '../../images';


function HomePage() {
  
  return (
    <div>
      <div className="hero-section">
        <h1>Discver The Latest Hardware Computing Products !</h1>
        <ShopNowButton />
      </div>
      <h2>We Deal Only With The Best Brands </h2>
          <div className="logos">
            <div className="logos-slide">
              <img src={nvidia} alt="" />
              <img src={asus} alt="" />
              <img src={apple} alt="" />
              <img src={intel} alt="" />
              <img src={amd} alt="" />
              <img src={hp} alt="" />
              <img src={msi} alt="" />
              <img src={gigabyte} alt="" />
              <img src={acer} alt="" />
            </div>
          </div>
      <div className="categories">
        <h3>Top Categories</h3>
        <hr />
        <CatgorieCarousel />
      </div>
      <div className="promo-section">
        <div className="promotions">
          <div className="middle-promos">
          <Promotion />
          </div>
          <div className="middle-promos">
          <Promotion />
          </div>
        </div>
      </div>
      <div className="latest-prodcuts">
        <div className="latest-products-heading">
        <h3>Latest Products</h3>
        <ViewAllButton />
        </div>
        <hr />
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
         <div className="best-sales-heading">
         <h3>Best Sales</h3>
         <ViewAllButton />
         </div>
          <hr />
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
        <Promotion styledPromo="styled-promo"/>
      </div>

    </div>
  )
}

export default HomePage
