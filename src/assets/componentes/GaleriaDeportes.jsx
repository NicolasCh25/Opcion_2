import React from "react";
import ecu from '../imagenes2/ecuavoly.jpg';
import fut from '../imagenes2/futbol.avif';
import basquet from '../imagenes2/basquet.jpeg';
import "./../estilos/GaleriaDeportes.css";

function GaleriaDeportes() {
  return (
    <div className="galeria-deportes">
      <h2>Deportes Favoritos</h2>
      <img src={fut} className="futbol" alt="Fútbol" />
      <img src={ecu} className="ecua" alt="Ecuavoley" />
      <img src={basquet} className="basquet" alt="Basket" />
    </div>
  );
}

export default GaleriaDeportes;
