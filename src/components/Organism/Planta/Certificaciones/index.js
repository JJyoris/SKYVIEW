import React from "react";
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import BorderWrapper from "../../../Atoms/BorderWrapper";
import Img1 from "../../../../assets/img-am_ac.png";
import Dat1 from "../../../../assets/dat-1.png";
import Dat2 from "../../../../assets/dat-2.png";
import Dat3 from "../../../../assets/dat-3.png";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",
  },
  background: {
    height: "70vh",
  },

  image: {
    width: "70%",
    height: "auto",
    justifyContent:'center',
    alignItems:'center',
    display:'flex',
    marginLeft:"80px",
    
    // zIndex:-1
  },
  title: {
    fontSize:15,
  },
  footer:{
    fontSize:14,
    textAlign: 'center',
    color:"#203a75",
    margin:"0px 25px"
  }
}));

const Certificaciones = () => {
  const classes = useStyles();

  return (
    <div>
      <BorderWrapper borderColor="#774a4b">
        <Box width="100%"  height="100%" display="flex" justifyContent="center" alignItems="center">
          <Box width="95%" minWidth={200}  >
            <Grid
              container
              spacing={5}
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item xs={6}>
                <img src={Img1} className={classes.image} alt="Sigas"  />
              </Grid>
              <Grid item container spacing={3} xs={6}>
                <Grid item xs={4}>
                  <img src={Dat1} alt="sigas" width="100%"  />
                  <Typography varaint="h3" align="center" className={classes.title}>
                    Sistema propio, pero auditado y certificado por un organismo
                    externo, validado internacionalmente.
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <img src={Dat2} alt="sigas"  width="100%"/>
                  <Typography varaint="h3" align="center" className={classes.title}>
                    Nos certifica DQS (Sociedad Alemana de Calidad) conformado
                    por el DIN (Instituto Alemán de Normalización) y la división
                    QRS de UL (Underwriters Laboratories).
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <img src={Dat3} alt="sigas" width="100%" />
                  <Typography varaint="h3" align="center" className={classes.title}>
                    Al certificarnos nos permiten el uso de los GC Marks, que
                    son una acreditación de la Union Europea respecto a las
                    diferentes variaciones.
                  </Typography>
                </Grid>
                
                <Typography variant="h3" className={classes.footer}>
                  
                  Cumplir con todas estas normas es muy importante porque
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
