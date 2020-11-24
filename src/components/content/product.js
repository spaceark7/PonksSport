import React, { useState, useEffect } from 'react';
import '../../styles/product.css';

import {Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardItem from '../card/card-item.js';
import products from '../../data/products';
function Product() {
    let newdata = '';
    const [data, setData] = useState([])
  const getData=()=>{
     setData(products);
  }
  
  useEffect(() => {
      console.log('products: is ',products)
  })
    
 
    return (
        <div className='container p-container'>
            <Tabs className="main-tab" defaultActiveKey="rubber" id="uncontrolled-tab-example">
                    <Tab className="tab-pane" eventKey="rubber" title="Rubber">
                        <div className = "container-fluid" id="body-content">
                            <div className="body-content-row row">
                           
                            { newdata = products.rubber.map(item => {
                                   console.log(item);
                                   return <CardItem key={item.Id} product={item}/>
                               })}

                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="blade" title="Blade">
                    <div className = "container-fluid" id="body-content">
                            <div className="body-content-row row">
                        
                               { newdata = products.blade.map(item => {
                                   console.log(item);
                                   return <CardItem key={item.Id} product={item}/>
                               })}

                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="table+" title="Table+">
                    <div className = "container-fluid" id="body-content">
                            <div className="body-content-row row">
                        
                               { newdata = products.table.map(item => {
                                   console.log(item);
                                   return <CardItem key={item.Id} product={item}/>
                               })}

                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="ball" title="Ball & Racket">
                    <div className = "container-fluid" id="body-content">
                            <div className="body-content-row row">
                        
                               { newdata = products.ballandracket.map(item => {
                                   console.log(item);
                                   return <CardItem key={item.Id} product={item}/>
                               })}

                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="fashion" title="Fashion">
                    <div className = "container-fluid" id="body-content">
                            <div className="body-content-row row">
                        
                               { newdata = products.fashion.map(item => {
                                   console.log(item);
                                   return <CardItem key={item.Id} product={item}/>
                               })}

                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="accesory" title="Accessory">
                    <div className = "container-fluid" id="body-content">
                            <div className="body-content-row row">
                        
                               { newdata = products.accessory.map(item => {
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