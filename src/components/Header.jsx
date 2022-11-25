<<<<<<< HEAD:src/components/layout/Header.jsx
import ModalInicioSesion from "../ModalInicioSesion"
import ModalRegistro from "../ModalRegistro"
=======
import ModalRegistro from "../components/ModalRegistro"
>>>>>>> 63d0da337d466e06048eb5ee9055f9c54625828d:src/components/Header.jsx

const Header = ()=>{
    return(
    <header className="fixed-top">
        <div className="container d-flex align-items-center" style={{"background-color" : "rgb(255, 255, 255)"}}>
    
          <h1 className="logo me-auto"><a href="index.html">Medilab</a></h1>
    
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Inicio</a></li>
              <li><a className="nav-link scrollto" href="#about">Nosotros</a></li>
              <li><a className="nav-link scrollto" href="#services">Servicios</a></li>
              <li><a className="nav-link scrollto" href="#doctors">Doctores</a></li>
    
              <li>
                <ModalRegistro/>
              </li>
              <li>
                <ModalInicioSesion/> 
              </li>
    
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
    
          <a href="#contact" className="appointment-btn scrollto"><span className="d-none d-md-inline">Contactenos</span> AHORA!</a>
    
        </div>
    </header>
    )
}

export default Header