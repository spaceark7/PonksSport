import React from 'react';
import Banner from './content/banner'
import ProductShow from './content/productShow'
import AboutShow from './content/aboutShow'
import Footer from '../components/content/footer.js'
const Home = () => {
    return ( 
    <div>
        <Banner />
        <ProductShow />
        <AboutShow />
        <Footer />
    </div> );
}
 
export default Home;