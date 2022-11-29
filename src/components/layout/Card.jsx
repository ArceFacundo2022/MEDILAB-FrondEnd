import React from 'react'
import { Link } from 'react-router-dom';

export default function Card(promps) {
  const {numero} = promps;
  return (
    <>
        <div className="col-lg-4 col-md-6  align-items-stretch mt-4 mt-lg-0">
            <Link to="/ClinicHistory" className="mt-4">
                <div className="icon-box">
                    <div className="icon"><i className="fas fa-hospital-user "></i></div>
                    <h4 className="color: black;">Consulta #{numero}</h4>
                    <p className="color: black;">Mire aqui su historia clinica</p>
                </div>
            </Link>
        </div>
    </>
  )
}
