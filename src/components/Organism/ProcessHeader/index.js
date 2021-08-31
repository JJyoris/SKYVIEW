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
      label: "COMUNIDAD",
      url: "/comunidad",
      color: classes.comunidad,
      previous: "/",
      next: "/historia/timeline",
    },
    {
      label: "PLANTAS INDUSTRIALES",
      url: "/planta",
      color: classes.planta,
      previous: "/",
      next: "/historia/timeline",
    },
    {
      label: "NUESTRAS GRANJAS",
      url: "/granja",
      color: classes.granja,
      previous: "/",
      next: "/historia/timeline",
    },

    {
      label: "OFICINA CENTRAL",
      url: "/oficina",
      color: classes.oficina,
      previous: "/",
    },
    {
      label: "PRODUCCION RESPONSABLE",
      url: "/produccion",
      color: classes.produccion,
      previous: "/",
    },
    {
      label: "NUESTRA HISTORIA",
      url: "/historia/timeline",
      color: classes.historia,
      previous: "/historia",
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
          console.log(next);
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
