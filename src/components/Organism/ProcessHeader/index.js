import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  makeStyles,
  Typography,
} from "@material-ui/core";

import prevIcon from "../../../assets/flecha_izq.png";
import nextIcon from "../../../assets/flecha_der.png";
import noNextIcon from "../../../assets/flecha_der_no.png";

import { Link as RouterLink, useLocation } from "react-router-dom";
import logo from "../../../assets/Logo-AGROSUPER.svg";
import logoHome from "../../../assets/icn_home.svg";

const useStyles = makeStyles((theme) => ({
  logo: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "transparent",
    color: theme.palette.text.primary,
  },
  tittle: {
    fontSize: 26,
  },
  historia: {
    color: "#7e9e47",
  },
  comunidad: {
    color: "#459fc7",
  },
  oficina: {
    color: "#22d7d9",
  },
  planta: {
    color: "#f96f5a",
  },
  produccion: {
    color: "#34b29a",
  },
  granja: {
    color: "#b8de6a",
  },
}));

const ProcessHeader = () => {
  const location = useLocation();
  const classes = useStyles();

  const headerProcessOptions = [
    {
      label: "NUESTRA HISTORIA",
      url: "/historia",
      color: classes.historia,
      previous: "/",
      next: "/historia/timeline",
    },
    {
      label: "EMPRENDIMIENTO",
      url: "/comunidad",
      color: classes.comunidad,
      previous: "/",
      next: "/comunidad/educacion",
    },
    {
      label: "EDUCACIÓN",
      url: "/comunidad/educacion",
      color: classes.comunidad,
      previous: "/comunidad",
      next:"/comunidad/vida",
    },
    {
      label: "VIDA EQUILIBRADA",
      url: "/comunidad/vida",
      color: classes.comunidad,
      previous: "/comunidad/educacion",
      next: "/comunidad/voluntario",
    },
 
    {
      label: "VOLUNTARIADO COLABORADORES",
      url: "/comunidad/voluntario",
      color: classes.comunidad,
      previous: "/comunidad/vida",
      next:  "/comunidad/proposito",
    },
    {
      label: "NUESTRO PROPÓSITO",
      url: "/comunidad/proposito",
      color: classes.comunidad,
      previous: "/comunidad/voluntario",
      next: null,
    },
    {
      label: "PLANTAS INDUSTRIALES",
      url: "/planta",
      color: classes.planta,
      previous: "/",
      next: '/planta/faenado',
    },
    {
      label: "LÍNEA DE PRODUCCIÓN CERDO",
      url: "/planta/cerdo",
      color: classes.planta,
      previous: '/planta/faenado',
      next: null,
    },
    {
      label: "LÍNEA DE PRODUCCIÓN SALMÓN",
      url: "/planta/salmon",
      color: classes.planta,
      previous: '/planta/faenado',
      next: null,
    },
    {
      label: "LÍNEA DE PRODUCCIÓN PAVO",
      url: "/planta/pavo",
      color: classes.planta,
      previous: '/planta/faenado',
      next: null,
    },
    {
      label: "LÍNEA DE PRODUCCIÓN POLLO",
      url: "/planta/pollo",
      color: classes.planta,
      previous: '/planta/faenado',
      next: null,
    },
    {
      label: "PLANTAS INDUSTRIALES",
      url: "/planta/faenado",
      color: classes.planta,
      previous: "/planta",
      next: '/planta/areas',

    },
    {
      label: "PLANTAS INDUSTRIALES",
      url: "/planta/areas",
      color: classes.planta,
      previous: "/planta/faenado",
      next: '/planta/beneficios',

    },
    {
      label: "PLANTAS INDUSTRIALES",
      url: "/planta/beneficios",
      color: classes.planta,
      previous: "/planta/areas",
      next: '/planta/sigas',

    },
    {
      label: "PLANTAS INDUSTRIALES",
      url: "/planta/sigas",
      color: classes.planta,
      previous: "/planta/beneficios",
      next: "/planta/certificaciones",

    },
 
    {
      label: "NUESTRAS CERTIFICACIONES",
      url: "/planta/certificaciones",
      color: classes.planta,
      previous: "/planta/sigas",
      next: null,

    },
 
 
    {
      label: "NUESTROS PLANTELES",
      url: "/granja",
      color: classes.granja,
      previous: "/",
      next: "/granja/IntegracionVertical",
    },
    {
      label: "INTEGRACIÓN VERTICAL",
      url: "/granja/IntegracionVertical",
      color: classes.granja,
      previous: "/granja",
      next: "/granja/libertades",
    },
    {
      label: "NUESTROS PLANTELES",
      url: "/granja/libertades",
      color: classes.granja,
      previous: "/granja/IntegracionVertical",
      next: null,
    },

    {
      label: "OFICINA CENTRAL",
      url: "/oficina",
      color: classes.oficina,
      previous: "/",
      next:null,
    },
    {
      label: "PRODUCCIÓN RESPONSABLE",
      url: "/produccion",
      color: classes.produccion,
      previous: "/",
      next:'/produccion/bioriles',
    },
    {
      label: "PRODUCCIÓN RESPONSABLE",
      url: "/produccion/bioriles",
      color: classes.produccion,
      previous: "/produccion",
      next:'/produccion/carbono',
    },
    {
      label: "PRODUCCIÓN RESPONSABLE",
      url: "/produccion/carbono",
      color: classes.produccion,
      previous: "/produccion/bioriles",
      next:'/produccion/eficiencia',
    },
    {
      label: "PRODUCCIÓN RESPONSABLE",
      url: "/produccion/eficiencia",
      color: classes.produccion,
      previous: "/produccion/carbono",
      next:'/produccion/agua',
    },
    {
      label: "PRODUCCIÓN RESPONSABLE",
      url: "/produccion/agua",
      color: classes.produccion,
      previous: "/produccion/eficiencia",
      next:null,
    },
    {
      label: "NUESTRA HISTORIA",
      url: "/historia/timeline",
      color: classes.historia,
      previous: "/historia",
      next:null,
    },
  ];

  if (location.pathname === "/") return null;
  return (

    <AppBar elevation={0} position="sticky" className={classes.appbar}>
      <Toolbar>
        <RouterLink to="/" className={classes.logo}>
          <Box
            component={"img"}
            mt={3}
            ml={2}
            width={200}
            src={logo}
            alt=" logo"
          />
        </RouterLink>
        {headerProcessOptions.map(({ label, url, color, previous, next }) => {
          
          return (
            <>
              {location.pathname === url ? (
                <>
                  <Typography variant="h3" className={color}>
                    {label}
                  </Typography>

                  <RouterLink to={previous}>
                    <Box
                      component={"img"}
                      width={20}
                      mr={2}
                      ml={1}
                      src={prevIcon}
                      alt="previous"
                    />
                  </RouterLink>

                  <RouterLink to="/">
                    <Box
                      component={"img"}
                      width={40}
                      src={logoHome}
                      alt=" logo"
                    />
                  </RouterLink>

                  {next ? (
                    <RouterLink to={next}>
                      <Box
                        component="img"
                        mr={1}
                        ml={2}
                        width={20}
                        src={nextIcon}
                        alt="next"
                      />
                    </RouterLink>
                  ) : (
                    <a> 
                    <Box
                      component="img"
                      mr={1}
                      ml={2}                      
                      width={20}
                      src={noNextIcon}
                      alt="noNextIcon"
                    />
                    </a>
                  )}
                </>
              ) : null}
            </>
          );
        })}
      </Toolbar>
    </AppBar>
  );
};

export default ProcessHeader;
