import React from 'react';
import '../CSS/Promotion.css';
import PromoBadge from './PromoBadge';
import { promoGPU } from '../images';
import AddCartButt from './AddCartButt';

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
