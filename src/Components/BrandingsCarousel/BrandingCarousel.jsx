import React, { useEffect } from 'react';
import './BrandingCarousel.css';
import { amd, nvidia, hp, asus, apple, intel, msi, gigabyte,acer } from '../../images';

function BrandingCarousel() {
  
  return (
        <div>
          <div className="brandigs">
            <div className="branding-carousel">
              <img src={nvidia} alt="" />
              <img src={asus} alt="" />
              <img src={apple} alt="" />
              <img src={intel} alt="" />
              <img src={amd} alt="" />
              <img src={hp} alt="" />
              <img src={msi} alt="" />
              <img src={gigabyte} alt="" />
              <img src={acer} alt="" />
            </div>
            {/* <div className="branding-carousel">
              <img src={nvidia} alt="" />
              <img src={asus} alt="" />
              <img src={apple} alt="" />
              <img src={intel} alt="" />
              <img src={amd} alt="" />
              <img src={hp} alt="" />
              <img src={msi} alt="" />
              <img src={gigabyte} alt="" />
              <img src={acer} alt="" />
            </div> */}
          </div>
        </div>
  );
}

export default BrandingCarousel;
