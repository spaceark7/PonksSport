import React, { useEffect } from 'react';
import '../../styles/nav.css';
import logo from '../../assets/PonksSport.png'
import xiomlogo from '../../assets/XIOM.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import Home from "../Home"
  import About from '../About'
  import Store from "../Store"
  import Contact from "../Contact"

function Nav() {

    useEffect(() => {
        const toggle = document.querySelector('.toggle');
        const sidebar = document.querySelector('.sideBar')
        console.log('toggle is ', toggle)
        console.log("side",sidebar)
        toggle.addEventListener('click', function() {
                console.log("function executed")
                sidebar.style.display = 'block';
        })

        const close = document.querySelector('.close');
        close.addEventListener('click', function () {
            sidebar.style.display = 'none';
        })

    })
    return(
        <Router>
        <header>
                <a href='#' className="logo">
                    <img src={logo}></img>
                    <img id="xiom-logo" src={xiomlogo}></img>
                </a>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/Store'>Store</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                </ul>
                <div className="toggle"></div>
            </header>

            <div className="sideBar">
            <div className="close"></div>
            <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/Store'>Store</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                </ul>
            
            </div>
            <Switch>
                <Route path="/Contact">
                    <Contact />
                </Route>
                <Route path="/About">
                    <About />
                </Route>
                <Route path="/Store">
                    <Store />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            </Router>
    )
}

export default Nav;