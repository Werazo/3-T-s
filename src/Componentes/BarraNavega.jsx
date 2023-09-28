import React from 'react';
import { Barra, BotonBarra, ContenedorTitulo, ContenedorBotonBarra, Titulo } from '../css/BarraNavegaStyle';

const BarraNavega = () => {
    return ( 
        <>
            <Barra>
                <ContenedorBotonBarra>
                    <BotonBarra>
                        <h2>Tacos</h2>            
                    </BotonBarra>

                    <BotonBarra>
                        <h2>Tortas</h2>                
                    </BotonBarra>

                    <BotonBarra>
                        <h2>Tamales</h2>
                    </BotonBarra>
                </ContenedorBotonBarra>

                <ContenedorTitulo>
                    <Titulo>Las 3 T´s</Titulo>
                </ContenedorTitulo>
            </Barra>
        </>
     );
}
 
export default BarraNavega;