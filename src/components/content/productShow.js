import React, { useEffect } from 'react';
import Prev from '../../assets/prev.png'
import Next from '../../assets/next.png'
import Rubber from '../../assets/productShow/EURO.jpg'
import Table from '../../assets/productShow/BP-ITTF-PRO-9.png'
import BNR from '../../assets/productShow/sensa100.png'
import Blade from '../../assets/productShow/HUGO_HAL1_1.png'  
import Fashion from '../../assets/productShow/fb3.png'
import Accessory from '../../assets/productShow/i5.png'

import '../../styles/ProductShow.css'

const ProductShow = () => {
    
    useEffect(() => {
        let thumbnails = document.getElementsByClassName('thumbnail')
        let activeImages = document.getElementsByClassName('ps_active')
        
        for (var i=0; i < thumbnails.length; i++){

			thumbnails[i].addEventListener('mouseover', function(){
				console.log(activeImages)
				
				if (activeImages.length > 0){
					activeImages[0].classList.remove('ps_active')
				}
				this.classList.add('ps_active')
				document.getElementById('featured').src = this.src
			})
		}


		// let buttonRight = document.getElementById('slide-right');
		// let buttonLeft = document.getElementById('slide-left');

		// buttonLeft.addEventListener('click', function(){
		// 	document.getElementsByClassName('slider-ps').scrollLeft -= 180
		// })

		// buttonRight.addEventListener('click', function(){
		// 	document.getElementsByClassName('slider-ps').scrollLeft += 180
		// })
    })

    return ( <div className="content" id="content-wrapper">
        <div className="column">
        <img alt='' id="featured" src={`${process.env.PUBLIC_URL}/product/blade/b1.png`}></img>
        </div>
        <div className="column">
            
            {/* <img id="featured" src={`${process.env.PUBLIC_URL}/product/blade/b1.png`}></img> */}
                
                <div className="textBx">
                <h1>The Best Professional Equipment</h1>
                <hr></hr>
                <h3>Suits for All Your PlayStyle</h3>
                <p>lorem ipsum dolor sir amet kuy</p>
                <a className="link-button" href="#firstslide">See More</a>
                <div id="slide-wrapper">
                

                <div className="slider-ps">
                    <img alt='' className="thumbnail ps_active" src={Rubber}></img>
                    <img alt=''className="thumbnail" src={Blade}></img>
                    <img alt='' className="thumbnail" src={Table}></img>
                    <img alt='' className="thumbnail" src={BNR}></img>
                    <img alt='' className="thumbnail" src={Fashion}></img>
                    <img alt='' className="thumbnail" src={Accessory}></img>
                </div>

                
            </div>
                </div>
                  
        </div>


    </div> );
}
 
export default ProductShow;