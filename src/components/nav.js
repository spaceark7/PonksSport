import React from 'react';
import '../styles/nav.css';
import logo from '../assets/PonksSport.png'
import xiomlogo from '../assets/XIOM.png'

function Nav() {
    return(
        <header>
                <a href='#' className="logo">
                    <img src={logo}></img>
                    <img id="xiom-logo" src={xiomlogo}></img>
                </a>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Store</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="toggle"></div>
            </header>
    )
}

export default Nav;