import React from "react";
import BorderWrapper from "../../../Atoms/BorderWrapper";
import { Grid, Typography, makeStyles, Box } from "@material-ui/core";
import ReactPlayer from "react-player";
import colegioLosCipres from "../../../../assets/colegio_loscipreses.png";
import promedio from "../../../../assets/promedio_ptu.png";
const useStyles = makeStyles((theme) => ({
  tittle: {
    fontSize: 25,
    color: "#d98a08",
  },
  grid: {
    height: "100%",
  },
  line: {
    height: 300,
    width: "80%",
    background: "linear-gradient(to right, #edd19b, #FFF)",
    position: "absolute",
    marginTop:90,
    borderRadius:50,
    zIndex: -1,
  },
  video: {
    borderRadius: 20,
    overflow: "hidden",
  },
}));

const Educacion = () => {
  const classes = useStyles();
  return (
    <BorderWrapper borderColor="#459fc7">
      <Box height="100%">
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
          className={classes.grid}
        >
             <div className={classes.line}> </div>
          <Grid container spacing={1} item>
            <Grid item xs={4}>
              <ReactPlayer
                url="https://youtu.be/AUWHOaA2irs"
                width="100%"

                loop={true}
                playing={true}
                className={classes.video}
              />
            </Grid>
            <Grid item xs={5} container direction="column">
              <Typography variant="h5" className={classes.tittle}>
                Colegio Los Cipreses
              </Typography>
              <Typography variant="h1" >
                {" "}
                <Box lineHeight={1.5} >
                  {" "}
                  La educación es una preocupación central para nuestra empresa,
                  por lo cual el año 2002 creamos el Colegio Los Cipreses a
                  través de la Fundación Agrosuper.{" "}
                </Box>{" "}
              </Typography>
              <img
                src={colegioLosCipres}
                alt="Colegio los Cipreses"
                tittle="Colegio Los Cipreses"
                width="110%"
              />
            </Grid>
            <Grid item xs={3}>
              <img src={promedio} alt="Promedio PTU" tittle="Promedio PTU"  width="100%" />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </BorderWrapper>
  );
};

export default Educacion;
