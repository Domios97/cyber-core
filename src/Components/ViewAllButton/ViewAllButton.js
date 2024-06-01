// src/ViewAllButton.js
import React from 'react';
import './ViewAllButton.css';
import { ViewAllArrow } from '../../images';

const ViewAllButton = ({ onViewAll }) => {
  return (
    <button className="view-all-button" onClick={onViewAll}>
      View All
      <img src={ViewAllArrow}/>
    </button>
  );
};

export default ViewAllButton;
