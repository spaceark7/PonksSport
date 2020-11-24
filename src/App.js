import logo from './logo.svg';
import './App.css';
import Footer from './components/content/footer.js'
import Nav from './components/content/nav.js';
import Loader from './components/content/loader.js'


function App() {

 
  return (
    <div className="App">
      <Loader />

      <Nav />
      {/* <Banner />
      <Product /> */}
      <Footer />
    </div>
  );
}

export default App;
