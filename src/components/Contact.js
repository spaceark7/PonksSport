import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Contact.css'
const Contact = () => {
    return ( 
    <div className="container-fluid contact-container">
        <div className="row contact-row">
        <div className="col-md-6 col-sm-12 left-cont-container">
                <h2 className="contact-title">Ponks Sport Store</h2>
                <p className='title-desc'>is an Official Retail Store of XIOM PRODUCT KOREA. We provide any kind of tennis table equipment for professional which is suitable for every playstyle, giving the power for those who seek perfection and balance.</p>
            </div>
            <div className="col-md-6 col-sm-12 right-cont-container">
                
                <h2><span>Visit Our Store</span></h2>
                <div className='contact-wrapper'>
                <h3>Address</h3>
                <p>Jl. Trans Yogi / Alternatif Cibubur No.9A, Harjamukti, Kec. Cimanggis, Kota Depok, Jawa Barat 16454</p>

                <h3>Phone</h3>
                <p><a href='tel:+6221 22174053'>+6221 22174053</a> <br></br>
                WhatsApp: <a href='tel:+6281220149321'>+62 812 2014 9321</a></p> 

                 <h3>email</h3>
                <p><a href='mailto:admin@ponkssport.com'>Marketing Ponks Sport Store</a></p> 
                </div>        
            </div>
            <h1 className="quote">"Every Stance accomodated and reveal its true strength by us"</h1>
        </div>
            
        
        </div>)
}
 
export default Contact;