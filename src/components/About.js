import React from 'react';
import Yon from '../assets/banner/Yon.png'
import '../styles/Abouts.css'
import YouTubePlayer from 'react-player/youtube'
const About = () => {
    return ( <div>
         <div className="Aabout-container">
        <div className='Acol-about' id="Aleft-container">
            <h3>About<span>US</span></h3>
            <p>Ponks Sport is the official distributor of XIOM Table Tennis table tennis equipment and accessories. It also has a table tennis sports management system, besides that Ponks Sport also provides Coaching Clinic and Private Training services by Yon Mardiyono (National Table Tennis Athlete).</p>
            
        </div>
        
        <div className='Acol-about' id="Aright-container">
           <img alt="Yon" id="Aabout-featured" src={Yon}></img>
           <h2 className="Aname">Yon Mardiyono
           </h2>
           <h2 id="Ap-title">National Athlete Tennis Table <br></br>
           -CEO Founder Ponks Sport
           </h2>

        </div>
    </div> 
    {/* <div className="video-block">
            <YouTubePlayer playing={true}  width="100%" height="100vh" muted={true} loop={true} url="https://www.youtube.com/watch?v=CZm79WRN1R0"/>
    </div> */}
    </div> );
}
 
export default About;