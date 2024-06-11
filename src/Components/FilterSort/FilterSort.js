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
          <label>Price Range:</label>
          <select
            className="select-box"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="">All</option>
            <option value="0-100">0-100DZD</option>
            <option value="100-300">100-300 DZD</option>
            <option value="300-400">300-400 DZD</option>
            <option value="400-700">400-700 DZD</option>
          </select>
        </div>

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
