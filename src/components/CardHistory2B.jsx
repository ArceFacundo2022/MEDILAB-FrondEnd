import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { format } from "timeago.js";

export const CardHistory2B = (props) => {
  const [historias, setHistorias] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/histories/${props.id}`).then((response) => {
      setHistorias(response.data);
    });
  },[]);

  const eliminarHistoria = ( id)=> {

    axios.delete(`http://localhost:3000/api/histories/${id}`)
    window.location.reload()
  }
  return (
    <>
      {historias.map((historias, key) => {
        return (
          <>
            <div key={"historia" + key} className="col-lg-4 col-md-6  align-items-stretch mt-4 mt-lg-0">
                  <a href={`http://localhost:3000/${historias.imagePath}`} target="_blank" className="mt-4">
                    <div className="icon-box">
                      <div className="icon"><i className="fas fa-hospital-user "></i></div>
                      <h4 className="color: black;">{historias.title}</h4>
                      <p className="color: black;">{historias.institucion}</p>
                    </div>
                  </a>
            </div>
          </>
        );
      })}
    </>
  );
};
