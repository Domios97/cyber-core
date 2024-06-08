import React, { useEffect, useState } from "react";
import {
  wallpaper,
  FreeDelivery,
  cashDelivery,
  fastDelivery,
} from "../../images";
import "./HomePage.css";
import CatgorieCarousel from "../../Components/CategoryCarousel/CategorieCarousel";
import Promotion from "../../Components/OnePromotion/Promotion";
import BrandingCarousel from "../../Components/BrandingsCarousel/BrandingCarousel";
import ProductCart from "../../Components/OneProduct/ProductCart";
import RightNextButton from "../../Components/RightButton/RightNextButton";
import LeftNextButton from "../../Components/LeftButton/LeftNextButton";
import ShopNowButton from "../../Components/ShopNowButton/ShopNowButton";
import ViewAllButton from "../../Components/ViewAllButton/ViewAllButton";
import ProductController from "../../controllers/ProductController";
import CatigoryController from "../../controllers/CatigoryController";

function HomePage() {
  const [products, setProducts] = useState(null);
  const [catigorys, setCatigorys] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [allProducts, allCatigorys] = await Promise.all([
          ProductController.getAll(),
          CatigoryController.getAll(),
        ]);
        setProducts(allProducts);
        setCatigorys(allCatigorys);
      } catch (error) {
        console.log("error: ", error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div>
      <div className="hero-section">
        <h1>Discover The Latest Hardware Computing Products !</h1>
        <ShopNowButton />
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
      <div className="brandings-section">
        {/* <h2>We Deal Only With The Best Brands </h2> */}
        <BrandingCarousel />
      </div>
      <div className="categories">
        <h3>Top Categories</h3>
        <hr />
        <CatgorieCarousel  catigorys={catigorys} />
      </div>
      
      {/* <div className="promotions">
          <div className="middle-promos">
            <Promotion />
          </div>
          <div className="middle-promos">
            <Promotion />
          </div>
      </div> */}
      <div className="latest-prodcuts">
        <div className="latest-products-heading">
          <h3>Latest Products</h3>
          <ViewAllButton />
        </div>
        <hr />
        <div className="latest-products-carousel">
          <LeftNextButton />
          {/* sho all products */}
          {products &&
            products.data.map((product) => {
              return <ProductCart key = {product.id} productInfo={product} />;
            })}

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
          {products &&
            products.data.map((product) => {
              return <ProductCart key ={product.id} productInfo={product} />;
            })}
          <RightNextButton />
        </div>
      </div>
      <div className="bottom-promotion">
        <Promotion styledPromo="styled-promo" />
      </div>
     
    </div>
  );
}

export default HomePage;
