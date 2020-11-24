import React from 'react';
import Banner from './content/banner'
import ProductShow from './content/productShow'
import AboutShow from './content/aboutShow'

import VideoShow from './content/videoShow.js'
const Home = () => {
    return ( 
    <div>
        <Banner />
        <VideoShow />
        <ProductShow />
        <AboutShow />
        
    </div> );
}
 
export default Home;