import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CategoryFilter from '../CategoryFilter';
import FilterSort from '../FilterSort';
import Products, { products as productData } from '../Components/OneProduct/ProductCart';
import '../Pages/ShopPage.css';

const categories = {
  All: [],
  Electronics: [],
  Phones: [],
  Tablets: [],
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ShopPage() {
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const query = useQuery();
  const searchQuery = query.get('search') || '';

  useEffect(() => {
    filterProducts();
  }, [selectedCategory, searchQuery]);

  const filterProducts = () => {
    let filtered = [...productData];

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim() !== '') {
      const searchRegex = new RegExp(searchQuery.trim(), 'i');
      filtered = filtered.filter(product => searchRegex.test(product.title));
    }

    setFilteredProducts(filtered);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleFilterSort = (filters) => {
    // Apply sorting logic here
    console.log("Sorting filters:", filters);
  };

  return (
    <div className="Shop">
      <div classNae="product-display">
        <h1 className='product-display'>Product Display</h1>
      </div>
      <div className="main-content">
        <CategoryFilter
          categories={categories}
          onSelectCategory={handleSelectCategory}
          selectedCategory={selectedCategory}
        />
        <div className="content-section">
          <div className="search-filter-section">
            {/* Pass onFilterSort function to FilterSort */}
            <FilterSort onFilterSort={handleFilterSort} />
          </div>
          <div className="products-container">
            <Products products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
