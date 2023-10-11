import React, { useState } from 'react';
import T1 from '../Img/T1.jpg'
import T2 from '../Img/T2.jpg'
import Tor1 from '../Img/Tor1.jpg'
import Tor2 from '../Img/Tor2.jpg'
import Tam1 from '../Img/Tam1.jpg'
import Tam2 from '../Img/Tam2.jpg'
import Xmark from '../Img/Xmark.svg'
import '../css/General.css'

 const Home = ({props}) => {

    const [imagen, showImagen] = useState(false);
    const [imagen1, showImagen1] = useState(false);
    const [imagen2, showImagen2] = useState(false);
    const [imagen3, showImagen3] = useState(false);
    const [imagen4, showImagen4] = useState(false);
    const [imagen5, showImagen5] = useState(false);
    const [imagen6, showImagen6] = useState(false);

    const cerrar = () => (
        showImagen(!imagen), 
        showImagen1(), 
        showImagen2(),
        showImagen3(),
        showImagen4(),
        showImagen5(),
        showImagen6() 
        )

    return ( 
        <>
            <div className='Home'>
                <h1> Tacos, Tortas y Tamales</h1>
            </div>

            <section className="gallery" id="imgs">
            
                <div className="contenedor">
                    <h2 className="subtitulo">Galeria</h2>

                    <div className="contenedor_gallery">
                        <img src= {T1} id='T1' className="gal_imgs" onClick = {() => (showImagen(!imagen), showImagen1(!imagen1))}/>
                        <img src= {T2} id='T2' className="gal_imgs" onClick = {() => (showImagen(!imagen), showImagen2(!imagen2))}/>
                        <img src= {Tor1} id='Tor1' className="gal_imgs" onClick = {() => (showImagen(!imagen), showImagen3(!imagen3))}/>
                        <img src= {Tor2} id='Tor2' className="gal_imgs" onClick = {() => (showImagen(!imagen), showImagen4(!imagen4))}/>
                        <img src= {Tam1} id='Tam1' className="gal_imgs" onClick = {() => (showImagen(!imagen), showImagen5(!imagen5))}/>
                        <img src= {Tam2} id='Tam2' className="gal_imgs" onClick = {() => (showImagen(!imagen), showImagen6(!imagen6))}/>
                    </div>
                </div>

            </section>

            <section className={`img_light ${imagen && 'show'}`}>
                <img src= {Xmark} className='xmark' id="img_xmark" onClick = {() => (cerrar())}/>
                <img src= {T1}  className={`agregar_img ${imagen1 && 'show_img'}`}/>
                <img src= {T2}  className={`agregar_img ${imagen2 && 'show_img'}`}/>
                <img src= {Tor1}  className={`agregar_img ${imagen3 && 'show_img'}`}/>
                <img src= {Tor2}  className={`agregar_img ${imagen4 && 'show_img'}`}/>
                <img src= {Tam1}  className={`agregar_img ${imagen5 && 'show_img'}`}/>
                <img src= {Tam2}  className={`agregar_img ${imagen6 && 'show_img'}`}/>
            </section>

        </> 
    );
 }
  
 export default Home;