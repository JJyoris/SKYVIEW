import React from "react";
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import BorderWrapper from "../../../Atoms/BorderWrapper";
import ReactPlayer from "react-player";
import cifras_sl4 from "../../../../assets/cifras_sl4.png";


const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",
  },
  background: {
    height: "70vh",
  },
 
  titleContainer: {
    paddingTop: 5,
    paddingBottom:5,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#f79953",
    marginRight:"368px",
    borderRadius: '0px 20px 20px 0px',
  },
  text: {
    fontSize:14,
    textAlign:"left",
    lineHeight:"1.5",
    marginTop:"10px",
    marginBottom:"30px",
    width:"600px",

  },
  subtitle:{
      textAlign:"left",
      color: '#fff',
      fontWeight: 600,
      fontSize: 22,
  },
  videoContainer: {
    width:"600px",
    height:"338px",
    
    boxShadow:
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  },
  

}));

const Olores = () => {
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
          <Grid item md={7}
                item
                container
                direction='column'
                alignItems='center'
                justifyContent='center'
              >
            <div className={classes.titleContainer}>
            <Typography className={classes.subtitle} variant='h4'>Gestión de Olores</Typography>
            </div>
            <Typography className={classes.text} variant='h1'>Nuestro foco es contar con la tasa de emisiones de olor de las distintas fuentes para proyectar emisiones y definir mejoras operacionales para su mitigación.</Typography>
          </Grid>  
            <Grid
              container
              
              direction='row'
              
              justifyContent='center'
              alignItems='center'
            >
              <Grid
                item
                container
                alignItems='center'
                justifyContent='center'
              >
                <Grid item md={6}
                  width='100%'
                  display='flex'
                  alignItems='center'
                  justifyContent='center'>
                  <Box  width="100%"
                        display='flex'
                        height="100%"
                        justifyContent='center'
                        alignItems='center'>
                    <div className={classes.videoContainer}>
                    {" "}
                      <ReactPlayer
                      // Disable download button
                      config={{ file: { attributes: { controlsList: 'nodownload' } } }}

                      // Disable right click
                      onContextMenu={e => e.preventDefault()}                      
                      url='https://skyviewagrosuper.com/videos/produccion_responsable/GESTIONOLORES.mp4'
                      width='600px'
                      height='auto'
                      className={classes.video}
                      playing
                      controls
                      />
                    </div>
                  </Box>
                </Grid>
                
                <Grid item md={5}
                      width='100%'
                      display='flex'
                      alignItems='center'
                      justifyContent='center'>

                  <Box  component='img'
                        justifyContent='center'
                        alignItems='center'
                        width="100%"
                        display='flex'
                        src={cifras_sl4} />
                </Grid>
                
              </Grid>
            </Grid>

            
          </Box>
        </Box>
      </BorderWrapper>
    </div>
  );
};

export default Olores;
