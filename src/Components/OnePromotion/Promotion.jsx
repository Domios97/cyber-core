import React from 'react';
import './Promotion.css';
import PromoBadge from '../PromoBadge/PromoBadge';
import { promoGPU } from '../../images';
import AddCartButt from '../AddToCartButton/AddCartButt';

function Promotion() {
  return (
    <div>
      <div className="one-promo">
        <PromoBadge />
        <img src={promoGPU} alt="" />
        <AddCartButt />
      </div>
    </div>
  )
}

export default Promotion
