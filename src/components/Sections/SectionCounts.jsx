import React from "react";

const SectionCounts = () => {
    return (
        <section id="counts" className="counts">
            <div className="container">
    
            <div className="row justify-content-center">
    
                <div className="col-lg-3 col-md-6">
                <div className="count-box">
                    <i className="fas fa-user-md"></i>
                    <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1"
                    className="purecounter"></span>
                    <p>Doctores</p>
                </div>
                </div>
    
                <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                    <i className="fas fa-flask"></i>
                    <span data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="1"
                    className="purecounter"></span>
                    <p>Hospitales Asociados</p>
                </div>
                </div>
    
            </div>
    
            </div>
        </section>
    )
}

export default SectionCounts