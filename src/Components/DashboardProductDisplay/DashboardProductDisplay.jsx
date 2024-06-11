import React, { useContext, useState } from 'react';
import './DashboardProductDisplay.css';
import AddProductForm from '../AddProductForm/AddProductForm';
import ModifyProductForm from '../ModifyProductForm/ModifyProductForm';
import ProductsInDashboard from '../../Components/ProductsInDashboard/ProductsInDashboard';
import { ProductContext } from '../../Contexts/ProductProvider';
import { CatigoryContext } from '../../Contexts/CatigoryProvider';

function DashboardProductDisplay() {
  const [showForm, setShowForm] = useState(false);
  const [showModifyForm, setShowModifyForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const {allProducts, setAllProducts} = useContext(ProductContext);
  const {catigorys , setCatigorys} = useContext(CatigoryContext);
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
      <div className="product-display-container" >
        {showForm ? (
          <AddProductForm  onCreate={()=>{setShowForm(false)}} />
        ) : showModifyForm ? (
          <ModifyProductForm product={selectedProduct} onUpdate = {()=>{setShowModifyForm(false)}} />
        ) : (
          <>
            <div className="products-section-heading">
                <button type='button' onClick={(e)=>{
                  catigorys && catigorys.length !== 0 && handleAddNewClick(e);
                }}> + Add New</button>
                <p>Products Section</p>
            </div>
            <div className="product-name-id-bar">
              <p id='product-base-name'>Product</p>
              <p>Product ID</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Stock</p>
              <p>Action</p>
            </div>
            {allProducts && allProducts.map((product, productIndex)=>{
              return <ProductsInDashboard onModifyClick ={handleModifyClick} product = {product}  />
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default DashboardProductDisplay;
