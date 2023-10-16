import React from 'react';
import { ContenedorBase, ImgComida, ContenedorComida, Subtitulo } from '../css/ElementosBase';
import Tamal from '../Img/Tamal.png'
import '../css/General.css'

const Tamales = () => {
    return ( 
    <>
                    <ContenedorBase id='Tamales' className='Rutas'>
                        <Subtitulo>Tamales</Subtitulo>

                        <ContenedorComida>

                            <ImgComida src={Tamal}/>

                            <div className="checklist_food">
                                <div className="food">
                                    <h3 className="n_food"><span className="number">1</span> Asi son los Tamales</h3>
                                    <p>
                                        El taco es una preparación culinaria muy popular de México. 
                                        Está hecho a base de masa de Maíz que se rellena con diferentes ingredientes, 
                                        como carnes, chiles, verduras, frutas, salsas, entre otros. Esta mezcla se envuelve en hojas, 
                                        comúnmente de maíz o de plátano, y luego se cocina, generalmente al vapor.
                                    </p>
                                </div>
                                <div className="food">
                                    <h3 className="n_food"><span className="number">2</span> Historia</h3>
                                    <p>
                                        El origen del tamal se remonta a las antiguas civilizaciones de México, especialmente a los pueblos indígenas de Mesoamérica, 
                                        como los mayas y los aztecas, 
                                        así como a otros pueblos de regiones como el área andina.
                                    </p>
                                </div>
                                <div className="food">
                                    <h3 className="n_food"><span className="number">3</span> Tipos de Tamales</h3>
                                    <p>
                                    Tamales de Elote: Masa hecha con maíz tierno, más dulce y menos densa.
                                    <br/>
                                    Tamales Oaxaqueños: Rellenos de mole negro y envueltos en hojas de plátano.
                                    <br/>
                                    Tamales de Rajas con Queso: Rellenos de tiras de chile poblano y trozos de queso.
                                    <br/>
                                    Tamales de Mole: Con pollo o cerdo y salsa de mole.
                                    <br/>
                                    Tamales Dulces: Tintados de rosa o marrón, con pasas, frutas o chocolate.
                                    <br/>
                                    Tamales de Zacahuil: Un tamal gigante, originario de la Huasteca.
                                    </p>
                                </div>
                            </div>
                        </ContenedorComida>
                    </ContenedorBase>
    </> 
    );
}
 
export default Tamales;