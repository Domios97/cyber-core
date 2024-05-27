import React from 'react';
import './CategoryFilter.css';

const CategoryFilter = ({ categories = [], onSelectCategory }) => {
  return (
    <div className="category-filter">
      <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => onSelectCategory(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryFilter;
