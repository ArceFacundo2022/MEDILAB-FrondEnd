import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { HistoryServices } from './../../auxs/HistoryServices';

export default function CargarPFD(props) {

    const abc=(min, max)=>{
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formData,setFormData]= useState({
        title:"",
        institucion:"",
        matricula:"",
    });

    const [image, setImage] = useState(null);

    const subirArchivos = (e) => {
      setImage(e);
    };

    const enviarDatos = async (e) => {
        e.preventDefault();
        var formdata = new FormData();
    
        formdata.append("title", formData.title);
        formdata.append("institucion", formData.institucion);
        formdata.append("matricula", formData.matricula);
        formdata.append("image", image[0]);
        formdata.append("token", localStorage.getItem("Token"));

        console.log(formData)

        await axios
        .post(`http://localhost:3000/api/histories/${props.id}`, formdata, {Headers: {'Content-Type': 'application/json', 'Authorization' : localStorage.getItem("Token")}})
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
        
        window.location.reload()
    };
    
    if(props.role != "medic"){
        return(
            <>
                <p></p>
            </>
        )

    }
return (
    <>
    <a type='button' onClick={handleShow}>
        Cargar PFD
    </a>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{"background-color" : "rgb(77, 127, 221)"}}>
        <Modal.Title style={{"color" : "white"}}>Subir Las Historias Clinicas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form id="history-form" className="card card-body" onSubmit={enviarDatos}>
                <div className="form-group">
                    <input type="text" id="title" className="form-control" placeholder="Titulo" autofocus required onChange={(e)=>setFormData({...formData,title:e.target.value})}/>
                </div>
                <br/>
                <div className="form-group">
                    <input type="text" id="institucion" className="form-control" placeholder="Institucion" required onChange={(e)=>setFormData({...formData,institucion:e.target.value})}/>
                </div>
                <br/>
                <div className="form-group">
                    <input type="text" id="matricula" className="form-control" placeholder="Matricula" required onChange={(e)=>setFormData({...formData,matricula:e.target.value})}/>
                </div>
                <br/>
                <div className="input-group mb-3">
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="image" required onChange={(e) => subirArchivos(e.target.files)}/>
                        <label for="image" className="custom-file-label">Seleccione Archivo</label>
                    </div>
                </div>
                <button className={`btn btn-primary mt-3`} onClick={handleClose}>
                    Guardar Historia
                </button>
            </form>
        </Modal.Body>
        <Modal.Footer>
            <button className='d-none d-md-inline appointment-btn scrollto btn btn-primary regButton' onClick={handleClose}>
                Cerrar
            </button>
        </Modal.Footer>
    </Modal>
    </>
    );
}
