import React, { useEffect } from 'react';
import '../../styles/loader.css';


function Loader() {
    useEffect(() => {
        let loader = document.querySelector('.loader');
        console.log(loader)

         setTimeout(function (){ 
             loader.style.display = 'none';
         }, 3000);
        

        
    })
    return(
        <div className='loader'>
            <h1>This website is Under Construction</h1>
            {/* <img src={`${process.env.PUBLIC_URL}/product/blade/b1.png`}></img> */}
        </div>
    )
}
export default Loader;