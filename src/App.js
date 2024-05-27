import React, { useState } from 'react';
import Products, { products as productData } from './products';
import './App.css';
import ViewAllButton from './ViewAllButton';

function App() {
  const [ setFilteredProducts] = useState(productData);

  const handleViewAll = () => {
    setFilteredProducts(productData);
  };

  return (
    <div className="App">
      <ViewAllButton onViewAll={handleViewAll} />
    </div>
  );
}

export default App;
