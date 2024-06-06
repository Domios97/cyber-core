import React, { useState } from 'react';
import './CategoryFilter.css';

const CategoryFilter = ({ categories, onSelectCategory, selectedCategory }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    if (category === expandedCategory) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(category);
    }
    onSelectCategory(category);
  };

  return (
    <div className="category-filter">
      {Object.keys(categories).map(category => (
        <div key={category} className="category-item">
          <div
            className={`category-name ${category === selectedCategory ? 'selected' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
