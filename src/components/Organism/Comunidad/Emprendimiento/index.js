import { Grid, Typography, makeStyles, Box } from "@material-ui/core";
import React from "react";
import ReactPlayer from "react-player";
import BorderWrapper from "../../../Atoms/BorderWrapper";
import fondoVecino from "../../../../assets/fondo_vecino.png";
import capitalEmprendedor from "../../../../assets/capital_emprendedor.png";
const useStyles = makeStyles((theme) => ({
  tittleFondo: {
    textAlign: "center",
    fontSize: 23,
    color: "#04baaa",
  },
  tittleCapital: {
    color: "#2e58a6",
    textAlign: "center",
    fontSize: 23,
  },
  video: {
    borderRadius: 20,
    overflow: "hidden",
  },
}));

const Emprendimiento = () => {
  const classes = useStyles();
  return (
    <BorderWrapper borderColor="#459fc7">
      
      <Box
        width="100%"
        display="flex"
        height="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Grid container direction="column" spacing={4}>
          <Grid
            container
            item
            spacing={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={10}>
              <Typography className={classes.tittleFondo} variant="h5">
                Fondo Vecino{" "}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <ReactPlayer
                // Disable download button
                config={{ file: { attributes: { controlsList: 'nodownload' } } }}

                // Disable right click
                onContextMenu={e => e.preventDefault()}
                
                url="https://skyviewagrosuper.com/videos/comunidad/Fondo%20Vecino%20BAJA.mp4"
                width="100%"
                height="auto"
                loop={true}
                playing={true}
                className={classes.video}
              />
            </Grid>
            <Grid
              item
              xs={6}
              container
              item
              alignItems="center"
              justifyContent="center"
            >
              <img
                src={fondoVecino}
                alt="Fondo vecino"
                tittle="Fondo Vecino"
                width="100%"
              />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={0}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={10}>
              <Typography className={classes.tittleCapital} variant="h5">
                Capital Emprendedor{" "}
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              container
              alignItems="center"
              justifyContent="center"
            >
              <img
                src={capitalEmprendedor}
                alt="Capital Emprendedor"
                tittle="Capital Emprendedor"
                width="100%"
              />
            </Grid>
            <Grid item xs={4}>
              <ReactPlayer
                url="https://skyviewagrosuper.com/videos/comunidad/Capital%20Emprendedor%20BAJA.mp4"
                width="100%"
                height="auto"
                loop={true}
                playing={true}
                className={classes.video}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </BorderWrapper>
  );
};

export default Emprendimiento;
