import { Grid, makeStyles, Box } from "@material-ui/core";
import React from "react";
import ReactPlayer from "react-player";
import alimentacion from "../../../assets/Alimentacion.png";
import cuidados from "../../../assets/Cuidados.png";
import BorderWrapper from "../../Atoms/BorderWrapper"

const useStyles = makeStyles((theme) => ({
  // root: {
    
  //   height: "auto",
  // },
  image: {
    maxWidth: 400,
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

const Granja = () => {
  const classes = useStyles();
  return (
    <div id="granja" className={classes.root}>
      <BorderWrapper borderColor='#b8de6a'> 
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop={15}
      >
        <Box width="80%" minWidth={200}>
          <Grid container direction="row" spacing={0}>
            <Grid item xs={12} md={5}>
              <Grid
                container
                direction="column"
                spacing={5}
                justifyContent="center"
                alignItems="center"
                className={classes.gridContainer}
              >
                <Grid item>
                  <img
                    src={alimentacion}
                    alt="alimentacion"
                    className={classes.image}
                  />
                </Grid>

                <Grid item>
                  <img
                    src={cuidados}
                    alt="cuidados"
                    className={classes.image}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              justifyContent="center"
              alignItems="center"
            >
              <ReactPlayer
                url="https://skyviewagrosuper.com/videos/nuestras_granjas/Testimonial%20Noelia%20AS_17082021%20(1).mp4"
                width="700px"
                height="470px"
                className={classes.video}
                controls
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      </BorderWrapper> 
    </div>
  );
};

export default Granja;
