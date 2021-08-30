import React from "react";
import { Grid, makeStyles, Typography, Box } from "@material-ui/core";
import mapa from "../../../assets/banner-mapa.png";

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
  }
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

        <Grid item xs={12}>
          <img src={mapa} alt="mapa" className={classes.img} />
        </Grid>
      
      </Grid>
    </div>
  );
};

export default WelcomeSection;
