import logo from './logo.svg';
import './App.css';

import Nav from './components/content/nav.js';
import Loader from './components/content/loader.js'


function App() {

 
  return (
    <div className="App">
      <Loader />

      <Nav />
      {/* <Banner />
      <Product /> */}
    </div>
  );
}

export default App;
