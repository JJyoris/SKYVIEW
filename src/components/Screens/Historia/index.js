import React from "react";
import ReactPlayer from "react-player";
import timelineIcon from "../../../assets/enlace_lineadetiempo.png";
import { Box, Grid, makeStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import flecha from "../../../assets/flecha.png";
import logoEvolucion from "../../../assets/logos_evo-desktop.png";
import BorderWrapper from "../../Atoms/BorderWrapper"

const useStyles = makeStyles((theme) => ({
  root: {
    
    height: "auto",
  },

  video: {

    overflow: "hidden",
  },
  flecha: {
    zIndex: -1,
    position: "absolute",
  },

  gridContainer: {
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
  },
}));

const Historia = () => {
  const classes = useStyles();
  return (
    
    <div id="historia" className={classes.root}>
      <BorderWrapper style={{ paddingTop:5 }} borderColor='#7e9e47'>

     
      <Grid container 
        
        justifyContent="center"
        alignItems="center"> 
        <Box
          component="img"
          width="50%"
          src={logoEvolucion}
          alt="Evolucion del logo"
        />
      </Grid>

      <Grid
        container
        direction="row"
        
        justifyContent="center"
        alignItems="center"
      >
          <Box
          component="img"
          width="95%"
          height="18%"
          src={flecha}
          alt="flecha "
          className={classes.flecha}
        />
  


        <Grid item xs={8} md={5}>
          <ReactPlayer
            url="https://skyviewagrosuper.com/videos/nuestra_historia/Video%20Intro%20Historia.mp4"
            width="750px"
            height="500px"
            controls
            className={classes.video}
            
          />
        </Grid>

        <Grid
          item
          xs={4}
          md={5}
          container
          justifyContent="center"
          alignItems="center"
        >
          <RouterLink to="/historia/timeline">
            <Box
              component="img"
              width="300px"
              ml={10}
              src={timelineIcon}
              alt="timeline "
            />
          </RouterLink>
        </Grid>
      </Grid>
      </BorderWrapper>
      
    </div>
   
  );
};

export default Historia;
