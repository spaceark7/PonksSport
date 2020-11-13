import React, { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Tabs, Tab } from 'react-bootstrap';
import '../../styles/banner.css'
import yon from '../../assets/banner/Yon.png'
import aww from '../../assets/banner/Aww.png'
import ias from '../../assets/banner/IndonesiaAllStar.png'
import three from '../../assets/banner/3.jpg'
import four from '../../assets/banner/4.jpg'

 function Banner() {

    
   useEffect(()=> {
       const imgBx = document.querySelector('.imgBx');
       const slides = imgBx.getElementsByTagName('img');
       console.log('imgbx: ',imgBx);
       let i = 0;
    
       function Slide() {
           slides[i].classList.remove('active');
            i = (i + 1) % slides.length;
           slides[i].classList.add('active');
       }
       function SlidePrev() {
        slides[i].classList.remove('active');
         i = (i - 1 + slides.length) % slides.length;
        slides[i].classList.add('active');
    }
       const next = document.querySelector('#nextButton');
       const prev = document.querySelector('#prevButton')

       console.log(next)
       next.addEventListener('click', function() {
           Slide(); SlideText()

       })
       prev.addEventListener('click', function() {
           SlidePrev()
           SlideTextPrev()
       } )

       const bannerContentBx = document.querySelector('.banner-contentBx');
       const slidesText = bannerContentBx.getElementsByTagName('div');
       console.log(bannerContentBx);
       let j = 0;
    
       function SlideText() {
           slidesText[j].classList.remove('active');
            j = (j + 1) % slidesText.length;
           slidesText[j].classList.add('active');
       }
       function SlideTextPrev() {
        slidesText[j].classList.remove('active');
         j = (j - 1 + slidesText.length) % slidesText.length;
        slidesText[j].classList.add('active');
    }
      
       
    const interval = setInterval(() => {
        console.log('executed');
        Slide()
        SlideText()
    }, 4000)
      
      
   })

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
                <img id='imgfirstslide' alt='' src={yon} className="active"/>
                <img id='imgsecondslide' alt='' src={aww}/>
                <img id='imgthirdslide' alt='' src={ias}/>
                <img id='imgfourthslide' alt='' src={three}/>
                <img id='imgfifthslide' alt='' src={four}/>
            </div>
            <div className='banner-contentBx'>
                <div id='firstslide' className="active">
                    <h2>Yon Mardiyono</h2>
                    <p>National Athelte & CEO-Founder Ponks Sport</p>
                </div>
                <div id='secondslide' >
                    <h2 >Empower Yourself</h2>
                    <p>With XIOM Tennis Table Equipment Exceed your limit.</p>
                </div>
                <div id='thirdslide'>
                    <h2>Indonesia All Star</h2>
                    <p>Confidence isn't enough, XIOM Will Give You Power </p>
                </div>
                <div id='fourthslide'>
                    <h2>Ready To Be A Champion?</h2>
                    <p>XIOM Will Deliver it for you</p>
                </div>
                <div id='fifthslide' >
                    <h2>xiom tennis table equipment</h2>
                    <p>Provide You Complete Equipment For Your Training, Sparing And Competing</p>
                </div>
            </div>
            <ul className="controls">
                <li id="prevButton" ></li>
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
