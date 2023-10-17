import React from 'react';
import { ContenedorBase, ImgComida, ContenedorComida, Subtitulo } from '../css/ElementosBase';
import Torta from '../Img/Torta.png'
import '../css/General.css'

const Tortas = () => {
    return ( 
        <>
                    <ContenedorBase id='Tortas' className='Rutas'>
                        <Subtitulo>Tortas</Subtitulo>

                        <ContenedorComida>

                            <ImgComida src={Torta}/>

                            <div className="checklist_food">
                                <div className="food">
                                    <h3 className="n_food"><span className="number">1</span> Asi son las Tortas</h3>
                                    <p>
                                        Las Tortas son un tipo de sándwich preparado con un bollo de pan llamado "telera" o "bolillo". 
                                        Estos panes son de forma ovalada, y se cortan por la mitad para ser rellenados con diversos ingredientes.
                                        <br/>
                                        Las tortas pueden ser muy variadas y se pueden rellenar con diferentes tipos de carnes, embutidos, quesos y complementos.
                                    </p>
                                </div>
                                <div className="food">
                                    <h3 className="n_food"><span className="number">2</span> Historia</h3>
                                    <p>
                                        El origen de la torta mexicana es un tema interesante que combina la influencia europea con la adaptabilidad y 
                                        creatividad de la gastronomía mexicana.
                                        <br/>
                                        Aunque las historias exactas pueden variar, lo que es indiscutible es que la torta mexicana es el resultado de la mezcla de tradiciones 
                                        culinarias y la innovación local. 
                                        Con el tiempo, ha evolucionado y se ha consolidado como uno de los platillos más representativos y queridos de México.
                                    </p>
                                </div>
                                <div className="food">
                                    <h3 className="n_food"><span className="number">3</span> Tipos de Tortas</h3>
                                    <p>
                                        Se pueden distinguir algunos tipos particulares, 
                                        basados en su tipo de carne o en su preparación. Hay quienes consideran que una torta 
                                        nace con el «mero acto» de 
                                        rellenar un bolillo.
                                    </p>
                                </div>
                            </div>
                        </ContenedorComida>
                    </ContenedorBase>
        </>
     );
}
 
export default Tortas;