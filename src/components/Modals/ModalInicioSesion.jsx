import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {ctrlUser} from '../../auxs/ControladoresUsuarios.js'
import { useNavigate } from "react-router-dom"

function ModalInicioSesion() {

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [inicio, setInicio] = useState({
    dni:"",
    password:""
})

const navigate2 = useNavigate()

return (
    <>
    <a type='button' onClick={handleShow}>
        Inicio de Sesion
    </a>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{"background-color" : "rgb(77, 127, 221)"}}>
        <Modal.Title style={{"color" : "white"}}>Formulario de Inicio de Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form action="">
                <div className="row">
                    <label for="formGroupExampleInput" className="form-label"><strong>Ingrese su DNI/Documento</strong></label>
                    <div className=" form-group input-group flex-nowrap">
                        <input type="text" name="" className="form-control" id="DNIini" required onChange={(e)=>{setInicio({...inicio,"dni":e.target.value})}}/>
                    </div>
                    <label for="formGroupExampleInput" className="form-label mt-2"><strong>Ingrese una contraseña</strong></label>
                    <div className="form-group mt-2 input-group flex-nowrap">
                        <input type="password" className="form-control" name="" id="ContraseñaIni"  required onChange={(e)=>{setInicio({...inicio,"password":e.target.value})}}/>
                    </div>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
            <button className='d-none d-md-inline appointment-btn scrollto btn btn-primary regButton' onClick={handleClose}>
                Cerrar
            </button>
        
            <button className='d-none d-md-inline appointment-btn scrollto btn btn-primary' onClick={async () => { let login = await ctrlUser.postLogin("http://localhost:3000/login",inicio); if (login){navigate2(`/home/${login}`)}}}>
                Ingresar
            </button>
        </Modal.Footer>
    </Modal>
    </>
);
}

export default ModalInicioSesion
