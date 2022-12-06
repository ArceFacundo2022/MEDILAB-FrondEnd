import React from "react";

const SectionProfile = (props) => {
    const infoUsu = props

    return (
        <section id={infoUsu.infoUsu.hero} className="d-flex align-items-center">
            <section className="col-lg-12">
            <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="card mt-4 hero2card1">
                    <div className="card-body text-center ">
                        <div className="d-flex justify-content-center mb-2">
                        <div className="col-md-4 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-1">
                            <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
                            <span className="font-weight-bold">{infoUsu.infoUsu.userName}</span>
                            <span className="text-black-50">{infoUsu.infoUsu.email}</span><span> </span>
                        </div>
                        <h5 className="my-3" id="H5Nombre">{infoUsu.infoUsu.role}</h5>
                        <hr/>
                        <p className="text-muted mb-4" id="PCate">{infoUsu.infoUsu.dni}</p>
                        <p className="text-muted mb-4" id="PMatri"></p>
                        <p className="text-muted mb-4" id="PCodA"></p>
                        </div>
                    </div>
                    </div>
                </div> 
                </div>
                <div className="col-lg-7">
                    <div className="card mb-4 hero2card2">
                    <div className="card-body">
                        <div className="row">
                        <div className="col-sm-11">
                            <div className=" form-group input-group flex-nowrap">
                                <span className="input-group-text" id="addon-wrapping" style={{"font-weight": "bold"}}>Nombre y Apellido</span>
                                <input type="text" name="AYN" id="AYN" className="form-control" disabled/>
                            </div>
                        </div>
                        <div className="col-sm-1">
                            <a href="#" onclick="Modificar(AYN)">
                                <span style={{"color":"rgb(77, 127, 221)"}} id="icon">
                                <i className="fas fa-edit m-2" style={{"font-size":"20px"}} ></i>
                                </span>
                            </a>
                        </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-11">
                                <div className=" form-group input-group flex-nowrap">
                                    <span className="input-group-text" id="addon-wrapping" style={{"font-weight": "bold"}}>DNI</span>
                                    <input type="number" name="DNI02" id="DNI02" className="form-control" disabled/>
                                </div>
                            </div>
                            <div className="col-sm-1">
                                <a href="#" onclick="Modificar(DNI02)">
                                    <span style={{"color":"rgb(77, 127, 221)"}} id="icon">
                                    <i className="fas fa-edit m-2" style={{"font-size":"20px"}} ></i>
                                    </span>
                                </a>
                            </div>
                            </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-11">
                                <div className=" form-group input-group flex-nowrap">
                                    <span className="input-group-text" id="addon-wrapping" style={{"font-weight": "bold"}}>Edad</span>
                                    <input type="number" name="InputEdad" id="InputEdad" className="form-control" disabled/>
                                </div>
                            </div>
                            <div className="col-sm-1">
                                <a href="#" onclick="Modificar(InputEdad)">
                                    <span style={{"color":"rgb(77, 127, 221)"}} id="icon">
                                    <i className="fas fa-edit m-2" style={{"font-size":"20px"}} ></i>
                                    </span>
                                </a>
                            </div>
                            </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-11">
                                <div className=" form-group input-group flex-nowrap">
                                    <span className="input-group-text" id="addon-wrapping" style={{"font-weight": "bold"}}>Email</span>
                                    <input type="email" name="Email" id="Email" className="form-control" disabled/>
                                </div>
                            </div>
                            <div className="col-sm-1">
                                <a href="#" onclick="Modificar(Email)">
                                    <span style={{"color":"rgb(77, 127, 221)"}} id="icon">
                                    <i className="fas fa-edit m-2" style={{"font-size":"20px"}} ></i>
                                    </span>
                                </a>
                            </div>
                            </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-11">
                                <div className=" form-group input-group flex-nowrap">
                                    <span className="input-group-text" id="addon-wrapping" style={{"font-weight": "bold"}}>Telefono</span>
                                    <input type="number" name="Telefono" id="Telefono" className="form-control" disabled/>
                                </div>
                            </div>
                            <div className="col-sm-1">
                                <a href="#" onclick="Modificar(Telefono)">
                                    <span style={{"color":"rgb(77, 127, 221)"}} id="icon">
                                    <i className="fas fa-edit m-2" style={{"font-size":"20px"}} ></i>
                                    </span>
                                </a>
                            </div>
                            </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-11">
                                <div className=" form-group input-group flex-nowrap">
                                    <span className="input-group-text" id="addon-wrapping" style={{"font-weight": "bold"}}>Fecha Nacimiento</span>
                                    <input type="date" name="FeNa" id="FeNa" className="form-control" disabled/>
                                </div>
                            </div>
                            <div className="col-sm-1">
                                <a href="#" onclick="Modificar(FeNa)">
                                    <span style={{"color":"rgb(77, 127, 221)"}} id="icon">
                                    <i className="fas fa-edit m-2" style={{"font-size":"20px"}} ></i>
                                    </span>
                                </a>
                            </div>
                            </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-11">
                                <div className=" form-group input-group flex-nowrap">
                                    <span className="input-group-text" id="addon-wrapping" style={{"font-weight": "bold"}}>Domicilio</span>
                                    <input type="text" name="Domici" id="Domici" className="form-control" disabled />
                                </div>
                            </div>
                            <div className="col-sm-1">
                                <a href="#" onclick="Modificar(Domici)">
                                    <span style={{"color":"rgb(77, 127, 221)"}} id="icon">
                                    <i className="fas fa-edit m-2" style={{"font-size":"20px"}} ></i>
                                    </span>
                                </a>
                            </div>
                            </div>
                    </div>
                    </div>
                </div>
                {/* <div className="col-lg-2">
                    <div className="card mb-4 hero2card2">
                    <div className="card-body">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-1">
                        </div>
                    </div>
                    </div>
                </div> */}
            </div>
            </div>
            </section>
        </section>
    )
}

export default SectionProfile