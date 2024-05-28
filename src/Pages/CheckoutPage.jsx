import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navigbar';
import SiteFooter from './Components/sitefooter';

function App() {
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