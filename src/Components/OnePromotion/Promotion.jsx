import React from 'react';
import './Promotion.css';
import PromoBadge from '../PromoBadge/PromoBadge';
import { promoGPU } from '../../images';
import ViewMoreButton from '../../Components/ViewMoreButton/ViewMoreButton';

function Promotion({styledPromo}) {
  return (
    <div>
      <div className={`one-promo ${styledPromo}`}>
        
        <PromoBadge />
        <ViewMoreButton />
        <img src={promoGPU} alt="" />
      </div>
    </div>
  )
}

export default Promotion
