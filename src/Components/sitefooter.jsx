import React from "react";
import '../CSS/sitefooter.css';
import { googleplay, appstore, cartedahabia, cash } from "../images";

const SiteFooter = () => {
    return (
        <div className="site-footer">
            <div className="upper-footer">
                <div className="footer-sections">
                    <h3>Contact Us</h3>
                    <p>CyberCore Web App Store</p>
                    <p>26 Rue Mostapha Khodja, Algiers, Algeria</p>
                    <p>+213 755 263 489</p>
                    <p>CybeCoreHub@gmail.com</p>
                </div>
                <div className="footer-sections">
                    <h3>Information</h3>
                    <ul>
                        <li><a href="#">Product Support</a></li>
                        <li><a href="#">Checkout</a></li>
                        <li><a href="#">Licence Policy</a></li>
                        <li><a href="#">Affiliate</a></li>
                    </ul>
                </div>
                <div className="footer-sections">
                    <h3>Customer Services</h3>
                    <ul>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Policies and Rules</a></li>
                    </ul>
                </div>
                <div className="footer-sections">
                    <h3>Download Our App</h3>
                    <p>Download Our App to get more benefits from our discounts and services!</p>
                    <div className="download-icons">
                        <button type="submit" className="download-buttons">
                            <img src={appstore} alt="App Store" />
                        </button>
                        <button type="submit" className="download-buttons">
                            <img src={googleplay} alt="Google Play" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
                <p>© CyberCore All Rights Reserved</p>
                <div className="payment-methods">
                    <img src={cash} alt="Cash on Delivery" id="cash" />
                    <p>Cash on delivery</p>
                    <img src={cartedahabia} alt="Edahabia" id="dahabia" />
                    <p>Edahabia</p>
                </div>
            </div>
        </div>
    );
};

export default SiteFooter;
