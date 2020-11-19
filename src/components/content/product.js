import React, { useState, useEffect } from 'react';
import '../../styles/product.css';

import {Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardItem from '../card/card-item.js';
import product from '../../data/rubber';
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
                           
                                { 
                                
                                    product.rubber.map(item => {
                                    console.log(item);
                                    return <CardItem  key={item.Id} product={item}/>})
                               } 

                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="blade" title="Blade">
                    <div className = "container-fluid" id="body-content">
                            <div className="body-content-row row">
                        
                               { newdata = product.blade.map(item => {
                                   console.log(item);
                                   return <CardItem key={item.Id} product={item}/>
                               })}

                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="table+" title="Table+">
                    <div className = "container-fluid" id="body-content">
                            <div className="body-content-row row">
                        
                               { newdata = product.table.map(item => {
                                   console.log(item);
                                   return <CardItem key={item.Id} product={item}/>
                               })}

                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="ball" title="Ball & Racket">
                    <div className = "container-fluid" id="body-content">
                            <div className="body-content-row row">
                        
                               { newdata = product.ballandracket.map(item => {
                                   console.log(item);
                                   return <CardItem key={item.Id} product={item}/>
                               })}

                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="fashion" title="Fashion">
                    <div className = "container-fluid" id="body-content">
                            <div className="body-content-row row">
                        
                               { newdata = product.fashion.map(item => {
                                   console.log(item);
                                   return <CardItem key={item.Id} product={item}/>
                               })}

                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="accesory" title="Accessory">
                    <div className = "container-fluid" id="body-content">
                            <div className="body-content-row row">
                        
                               { newdata = product.accessory.map(item => {
                                   console.log(item);
                                   return <CardItem key={item.Id} product={item}/>
                               })}

                            </div>
                        </div>
                    </Tab>
            </Tabs>
        </div>
    )
}

export default Product;