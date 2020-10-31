import logo from './logo.svg';
import './App.css';
import Banner from './components/banner.js'
import Product from './components/product.js'
import Nav from './components/nav.js';
import Loader from './components/loader.js'

function App() {
  return (
    <div className="App">
      <Loader />
      <Nav />
      <Banner />
      <Product />
    </div>
  );
}

export default App;
