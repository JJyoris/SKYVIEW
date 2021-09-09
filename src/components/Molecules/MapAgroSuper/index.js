import {useState} from "react";
import mapa from "../../../assets/fondo.png";
import nubes from "../../../assets/nubes.png";
import { IconButton} from "@material-ui/core";


import RadioButtonCheckedOutlinedIcon from '@material-ui/icons/RadioButtonCheckedOutlined';

import "./index.css";
import CardMap from "../../Atoms/CardMap";

const MapAgroSuper = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div id="mapa">
      <img src={nubes} alt="nubes" id="nube" width="100%"/>

      <img src={mapa} alt="Mapa agrosuper" width="100%"  height="auto" />
      <IconButton  color="primary"  size="small"  className="icon-button" style={{position:"absolute"}} onClick={handleOpen} >
        <RadioButtonCheckedOutlinedIcon  style={{fontSize:12}}  className="btn-map"/>   
      </IconButton>

       <CardMap open={open} handleClose={handleClose}/> 
    
     
      
    </div>
  );
};

export default MapAgroSuper;
