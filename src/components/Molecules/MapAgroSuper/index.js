import {  useState } from "react";
import mapa from "../../../assets/fondo.png";
import nubes from "../../../assets/nubes.png";
import { IconButton, Typography } from "@material-ui/core";
import cardMapContent from "../../../utils/cardMapContent";


import RadioButtonCheckedOutlinedIcon from "@material-ui/icons/RadioButtonCheckedOutlined";

import "./index.css";
import CardMap from "../../Atoms/CardMap";

const MapAgroSuper = () => {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleOpen = (e) => {
    setOpen(true);
    setSelectedId(e.currentTarget.id);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div >
         <IconButton
        id="Plantas Industriales"
        color="primary"
        size="large"
        className="icon-button-plantas"
        onClick={handleOpen}
      >
        <Typography
          className="btn-map-planta"
        >
          <RadioButtonCheckedOutlinedIcon
          style={{ fontSize: 20, marginRight: 3 }}
               
          
        />Plantas Industriales
        </Typography>
      </IconButton>
         <IconButton
        id="Producción Responsable"
        color="primary"
        size="large"
        className="icon-button-produccion"
        onClick={handleOpen}
      >
        <Typography
          className="btn-map-produccion"
        >
          <RadioButtonCheckedOutlinedIcon
          style={{ fontSize: 20, marginRight: 3 }}
               
          
        />Producción Responsable
        </Typography>
      </IconButton>
      
      <IconButton
        id="Comunidad"
        color="primary"
        size="large"
        className="icon-button-comunidad"
        onClick={handleOpen}
      >
        <Typography
          className="btn-map-comunidad"
        >
          <RadioButtonCheckedOutlinedIcon
          style={{ fontSize: 20, marginRight: 3 }}
               
          
        />Comunidades
        </Typography>
      </IconButton>
      
      <IconButton
        id="Nuestra Historia"
        color="primary"
        size="large"
        className="icon-button-historia"
        onClick={handleOpen}
      >
        <Typography
          className="btn-map-historia"
        >
          <RadioButtonCheckedOutlinedIcon
          style={{ fontSize: 20, marginRight: 3 }}
               
          
        />Historia
        </Typography>
      </IconButton>


      <IconButton
        id="Oficina Central"
        color="primary"
        size="large"
        className="icon-button-oficina"
        onClick={handleOpen}
      >
        <Typography
          className="btn-map-oficina"
        >
          <RadioButtonCheckedOutlinedIcon
          style={{ fontSize: 20, marginRight: 3 }}
               
          
        />Oficina Central
        </Typography> 
      </IconButton>

      <IconButton
        id="Nuestras Granjas"
        color="primary"
        size="large"
        className="icon-button-granjas"
        onClick={handleOpen}
      >
        <Typography
          className="btn-map-granjas"
        >
          <RadioButtonCheckedOutlinedIcon
          style={{ fontSize: 20, marginRight: 3 }}
               
          
        />Nuestros Planteles
        </Typography>
      </IconButton>
      
      {cardMapContent.map(({label, body, image, link , id })=>{
      
        
        return label === selectedId ? 
        (<CardMap open={open} handleClose={handleClose} image={image} label={label} body={body} link={link} id={id}/>)
        : null 
      })}   
     

      <img src={mapa} style={{ height: "80vh"  }} alt="Mapa agrosuper"  />
      <img src={nubes} alt="nubes" id="nube"   style={{ height: "70vh" }}/>


    </div>
  );
};

export default MapAgroSuper;
