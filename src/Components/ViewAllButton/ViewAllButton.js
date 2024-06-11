// src/ViewAllButton.js
import React from 'react';
import './ViewAllButton.css';
import { ViewAllArrow } from '../../images';

const ViewAllButton = ({ onViewAll }) => {
  return (
    <a href='/shop'><button className="view-all-button" onClick={onViewAll}>
    View All
    <img src={ViewAllArrow}/>
  </button></a>
  );
};

export default ViewAllButton;
