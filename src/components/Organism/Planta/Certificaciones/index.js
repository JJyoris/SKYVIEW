import React from "react";
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import CertificacionePicture from "../../../../assets/foto_slide-5.png";
import BorderWrapper from "../../../Atoms/BorderWrapper";
import Img1 from "../../../../assets/img-1 (1).png";
import Dat1 from "../../../../assets/dat-1.png";
import Dat2 from "../../../../assets/dat-2.png";
import Dat3 from "../../../../assets/dat-3.png";
import flecha from "../../../../assets/flechaCertificaciones.png";
import caja from "../../../../assets/caja.png";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",
  },
  background: {
    height: "70vh",
  },

  image: {
    width: 750,
    height: "auto",
    position: "absolute",
    top: 210,
    left: 32,
    zIndex:-1
  },
  title: {
    color: theme.palette.text.button,
  },
  footer:{
    fontSize:18,
    color:"#203a75"
  }
}));

const Certificaciones = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BorderWrapper borderColor="#f96f5a">
        <Box width="100%" display="flex" justifyContent="center">
          <Box width="95%" minWidth={200}>
            <Grid
              container
              spacing={5}
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item xs={6}>
                <img src={Img1} className={classes.image} alt="Sigas" />
              </Grid>
              <Grid item container spacing={1} xs={6}>
                <Grid item xs={4}>
                  <img src={Dat1} alt="sigas" />
                  <Typography varaint="h3" align="center">
                    Sistema propio, pero auditado y certificado por un organismo
                    externo, validado internacionalmente.
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <img src={Dat2} alt="sigas" />
                  <Typography varaint="h3" align="center">
                    Nos certifica DQS (Sociedad Alemana deCalidad) conformado
                    por el DIN (Instituto Alemán de Normalización) y la división
                    QRS de UL (Underwriters Laboratories).
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <img src={Dat3} alt="sigas" />
                  <Typography varaint="h3" align="center">
                    Al certificarnos nos permiten el uso de los GC Marks, que
                    son una acreditación de la Union Europea respecto a las
                    diferentes variaciones.
                  </Typography>
                </Grid>
                <Grid item container>
                  <Grid item xs={8}>
                    <img
                      src={flecha}
                      alt="certificaciones"
                      tittle="Certificaciones"
                      width="100%"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <img
                      src={caja}
                      alt="certificaciones"
                      tittle="Certificaciones"
                      width="100%"
                    />
                  </Grid>
                </Grid>
                <Typography variant="h3" className={classes.footer}>
                  
                  Cumplir con todas estas normads es muy importante porque
                  certifica nuestra calidad 2.0 y nos abre las puertas a
                  mercados internacionales con regulaciones mucho más estrictas.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </BorderWrapper>
    </div>
  );
};

export default Certificaciones;
