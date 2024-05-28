import React, { useState } from 'react';
import './FilterSort.css';

const FilterSort = ({ onFilterSort }) => {
  const [priceRange, setPriceRange] = useState('');
  const [rating] = useState('');
  const [sortOption, setSortOption] = useState('');

  const handleApply = () => {
    onFilterSort({ priceRange, rating, sortOption });
  };

  return (
    <div className="filter-sort">
      <div className="filter-item">
        <label>Price Range:</label>
        <input type="text" value={priceRange} onChange={e => setPriceRange(e.target.value)} placeholder="e.g. 1000DZD-5000DZD" />
      </div>
    
      <div className="filter-item">
        <label>Sort By:</label>
        <select value={sortOption} onChange={e => setSortOption(e.target.value)}>
          <option value="">Select</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
      <button onClick={handleApply}>Apply</button>
    </div>
  );
};

export default FilterSort;