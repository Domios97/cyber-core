import React from 'react';
import '../CSS/CategorieCarousel.css'
import Category from './Category';

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
