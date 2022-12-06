import React from "react";
import { useState } from "react";
import axios from "axios";
import { CardHistory } from "./CardHistory";

export const CargarHistoriaForm = () => {
  const [datos, setFormData] = useState({
    title: "",
    institucion: "",
    matricula: "",
  });

  const [image, setImage] = useState(null);

  const subirArchivos = (e) => {
    setImage(e);
  };

  const enviarDatos = async (e) => {
    e.preventDefault();

    var formdata = new FormData();

    formdata.append("title", datos.title);
    formdata.append("institucion", datos.institucion);
    formdata.append("matricula", datos.matricula);
    formdata.append("image", image[0]);

    await axios
      .post("http://localhost:3000/api/histories", formdata)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      window.location.reload()
  };

  return (
    <div className="col-md-4">
      <form id="history-form" className="card card-body" onSubmit={enviarDatos}>
        <div className="form-group">
          <input
            type="text"
            id="title"
            className="form-control"
            placeholder="Titulo"
            autoFocus
            onChange={(e) => setFormData({ ...datos, title: e.target.value })}
          />
        </div>
        <br />
        <div className="form-group">
          <input
            type="text"
            id="institucion"
            className="form-control"
            placeholder="Institucion"
            onChange={(e) =>
              setFormData({ ...datos, institucion: e.target.value })
            }
          />
        </div>
        <br />
        <div className="form-group">
          <input
            type="text"
            id="matricula"
            className="form-control"
            placeholder="Matricula"
            onChange={(e) =>
              setFormData({ ...datos, matricula: e.target.value })
            }
          />
        </div>
        <br />
        <div className="input-group mb-3">
          <div className="custom-file">
            <input
              type="file"
              className="form-control"
              name="image"
              onChange={(e) => subirArchivos(e.target.files)}
            />
          </div>
        </div>
        <button
          type="submit"
         
          className="btn btn-primary"
        >Guardar</button>
      </form>
    </div>
  );
};
