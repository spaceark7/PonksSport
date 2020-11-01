import React, { useState, useEffect } from 'react';
import '../styles/product.css';

import {Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardItem from './card/card-item.js';
import product from '../data/rubber.json'
function Product() {
    let newdata = '';
    const [data, setData] = useState([])
  const getData=()=>{
     setData(product);
  }
  
  useEffect(() => {
      
  })
    
 
    return (
        <div className='container p-container'>
            <Tabs className="main-tab" defaultActiveKey="rubber" id="uncontrolled-tab-example">
                    <Tab className="tab-pane" eventKey="rubber" title="Rubber">
                        <div className = "container-fluid" id="body-content">
                            <div className="body-content-row row">
                        
                               { newdata = product.rubber.map(item => {
                                   console.log(item);
                                   return <CardItem key={item.Id} product={item}/>
                               })}

                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="blade" title="Blade">
                    <h2> Blade Page</h2>
                    </Tab>
                    <Tab eventKey="table+" title="Table+">
                    <h2> Table+ Page</h2>
                    </Tab>
                    <Tab eventKey="ball" title="Ball & Racket">
                    <h2> Ball & Racket Page</h2>
                    </Tab>
                    <Tab eventKey="fashion" title="Fashion">
                    <h2> Fashion Page</h2>
                    </Tab>
                    <Tab eventKey="accesory" title="Accessory">
                    <h2> Accessory Page</h2>
                    </Tab>
            </Tabs>
        </div>
    )
}

export default Product;