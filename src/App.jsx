import { useState } from 'react'
import BarraNavega from './Componentes/BarraNavega'
import Home from './Componentes/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BarraNavega/>
    </>
  )
}

export default App
