import React, { useState } from 'react';
import '../FilterSort/FilterSort.css';

const FilterSort = ({ onFilterSort }) => {
  const [priceRange, setPriceRange] = useState('');
  const [sortOption, setSortOption] = useState('');

  const handleFilterSort = () => {
    onFilterSort({ priceRange, sortOption });
  };

  return (
    <div className="filter-sort-container">
      <div className="filter-sort">
        
        <div className="filter-group">
          <label>Sort By:</label>
          <select
            className="select-box"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        <div className="apply-button">
          <button className="apply-btn" onClick={handleFilterSort}>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default FilterSort;
