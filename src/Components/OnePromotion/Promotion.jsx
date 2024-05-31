import React from 'react';
import './Promotion.css';
import PromoBadge from '../PromoBadge/PromoBadge';
import { promoGPU } from '../../images';
import AddCartButt from '../AddToCartButton/AddCartButt';

function Promotion({styledPromo}) {
  return (
    <div>
      <div className={`one-promo ${styledPromo}`}>
        <PromoBadge />
        <img src={promoGPU} alt="" />
      </div>
    </div>
  )
}

export default Promotion
