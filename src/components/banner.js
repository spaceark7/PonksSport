import React, { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Tabs, Tab } from 'react-bootstrap';
import '../styles/banner.css'
import yon from '../assets/banner/Yon.png'
import aww from '../assets/banner/Aww.png'
import ias from '../assets/banner/IndonesiaAllStar.png'
import three from '../assets/banner/3.jpg'
import four from '../assets/banner/4.jpg'

 function Banner() {

    
   useEffect(()=> {
       const imgBx = document.querySelector('.imgBx');
       const slides = imgBx.getElementsByTagName('img');
       console.log(imgBx);
       let i = 0;
    
       function Slide() {
           slides[i].classList.remove('active');
            i = (i + 1) % slides.length;
           slides[i].classList.add('active');
       }
       const next = document.querySelector('#nextButton');
       console.log(next)
       next.addEventListener('click', function() {
           Slide();
       })
   })

   function nextSlide() {

   } 
    return ( 
        <div className="banner">
            {/* <header>
                <a href='#' className="logo">Ponks Sport</a>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Store</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="toggle"></div>
            </header> */}

        <section className="img-banner">
            <div className='imgBx'>
                <img src={yon} className="active"/>
                <img src={aww}/>
                <img src={ias}/>
                <img src={three}/>
                <img src={four}/>
            </div>
            <ul className="controls">
                <li ></li>
                <li id="nextButton"></li>
            </ul>
        </section>

            {/* <div className="slider">
                <input type="radio" name="slider" checked="checked"></input>
                <div className="imgBx">
                    <img src={mock}></img>
                </div>
                
                <input type="radio" name="slider"></input>
                <div className="imgBx">
                    <img src={mock2}></img>
                </div>

                <input type="radio" name="slider"></input>
                <div className="imgBx">
                    <img src={mock1}></img>
                </div>

                <input type="radio" name="slider"></input>
                <div className="imgBx">
                    <img src={mock2}></img>
                </div>

                <input type="radio" name="slider"></input>
                <div className="imgBx">
                    <img src={mock}></img>
                </div>
            </div> */}

   



    </div>);
}

export default Banner;
