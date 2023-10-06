import React, { useState } from 'react';
import T1 from '../Img/T1.jpg'
import T2 from '../Img/T2.jpg'
import Tor1 from '../Img/Tor1.jpg'
import Tor2 from '../Img/Tor2.jpg'
import Tam1 from '../Img/Tam1.jpg'
import Tam2 from '../Img/Tam2.jpg'
import Xmark from '../Img/Xmark.svg'
import '../css/General.css'

 const Home = ({id, src}) => {

    const [imagen, showImagen] = useState(false);

    return ( 
        <>
            <div className='Home'>
                <h1> Tacos, Tortas y Tamales</h1>
            </div>

            <section className="gallery" id="imgs">
            
                <div className="contenedor">
                    <h2 className="subtitulo">Galeria</h2>

                    <div className="contenedor_gallery">
                        <img src= {T1}  className="gal_imgs" onClick = {() => showImagen(!imagen)}/>
                        <img src= {T2}  className="gal_imgs" onClick = {() => showImagen(!imagen)}/>
                        <img src= {Tor1}  className="gal_imgs" onClick = {() => showImagen(!imagen)}/>
                        <img src= {Tor2}  className="gal_imgs" onClick = {() => showImagen(!imagen)}/>
                        <img src= {Tam1}  className="gal_imgs" onClick = {() => showImagen(!imagen)}/>
                        <img src= {Tam2}  className="gal_imgs" onClick = {() => showImagen(!imagen)}/>
                    </div>
                </div>

            </section>

            <section className={`img_light ${imagen && 'show'}`}>
                <img src= {Xmark} className='xmark' id="img_xmark"/>
                <img src= {src} className={`agregar_img ${imagen && 'show_img'}`}/>

            </section>
        </> 
    );
 }
  
 export default Home;