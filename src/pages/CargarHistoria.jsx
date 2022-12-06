import React from "react";
import { CardHistory } from "../components/CardHistory";
import { CargarHistoriaForm } from "../components/CargarHistoriaForm";

export const CargarHistoria = () => {
  return (
    <>
      <div className="container p-4">
        <div className="row">
          <CargarHistoriaForm />
          <CardHistory/>
        </div>
      </div>
    </>
  );
};
