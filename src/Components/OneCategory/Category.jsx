import React from 'react';
import './Category.css';
import { desktop } from '../../images';


function Category() {
  return (
    <div>
      <div className="one-categorie">
        <img src={desktop} alt="" />
        <p>PCs/Desktops</p>
      </div>
    </div>
  )
}

export default Category
