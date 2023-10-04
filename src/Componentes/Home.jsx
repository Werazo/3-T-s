import React from 'react';
import Tacos from './Tacos';
import Tortas from './Tortas';
import Tamales from './Tamales';
import '../css/General.css'

 const Home = () => {
    return ( 
        <>
            <div className='Home'>
                <h1> Tacos, Tortas y Tamales</h1>

                <div className='Home'>
                    {/*---Tacos---*/}
                        <Tacos/>

                    {/*---Tortas---*/}
                        <Tortas/>

                    {/*---Tamales---*/}
                        <Tamales/>
                </div>
            </div>
        </> 
    );
 }
  
 export default Home;