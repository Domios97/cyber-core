import React from 'react';
import './CategoryInDashboard.css';
import {router} from '../../images';
import { FaRegTrashAlt } from "react-icons/fa";

function CategoryInDashboard() {
  return (
    <div>
          <div className="category-in-dashboard">
            <img src={router} alt="" />
            <div className="category-in-dashboard-info">
                <p>Category Name</p>
                <p id='category-id'>Catgory ID</p>
            </div>
            <div className="action-buttons">
              <button type='submit'><FaRegTrashAlt className='delete-icon'/></button>
            </div>
        </div>
    </div>
  )
}

export default CategoryInDashboard
