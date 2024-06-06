import React from 'react';
import './CheckoutPage.css';
import ProductInCart from '../../Components/ProductInCart/ProductInCart';


function CheckoutPage() {
  return (
    <div >
        <div className="checkout-container">
            <div className="checkout-left-section">
                <h3>Fill The Form Bellow</h3>
                <form action="" method="post" class="checkout-form-container">
                    <div class="form-group">
                        <label for="first-name">First name</label>
                        <input type="text" id="first-name" name="first-name" placeholder="John"/>
                    </div>
                    <div class="form-group">
                        <label for="last-name">Last name</label>
                        <input type="text" id="last-name" name="last-name" placeholder="Doe"/>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" placeholder="+213 769 542"/>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="username@gmail.com"/>
                    </div>
                 <hr />
                 <fieldset class="shipping-info">
                    <legend>Shipping info</legend>
                    <div class="shipping-option">
                        <label for="express">
                            <h5>Express delivery</h5>
                            <span>Max 7 days</span>
                        </label>
                    </div>
                    <div class="shipping-option">
                        <label for="pickup">
                        <h5>Self pick-up</h5>
                        <span>Come to our shop</span>
                        </label>
                </div>
                </fieldset>
                <hr />
                <div className="shipping-adresse">
                    <label htmlFor="adress">Adresse</label><br />
                    <input type="text" id='adresse' name='adresse' placeholder='exempleadresse Oualed Fayet Algeiers' required/>
                </div>
                <button type='submit'>Order Now</button>
                </form>
            </div>
            <div className="checkout-right-section">
                <div className="order-summary">
                    <h3>Order Summary</h3>
                    <p>Total Price: </p>
                    <p>Discount: </p>
                    <p>Chipping Cost: </p>
                    <hr />
                    <p>Final Price: </p>
                </div>
                <hr />
                <div className="cart-items">
                    <p>Cart Items</p>
                    <ProductInCart />
                    <ProductInCart />
                    <ProductInCart />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckoutPage
