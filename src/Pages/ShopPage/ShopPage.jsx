import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import FilterSort from '../../Components/FilterSort/FilterSort';
import CategoryFilter from '../../Components/CategoryFilter/CategoryFilter';
// import Products from '../../Components/OneProduct/Products';
// import { product as productData } from '../../Components/OneProduct/ProductCart';
import '../ShopPage/ShopPage.css';
import ProductController from '../../controllers/ProductController';
import { CatigoryContext } from '../../Contexts/CatigoryProvider';
import ProductCart from '../../Components/OneProduct/ProductCart';
import { ProductContext } from '../../Contexts/ProductProvider';



function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ShopPage() {
  const {allProducts, setAllProducts} = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({ priceRange: '', sortOption: '' });
  const {catigorys, setAllCatigorys} = useContext(CatigoryContext);
  const [selectedCatigory, setSelectedCatigory] = useState("All");
  const query = useQuery();
  const searchQuery = query.get('search') || '';

 useEffect(() => {
     filterProducts();
  }, [filters, selectedCatigory]);

  const filterProducts = () => {
  let filtered = allProducts ? [...allProducts] : []; // Make a copy of allProducts
 
  // Filter based on search query
  if (searchQuery.trim() !== '') {
    const searchRegex = new RegExp(searchQuery.trim(), 'i');
    filtered = filtered.filter(product => searchRegex.test(product.name));
  }

  // Filter based on price range if it's defined
  if (filters && filters.priceRange !== undefined && filters.priceRange !== '') {
    const [minPrice, maxPrice] = filters.priceRange.split('-').map(Number);
    filtered = filtered.filter(product => product.price >= minPrice && product.price <= maxPrice);
  }
  if(selectedCatigory !== "All"){
    filtered = filtered.filter(product=> product.catigory.name === selectedCatigory);
  }
  // Sort based on price
  // Sort in descending order of price
  if(filters && filters.sortOption === "price-asc"){
    filtered.sort((a, b) => a.price - b.price);
  }else if(filters && filters.sortOption === "price-desc"){
    filtered.sort((a, b) => b.price - a.price);
  }

  setFilteredProducts(filtered); // Set the state with the filtered and sorted array
};
  
  const handleSelectedCategory =  (category) =>{
    setSelectedCatigory(category);
  }
  const handleFilterSort = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <div className="main-content">
        <CategoryFilter
          categories={catigorys && catigorys}
          onSelectedCatigory = {handleSelectedCategory}
          selectedCatigory = {selectedCatigory}

        />
        <div className="content-section">
          <div>
            <FilterSort onFilterSort={handleFilterSort} />
          </div>
          <div className='shop-products-container'>
            <div className="products-grid-container">
              { filteredProducts.length !==0 ? filteredProducts.map((product)=>{
                return <ProductCart productInfo = {product}  />
              }): allProducts && allProducts.map((product)=>{
                return <ProductCart productInfo = {product}  />
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
