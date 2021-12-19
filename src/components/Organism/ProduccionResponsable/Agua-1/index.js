import React from "react";
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import BorderWrapper from "../../../Atoms/BorderWrapper";
import icnriles from "../../../../assets/icn_riles.png";
import cifras from "../../../../assets/ra_cifras.png";
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",
  },
  background: {
    height: "70vh",
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
    backgroundColor: "#837beb",
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
    backgroundColor: "#d693c9",
    width: "100%",
    height:"auto",
    borderRadius: '10px 10px 10px 10px',
    
  },
  titleContainer3: {
    position:"relative",
    width:"45%",
    height:"140px",
    direction:"column",
    textAlign:"right",
    justifyContent:"end",
    alignItems:"center",
    marginRight:"15px",
    
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
    
    textAlign:"right",
    color:"#fff"
  }
}));

const Agua1 = () => {
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
                      url='https://skyviewagrosuper.com/videos/produccion_responsable/REUTILIZACIONDELAGUA-1.mp4'
                      width='100%'
                      height='auto'
                      className={classes.videoContainer}
                      playing
                      controls
                    />
                </Grid>
                <Grid item md={6}>
                  <Box  component='img'
                        width="100%"
                        display="flex"
                        direction="row"
                        
                        src={cifras} />
                
                
               <div className={classes.titleContainer2} justifyContent="center"
                        alignItems="center">
                  <div className={classes.titleContainer3} >
                  <Typography className={classes.subtitle2} variant='h5'>
                    <Box component='img'
                           width="15%"
                           height="auto"
                           marginRight="10px"
                           src={icnriles} /> Riles</Typography>
                    <Typography className={classes.texto} lineheight="1.5" variant='h1'>El agua tratada es utilizada para la limpieza de instalaciones de nuestras
                      operaciones y para el riego de hectáreas agrícolas.
                    </Typography>
                  </div>  
                  <ReactPlayer
                      url='https://skyviewagrosuper.com/videos/produccion_responsable/RILES%20BAJA.mp4'
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

export default Agua1;
