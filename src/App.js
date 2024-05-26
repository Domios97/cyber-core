import React from 'react';
import './App.css';
import Products from './products';
import HeroSection from './HeroSection';

function App() {
  return (
    <div className="App">
      <h1>Product Display</h1>
      <HeroSection/>
      <Products />
    </div>
  );
}

export default App;
