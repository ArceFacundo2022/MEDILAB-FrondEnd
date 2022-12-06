import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { format } from "timeago.js";

export const CardHistory = () => {
  const [historias, setHistorias] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/histories").then((response) => {
      setHistorias(response.data);
      console.log(historias);
    });
  },[]);

  const eliminarHistoria = ( id)=> {

    axios.delete(`http://localhost:3000/api/histories/${id}`)
    window.location.reload()
  }

  return (
    <div className="col-md-8">
      {historias.map((historias, key) => {
        return (
          <>
            <div key={"historia" + key} className="card m-2 pt-4">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <a href={`http://localhost:3000/${historias.imagePath}`} target="_blank">
                    <img
                      src="https://img.icons8.com/3d-fluency/94/null/pdf.png"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>

                <div className="col-md-8">
                  <div className="card-block px-2">
                    <h4 className="card-title">{historias.title}</h4>
                    <p className="card-text">{historias.institucion}</p>
                    <button className="btn btn-danger delete mb-2" onClick={()=>{
                        eliminarHistoria(historias._id)
                    }}>
                      X
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-footer w-100 text-muted">
                {format(historias.created_at)}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
