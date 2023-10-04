import React, { useState } from 'react';
import { Barra, BotonBarra, ContenedorTitulo, ContenedorBotonBarra, Titulo, MenuIcon } from '../css/BarraNavegaStyle';
import Menu from '../Img/menu.png'
import '../css/Spread.css'


const BarraNavega = ({Tacos, Tortas, Tamales}) => {

    const [abierto, cambiarAbierto] = useState(false);

    return ( 
        <>
            <div>
                <MenuIcon src={Menu} onClick = {() => cambiarAbierto(!abierto)}/>
                <Barra className={`${abierto && 'spread'}`}>
                    <ContenedorBotonBarra>
                        <BotonBarra href = {Tacos}>
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
            </div>

            <script src='../hooks/useDesplegar.jsx'></script>
        </>
     );
}
 
export default BarraNavega;