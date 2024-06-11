import React, { useContext, useEffect, useState } from 'react';
import './CheckoutPage.css';
import ProductInCart from '../../Components/ProductInCart/ProductInCart';
import { CartContext } from '../../Contexts/CartProvider';
import OrderController from '../../controllers/OrderController';
import { useNavigate } from 'react-router-dom';


function CheckoutPage() {
   
    const {displayCart, setDisplayCart, cartItems, setCartItems} = useContext(CartContext);
    const [amount , setAmount] = useState(0);
    const [name, setName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [phonNumber, setPhonNumber] = useState(null);
    const [addressCity, setAddressCity] = useState(null);
    const [orderClick, setOrderClick] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (cartItems && cartItems.data) {
            const totalAmount = cartItems.data.reduce((total, item) => total + (item.product.price * item.cart_item.contete), 0);
            setAmount(totalAmount);
        }
    }, [cartItems]);
    const haveEmptyInput = (object)=>{
        return Object.values(object).some(value => {
          if (typeof value === 'string' && value.trim() === '') {
            return true; 
          }
          if (Array.isArray(value) && value.length === 0) {
            return true; 
          }
          if (value === null || value === undefined) {
            return true; 
          }
          if (typeof value === 'object' && Object.keys(value).length === 0) {
            return true; 
          }
          return false;
        });
      }

  return (
    <div >
        <div className="checkout-container">
            <div className="checkout-left-section">
                <h3>Fill The Form Bellow</h3>
                <form action="" method="post" className="checkout-form-container">
                    <div className="form-group">
                        <label htmlFor="first-name">First name</label>
                        <input type="text" id="first-name" name="first-name" placeholder="John" onChange={(e)=>{
                            e.preventDefault();
                            setName(e.target.value);
                        }}
                        style={{border: orderClick && name ===null && "1px red solid"}}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="last-name">Last name</label>
                        <input type="text" id="last-name" name="last-name" placeholder="Doe" onChange={(e)=>{
                            e.preventDefault();
                            setLastName(e.target.value);
                        }}
                        style={{border: orderClick && lastName ===null && "1px red solid"}}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" placeholder="+213 769 542" onChange={(e)=>{
                            e.preventDefault();
                            setPhonNumber(e.target.value);
                        }}
                        style={{border: orderClick && phonNumber ===null && "1px red solid"}}
                        />
                    </div>
                 <hr />
                 <fieldset className="shipping-info">
                    <legend>Shipping info</legend>
                    <div className="shipping-option">
                        <label htmlFor="express">
                            <h5>Express delivery</h5>
                            <span>Max 7 days</span>
                        </label>
                    </div>
                    <div className="shipping-option">
                        <label htmlFor="pickup">
                        <h5>Self pick-up</h5>
                        <span>Come to our shop</span>
                        </label>
                </div>
                </fieldset>
                <hr />
                <div className="shipping-adresse">
                    <label htmlFor="adress">Full Adresse</label><br />
                    <input type="text" id='adresse' name='adresse' placeholder='exempleadresse Oualed Fayet Algeiers' required onChange={(e)=>{
                            e.preventDefault();
                            setAddressCity(e.target.value);
                        }}
                        style={{border: orderClick && addressCity === null && "1px red solid"}}
                        />
                </div>
                <button type='submit' onClick={async (e)=>{
                  e.preventDefault(); 
                  setOrderClick(true);
                  const customer = {
                    "name" : name, 
                    "lastName": lastName, 
                    "addressCity": addressCity, 
                    "phonNumber": phonNumber, 
                    "amount": amount
                  }
                  if(!haveEmptyInput(customer)){
                    const response = await OrderController.placeOrder(cartItems.data, customer);
                    cartItems.data = [];
                    setCartItems(cartItems);
                    console.log(response);
                  }
                }}>Order Now</button>
                </form>
            </div>
            <div className="checkout-right-section">
                <div className="order-summary">
                    <h3>Order Summary</h3>
                    <p>Total Price: {amount} DZ</p>
                    <p>Discount:   0% </p>
                    <p>Chipping Cost:  0 DZ</p>
                    <hr />
                    <p>Final Price: {amount} DZ</p>
                </div>
                <hr />
                <div className="cart-items">
                    <p>Cart Items</p>
                    {cartItems && cartItems.data.map((item, index)=>{
                      return <ProductInCart key = {item.cart_item.id} itemInfo = {item} index = {index}/>
                    })}
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default CheckoutPage
