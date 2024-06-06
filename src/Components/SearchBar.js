import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loupeIcon from '../images/loupe.png'; // Adjust the path to your image

import '../CSS/SearchBar.css'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Redirect to ShopPage with search query as URL parameter
    navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <div className="search-input-wrapper">
        <input
          type="search"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress} // Allow search on Enter key press
        />
        <img
          src={loupeIcon}
          alt="Search"
          onClick={handleSearch}
          className="search-icon"
        />
      </div>
    </div>
  );
};
export default SearchBar;
