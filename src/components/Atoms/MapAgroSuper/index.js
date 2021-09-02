import React from "react";
import mapa from "../../../assets/fondo.png";
import nubes from "../../../assets/nubes.png";

import "./index.css";

const MapAgroSuper = () => {
  return (
    <div id="mapa">
      <img src={nubes} id="nube" width="100%"/>
      <img src={mapa} width="100%"  />
    </div>
  );
};

export default MapAgroSuper;
