import React, { useState, useEffect } from 'react';
import './ModifyProductForm.css';

function ModifyProductForm({ product }) {
  const [formData, setFormData] = useState(product);

  useEffect(() => {
    setFormData(product);
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product updated:', formData);
  };

  return (
    <div>
      <h3 id='modify-header'>Modify Product Details</h3>
      <div className="modify-product-form-container">
        <form id="modify-productForm" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="productName">Product Name</label>
              <input
                type="text"
                id="productName"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder='Insert New Name'
              />
            </div>
            <div className="form-group">
              <label htmlFor="productPrice">Product Price</label>
              <input
                type="text"
                id="productPrice"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder='Insert New Price'
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="productCategory">Product Category</label>
              <input
                type="text"
                id="productCategory"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder='Insert New Category'
              />
            </div>
            <div className="form-group">
              <label htmlFor="productColor">Product Color</label>
              <select
                id="productColor"
                name="color"
                value={formData.color}
                onChange={handleChange}
              >
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="productImage">Product Image</label>
              <input
                type="file"
                id="productImage"
                name="image"
              />
            </div>
            <div className="form-group">
              <label htmlFor="productDescription">Product Description</label>
              <textarea
                name="description"
                id="productDescription"
                cols="30"
                rows="5"
                value={formData.description}
                onChange={handleChange}
                placeholder='Modify the Product Description Here'
              />
            </div>
          </div>
          <p id='error-message'>*You Must Complete All Fields*</p>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ModifyProductForm;
