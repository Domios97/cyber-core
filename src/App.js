import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navigbar';
import SiteFooter from './Components/sitefooter';
import HomePage from './Pages/HomePage';
import Products, { products as productData } from './Components/products';
import CategoryFilter from './Components/CategoryFilter';
import FilterSort from './Components/FilterSort';
import SearchBar from './Components/SearchBar';
import ProductDetails from './Components/ProductDetails';

const categories = [
  {
    name: 'All',
    subcategories: []
  },
  {
    name: 'Electronics',
    subcategories: ['Gaming', 'Wearable']
  },
  {
    name: 'Phones',
    subcategories: ['Android', 'iPhone']
  },
  {
    name: 'Tablets',
    subcategories: ['iPad', 'Android Tablet']
  }
];

function App() {
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilterSort = ({ priceRange, rating, sortOption }) => {
    let filtered = [...productData];

    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(product => product.price >= min && product.price <= max);
    }

    if (rating) {
      filtered = filtered.filter(product => product.rating >= Number(rating));
    }

    if (sortOption) {
      switch (sortOption) {
        case 'price-asc':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          filtered.sort((a, b) => b.rating - a.rating);
          break;
        default:
          break;
      }
    }

    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  const handleSelectCategory = (category, subcategory = null) => {
    if (category === 'All') {
      setFilteredProducts(productData);
    } else if (subcategory) {
      const filtered = productData.filter(product => product.category === category && product.subcategory === subcategory);
      setFilteredProducts(filtered);
    } else {
      const filtered = productData.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    handleFilterSort({ priceRange: '', rating: '', sortOption: '' });
  };

  return (
    <Router>
      <div className="App">
        <div className="main-content">
          <CategoryFilter categories={categories} onSelectCategory={handleSelectCategory} />
          <div className="content-section">
            <div className="search-filter-section">
              <SearchBar onSearch={handleSearch} />
              <FilterSort onFilterSort={handleFilterSort} />
            </div>
            <Routes>
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/" element={<Products products={filteredProducts} />} />
            </Routes>
          </div>
        </div>
        <SiteFooter />
      </div>
    </Router>
  );
}

export default App;
