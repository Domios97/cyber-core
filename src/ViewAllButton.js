// src/ViewAllButton.js
import React from 'react';
import './ViewAllButton.css';

const ViewAllButton = ({ onViewAll }) => {
  return (
    <button className="view-all-button" onClick={onViewAll}>
      View All Products
    </button>
  );
};

export default ViewAllButton;
