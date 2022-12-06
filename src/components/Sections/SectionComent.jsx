import React, { useState } from 'react';
import { ctrlComent } from '../../auxs/controladoresComent';
import { AiFillMedicineBox, AiOutlineUser } from "react-icons/ai";


const SectionComent = () => {
    const renderComent = async () =>{
        const divHTLM = await ctrlComent.getComent("http://localhost:3000/coment")
        document.getElementById('divComent').innerHTML = divHTLM
    }

    renderComent()

    return (
        <> 
            <hr></hr>
            <section className="align-items-center sectionComent" style={{"background-color" : "rgb(188, 208, 253)"}} id="comentarioSeccion">
            <div className="col-lg-3"></div>
            <div className="container col-lg-6" id='divComent'>

            </div>
            <div className="col-lg-3"></div>
            </section>
            <hr></hr>
            <section className="align-items-center" id="comentarioSeccion">
            <div className="container col-lg-6">
                <label for="formGroupExampleInput" className="form-label mt-2"><strong>SECCIÓN DE COMENTARIOS</strong></label>
                <div className="form-floating">
                <textarea className="form-control" placeholder="Deja tu mensaje aqui" id="textComentario" style={{"height" : "100px"}}></textarea>
                <label for="floatingTextarea2">Escriba aquí su comentario</label>
                <button className="d-none d-md-inline appointment-btn scrollto btn btn-primary regButton mt-4" onClick={ async () => {
                    await ctrlComent.postComent("http://localhost:3000/coment", document.getElementById('textComentario').value)
                    let divHTLM = await ctrlComent.getComent("http://localhost:3000/coment")
                    document.getElementById('divComent').innerHTML = divHTLM
            }}><span className="d-none d-md-inline mt-4">Enviar</span> Comentario</button>
                </div>
            </div>
            
            </section>
        </>
    )
}

export default SectionComent