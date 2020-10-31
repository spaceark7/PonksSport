import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import kintil from '../../assets/product/rubber/1.VEGA-TOUR_RUBBER_2.jpg';
import '../../styles/card-item.css';

function CardItem(props) {
    return(
        <div className="mCard container">
            <div className="row mCardBox">
                <div className="product-image col-sm-6 col-md-6 col-l-6" id="left-img">
                    <img src={kintil}></img>
                </div>
                <div className="product-desc col-sm-6 col-md-6 col-l-6" id="right">
                    <h2>Title</h2>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <a href=''>Order</a>
                </div>
                
            </div>
        </div>)
}

export default CardItem;