import React, { useState } from 'react';
import './CategoryInDashboard.css';
import {router} from '../../images';
import { FaRegTrashAlt } from "react-icons/fa";
import CatigoryController from '../../controllers/CatigoryController';

function CategoryInDashboard({catigoryInfo}) {
  const [display, setDisplay]= useState(true);
  return (
    <div>
          <div className="category-in-dashboard" style = {{display : !display && "none"}}>
            <img src={catigoryInfo.image["image_path"]} alt="" />
            <div className="category-in-dashboard-info">
                <p>{catigoryInfo.name}</p>
                <p id='category-id'>{catigoryInfo.id}</p>
            </div>
            <div className="action-buttons">
              <button type='submit'  onClick={async (e)=>{
                e.preventDefault();
                var response = await CatigoryController.delete(catigoryInfo.id);
                setDisplay(false);
              }}><FaRegTrashAlt className='delete-icon'/></button>
            </div>
        </div>
    </div>
  )
}

export default CategoryInDashboard
