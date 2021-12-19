import React from "react";
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import BorderWrapper from "../../../Atoms/BorderWrapper";
import icnbio from "../../../../assets/icn_biomasa.png";
import cifras from "../../../../assets/cifras_sl6.png";
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",
  },
  background: {
    height: "70vh",
  },
  videoContainer: {
    
    display:"flex",
    boxShadow:
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  },
  videoContainer2: {
    top:"-13%",
    left:"47%",
    position:"absolute",
    display:"flex",
    boxShadow:
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  },
  video: {
    borderRadius: 20,
    overflow: "hidden",
  },
  titleContainer: {
    paddingTop: 5,
    paddingBottom:5,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#1d6efe",
    width: "fit-content",
    borderRadius: '0px 20px 20px 0px',
    marginBottom: 20,
  },
  titleContainer2: {
    position:"relative",
    direction:"row",
    display:"flex",
    marginTop:"20px",
    paddingTop: 5,
    paddingBottom:5,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#1d6efe",
    width: "100%",
    height:"auto",
    borderRadius: '10px 10px 10px 10px',
    
  },
  titleContainer3: {
    position:"relative",
    width:"45%",
    height:"180px",
    direction:"column",
    textAlign:"right",
    justifyContent:"end",
    alignItems:"center",
    marginRight:"15px",
    
  },
  titleContainer4: {
    width:"100%",
    direction:"row",
    display:"flex",
    textAlign:"left",
    justifyContent:"start",
    alignItems:"center",
    
  },
  title: {
    color: "#34B29A",
    fontSize:35

  },
  subtitle:{
      color: '#fff',
      fontWeight: 600,
      fontSize: 22,
      
  },
  subtitle2:{
    color: '#fff',
    fontWeight: 600,
    fontSize: 22,
    textAlign:"right",
    display:"flex",
    justifyContent:"end",
    alignItems:"center",
    marginBottom:"6px",
  },
  texto:{
    display:"flex",
    fontSize:14,
    textAlign:"right",
    color:"#fff"
  }
}));

const Eficiencia = () => {
  const classes = useStyles();
  return (
    <div>
      <BorderWrapper borderColor='#34b29a'>
        <Box
          width='100%'
          display='flex'
          height="100%"
          justifyContent='center'
          alignItems='center'
        >
          <Box width='100%' minWidth={400}>
          <div className={classes.titleContainer}>
            <Typography className={classes.subtitle} variant='h5'>Reutilización de Agua - Plantas Industriales</Typography>
            </div>
            <Grid
              container
              spacing={0}
              direction='row'
              justifyContent='center'
              alignItems='center'
            >
              <Grid
                item
                container
                spacing={5}
                alignItems='center'
                justifyContent='center'
              >
                <Grid item md={6}>
                <ReactPlayer
                      url='https://skyviewagrosuper.com/videos/produccion_responsable/BIOMASA.mp4'
                      width='100%'
                      height='auto'
                      className={classes.videoContainer}
                      playing
                      controls
                    />
                </Grid>
                <Grid item md={6}>
                <div  className={classes.titleContainer4}
                      justifyContent="center"
                      alignItems="center">
                      <Typography className={classes.texto2} lineheight="1.5" variant='h1'>La mitad de la electricidad que ocupa Agrosuper será energía limpia
                      gracias a Noruega Statkraft.
                       </Typography>
                      <Box  component='img'
                            width="80%"
                            display="flex"
                        
                            src={cifras} />
                
                </div>
               <div className={classes.titleContainer2} justifyContent="center"
                        alignItems="center">
                  <div className={classes.titleContainer3} >
                  <Typography className={classes.subtitle2} variant='h5'>
                    <Box component='img'
                           width="15%"
                           height="auto"
                           marginRight="10px"
                           src={icnbio} /> Biomasa</Typography>
                    <Typography className={classes.texto} lineheight="1.5" variant='h1'>La biomasa es el subproducto o residuo generado en la actividad agroalimentaria
                    con potencial enrgético. Esa energía química queda almacenada en forma de materia orgánica; y puede recuperarse quemándola directamente o transformándola
                    en combustible.
                    </Typography>
                  </div>  
                  <ReactPlayer
                      url='https://skyviewagrosuper.com/videos/produccion_responsable/BIOMASA%20BAJA.mp4'
                      width='50%'
                      height='auto'
                      className={classes.videoContainer2}
                      playing
                      loop
                      muted
                    />
                    </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              container
              direction='row'
              justifyContent='center'
              alignItems='center'
              md={12}
            >
              
            </Grid>
          </Box>
        </Box>
      </BorderWrapper>
    </div>
  );
};

export default Eficiencia;
