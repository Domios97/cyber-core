import './App.css';
import Navigbar from './Components/NavBar/Navigbar';
import SiteFooter from './Components/Footer/sitefooter';
import Cart from './Components/Cart/Cart';

const App = () => {

    return (
       <>
        <Navigbar />
        <Cart />
        <SiteFooter />
       </>
    );
};

export default App;