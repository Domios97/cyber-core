import React from 'react';
import './CategorieCarousel.css'
import Category from '../OneCategory/Category';

function CatgorieCarousel(props) {
  var catigorys = props.catigorys ;
  return (
    <div>
      <div className="catgorie-carousel">
        {catigorys && catigorys.data.map((catigory)=>{
          return <Category key ={catigory.id} name = {catigory.name} imagePath = {catigory.image["image_path"]}/>
        })}
       
      </div>
    </div>
  )
}

export default CatgorieCarousel
