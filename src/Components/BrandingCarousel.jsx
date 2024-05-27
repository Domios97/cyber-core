import React, { useEffect } from 'react';
import '../CSS/BrandingCarousel.css';
import { amd, nvidia, hp, asus, apple, intel, msi, gigabyte } from '../images';

function BrandingCarousel() {
  useEffect(() => {
    const images = document.querySelectorAll('.brandigs-carousel img');
    const container = document.querySelector('.brandigs-carousel');
    let animationDuration = 20; 

    let totalWidth = 0;
    images.forEach(image => {
      totalWidth += image.offsetWidth;
    });

    animationDuration = (totalWidth / container.offsetWidth) * animationDuration;

    container.style.setProperty('--animation-duration', `${animationDuration}s`);
  }, []);

  return (
    <div>
      <div className="brandigs-carousel">
        <img src={nvidia} alt="" />
        <img src={asus} alt="" />
        <img src={apple} alt="" />
        <img src={intel} alt="" />
        <img src={amd} alt="" />
        <img src={hp} alt="" />
        <img src={msi} alt="" />
        <img src={gigabyte} alt="" />
      </div>
    </div>
  );
}

export default BrandingCarousel;
