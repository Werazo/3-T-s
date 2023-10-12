import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import WebFont from 'webfontloader'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tacos from './Componentes/Tacos.jsx';
import Tortas from './Componentes/Tortas';
import Tamales from './Componentes/Tamales';
import './index.css'

WebFont.load({
  google: {
    families: ['Raleway: 400, 500, 700', 'sans-serif']
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
    <App />
      <Routes>
        <Route path = '/Tacos' element = {<Tacos/>}/>
        <Route path = '/Tortas' element = {<Tortas/>}/>
        <Route path = '/Tamales' element = {<Tamales/>}/>
      </Routes>


    </BrowserRouter>

  </React.StrictMode>,
)
