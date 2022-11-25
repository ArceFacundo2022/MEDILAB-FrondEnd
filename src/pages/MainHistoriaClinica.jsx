import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"
import SectionComent from "../components/layout/SectionComent"
import { AiFillMedicineBox, AiOutlineUser } from "react-icons/ai";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";


const MainHistoriaClinica = () => {
    const { infoContextUser, roleXD, dispatch } = useContext(AuthContext)
    return (
        <>
            <Header/>
            <section id="hero4" className="align-items-center">
                <div className="container">
                    <h1>HISTORIA CLINICA {infoContextUser.userName}</h1>
                </div>
                <div className="container col-lg-6">
                    <div className="col-lg-12">
                        <label htmlFor="formGroupExampleInput" className="form-label mt-2"><strong>DATOS GENERALES {roleXD.role}</strong></label>
                        <div className="input-group mb-3">
                        <button className="d-none d-md-inline appointment-btn scrollto btn btn-primary regButton mt-4" onClick={() => {
                            dispatch({type : "[setRole]"})
            }}>PruebaxD</button>
                            <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fillRule="evenodd" d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"></path></svg></span>
                            <input type="text" className="form-control" placeholder="Nombre del paciente" aria-label="Nombre y Apellido" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fillRule="evenodd" d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 14H1.75A1.75 1.75 0 010 12.25v-8.5zm1.75-.25a.25.25 0 00-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25v-8.5a.25.25 0 00-.25-.25H1.75zM3.5 6.25a.75.75 0 01.75-.75h7a.75.75 0 010 1.5h-7a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h4a.75.75 0 000-1.5h-4z"></path></svg></span>
                            <input type="text" className="form-control" placeholder="Documento" aria-label="Documento" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fillRule="evenodd" d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 14H1.75A1.75 1.75 0 010 12.25v-8.5zm1.75-.25a.25.25 0 00-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25v-8.5a.25.25 0 00-.25-.25H1.75zM3.5 6.25a.75.75 0 01.75-.75h7a.75.75 0 010 1.5h-7a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h4a.75.75 0 000-1.5h-4z"></path></svg></span>
                            <input type="text" className="form-control" placeholder="Domicilio" aria-label="Domicilio" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fillRule="evenodd" d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 14H1.75A1.75 1.75 0 010 12.25v-8.5zm1.75-.25a.25.25 0 00-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25v-8.5a.25.25 0 00-.25-.25H1.75zM3.5 6.25a.75.75 0 01.75-.75h7a.75.75 0 010 1.5h-7a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h4a.75.75 0 000-1.5h-4z"></path></svg></span>
                            <input type="text" className="form-control" placeholder="Estado Civil" aria-label="Estado Civil" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon3">Fecha de nacimiento</span>
                            <input type="date" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                        </div>

                        <label htmlFor="formGroupExampleInput" className="form-label mt-2"><strong>MOTIVO DE LA CONSULTA</strong></label>

                        <div className="input-group">
                            <span className="input-group-text">Describa aqui</span>
                            <textarea className="form-control" aria-label="Describa aqui"></textarea>
                        </div>

                        <label htmlFor="formGroupExampleInput" className="form-label mt-2"><strong>HISTORIA DE LA ENFERMEDAD ACTUAL</strong></label>

                        <div className="input-group">
                            <textarea className="form-control" aria-label="Describa aqui"></textarea>
                        </div>

                        <label htmlFor="formGroupExampleInput" className="form-label mt-2"><strong>ANTECEDENTES PERSONALES PATOLÓGICOS</strong></label>

                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Familiares:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputEmail3" />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Médicos</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputEmail3" />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Quirurgicos</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputEmail3" />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Traumáticos</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputEmail3" />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Alérgicos:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputEmail3" />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Vicios y Manías:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputEmail3" />
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <SectionComent/>
            <Footer/>
        </>
        
    )
}
export default MainHistoriaClinica