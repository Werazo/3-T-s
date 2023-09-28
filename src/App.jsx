import { useState } from 'react'
import './App.css'
import BarraNavega from './Componentes/BarraNavega'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BarraNavega/>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
}

export default App
