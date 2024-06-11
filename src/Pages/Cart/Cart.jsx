
import React from 'react';
import './Cart.css';
import CheckoutButton from '../../Components/CheckoutButton/CheckoutButton';
import ProductInCart from '../../Components/ProductInCart/ProductInCart';
import { useCart } from '../../Contexts/CartContext';

function Cart() {
  const { cartItems } = useCart(); 

  return (
    <div>
      <div className="sub-cart-wrap" id="subCart">
        <p>My Cart</p>
        {cartItems.map((item) => (
          <ProductInCart
            key={item.id}
            productImage={item.productImage}
            productName={item.productName}
            productPrice={item.productPrice}
            quantity={item.quantity}
            totalPrice={item.totalPrice}
          />
        ))}
        <CheckoutButton />
      </div>
    </div>
  );
}

export default Cart;
