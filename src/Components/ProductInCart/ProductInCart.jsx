import React, { useContext, useState } from 'react';
import './ProductInCart.css';
import {router} from '../../images';
import DeleteProdButt from '../../Components/DeleteProductButton/DeleteProdButt';
import '../../Components/DeleteProductButton/DeleteProdButt.css';
import { Trash } from '../../images';
import { CartContext } from '../../Contexts/CartProvider';
import CartController from '../../controllers/CartController';
import CatigoryController from '../../controllers/CatigoryController';
import ProductQuantity from '../ProductQuantity/ProductQuantity';

function ProductInCart(props) {
  const product = props.itemInfo.product;
  const [displayToggle , setDisplayToggle] = useState(true);
  const {displayCart , setDisplayCart, cartItems , setCartItems} = useContext(CartContext);

  var  [quantity, setQuantity] = useState(props.itemInfo.cart_item.contete);

  const handleIncrement = () => {
    quantity < product.contete && setQuantity(quantity ++);
  };

  const handleDecrement = () => {
     quantity > 1 ? setQuantity(quantity--) : setQuantity(1);
  };
  
  return (
    <div>
         <div className={displayToggle ? "product-in-cart" : "hide-withe-animation"}  id='product-delete'>
                <img src={product.images[0]["image_path"]} alt="" />
                <div className="product-info">
                    <div>
                      <p>{product.name}</p>
                      <p>{product.price} DA</p>
                    </div>
                    <div>
                      <h4>color: </h4>
                      <p style={{backgroundColor: props.itemInfo.cart_item.color}}></p>
                      <p>|</p>
                      <p>Catigory</p>
                      <div>
                        <button  onClick={(e)=>{
                          e.preventDefault();
                          handleDecrement();
                          cartItems.data[props.index].cart_item.contete = quantity;
                          setCartItems(cartItems);
                          CartController.updateCartItems(cartItems.data);
                         }}>-</button>
                        <p>{props.itemInfo.cart_item.contete}</p>
                        <button  onClick={async (e)=>{
                          e.preventDefault();
                          handleIncrement();
                          cartItems.data[props.index].cart_item.contete = quantity;
                          setCartItems(cartItems);
                          await CartController.updateCartItems(cartItems.data);
                        }}>+</button>
                      </div>
                    </div>
                </div>
                <div onClick = {async (e)=>{
                  e.preventDefault();
                   setDisplayToggle(false);
                  cartItems.data.splice(props.index, 1);
                  setCartItems(cartItems);
                  await CartController.deleteFromCart(product.id);
                }}>
                <div className="delete-button">
                  <button type="submit" ><img src={Trash} alt="" id='trash-image'/></button>
               </div>
    </div>
            </div>
    </div>
  )
}

export default ProductInCart
