import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/card-item.css';


function CardItem({product}) {
    const [imz,setimz] = useState('');
    useEffect(() => {
        const message = encodeURI('Halo, saya tertarik dengan product ' + product.name + ', Apakah masih tersedia? Terima Kasih.');
        console.log('uri: ', message);
        setimz(message)
       
    })
    
    return(
        <div className="mCard container">
            <div className="row mCardBox">
                <div className="product-image col-sm-6 col-md-6 col-l-6" id="left-img">
                    <img alt='product' src={`${process.env.PUBLIC_URL}${product.path}${product.filename}${product.ext}`}></img>
                </div>
                <div className="product-desc col-sm-6 col-md-6 col-l-6" id="right">
                    <h2>{product.name}</h2>
                    <p>{product.desc}</p>
                    <h3>Color: {product.color}</h3>
                    <h3>Size: {product.specs} </h3>
                    <a href={`https://wa.me/+6281220149321?text=${imz}`} target='_blank' rel="noreferrer">Order</a>
                </div>
                
            </div>
        </div>)
}

export default CardItem;