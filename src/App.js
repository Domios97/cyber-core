import './App.css';
import Navbar from './Components/NavBar/Navigbar';
import SiteFooter from './Components/Footer/sitefooter';
import HomePage from './Pages/HomePage/HomePage';
import ProductDetails from './Pages/ProductDetails/product_detail';


const App = () => {
    return ( 
     <>
        <Navbar />
        <ProductDetails />
     </>
    );
};

export default App;