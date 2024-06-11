import React from 'react';
import '../AboutUs/AboutUs.css'
import heroImage from '../../images/wallpaper.jpeg'; // Make sure to update the path to your image

const AboutUs = () => {
    return (
      <div className="about-us">
        <section className="about-us-hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="overlay">
            <div className="hero-content">
              <h1>Apprendre a nous connaitre</h1>
            </div>
          </div>
        </section>
        <section className="about-content">
          <div className="section purpose">
            <h3>Notre but:</h3>
            <p>Chez CyberCore, nous pensons que chaque passionné de technologie mérite les meilleurs composants et accessoires informatiques. Notre objectif est de fournir des produits de haute qualité qui permettent à nos clients d'atteindre leurs objectifs technologiques et de garder une longueur d'avance dans un monde technologique en évolution rapide.</p>
          </div>
          <div className="section vision">
            <h3>Notre vision:</h3>
            <p>Nous envisageons un monde dans lequel la technologie s’intègre parfaitement à tous les aspects de la vie, améliorant ainsi la productivité et l’innovation. Notre objectif est de devenir le principal fournisseur de composants et d'accessoires informatiques, connu pour notre service client exceptionnel et notre engagement envers l'excellence.</p>
          </div>
          <div className="section mission">
            <h3>Notre mission:</h3>
            <p>Notre mission est de fournir des produits et accessoires informatiques de premier ordre qui répondent aux normes de qualité et de performance les plus élevées. Nous nous engageons à offrir une expérience d'achat inégalée, du moment où vous visitez notre site Web jusqu'au moment où vos produits arrivent à votre porte.</p>
          </div>
          <div className="section values">
            <h3>Nos valeurs:</h3>
            <ul>
              <li><strong>Qualité:</strong>Nous nous engageons à proposer des produits répondant à des normes de qualité strictes.</li>
              <li><strong>Satisfaction client:</strong> Nos clients sont au cœur de tout ce que nous faisons. Nous nous efforçons de dépasser leurs attentes dans chaque interaction.</li>
            </ul>
          </div>
          <div className="section history">
            <h3>Notre histoire:</h3>
            <p>Fondée en 2024, CyberCore a débuté avec pour mission de fournir des produits informatiques de haute qualité aux passionnés de technologie et aux professionnels. Au fil des années, nous sommes devenus un nom de confiance dans l’industrie, connu pour notre large sélection de produits et notre service client exceptionnel.</p>
          </div>
          <div className="section team">
            <h3>Rencontrez notre équipe:</h3>
            <p>Notre équipe est composée de professionnels passionnés qui se consacrent à vous aider à trouver les solutions technologiques parfaites.</p>
          </div>
          <div className="section testimonials">
            <h3>Ce que disent nos clients :</h3>
            <p>"CyberCore est ma référence pour tous mes besoins informatiques. Leurs produits sont de premier ordre et leur service client est exceptionnel !" - Client satisfait</p>
          </div>
        </section>
      </div>
    );
  };
  
  export default AboutUs;