import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import WebFont from 'webfontloader'
import './index.css'

WebFont.load({
  google: {
    families: ['Raleway: 400, 500, 700', 'sans-serif']
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
