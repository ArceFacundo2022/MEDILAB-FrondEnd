

const UserHeader = ()=>{
    return(
    <header className="">
        <div className="container d-flex align-items-center">
    
          <h1 className="logo me-auto"><a href="index.html">Seccion de Consultas</a></h1>
    
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><a className="nav-link scrollto" href="#">Inicio</a></li>
              <li><a className="nav-link scrollto" href="#">Su Historia Clinica</a></li>
              <li><a className="nav-link scrollto" href="#">Cerrar Sesion</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
    </header>
    )
}

export default UserHeader