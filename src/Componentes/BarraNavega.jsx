import React, { useState } from 'react';
import { Barra, BotonBarra, ContenedorTitulo, ContenedorBotonBarra, Titulo, MenuIcon } from '../css/BarraNavegaStyle';
import Menu from '../Img/menu.png'
import '../css/Spread.css'
import { useNavigate } from 'react-router-dom';

const BarraNavega = () => {

    const [abierto, cambiarAbierto] = useState(false);
    const Navega = useNavigate();

    return ( 
        <>
            <div>
                <MenuIcon src={Menu} onClick = {() => cambiarAbierto(!abierto)}/>
                <Barra className={`${abierto && 'spread'}`}>
                    <ContenedorBotonBarra>
                    <BotonBarra onClick={() => Navega('/')}>
                            <h2>Home</h2>            
                        </BotonBarra>

                        <BotonBarra onClick={() => Navega('/Tacos')}>
                            <h2>Tacos</h2>            
                        </BotonBarra>

                        <BotonBarra onClick={() => Navega('/Tortas')}>
                            <h2>Tortas</h2>                
                        </BotonBarra>

                        <BotonBarra onClick={() => Navega('/Tamales')}>
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