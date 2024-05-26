import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search products..." onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
