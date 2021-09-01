import React from "react";
import { Grid, makeStyles, Typography, Box } from "@material-ui/core";
import MapAgroSuper from "../../Atoms/MapAgroSuper"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
const useStyles = makeStyles((theme) => ({
  root: {
    
    paddingTop: 10,
    height: "auto",
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  tittle: {
    color: theme.palette.text.button,
  },
  img: {
    
    minHeight: 430,
    width: "100%",
    borderRadius: 30,
    objectFit: 'cover',
    objectPosition: 'bottom'
  },
 

}));

const WelcomeSection = () => {
  const classes = useStyles();
  return (
    <div id="home" className={classes.root}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="row"
       
      >
        <Grid item xs={12}>

          <Typography align="center" variant="h3" className={classes.tittle} gutterBottom>
            
            EXPERIENCIA SKY VIEW

          </Typography>

          <Typography align="center" variant="h2" gutterBottom>

            subtitulo del sky view

          </Typography>
        </Grid>

        <Grid item xs={10}   >
        <TransformWrapper
        initialScale={1.5}
        initialPositionX={-500}
       
        
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <React.Fragment>
            <div >
              <button onClick={() => zoomIn()}>Zoom in </button>
              <button onClick={() => zoomOut()}>Zoom out</button>
              <button onClick={() => resetTransform()}>Reset</button>
            </div>
              <TransformComponent width="500px">

              <MapAgroSuper/> 
              
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
          
          
        </Grid>
      
      </Grid>
    </div>
  );
};

export default WelcomeSection;
