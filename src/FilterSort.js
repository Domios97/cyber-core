import React, { useState } from 'react';

const FilterSort = ({ onFilterSort }) => {
  const [priceRange, setPriceRange] = useState('');
  const [rating, setRating] = useState('');
  const [sortOption, setSortOption] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onFilterSort({ priceRange, rating, sortOption });
  };

  return (
    <form onSubmit={handleSubmit} className="filter-sort">
      <div>
        <label>
          Price Range:
          <input
            type="text"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            placeholder="e.g. 10-50"
          />
        </label>
      </div>
      <div>
        <label>
          Rating:
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder="e.g. 4"
          />
        </label>
      </div>
      <div>
        <label>
          Sort By:
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="">Select</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </label>
      </div>
      <button type="submit">Apply</button>
    </form>
  );
};

export default FilterSort;
