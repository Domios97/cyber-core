import React, { useState } from 'react';
import './App.css';
import Products, { products as productData } from './products';
import HeroSection from './HeroSection';
import CategoryFilter from './CategoryFilter';
import FilterSort from './FilterSort';
import SearchBar from './SearchBar';
import ProductDetails from './ProductDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Route and Switch

const categories = ['All', 'Electronics', 'Phones', 'Tablets'];

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

  const handleSelectCategory = (category) => {
    if (category === 'All') {
      setFilteredProducts(productData);
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
      <h1>Product Display</h1>
      <div className="main-content">
        <CategoryFilter categories={categories} onSelectCategory={handleSelectCategory} />
        <div className="content-section">
          <HeroSection />
          <SearchBar onSearch={handleSearch} />
          
          <FilterSort onFilterSort={handleFilterSort} />
          <Products products={filteredProducts} />
          <Routes>
              <Route path="/product/:id" component={ProductDetails} />
              <Route path="/" component={() => <Products products={filteredProducts} />} />
            </Routes>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
