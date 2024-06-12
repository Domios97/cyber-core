import React, { useState } from 'react';
import './../CategoryFilter/CategoryFilter.css';

const CategoryFilter = ({ categories, onSelectedCatigory, selectedCatigory }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    console.log(category)
    if(category === expandedCategory){
      setExpandedCategory(null);
    }
    else{
      setExpandedCategory(category)
    }
    onSelectedCatigory(category);
  };

  return (
    <div className="category-filter">
      <div className="category-item">
        <div
          className={`category-name`}
          onClick={(e)=>{
            handleCategoryClick("All");}}
        >
          All
        </div>
       </div>
      {categories && categories.map(category => {
        return (<div key={category.id} className="category-item">
        <div
          className={`category-name ${category.name === selectedCatigory ? "selected" : ''}`}
          onClick={(e)=>{
            handleCategoryClick(category.name);}}
        >
          {category.name}
        </div>
       </div>
      )})}
    </div>
  );
};

export default CategoryFilter;
