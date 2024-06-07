import React, { useState } from 'react';
import './DashboardProductDisplay.css';
import AddProductForm from '../AddProductForm/AddProductForm';
import ModifyProductForm from '../ModifyProductForm/ModifyProductForm';
import ProductsInDashboard from '../../Components/ProductsInDashboard/ProductsInDashboard';

function DashboardProductDisplay() {
  const [showForm, setShowForm] = useState(false);
  const [showModifyForm, setShowModifyForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddNewClick = () => {
    setShowForm(true);
    setShowModifyForm(false);
  };

  const handleModifyClick = (product) => {
    setSelectedProduct(product);
    setShowModifyForm(true);
    setShowForm(false);  
  };

  return (
    <div>
      <div className="product-display-container">
        {showForm ? (
          <AddProductForm />
        ) : showModifyForm ? (
          <ModifyProductForm product={selectedProduct} />
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
            <ProductsInDashboard onModifyClick={handleModifyClick} />
            <ProductsInDashboard onModifyClick={handleModifyClick} />
            <ProductsInDashboard onModifyClick={handleModifyClick} />
            <ProductsInDashboard onModifyClick={handleModifyClick} />
            <ProductsInDashboard onModifyClick={handleModifyClick} />
            <ProductsInDashboard onModifyClick={handleModifyClick} />
            <ProductsInDashboard onModifyClick={handleModifyClick} />
            <ProductsInDashboard onModifyClick={handleModifyClick} />
          </>
        )}
      </div>
    </div>
  );
}

export default DashboardProductDisplay;
