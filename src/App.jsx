import Nav from './components/Nav';
import Home from './components/Home';
import Bento from './components/Bento';
import Products from './components/Products';
import Ticker from './components/Ticker';
import Review from './components/Review';
import Facts from './components/FAQs';
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <Bento />
      <Products />
      <Ticker />
      <Review />
      <Facts />
    </div>
  );
}

export default App;
