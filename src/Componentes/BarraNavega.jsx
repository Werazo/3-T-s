import React from 'react';
import { Barra, BotonBarra } from '../css/BarraNavegaStyle';

const BarraNavega = () => {
    return ( 
        <>
            <Barra>
                <div>
                    <BotonBarra>
                        <h2>Tacos</h2>            
                    </BotonBarra>

                    <BotonBarra>
                        <h2>Tortas</h2>                
                    </BotonBarra>

                    <BotonBarra>
                        <h2>Tamales</h2>
                    </BotonBarra>
                </div>
            </Barra>
        </>
     );
}
 
export default BarraNavega;