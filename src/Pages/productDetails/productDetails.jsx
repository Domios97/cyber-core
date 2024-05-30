import ProductCart from "../../Components/OneProduct/ProductCart";
import "./productDetails.css";
import { headset } from "../../images";
import ProductQuantity from "../../Components/ProductQuantity/ProductQuantity";
import AddCartButt from "../../Components/AddToCartButton/AddCartButt";
import LeftNextButton from "../../Components/LeftButton/LeftNextButton";
import RightNextButton from "../../Components/RightButton/RightNextButton";
import Navbar from "../../Components/NavBar/Navigbar";
import SiteFooter from "../../Components/Footer/sitefooter";

function ProductDetailsPage(){
   
    return (
       <>
       <Navbar />
        <section className="product-details-container">
            <div className="product-details-image">
                <img src={headset} />
                <div>
                  <div><img src={headset}/></div>
                </div>
            </div>
            <div className="product-details-info">
               <h3>Product Name</h3>
               <hr />
               <p>4000.0 $</p>
               <p>Availability: </p>
               <p>Catigory: </p>
               <p>Shipping: </p>
               <form type="" action="">
                  <div className="radio-inputs">
                  <label>Choose Color:</label>
                  <input type="radio"/>
                  <input type="radio"/>
                  <input type="radio"/>
                  <input type="radio"/>
                  </div>
                  <div className="product-quantity"> 
                    <p>Quantity </p>
                    <ProductQuantity />
                  </div>
               </form>
                <AddCartButt 
                    addCartStyle="custom-button"
                />
            </div>
        </section>
        <div className="product-description">
            <p id="description-p">Description</p>
            <hr />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, voluptatibus distinctio laboriosam, modi dolor aperiam saepe suscipit dolorum ullam at adipisci veniam hic, assumenda necessitatibus maiores totam fugit mollitia natus!</p>
        </div>
        <section className="related-product-section">
        <h3>Related Products </h3>
        <div className="related-products-carousel">
          <LeftNextButton />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <RightNextButton />
       </div>
        </section>
        <SiteFooter />
        </>
    );
    
}

export default ProductDetailsPage;