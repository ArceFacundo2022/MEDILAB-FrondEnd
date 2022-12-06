import React from "react";
import  Offcanvas from 'react-bootstrap/Offcanvas'; 
import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineInfo } from "react-icons/ai";
import { ctrlNotifi } from "../../auxs/ControladoresNotifications";
import { CardNotifications } from "./CardNotifications";

const SideBar = (props) =>{

    const info = props.infoNotifi
    const [show, setShow] = useState(false);  
    const closeSidebar = () => setShow(false);  
    const showSidebar = () => setShow(true); 
    useEffect(() => {
      const execute = async () =>{
        const info2 = await ctrlNotifi.getNotificationsMailBox(`http://localhost:3000/Notifications`)
        //document.getElementById('divNotifications').innerHTML = info2
      }
      setTimeout(execute, 2000);
    }, [])

    return(
        <>
        <div className="container-fluid">
        <h1 className="logo me-auto"><a type="button" onClick={showSidebar}>Medilab</a></h1>
            <Offcanvas show={show} onHide={closeSidebar}>  
                <Offcanvas.Header closeButton style={{"background-color" : "rgb(77, 127, 221)"}}>  
                <Offcanvas.Title style={{"color" : "white"}}><h1 className="logo me-auto">Medilab</h1></Offcanvas.Title>  
                </Offcanvas.Header>  
                <Offcanvas.Body>  
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item text-center">
                        <h4><Link className="nav-link crollto" aria-current="page" to="/home">Perfil</Link></h4>
                    </li>
                    <hr/>
                    <li className="nav-item text-center">
                        <h4><a className="nav-link crollto" href="#">Setting</a></h4>
                    </li>
                    <hr/>
                    <div id="divNotifications">
                    </div>
                    <CardNotifications info={info} id={props.id}/>
                    </ul> 
                </Offcanvas.Body>  
            </Offcanvas>  
        </div>
        </>
        
    )
}

export default SideBar