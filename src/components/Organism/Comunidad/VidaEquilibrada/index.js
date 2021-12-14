import BorderWrapper from "../../../Atoms/BorderWrapper";
import { Grid, Typography, makeStyles, Box } from "@material-ui/core";
import ReactPlayer from "react-player";
import superSano from "../../../../assets/super_sano.png";
import disminucion from "../../../../assets/disminucion_calorias.png";
import zIndex from "@material-ui/core/styles/zIndex";
const useStyles = makeStyles((theme) => ({
  tittle: {
    fontSize: 25,
    color: "#08ba32",
  },
  tittle2: {
    fontSize: 14,
    color: "#728292",
  },
  grid: {
    height: "100%",
  },
  line: {
    height: 300,
    width: "80%",
    background: "linear-gradient(to right, #a2e5b3, #FFF)",
    position: "absolute",
    marginTop:90,
    borderRadius:50,
    zIndex: -1,
  },
  video:{
    borderRadius: 20,
    overflow: "hidden",
  },
}));

const VidaEquilibrada = () => {
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
          <Grid container spacing={3} item>
            <Grid item xs={4}>
              <ReactPlayer
                url="https://skyviewagrosuper.com/videos/comunidad/Super%20Sano%20Baja.mp4"
                width="100%"
                loop={true}
                playing={true}
                className={classes.video}
              />
            </Grid>
            <Grid item xs={5} container direction="column">
            <Typography variant="h5" className={classes.tittle2}>
                Vida Saludable
              </Typography>
              <Typography variant="h5" className={classes.tittle}>
                Súper Sano
              </Typography>
              <Typography variant="h1">
                {" "}
                <Box lineHeight={1.5} marginBottom={1.5}>
                Programa que fomenta la alimentación equilibrada y
la actividad física en niños de primero a cuarto básico,
profesores y apoderados.{" "}
                </Box>{" "}
              </Typography>
              <img src={superSano} alt="Super sano" tittle="Super Sano" width="110%" />
            </Grid>
            <Grid item xs={3}>
              <img
                src={disminucion}
                alt="Disminucion de calorias"
                tittle="Disminucion de calorias"
                width="100%"
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </BorderWrapper>
  );
};

export default VidaEquilibrada;
