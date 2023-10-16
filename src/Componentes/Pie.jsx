import React from 'react';
import FaceBoock from '../Img/facebook.svg'
import Instagram from '../Img/instagram.svg'
import Tw from '../Img/twitter.svg'
import '../css/General.css'

const Pie = () => {
    return ( 
    <>
        <footer className="cotacto" id="contact">
            <div className="contenedor" id="foot_cont">
                <div className="contact_us">
                    <h2 className="brand">Wero PC</h2>
                    <p>Aqui solo hay comida</p>
                </div>

                <div className="social_media">
                    <a href="" className="social_m_icon"><img src={FaceBoock} className='SocialIcon'/></a>
                    <a href="" className="social_m_icon"><img src={Instagram} className='SocialIcon'/></a>
                    <a href="" className="social_m_icon"><img src={Tw} className='SocialIcon'/></a>
                </div>
            </div>

            <div class="line"></div>
            <div>&copy; El wero</div>
        </footer>
    </> 
    );
}
 
export default Pie;