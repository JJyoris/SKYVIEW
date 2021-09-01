import React from "react";
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import ProtocolosImg from "../../../../assets/slide-1.png";
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
  root: {
  
    paddingTop: 50,
    height: "auto",
  },
  image: {
    width: "100%",
    height: "auto",
  },
  title: {
    color: theme.palette.text.button,
  },
  subtitle: {
    fontSize: 28,
  },
  gridContainer: {
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  video: {
    borderRadius: 20,
    overflow: "hidden",
  },
}));

const Protocolos = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box
        width='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Box width='80%' minWidth={200}>
          <Grid container direction='row' spacing={5}>
            <Grid item xs={12} md={5}>
              <Grid
                container
                direction='column'
                spacing={2}
                justifyContent='center'
                alignItems='center'
                className={classes.gridContainer}
              >
                <Grid item>
                  <Typography variant='h5' align='center' gutterBottom>
                    Protocolos de Higiene
                  </Typography>
                  <Typography variant='h4' align='center' gutterBottom>
                    Al ingresar se cumplen medidas estrictas de seguridad
                  </Typography>
                </Grid>
                <Grid item>
                  <img
                    className={classes.image}
                    src={ProtocolosImg}
                    alt='protocolos'
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={1}></Grid>
            <Grid item xs={12} md={6}>
              <Box display='flex' justifyContent='center' alignItems='center'>
                <ReactPlayer
                  url='https://www.youtube.com/watch?v=lPxq_m2qLBQ'
                  width='700px'
                  height='470px'
                  className={classes.video}
                  config={{
                    youtube: {
                      playerVars: {controls: 2 },
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Protocolos;
