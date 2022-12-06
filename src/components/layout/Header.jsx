import React from "react";
import ModalInicioSesion from "../Modals/ModalInicioSesion";
import ModalRegistro from "../Modals/ModalRegistro";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import CargarPFD from "../Modals/CargarPFD";
import EditProfile from "../Modals/EditProfile";
import { ctrlNotifi } from "../../auxs/ControladoresNotifications";
import SideBar from "./SideBar";
import BuscarUser from "../Modals/BuscarUser";

const Header = (props) => {
    const {dispatchMaster} = useContext(AuthContext)
    switch (props.typeH){
    case "Lading":
        //Header Lading Page ---------------->
        return (
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">

                <h1 className="logo me-auto"><a href="index.html">Medilab</a></h1>
                <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></img></a>
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
    case "Home":
        //Header Home ------------->
        if(props.infoUsu.cuenta){
        return (
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">

                <SideBar infoNotifi={props.infoUsu.divHTML} id={props.id}/>
                <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></img></a>
                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                    <li><a className="nav-link scrollto active" href="#" onClick={() => {
                            dispatchMaster({type : "[Refresh]"});
                            localStorage.removeItem("Token");
                        }}>Cerrar Sesion</a></li>
                    <li>
                        <EditProfile/>
                    </li>
                    <li>
                        <BuscarUser/>
                    </li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

                <Link to={`/Filtro/${props.id}`} className="appointment-btn scrollto"><span className="d-none d-md-inline">Consultar historias</span> AHORA!</Link>

                </div>
            </header>
        )}
        return (
        <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
        <SideBar infoNotifi={props.infoUsu.divHTML} id={props.id}/>
        <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></img></a>
        <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
            <li><a className="nav-link scrollto active" href="#" onClick={() => {
                    dispatchMaster({type : "[Refresh]"});
                    localStorage.removeItem("Token");
                }}>Cerrar Sesion</a></li>
            <li><a className="nav-link scrollto" type="button" onClick={async ()=>{await ctrlNotifi.postPeticionA(`http://localhost:3000/Notifications/${props.id}`,props.infoUsu,props.id)}}>Agregar a tu lista</a></li>
            <li>
                <BuscarUser/>
            </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <Link to={`/Filtro/${props.id}`} className="appointment-btn scrollto"><span className="d-none d-md-inline">Consultar historias</span> AHORA!</Link>

        </div>
    </header>
    )
    case "Filtro":
        //Header Filtro --------------->
        if(props.infoU.cuenta){
        return(
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">

                <SideBar infoNotifi={props.infoU.divHTML} id={props.id}/>
                <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></img></a>
                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                    <li><Link className="nav-link scrollto active" to={`/home/${props.id}`}>Perfil</Link></li>
                    <li>
                        <CargarPFD id={props.id} role={props.infoU.role}/>
                    </li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

                <a href="#contact" className="appointment-btn scrollto"><span className="d-none d-md-inline">Filtrar</span> Historias Clinicas</a>

                </div>
            </header>
        )
        }
        return (
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">

                <SideBar infoNotifi={props.infoU.divHTML} id={props.id}/>
                <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></img></a>
                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                    <li><Link className="nav-link scrollto active" to={`/home/${props.id}`}>Perfil</Link></li>
                    <li>
                        <CargarPFD id={props.id} role={props.infoU.role}/>
                    </li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

                <a href="#contact" className="appointment-btn scrollto"><span className="d-none d-md-inline">Filtrar</span> Historias Clinicas</a>

                </div>
            </header>
        )
    case "HistoriaC":
        //Header HistoriaClinica ---------------->
        return (
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">

                <h1 className="logo me-auto"><a href="index.html">Medilab</a></h1>
                <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></img></a>
                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                    <li><Link className="nav-link scrollto active" to="/home">Perfil</Link></li>
                    <li><Link className="nav-link scrollto" to="/filtro">Filtrar</Link></li>
                    <li><a className="nav-link scrollto" href="#sectionComent">Comentarios</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

                <a href="#contact" className="appointment-btn scrollto"><span className="d-none d-md-inline">Contactenos</span> AHORA!</a>

                </div>
            </header>
        )
}
}

export default Header