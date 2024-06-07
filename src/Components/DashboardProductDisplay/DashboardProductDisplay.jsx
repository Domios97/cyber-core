import React, { useState } from 'react';
import './DashboardProductDisplay.css';
import AddProductForm from '../AddProductForm/AddProductForm';
import ProductsInDashboard from '../../Components/ProductsInDashboard/ProductsInDashboard';

function DashboardProductDisplay() {
  const [showForm, setShowForm] = useState(false);

  const handleAddNewClick = () => {
    setShowForm(true);
  };

  return (
    <div>
      <div className="product-display-container">
        {showForm ? (
          <AddProductForm />
        ) : (
          <>
            <div className="products-section-heading">
                <button type='button' onClick={handleAddNewClick}> + Add New</button>
                <p>Products Section</p>
            </div>
            <div className="product-name-id-bar">
              <p id='product-base-name'>Product</p>
              <p>Product ID</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Sale</p>
              <p>Stock</p>
              <p>Action</p>
            </div>
            <ProductsInDashboard />
            <ProductsInDashboard />
            <ProductsInDashboard />
            <ProductsInDashboard />
            <ProductsInDashboard />
            <ProductsInDashboard />
            <ProductsInDashboard />
            <ProductsInDashboard />
          </>
        )}
      </div>
    </div>
  );
}

export default DashboardProductDisplay;
