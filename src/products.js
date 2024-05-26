import React, { useState } from 'react';
import './Products.css';
import CategoryFilter from './CategoryFilter';

const products = [
  { id: 1, image: '/images/Controller.jpg', title: 'test1', price: 55, category: 'Electronics',rating: 4 },
  { id: 2, image: '/images/image3.jpg', title: 'test2', price: 79, category: 'Phones', rating:3 },
  { id: 3, image: '/images/image5.jpg', title: 'test3', price: 50, category: 'Tablets',rating:2 },
  { id: 4, image: '/images/image6.jpg', title: 'test4', price: 65, category: 'Electronics',rating :5 },
  { id: 5, image: '/images/image7.jpg', title: 'test5', price: 39, category: 'Phones', rating: 4 },
  { id: 6, image: '/images/image1.jpg', title: 'test6', price: 80, category: 'Tablets', rating : 3 },
];
const categories = ['All', 'Electronics', 'Phones', 'Tablets'];


const Products = ({products}) => {
  
    
  const [sortBy, setSortBy] = useState('price'); 
  const handleSortChange = (option) => {
    setSortBy(option);
  };
    const sortedProducts = [...products].sort((a, b) => {
      if (sortBy === 'price') {
        return a.price - b.price; // Sort by ascending price
      }
      // Add more sorting options (e.g., popularity, category) here
      return 0;
    });

  return (
    
    <div className="products-container">
      
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} className="product-image" />
          <div className="product-details">
            
            <h3>{product.title}</h3>
            <p className="price">{product.price} DZD</p>
       
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};
export {products};

export default Products;
