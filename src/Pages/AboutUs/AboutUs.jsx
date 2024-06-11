import React from 'react';
import '../AboutUs/AboutUs.css'
import heroImage from '../../images/wallpaper.jpeg'; 

const AboutUs = () => {
    return (
      <div className="about-us">
        <section className="about-us-hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="overlay">
            <div className="hero-content">
              <h1>get to know us</h1>
            </div>
          </div>
        </section>
        <section className="about-content">
          <div className="section purpose">
            <h3>Our Purpose</h3>
            <p>At CyberCore, we believe that every technology enthusiast deserves the best computer components and accessories. Our goal is to provide high-quality products that enable our customers to achieve their technology goals and stay ahead in a rapidly changing technological world.</p>
          </div>
          <div className="section vision">
            <h3>Our vision:</h3>
            <p>We envision a world in which technology seamlessly integrates into every aspect of life, improving productivity and innovation. Our goal is to become the leading supplier of computer components and accessories, known for our exceptional customer service and commitment to excellence.</p>
          </div>
          <div className="section mission">
            <h3>Our mission:</h3>
            <p>Our mission is to provide premier computer products and accessories that meet the highest standards of quality and performance. We are committed to providing an unparalleled shopping experience, from the moment you visit our website to the moment your products arrive at your doorstep.</p>
          </div>
          <div className="section values">
            <h3>Nos valeurs:</h3>
            <ul>
              <li><strong>Qualité:</strong>Nous nous engageons à proposer des produits répondant à des normes de qualité strictes.</li>
              <li><strong>Satisfaction client:</strong> Nos clients sont au cœur de tout ce que nous faisons. Nous nous efforçons de dépasser leurs attentes dans chaque interaction.</li>
            </ul>
          </div>
          <div className="section history">
            <h3>Our Story</h3>
            <p>Founded in 2024, CyberCore started with the mission of providing high-quality IT products to technology enthusiasts and professionals. Over the years, we have become a trusted name in the industry, known for our wide product selection and exceptional customer service.</p>
          </div>
          <div className="section team">
            <h3>Meet Our team</h3>
            <p>Our team is made up of passionate professionals who are dedicated to helping you find the perfect technology solutions.</p>
          </div>
        </section>
      </div>
    );
  };
  
  export default AboutUs;