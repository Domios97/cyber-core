import React, { useState } from 'react';
import './DashboardCategoryDisplay.css';
import CategoryInDashboard from '../CategoryInDashboard/CategoryInDashboard';
import AddCategoryForm from '../AddCategoryForm/AddCategoryForm';

function DashboardCategoryDisplay() {
  const [showForm, setShowForm] = useState(false);

  const handleAddNewClick = () => {
    setShowForm(true);
  };

  return (
    <div>
      <div className="category-display-container">
        {showForm ? (
          <AddCategoryForm />
        ) : (
          <>
            <div className="category-section-heading">
              <button type='button' onClick={handleAddNewClick}> + Add New</button>
              <p>Category Section</p>
            </div>
            <div className="category-name-id-bar">
              <p id='category-base-name'>Image</p>
              <p>Name</p>
              <p>Category ID</p>
              <p id='category-action'>Action</p>
            </div>
            <CategoryInDashboard />
            <CategoryInDashboard />
            <CategoryInDashboard />
            <CategoryInDashboard />
            <CategoryInDashboard />
            <CategoryInDashboard />
            <CategoryInDashboard />
          </>
        )}
      </div>
    </div>
  );
}

export default DashboardCategoryDisplay;
