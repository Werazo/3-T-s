import BarraNavega from './Componentes/BarraNavega'
import Home from './Componentes/Home'

function App() {

  return (
    <>
        <BarraNavega/>
        <Home/>

        <footer class="cotacto" id="contact">
        <div class="contenedor" id="foot_cont">
            <div class="contact_us">
                <h2 class="brand">Wero PC</h2>
                <p>Aqui solo hay comida</p>
            </div>

            <div class="social_media">
                <a href="" class="social_m_icon"><i class='bx bxl-facebook-circle'></i></a>
                <a href="" class="social_m_icon"><i class='bx bxl-twitter'></i></a>
                <a href="" class="social_m_icon"><i class='bx bxl-instagram'></i></a>
            </div>
        </div>

        <div class="line"></div>
        <div>&copy; El wero</div>
    </footer>
    </>
  )
}

export default App
