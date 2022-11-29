import React from "react";

const SectionServices = () => {
    return (
        <section id="services" className="services">
            <div className="container">
    
            <div className="section-title">
                <h2>Servicios</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                in iste officiis commodi quidem hic quas.</p>
            </div>
    
            <div className="row">
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                    <div className="icon"><i className="fas fa-heartbeat"></i></div>
                    <h4><a href="">Comunicación con profesionales</a></h4>
                    <p>Le ofrecemos al usuario el contacto permanente con profesionales asociados.</p>
                </div>
                </div>
    
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="icon-box">
                    <div className="icon"><i className="fas fa-hospital-user"></i></div>
                    <h4><a href="">Software adaptable</a></h4>
                    <p>Ofrecemos la capacidad de adaptar nuestro sistema a cualquier institución médica</p>
                </div>
                </div>
    
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                    <div className="icon"><i className="fas fa-notes-medical"></i></div>
                    <h4><a href="">Consulta de información 24hs</a></h4>
                    <p>Ofrecemos la consulta de informacion 24 hs tanto para el paciente como para el usuario</p>
                </div>
                </div>
    
            </div>
    
            </div>
        </section>
    )
}

export default SectionServices