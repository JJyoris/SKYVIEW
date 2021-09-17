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
          <Grid container spacing={1} item>
            <Grid item xs={4}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=nyuMFyOzWZA"
                width="100%"
                config={{
                  youtube: {
                    playerVars: { controls: 2 },
                  },
                }}
              />
            </Grid>
            <Grid item xs={5} container direction="column">
              <Typography variant="h5" className={classes.tittle}>
                Súper Sano
              </Typography>
              <Typography variant="h1">
                {" "}
                <Box lineHeight={2}>
                  La educación es una preocupación central para nuestra empresa,
                  por lo cual el año 2002 creamos el Colegio Los Cipreses a
                  través de la Fundación Agrosuper.{" "}
                </Box>{" "}
              </Typography>
              <img src={superSano} alt="Super sano" tittle="Super Sano" />
            </Grid>
            <Grid item xs={3}>
              <img
                src={disminucion}
                alt="Disminucion de calorias"
                tittle="Disminucion de calorias"
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </BorderWrapper>
  );
};

export default VidaEquilibrada;
