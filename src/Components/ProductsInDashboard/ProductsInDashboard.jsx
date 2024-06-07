import React from 'react';
import './ProductsInDashboard.css';
import { router } from '../../images';
import { FaRegTrashAlt } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import OutOfStock from '../OutOfStock/OutOfStock';
import Available from '../../Components/Available/Available';

function ProductsInDashboard({ onModifyClick }) {
  const product = {
    name: "Product Name",
    id: "76905",
    price: "54600",
    quantity: "75",
    sale: "22",
    stock: "Available" 
  };

  return (
    <div>
      <div className="product-in-dashboard">
        <img src={router} alt="" />
        <div className="product-in-dashboard-info">
          <p>{product.name}</p>
          <p>{product.id}</p>
          <p>{product.price}</p>
          <p>{product.quantity}</p>
          <p>{product.sale}</p>
          <Available />
        </div>
        <div className="action-buttons">
          <button type='button' onClick={() => onModifyClick(product)}>
            <LuPencilLine className='modify-icon' />
          </button>
          <button type='button'>
            <FaRegTrashAlt className='delete-icon' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductsInDashboard;
