import React from "react";
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import BorderWrapper from "../../../Atoms/BorderWrapper";
import preco from "../../../../assets/pr_economiacircular.png";
import prcifras from "../../../../assets/pr_cifras.png";
import icnbio from "../../../../assets/icn_bioestabilizado.png";
import n1 from "../../../../assets/nro1.png";
import n2 from "../../../../assets/nro2.png";
import n3 from "../../../../assets/nro3.png";
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",
  },
  background: {
    height: "70vh",
  },
  videoContainer: {
    top:"56%",
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
    marginBottom:"20px",
    paddingTop: 5,
    paddingBottom:5,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#d693c9",
    width: "fit-content",
    borderRadius: '0px 20px 20px 0px',
  },
  titleContainer2: {
    position:"relative",
    marginTop:"20px",
    paddingTop: 5,
    paddingBottom:5,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#d693c9",
    width: "70%",
    height:"350px",
    borderRadius: '10px 10px 10px 10px',
    
  },
  title: {
    color: "#34B29A",
    fontSize: 35,
    
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
    textAlign:"center",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  parrafo:{
    marginLeft:"15px",
    width:"90%",
    direction:"row",
    display:"flex",
    justifyContent: "center",
    textAlign:"left",
  },
  texto:{
    marginLeft:"5px",
    display:"flex",
    textAlign:"left",
  }
}));

const Suelos = () => {
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
            <Typography className={classes.subtitle} variant='h5'>Mejoramiento de Suelos - Bioabono</Typography>
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
                <Grid item md={4}>
                  <Box component='img'  width="100%"  src={preco} />
                </Grid>
                <Grid item md={4}
                      container
                      alignItems="center"
                      justifyContent="center">
                  <Box component='img'
                       width="100%"
                       display='flex'
                       height="100%"
                       justifyContent='center'
                       alignItems='center'
                       src={prcifras} />
                  <div className={classes.titleContainer2} >
                  
                  <Typography className={classes.subtitle2} variant='h5'>
                    <Box component='img'
                           width="15%"
                           height="auto"
                           
                           src={icnbio} />Bioestabilizado</Typography>
                  </div>
                  <ReactPlayer
                      // Disable download button
                      config={{ file: { attributes: { controlsList: 'nodownload' } } }}

                      // Disable right click
                      onContextMenu={e => e.preventDefault()}                  
                      url='https://skyviewagrosuper.com/videos/produccion_responsable/Bioestabilizado.mp4'
                      width='25%'
                      height='auto'
                      className={classes.videoContainer}
                      playing
                      controls
                    />
                </Grid>
                <Grid item md={4}>
                  <Box component='img' width="70%"/>
                    <div className={classes.parrafo} >
                      <Box component='img'
                           width="15px"
                           height="15px"
                           
                           src={n1} />
                      <Typography className={classes.texto} lineheight="1.5" variant='h1'>Los sólidos son transformados en Bioabono a través
                      de un proceso que reduce la emisión de olores molestos, siendo valorizado, y utilizado como fertilizante.
                      </Typography>
                    </div>
                    <Box component='img' width="70%"/>
                    <div className={classes.parrafo} >
                      <Box component='img'
                           width="15px"
                           height="15px"
                           
                           src={n2} />
                      <Typography className={classes.texto} lineheight="1.5" variant='h1'>El agua tratada es utilizada para la limpieza de instalaciones de nuestras
                      operaciones y para el riego de hectáreas agrícolas.
                      </Typography>
                    </div>
                    <Box component='img' width="70%"/>
                    <div className={classes.parrafo} >
                      <Box component='img'
                           width="15px"
                           height="15px"
                           
                           src={n3} />
                      <Typography className={classes.texto} lineheight="1.5" variant='h1'>Parte del Bioabono producido, es distribuido de manera gratuita a agrícultores vecinos
                      que forman parte del Programa de Desarrollo Local (Prodesal) a través de un convenio entre la compañía, la Municipalidad de la Estrella y el Instituto de
                      Desarrollo Agropecuario (INDAP).
                      </Typography>
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

export default Suelos;
