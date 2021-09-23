import React from "react";
import ReactPlayer from "react-player";
import timelineIcon from "../../../assets/enlace_lineadetiempo.png";
import { Box, Grid, makeStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import flecha from "../../../assets/flecha.png";
import logoEvolucion from "../../../assets/logos_evo-desktop.png";
import BorderWrapper from "../../Atoms/BorderWrapper";

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
      <BorderWrapper borderColor="#7e9e47">
        <Box
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            container
            direction="column"
            spacing={5}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item container justifyContent="center" alignItems="center">
              <Box
                component="img"
                width="50%"
                height="auto"
                src={logoEvolucion}
                alt="Evolucion del logo"
              />
            </Grid>

            <Grid
              container
              item
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={10}
              item
            >
              <Box
                component="img"
                width="95%"
                height="18%"
                src={flecha}
                alt="flecha "
                className={classes.flecha}
              />

              <Grid item xs={8} md={6}>
                <ReactPlayer
                  url="https://skyviewagrosuper.com/videos/nuestra_historia/Video%20Intro%20Historia.mp4"
                  width="100%"
                  height="AUTO"
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
                    width="70%"
                    src={timelineIcon}
                    alt="timeline "
                  />
                </RouterLink>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </BorderWrapper>
    </div>
  );
};

export default Historia;
