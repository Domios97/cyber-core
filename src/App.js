import './App.css';
import Navbar from './Components/NavBar/Navigbar';
import SiteFooter from './Components/Footer/sitefooter';
import HomePage from './Pages/HomePage/HomePage';
import ProductDetailsPage from './Pages/productDetails/ProductDetailsPage';
import Cart from './Pages/Cart/Cart';

const App = () => {
  return (
    <div>
      <Navbar />
      <ProductDetailsPage />
      <SiteFooter />
    </div>

  );
};

export default App;
