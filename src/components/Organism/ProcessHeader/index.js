import React from "react";
import { AppBar, Toolbar, Box, makeStyles, Typography } from "@material-ui/core";

import { Link as RouterLink , useLocation} from "react-router-dom";
import logo from "../../../assets/Logo-AGROSUPER.svg"
import logoHome from "../../../assets/icn_home.svg"
const useStyles = makeStyles((theme)=>({
    logo:{
        flexGrow:1
    },
    appbar:{
        backgroundColor:"transparent",
        color: theme.palette.text.primary
    },
    tittle:{
        fontSize:26
    },
    historia:{
      color:"#7e9e47"
    },
    comunidad:{
      color:"#459fc7"
    },
    oficina:{
      color:"#22d7d9"
    },
    planta:{
      color:"#f96f5a"
    },
    produccion:{
      color:"#34b29a"
    },
    granja:{
      color:"#b8de6a"
    }
}))




const ProcessHeader = () => {
    const location= useLocation();
    const classes = useStyles();

    const headerProcessOptions = [
      {
        label: "NUESTRA HISTORIA",
        url: "/historia",
        color: classes.historia
      },
      {
        label: "COMUNIDAD",
        url: "/comunidad",
        color:classes.comunidad
      },
      {
        label: "PLANTAS INDUSTRIALES",
        url: "/planta",
        color:classes.planta
      },
      {
        label: "NUESTRAS GRANJAS",
        url: "/granja",
        color:classes.granja
      },
    
      {
        label: "OFICINA CENTRAL",
        url: "/oficina",
        color: classes.oficina
      },
      {
        label: "PRODUCCION RESPONSABLE",
        url: "/produccion",
        color:classes.produccion
      },
    ];

 

    if (location.pathname === "/") return null; 
  return (
    <AppBar elevation={0} position="sticky" className={classes.appbar}>
      <Toolbar>
        <RouterLink to="/" className={classes.logo}>
          <Box component={"img"} mt={3} ml={2} width={200} src={logo} alt=" logo" />
        </RouterLink>
        {headerProcessOptions.map(({ label, url, color}) =>{
          console.log(color);
          return(
            <div key={label}>
             <Typography variant="h3" className={color} >{ location.pathname === url ? label : null }</Typography>
            </div>
          ); 
        })}
        
        <RouterLink to="/">
          <Box component={"img"} mr={3}  ml={3} width={35} src={logoHome} alt=" logo" />
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

export default ProcessHeader;
