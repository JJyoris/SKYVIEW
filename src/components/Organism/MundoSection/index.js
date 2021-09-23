import React from "react";
import { makeStyles, Grid, Typography, Box } from "@material-ui/core";
import NavCard from "../../Atoms/NavCard";
import comunidad from "../../../assets/BOTON_COMUNIDAD.png";
import historia from "../../../assets/BOTON_NUESTRA_HISTORIA.png";
import crianza from "../../../assets/BOTON_NUESTRAS_GRANJAS.png";
import faenadora from "../../../assets/BOTON_PLANTAS_INDUSTRIALES.png";
import produccion from "../../../assets/BOTON_PRODUCCION_RESPONSABLE.png";
import oficinaCentral from "../../../assets/BOTON_OFICINA_CENTRAL.png";

const useStyles = makeStyles((theme) => ({
  line: {
    height: 50,
    width: "100%",
    background: "linear-gradient(to right,#fde7d0, #fde7d0)",
    position: "absolute",
    marginTop:120,
    //  borderRadius:50,
    zIndex: -1,
  },
  dots:{
    color:"#ee7623"
  }

}));

const MundoSection = () => {
  const classes = useStyles();
  return (
    <div id='mundo-as'>
       <div className={classes.line}> </div>
      <Box
        width='100%'
        display='flex'
        // justifyContent='center'
        // alignItems='center'
      >
        {/* <Box width='95%' minWidth={300}> */}
          <Grid
            container
            spacing={0}
            justifyContent='center'
            direction='row'
            alignItems='center'
          >
            <Box m={3}>
              <Typography align="center" variant='h3'>
                Descubre nuestros procesos navegando en nuestro mundo
              </Typography>
            </Box>
            <Grid container spacing={3} item xs={11}  justifyContent="space-around">
              <Grid item lg md={4} sm={6} xs={12}>
                <NavCard image={historia} tittle='Historia' link='/historia' />                
              </Grid>
              <Box  lg md={4} sm={6} xs={12} mt={8} >
               <Typography variant='h4' className={classes.dots}>. . . . </Typography>
               </Box>
             <Grid item  lg md={4} sm={6} xs={12}>
                <NavCard
                  image={oficinaCentral}
                  tittle='Oficina '
                  subtittle='Central'
                  link='/oficina'
                />
              </Grid>
              <Box lg md={4} sm={6} xs={12} mt={8}>
               <Typography variant='h4'  className={classes.dots}>. . . . </Typography>
               </Box>
              <Grid item lg md={4} sm={6} xs={12} mt={8}>
                <NavCard
                  image={crianza}
                  tittle='Nuestras '
                  subtittle='Granjas'
                  link='/granja'
                />
              </Grid>
              <Box lg md={4} sm={6} xs={12} mt={8} >
               <Typography variant='h4'  className={classes.dots}>. . . . </Typography>
               </Box>
              <Grid item  lg md={4} sm={6} xs={12}>
                <NavCard
                  image={faenadora}
                  tittle='Plantas'
                  subtittle=' Industriales '
                  link='/planta'
                />
              </Grid>
              <Box lg md={4} sm={6} xs={12} mt={8} >
               <Typography variant='h4'  className={classes.dots} >. . . . </Typography>
               </Box>
              <Grid item  lg md={4} sm={6} xs={12}>
                <NavCard
                  image={produccion}
                  tittle='Producción Responsable'
                  subtittle=''
                  link='/produccion'
                />
              </Grid>
              <Box lg md={4} sm={6} xs={12}  mt={8}>
               <Typography variant='h4'  className={classes.dots} >. . . . </Typography>
               </Box>
              <Grid item lg md={4} sm={6} xs={12}  >
                <NavCard
                  image={comunidad}
                  tittle='Comunidad'
                  link='/comunidad'
                />
              </Grid>
            </Grid>
          </Grid>
        {/* </Box> */}
      </Box>
    </div>
  );
};

export default MundoSection;
