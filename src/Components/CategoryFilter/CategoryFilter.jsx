import React, { useState } from 'react';
import './CategoryFilter.css';

const CategoryFilter = ({ categories, onSelectCategory }) => {
  const [openCategory, setOpenCategory] = useState(null);

  const handleCategoryClick = (category, subcategory = null) => {
    onSelectCategory(category, subcategory);
    if (subcategory === null) {
      setOpenCategory(openCategory === category ? null : category);
    }
  };

  return (
    <div className="category-filter">
      <h2>Categories</h2>
      <ul className="category-list">
        {Object.keys(categories).map(category => (
          <li key={category} className={`category-item ${openCategory === category ? 'open' : ''}`}>
            <div className="category-name" onClick={() => handleCategoryClick(category)}>
              {category}
              {categories[category].length > 0 && (
                <span className="arrow">{openCategory === category ? '▲' : '▼'}</span>
              )}
            </div>
            {categories[category].length > 0 && (
              <ul className="subcategories">
                {categories[category].map(subcategory => (
                  <li key={subcategory} className="subcategory-item">
                    <span className="subcategory-name" onClick={() => handleCategoryClick(category, subcategory)}>
                      {subcategory}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryFilter;