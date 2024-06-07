import React from 'react';
import './AddProductForm.css';

function AddProductForm() {
  return (
    <div>
        <div class="product-form-container">
              <form id="productForm">
                  <div class="form-row">
                      <div class="form-group">
                        <label for="productName">Product Name</label>
                        <input type="text" id="productName" name="productName" placeholder='Insert Name'/>
                      </div>
                      <div class="form-group">
                        <label for="productPrice">Product Price</label>
                        <input type="text" id="productPrice" name="productPrice" placeholder='Insert Price'/>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group">
                        <label for="productCategory">Product Category</label>
                        <input type="text" id="productCategory" name="productCategory" placeholder='Insert Category'/>
                      </div>
                      <div class="form-group">
                        <label for="productColor">Product Color</label>
                        <select id="productColor" name="productColor" >
                          <option value="red">Red</option>
                          <option value="blue">Blue</option>
                          <option value="green">Green</option>
                          <option value="yellow">Yellow</option>
                        </select>
                      </div>
                    </div>
                 <div className="form-row">
                        <div class="form-group">
                          <label for="productImage">Product Image</label>
                          <input type="file" id="productImage" name="productImage"/>
                        </div>
                        <div class="form-group">
                          <label for="productDescripion">Product Description</label>
                          <textarea name="productDescripion" id="productDescripion" cols="30" rows="5" placeholder='The Product Description Here'></textarea>
                        </div>
                 </div>
                 <p id='error-message'>*You Must Complete All Fields*</p>
                  <button type="submit">Submit</button>
              </form>
            </div>
    </div>
  )
}

export default AddProductForm
