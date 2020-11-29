import React from 'react';
import '../../styles/Footer.css'
import FB from '../../assets/icon/fb.png'
import IG from '../../assets/icon/ig.png'
import YT from '../../assets/icon/yt.png'
import WA from '../../assets/icon/wa.png'
const Footer = () => {
    return ( <div className="footer-container">
        <div className="col-footer">
            <h2>Address</h2>
            <p>Jl. Trans Yogi / Alternatif Cibubur No.9A, Harjamukti, Kec. Cimanggis, Kota Depok, Jawa Barat 16454</p>
        </div>
        <div className="col-footer">
            <h2>Contact</h2>
            <p>Phone: <a href='tel:+6221 22174053'>+6221 22174053</a></p>
            <p>WhatsApp: <a href='tel:+6281220149321'>+62812 2014 9321</a></p>
        </div>
        <div className="col-footer">
            <h2>Social Media</h2>
            <div className="sosmed">
                <a target="blank" href="https://www.facebook.com/xiom.indonesia"><img alt='icon' id="icon" src={FB}></img></a>
                <a target="blank" rel='noreferrer' href="https://www.instagram.com/xiom.id/"><img id="icon" src={IG}></img></a>
                <a target="blank" rel='noreferrer' href="https://www.youtube.com/channel/UCSmShnwwIO2ob1B560u7vCw"><img id="icon" src={YT}></img></a>
                <a href={`https://wa.me/+6281220149321?text=Halo, saya tertarik dengan product xiom, boleh saya minta informasi mengenai produknya?`}><img id="icon" src={WA}></img></a>
            </div>
        </div>
    </div> );
}
 
export default Footer;