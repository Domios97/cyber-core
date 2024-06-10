import React, { useState } from 'react';
import './ProductsInDashboard.css';
import { router } from '../../images';
import { FaRegTrashAlt } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import OutOfStock from '../OutOfStock/OutOfStock';
import Available from '../../Components/Available/Available';
import ProductController from '../../controllers/ProductController';

function ProductsInDashboard({ onModifyClick, product , productIndex}) {
  const [display , setDisplay] = useState(true);
  return (
    <div>
      <div className="product-in-dashboard " style = {{display : !display && "none"}}>
        <img src={product.images[0]["image_path"]} alt="" />
        <div className="product-in-dashboard-info">
          <p>{product.name}</p>
          <p>{product.id}</p>
          <p>{product.price}</p>
          <p>{product.contete}</p>
          {product.state === 0 ? <OutOfStock /> : <Available />}
        </div>
        <div className="action-buttons">
          <button type='button' onClick={() => onModifyClick(product)}>
            <LuPencilLine className='modify-icon' />
          </button>
          <button type='button' onClick={async (e)=>{
            setDisplay(false);
            e.preventDefault();
            const response = await ProductController.delete(product.id);
            console.log(response);
            
          }}>
            <FaRegTrashAlt className='delete-icon' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductsInDashboard;
