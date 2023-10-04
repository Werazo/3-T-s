import React from 'react';
import { ContenedorBase, ImgComida, ContenedorComida, Subtitulo } from '../css/ElementosBase';
import '../css/General.css'
import Taco from '../Img/Taco.png'
import Torta from '../Img/Torta.png'
import Tamal from '../Img/Tamal.png'

 const Home = () => {
    return ( 
        <>
            <div className='Home'>
                <h1> Tacos, Tortas y Tamales</h1>

                <div className='Home'>
            {/*---Tacos---*/}
                    <ContenedorBase>
                        <Subtitulo>Tacos</Subtitulo>

                        <ContenedorComida>

                            <ImgComida src={Taco}/>

                            <div className="checklist_food">
                                <div className="food">
                                    <h3 className="n_food"><span className="number">1</span> Asi son los Tacos</h3>
                                    <p>
                                        El taco es una preparación culinaria muy popular de México 
                                        que consiste en una tortilla, generalmente de maíz, 
                                        que comúnmente se enrolla para contener dentro diversos 
                                        ingredientes y algún tipo de salsa y verdura.
                                    </p>
                                </div>
                                <div className="food">
                                    <h3 className="n_food"><span className="number">2</span> Historia</h3>
                                    <p>
                                        En diferentes culturas se desarrolló la tradición de una preparación 
                                        a base de harina que aporta carbohidratos hecha de tal manera que 
                                        queda como una superficie plana que sirve de sostén para otros alimentos.
                                        Así, se puede comparar el taco con el shawarma de origen turco.
                                    </p>
                                </div>
                                <div className="food">
                                    <h3 className="n_food"><span className="number">3</span> Tipos de tacos</h3>
                                    <p>
                                        Se pueden distinguir algunos tipos particulares, 
                                        basados en su tipo de carne o en su preparación. Hay quienes consi deran que un taco 
                                        nace con el «mero acto» de 
                                        envolver o enrollar un guiso con una tortilla.
                                    </p>
                                </div>
                            </div>
                        </ContenedorComida>
                    </ContenedorBase>

            {/*---Tortas---*/}
                    <ContenedorBase>
                        <Subtitulo>Tortas</Subtitulo>

                        <ContenedorComida>

                            <ImgComida src={Torta}/>

                            <div className="checklist_food">
                                <div className="food">
                                    <h3 className="n_food"><span className="number">1</span> Asi son las Tortas</h3>
                                    <p>
                                        El taco es una preparación culinaria muy popular de México 
                                        que consiste en una tortilla, generalmente de maíz, 
                                        que comúnmente se enrolla para contener dentro diversos 
                                        ingredientes y algún tipo de salsa y verdura.
                                    </p>
                                </div>
                                <div className="food">
                                    <h3 className="n_food"><span className="number">2</span> Historia</h3>
                                    <p>
                                        En diferentes culturas se desarrolló la tradición de una preparación 
                                        a base de harina que aporta carbohidratos hecha de tal manera que 
                                        queda como una superficie plana que sirve de sostén para otros alimentos.
                                        Así, se puede comparar el taco con el shawarma de origen turco.
                                    </p>
                                </div>
                                <div className="food">
                                    <h3 className="n_food"><span className="number">3</span> Tipos de Tortas</h3>
                                    <p>
                                        Se pueden distinguir algunos tipos particulares, 
                                        basados en su tipo de carne o en su preparación. Hay quienes consi deran que un taco 
                                        nace con el «mero acto» de 
                                        envolver o enrollar un guiso con una tortilla.
                                    </p>
                                </div>
                            </div>
                        </ContenedorComida>
                    </ContenedorBase>

            {/*---Tamales---*/}

            <ContenedorBase>
                        <Subtitulo>Tamales</Subtitulo>

                        <ContenedorComida>

                            <ImgComida src={Tamal}/>

                            <div className="checklist_food">
                                <div className="food">
                                    <h3 className="n_food"><span className="number">1</span> Asi son los Tamales</h3>
                                    <p>
                                        El taco es una preparación culinaria muy popular de México 
                                        que consiste en una tortilla, generalmente de maíz, 
                                        que comúnmente se enrolla para contener dentro diversos 
                                        ingredientes y algún tipo de salsa y verdura.
                                    </p>
                                </div>
                                <div className="food">
                                    <h3 className="n_food"><span className="number">2</span> Historia</h3>
                                    <p>
                                        En diferentes culturas se desarrolló la tradición de una preparación 
                                        a base de harina que aporta carbohidratos hecha de tal manera que 
                                        queda como una superficie plana que sirve de sostén para otros alimentos.
                                        Así, se puede comparar el taco con el shawarma de origen turco.
                                    </p>
                                </div>
                                <div className="food">
                                    <h3 className="n_food"><span className="number">3</span> Tipos de Tamales</h3>
                                    <p>
                                        Se pueden distinguir algunos tipos particulares, 
                                        basados en su tipo de carne o en su preparación. Hay quienes consi deran que un taco 
                                        nace con el «mero acto» de 
                                        envolver o enrollar un guiso con una tortilla.
                                    </p>
                                </div>
                            </div>
                        </ContenedorComida>
                    </ContenedorBase>
                </div>
            </div>
        </> 
    );
 }
  
 export default Home;