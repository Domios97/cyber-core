import React from 'react';
import './Category.css';
import { desktop } from '../../images';


function Category(props) {
  return (
    <div>
      <div className="one-categorie">
        <img src={props.imagePath} alt="" />
        <p>{props.name}</p>
      </div>
    </div>
  )
}

export default Category
