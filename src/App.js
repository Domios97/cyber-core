import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Components/NavBar/Navigbar';
import Footer from './Components/Footer/sitefooter';
import WishlistPage from './Pages/WishlistPage/WishlistPage';
import { WishlistProvider } from './Contexts/WishlistContext';
import ProductCart from './Components/OneProduct/ProductCart';


function App() {
  return (
    <WishlistProvider>
      <div className="app-container">
        <main>
          <ProductCart/>
          <WishlistPage /> {/* Include the Wishlist page component */}
        </main>
      </div>
    </WishlistProvider>
  );
}

export default App;