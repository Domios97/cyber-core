import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FilterSort from '../../Components/FilterSort/FilterSort';
import CategoryFilter from '../../Components/CategoryFilter/CategoryFilter';
import Products from '../../Components/OneProduct/Products';
import { product as productData } from '../../Components/OneProduct/ProductCart';
import '../ShopPage/ShopPage.css';

const categories = {
  All: [],
  Components: [],
  Accessories: [],
  Peripherals:[],
  Networking: [],
  PreBuiltPC: [],
  Software: [],
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ShopPage() {
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filters, setFilters] = useState({ priceRange: '', sortOption: '' });
  const query = useQuery();
  const searchQuery = query.get('search') || '';

  useEffect(() => {
    filterProducts();
  }, [selectedCategory, searchQuery, filters]);

  const filterProducts = () => {
    let filtered = [...productData];

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (searchQuery.trim() !== '') {
      const searchRegex = new RegExp(searchQuery.trim(), 'i');
      filtered = filtered.filter(product => searchRegex.test(product.title));
    }

    if (filters.priceRange) {
      const [minPrice, maxPrice] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(product => product.price >= minPrice && product.price <= maxPrice);
    }

    if (filters.sortOption === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sortOption === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleFilterSort = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <div className="main-content">
        <CategoryFilter
          categories={categories}
          onSelectCategory={handleSelectCategory}
          selectedCategory={selectedCategory}
        />
        <div className="content-section">
          <div>
            <FilterSort onFilterSort={handleFilterSort} />
          </div>
          <div className='shop-products-container'>
            <div className="products-grid-container">
              <Products products={filteredProducts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
