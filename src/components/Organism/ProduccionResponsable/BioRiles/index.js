import React from "react";
import {
  makeStyles,
  Grid,
  Box,
  Typography,

} from "@material-ui/core";
import BorderWrapper from "../../../Atoms/BorderWrapper";
import { ReactComponent as IconPR8 } from "../../../../assets/PR-icn8.svg";
import { ReactComponent as IconPR9 } from "../../../../assets/PR-icn9.svg";
import { ReactComponent as IconPR10 } from "../../../../assets/PR-icn10.svg";
import ProduccionResponsableFooter from "../../../Molecules/ProduccionResponsableFooter";
import ReactPlayer from "react-player";
const useStyles = makeStyles((theme) => ({

  background: {
    height: "70vh",
  },
  video: {
    overflow: "hidden",
  },
  itemContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 30,
  },
  videoContainer: {
    boxShadow:
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  },
  text:{
    fontSize:14
  }
}));

const BioRiles = () => {
  const classes = useStyles();
  return (
    <div >
      <BorderWrapper borderColor='#34b29a'>
        <Box
          width='100%'
          height="100%"
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Box width='90%' minWidth={400}>
            <Grid
              container
              spacing={0}
              direction='row'
              justifyContent='center'
              alignItems='center'
            >
              <Grid
                item
                md={4}
                container
                direction='column'
                justifyContent='center'
                alignItems='center'
              >
                <div
                  className={classes.itemContainer}
                  style={{
                    width: 300,
                    height: "100%",
                    backgroundColor: "#F5E8D2",
                    padding: 10,
                  }}
                >
                
                  <IconPR8 style={{ width: 80 }} />
                  <Typography variant='h3' align='center' gutterBottom>
                    Bioestabilizado
                  </Typography>
                  <div className={classes.videoContainer}>
                    {" "}
                    <ReactPlayer
                      url='https://skyviewagrosuper.com/videos/produccion_responsable/BIOESTABILIZADO%20BAJA.mp4'
                      width='25%'
                      height='25%'
                      className={classes.video}
                      playing
                      loop
                    />
                  </div>

                  <Typography align='start' variant='h1' className={classes.text}>
                    <Box lineHeight={1.5} marginTop={2} marginBottom={4}>
                      Es un tipo de enmienda orgánica, que beneficia el sistema suelo-planta.
                      La mejora de las propiedades físicas del suelo favorece el desarrollo de la cubierta vegetal,
                      evitando la erosión y reactivando la actividad microbiana.
                    </Box>
                  </Typography>
                </div>
              </Grid>
              <Grid
                item
                md={4}
                container
                direction='column'
                justifyContent='center'
                alignItems='center'
              >
                <div
                  className={classes.itemContainer}
                  style={{
                    width: 300,
                    height: "100%",
                    backgroundColor: "#A2E7F7",
                    padding: 10,
                  }}
                >
                  
                  <IconPR9 style={{ width: 80 }} />
                  <Typography variant='h3' align='center' gutterBottom>
                    Riles
                  </Typography>
                  <div className={classes.videoContainer}>
                    <ReactPlayer
                      url='https://skyviewagrosuper.com/videos/produccion_responsable/RILES%20BAJA.mp4'
                      width='auto'
                      height='190px'
                      className={classes.video}
                      playing
                      loop
                    />
                  </div>
                  <Typography align='start' variant='h1'>
                    <Box lineHeight={1.5} marginTop={2} marginBottom={2} className={classes.text}>
                    Los Residuos Industriales Líquidos, también conocidos como Riles,
                    son aguas de desecho resultantes del proceso, actividad o los servicios de las industrias,
                    y que pueden traer consigo altas concentraciones de elementos contaminantes.
                    </Box>
                  </Typography>
                </div>
              </Grid>
              <Grid
                item
                md={4}
                container
                direction='column'
                justifyContent='center'
                alignItems='center'
              >
                <div
                  className={classes.itemContainer}
                  style={{
                    width: 300,
                    height: "100%",
                    backgroundColor: "#FADCCF",
                    padding: 10,
                  }}
                >
                  
                  <IconPR10 style={{ width: 80 }} />
                  <Typography variant='h3' align='center' gutterBottom>
                    Biomasa
                  </Typography>
                  <div className={classes.videoContainer}>
                    <ReactPlayer
                      url='https://skyviewagrosuper.com/videos/produccion_responsable/BIOMASA%20BAJA.mp4'
                      width='auto'
                      height='190px'
                      className={classes.video}
                      playing
                      loop
                    />
                  </div>
                  <Typography align='start' variant='h1'>
                    <Box lineHeight={1.5} marginTop={2} className={classes.text}>
                    La biomasa es el subproducto o residuo generado en las actividad agroalimentaria con potencial energético.
                    Esa energía química queda almacenada en forma de materia orgánica; y puede recuperarse quemándola
                    directamente o transformándola en combustible.
                    </Box>
                  </Typography>
                </div>
              </Grid>
              <Grid
                item
                container
                direction='row'
                justifyContent='center'
                
                // alignItems='center'
                md={12}
              >
                <ProduccionResponsableFooter />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </BorderWrapper>
    </div>
  );
};

export default BioRiles;
