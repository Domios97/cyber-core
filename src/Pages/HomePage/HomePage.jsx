import React, { useRef } from 'react';
import { wallpaper, FreeDelivery, cashDelivery, fastDelivery, headset,LeftArrow, rightArrow } from '../../images';
import './HomePage.css';
import CatgorieCarousel from '../../Components/CategoryCarousel/CategorieCarousel';
import Promotion from '../../Components/OnePromotion/Promotion';
import BrandingCarousel from '../../Components/BrandingsCarousel/BrandingCarousel';
import ProductCart from '../../Components/OneProduct/ProductCart';
import ShopNowButton from '../../Components/ShopNowButton/ShopNowButton';
import ViewAllButton from '../../Components/ViewAllButton/ViewAllButton';

const products = [
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

function HomePage() {

  const latestcarouselRef = useRef(null);

  const latestscrollLeft = () => {
      if (latestcarouselRef.current) {
        latestcarouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      }
  };

  const latestscrollRight = () => {
      if (latestcarouselRef.current) {
        latestcarouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      }
  };


  return (
    <div>
      <div className="hero-section">
        <h1>Discover The Latest Hardware Computing Products!</h1>
        <ShopNowButton />
      </div>
      <div className="brandings-section">
        <h2>We Deal Only With The Best Brands</h2>
        <BrandingCarousel />
      </div>
      <div className="categories">
        <h3>Top Categories</h3>
        <hr />
        <CatgorieCarousel />
      </div>
      <div className="promotions">
        <div className="middle-promos">
          <Promotion />
        </div>
        <div className="middle-promos">
          <Promotion />
        </div>
      </div>
      <div className="latest-products">
                <div className="latest-products-heading">
                    <h3>Latest Products</h3>
                    <ViewAllButton />
                </div>
                <hr id="latest-products-devider" />
                <div className="latest-products-carousel-wrapper">
                    <div className="latest-products-carousel" ref={latestcarouselRef}>
                        <button type="button" className="left-next-button" onClick={latestscrollLeft}>
                            <img src={LeftArrow} alt="Scroll Left" />
                        </button>
                        {products.map(product => (
                            <ProductCart key={product.id} product={product} />
                        ))}
                        <button type="button" className="right-next-button" onClick={latestscrollRight}>
                            <img src={rightArrow} alt="Scroll Right" />
                        </button>
                    </div>
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
        <div className="best-sales-carousel-wraper">
        <div className="best-sales-carousel" >
          {products.map(product => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
        </div>
      </div>
      <div className="bottom-promotion">
        <Promotion styledPromo="styled-promo" />
      </div>
      <div className="free-delivery">
        <div className="one-part">
          <img src={FreeDelivery} alt="" />
          <h4>Free Ship</h4>
          <p>Shipping’s On Us!</p>
        </div>
        <div className="one-part">
          <img src={fastDelivery} alt="" />
          <h4>Fast Delivery</h4>
          <p>Speedy Delivery Guaranteed!</p>
        </div>
        <div className="one-part">
          <img src={cashDelivery} alt="" />
          <h4>Cash on Delivery</h4>
          <p>Cash Payment at Your Doorstep!</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
