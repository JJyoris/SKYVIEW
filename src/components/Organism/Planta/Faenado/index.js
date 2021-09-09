import React from "react";
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import FaenadoImg from "../../../../assets/slide-2.png";
import ReactPlayer from "react-player";
import BorderWrapper from "../../../Atoms/BorderWrapper";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "auto",
  },
  image: {
    width: "100%",
    height: "35vh",
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

const Faenado = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BorderWrapper borderColor='#f96f5a'>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop={5}
      >
        <Box width="90%" minWidth={200}>
          <Grid container direction="row" spacing={5}>
            <Grid
              item
              xs={12}
              md={6}
              justifyContent="center"
              alignItems="center"
            >
              <ReactPlayer
                url="https://www.youtube.com/watch?v=nyuMFyOzWZA"
                width="700px"
                height="470px"
                className={classes.video}
                config={{
                  youtube: {
                    playerVars: { controls: 2 },
                  },
                }}
              />
            </Grid>
            <Grid item md={1}></Grid>
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
                    src={FaenadoImg}
                    alt="faenado"
                    className={classes.image}
                  />
                  <Typography variant="h5" align="center">
                    Área de Faenado
                  </Typography>
                  <Typography variant="h4" align="center" gutterBottom>
                    Explicación de nuestros procesos actuales
                  </Typography>
                </Grid>

                <Grid item></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
      </BorderWrapper>
    </div>
  );
};

export default Faenado;
