import React, { useEffect } from 'react';
import '../styles/loader.css';

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
        </div>
    )
}
export default Loader;