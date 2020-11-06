import React from 'react';
import '../../styles/AboutShow.css'
import Yon from '../../assets/yon-cropped.png'


const AboutShow = () => {
    return ( <div className="about-container">
        <div className='col-about' id="left-container">
            <h3>About<span>US</span></h3>
            <p>Ponks Sport is the official distributor of XIOM Table Tennis table tennis equipment and accessories. It also has a table tennis sports management system, besides that Ponks Sport also provides Coaching Clinic and Private Training services by Yon Mardiyono (National Table Tennis Athlete).</p>
            <a className="linkTo" href="#">Lebih Lanjut</a>
        </div>
        
        <div className='col-about' id="right-container">
           <img id="about-featured" src={Yon}></img>
           <h2 className="name">Yon Mardiyono
           </h2>
           <h2 id="p-title">National Athlete Tennis Table
           </h2>

        </div>
    </div> );
}
 
export default AboutShow;