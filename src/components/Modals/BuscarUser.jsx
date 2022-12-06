import axios from 'axios';
import React,{ useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom"

export default function BuscarUser() {

    const navigate2 = useNavigate()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [dni, setDni] = useState("");

    const buscarUser = (dni2)=>{
        axios.get(`http://localhost:3000/userDNI/${dni2}`).then((response) => {
        console.log(response.data._id);
        navigate2(`/home/${response.data._id}`)
        window.location.reload()    });
    }
  return (
    <>
    <a type='button' onClick={handleShow}>
        Buscar Usuario
    </a>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{"background-color" : "rgb(77, 127, 221)"}}>
        <Modal.Title style={{"color" : "white"}}>BUSCAR UN USUARIO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form action="">
                <div className="row">

                    <label for="formGroupExampleInput" className="form-label"><strong>Buscar por DNI</strong></label>
                    <div className=" form-group input-group flex-nowrap">
                        <input type="number" name="" className="form-control" id="" onChange={(e) => {setDni(e.target.value)}}/>
                    </div>

                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
            <button className='d-none d-md-inline appointment-btn scrollto btn btn-primary regButton' onClick={handleClose}>
                Cerrar
            </button>
        
            <button className='d-none d-md-inline appointment-btn scrollto btn btn-primary' onClick={(e)=>{
                e.preventDefault()
                buscarUser(dni)
            }}>
                Ingresar
            </button>
        </Modal.Footer>
    </Modal>
    </>
);
}
