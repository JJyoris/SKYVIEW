import React from "react";
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import ProtocolosImg from "../../../../assets/slide-1.png";
import ReactPlayer from "react-player";
import BorderWrapper from "../../../Atoms/BorderWrapper";

const useStyles = makeStyles((theme) => ({
  root: {
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
  tittle: {
    fontSize: 35,
  },
}));

const Protocolos = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BorderWrapper borderColor="#f96f5a">
        <Box
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box width="90%" minWidth={200}>
            <Grid
              container
              direction="row"
              spacing={5}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} md={4}>
                <Grid
                  container
                  direction="column"
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                  className={classes.gridContainer}
                >
                  <Grid item>
                    <Typography
                      variant="h5"
                      align="center"
                      gutterBottom
                      className={classes.tittle}
                    >
                      Protocolos de Higiene
                    </Typography>
                    <Typography variant="h4" align="center" gutterBottom>
                      Al ingresar se cumplen medidas estrictas de seguridad
                    </Typography>
                  </Grid>
                  <Grid item>
                    <img
                      className={classes.image}
                      src={ProtocolosImg}
                      alt="protocolos"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={8}>
                <Grid item xs={12} justifyContent="center" alignItems="center">
                  <ReactPlayer
                    url="https://skyviewagrosuper.com/videos/plantas_industriales/Agrosuper%20-%20Medidas%20de%20Seguridad%20FHD_V05.mp4"
                    width="100%"
                    height="100%"
                    className={classes.video}
                    controls
                  />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </BorderWrapper>
    </div>
  );
};

export default Protocolos;
