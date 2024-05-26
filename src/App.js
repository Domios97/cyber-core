import './App.css';
import Navbar from './Components/Navigbar';
import SiteFooter from './Components/sitefooter';
import HomePage from './Components/homePage';

const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <SiteFooter />
    </div>

  );
};

export default App;
