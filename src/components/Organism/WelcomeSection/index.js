import React from "react";
import { Grid, makeStyles, Typography, Box } from "@material-ui/core";
import mapa from "../../../assets/banner-mapa.png";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 10,
    height: "60vh",
  },
  tittle: {
    color: theme.palette.text.button,
  },
}));

const WelcomeSection = () => {
  const classes = useStyles();
  return (
    <div id="home" className={classes.root}>
      <Grid
        container
        spacing={0}
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Typography variant="h3" className={classes.tittle}>
          EXPERIENCIA SKY VIEW{" "}
        </Typography>

        <Box mb={3}>
          <Typography variant="h2">subtitulo del sky view </Typography>
        </Box>
        <Grid item xs={12}>
          <img src={mapa} alt="mapa" height="350" />
        </Grid>
      </Grid>
    </div>
  );
};

export default WelcomeSection;
