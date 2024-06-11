import ProductCart from "../../Components/OneProduct/ProductCart";
import "./ProductDetails.css";
import { headset } from "../../images";
import ProductQuantity from "../../Components/ProductQuantity/ProductQuantity";
import LeftNextButton from "../../Components/LeftButton/LeftNextButton";
import RightNextButton from "../../Components/RightButton/RightNextButton";
import AddWishlistButt from "../../Components/AddWishlistButton/AddWishlistButt";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../Contexts/CartProvider";
import CartController from "../../controllers/CartController";

function ProductDetails() {
  const { state } = useLocation();
  const product = state.productInfo;
  const  productColors =  Object.entries(state.productInfo.color);
  const  [selectedInputIndex , setSelectedInputIndex] = useState(0);
  const {displayCart , setDisplayCart, cartItems , setCartItems} = useContext(CartContext);
  const [selectedColor, setSelectedColor] = useState(productColors[0][1]);

  console.log("from product Details");


  var [selectedImagePath, setSelectedImagePath] = useState(
    product.images[0]["image_path"]
  );
  return (
    <>
      <section className="product-details-container">
        <div className="product-details-image">
          <div>
            <div>
              {product.images.map((image) => {
                return (
                  <img 
                    key = {image.id}
                    src={image.image_path}
                    onClick={() => {
                      setSelectedImagePath(image.image_path);
                    }}
                    alt= ""
                  />
                );
              })}
            </div>
          </div>
          <div>
            <img src={selectedImagePath} alt =""/>
          </div>
        </div>
        <div className="product-details-info">
          <h3>{product.name}</h3>
          <hr />
          <p> {product.price} DZDZ</p>
          <p>
            Availability: {product.state == 0 ? "out Of the stock" : "in stock"}{" "}
          </p>
          <p>Catigory: {product.catigory.name} </p>
          <p>Shipping: 0%</p>
          <form type="" action="">
            <div className="radio-inputs">
              <p>Choose Color:</p>
              {productColors.map((color, index)=>{
                return <>
                  <div onClick={()=>{
                    setSelectedInputIndex(index);
                  }} style = {{border : index === selectedInputIndex && `3px ${color[1]} solid `}}>
                    <label htmlFor={color[0]} style={{backgroundColor: color[1]}}></label>
                  </div>
                  <input type="radio" id={color[0]} value={color[1]}  onChange={(e)=>{
                    setSelectedColor(color[1]);
                  }}/>
                </>
              })}
            </div>
            <div className="product-quantity">
              {/* <p>Quantity </p> */}
              {/* <ProductQuantity /> */}
            </div>
          </form>
          <div className="product-cta">
            <button onClick={async (e)=>{
              e.preventDefault();
              // check availability of product in the stock  
              if(product.state === 1){
                await CartController.addToCart(product.id , selectedColor);
                setCartItems(await CartController.getAll());
              }
            }}>
              add To cart
            </button>
          </div>
        </div>
      </section>
      <div className="product-description">
        <p id="description-p">Description</p>
        <hr />
        <p>{product.description}</p>
      </div>
    </>
  );
}

export default ProductDetails;
