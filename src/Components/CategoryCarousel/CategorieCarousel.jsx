import React from 'react';
import './CategorieCarousel.css'
import Category from '../OneCategory/Category';

function CatgorieCarousel() {
  return (
    <div>
      <div className="catgorie-carousel">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  )
}

export default CatgorieCarousel
