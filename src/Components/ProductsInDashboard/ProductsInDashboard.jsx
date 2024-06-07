import React from 'react';
import './ProductsInDashboard.css';
import {router} from '../../images';
import { LuPenSquare } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import OutOfStock from '../OutOfStock/OutOfStock';
import Available from '../../Components/Available/Available';

function ProductsInDashboard() {
  return (
    <div>
        <div className="product-in-dashboard">
            <img src={router} alt="" />
            <div className="product-in-dashboard-info">
                <p>Product Name</p>
                <p>76905</p>
                <p>54 600 </p>
                <p>75</p>
                <p>22</p>
                <Available />
            </div>
            <div className="action-buttons">
              <button type='submit'><LuPenSquare className='modify-icon'/></button>
              <button type='submit'><FaRegTrashAlt className='delete-icon'/></button>
            </div>
        </div>
    </div>
  )
}

export default ProductsInDashboard
