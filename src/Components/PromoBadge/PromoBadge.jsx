import React from 'react';
import './PromoBadge.css'
import { promo } from '../../images';

function PromoBadge() {
  return (
    <div>
      <div className="promo-badge">
        <span>Promo</span>
        <img src={promo} alt="" />
      </div>
    </div>
  )
}

export default PromoBadge
