import React from 'react';
import './AddCategoryForm.css';

function AddCategoryForm() {
  return (
    <div>
        <div class="add-category-form-container">
            <form id="categoryForm">
            <div class="form-group">
            <label for="categoryName">Category Name</label>
                <input type="text" id="categoryName" name="categoryName" placeholder='Your Category Name'/>
            </div>
            <div class="form-group">
                <label for="categoryImage">Category Image</label>
                <input type="file" id="categoryImage" name="categoryImage" />
            </div>
            <p id='error-message'>*You Must Complete All Fields</p>
            <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default AddCategoryForm
