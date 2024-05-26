import React from 'react';
import '../CSS/CategorieCarousel.css'
import {desktop, harddrive, gpu, headset, router, kaspersky} from '../images';

function CatgorieCarousel() {
  return (
    <div>
     <div className="catgorie-carousel">
        <div className="one-categorie">
            <img src={desktop} alt="" />
            <p>PCs/Desktops</p>
        </div>
        <div className="one-categorie">
            <img src={router} alt="" />
             <p>Networking</p>
        </div>
        <div className="one-categorie">
            <img src={harddrive} alt="" />
            <p>Accessories</p>
        </div>
        <div className="one-categorie">
            <img src={headset} alt="" />
            <p>Peripherals</p>
        </div>
        <div className="one-categorie">
            <img src={gpu} alt="" />
            <p>Components</p>
        </div>
        <div className="one-categorie">
            <img src={kaspersky} alt="" />
            <p>Software</p>
        </div>
     </div>
    </div>
  )
}

export default CatgorieCarousel
