import React,{ useState } from 'react'
import Modal from 'react-bootstrap/Modal';

export default function EditProfile() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
    <a type='button' onClick={handleShow}>
        Editar Perfil
    </a>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{"background-color" : "rgb(77, 127, 221)"}}>
        <Modal.Title style={{"color" : "white"}}>Aca Me Los editas si o si,Capisci?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form action="">
                <div className="row">

                    <label for="formGroupExampleInput" className="form-label"><strong>Nombre y Apellido</strong></label>
                    <div className=" form-group input-group flex-nowrap">
                        <input type="text" name="" className="form-control" id=""/>
                    </div>

                    <label for="formGroupExampleInput" className="form-label mt-2"><strong>DNI</strong></label>
                    <div className="form-group mt-2 input-group flex-nowrap">
                        <input type="text" className="form-control" name="" id=""/>
                    </div>

                    <label for="formGroupExampleInput" className="form-label mt-2"><strong>Edad</strong></label>
                    <div className="form-group mt-2 input-group flex-nowrap">
                        <input type="number" className="form-control" name="" id=""/>
                    </div>
                    
                    <label for="formGroupExampleInput" className="form-label mt-2"><strong>Correo</strong></label>
                    <div className="form-group mt-2 input-group flex-nowrap">
                        <input type="email" className="form-control" name="" id=""/>
                    </div>

                    <label for="formGroupExampleInput" className="form-label mt-2"><strong>Telefono</strong></label>
                    <div className="form-group mt-2 input-group flex-nowrap">
                        <input type="number" className="form-control" name="" id=""/>
                    </div>

                    <label for="formGroupExampleInput" className="form-label mt-2"><strong>Fecha de Nacimiento</strong></label>
                    <div className="form-group mt-2 input-group flex-nowrap">
                        <input type="date" className="form-control" name="" id=""/>
                    </div>
                    
                    <label for="formGroupExampleInput" className="form-label mt-2"><strong>Domicilio</strong></label>
                    <div className="form-group mt-2 input-group flex-nowrap">
                        <input type="text" className="form-control" name="" id=""/>
                    </div>

                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
            <button className='d-none d-md-inline appointment-btn scrollto btn btn-primary regButton' onClick={handleClose}>
                Cerrar
            </button>
        
            <button className='d-none d-md-inline appointment-btn scrollto btn btn-primary' >
                Ingresar
            </button>
        </Modal.Footer>
    </Modal>
    </>
);
}
