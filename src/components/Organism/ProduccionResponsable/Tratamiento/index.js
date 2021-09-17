import React from "react";
import { makeStyles, Box, Grid, Typography } from "@material-ui/core";
import ReactPlayer from "react-player";
import BorderWrapper from "../../../Atoms/BorderWrapper";
import CircleArea from "../../../Atoms/CircleArea";
import { ReactComponent as PRIcon1 } from "../../../../assets/PR-icn1.svg";
import { ReactComponent as PRIcon2 } from "../../../../assets/PR-icn2.svg";
import { ReactComponent as PRIcon3 } from "../../../../assets/PR-icn3.svg";
import { ReactComponent as PRIcon4 } from "../../../../assets/PR-icn4.svg";
import { ReactComponent as PRIcon5 } from "../../../../assets/PR-icn5.svg";
import { ReactComponent as PRIcon6 } from "../../../../assets/PR-icn6.svg";
import { ReactComponent as PRIcon7 } from "../../../../assets/PR-icn7.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",
  },
  background: {
    height: "70vh",
  },
  video: {
    borderRadius: 20,
    overflow: "hidden",
  },
}));

const ProcesosTratamiento = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BorderWrapper borderColor='#34b29a'>
        <Box
          width='100%'
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Box width='100%' minWidth={400}>
            <Grid container direction='row' spacing={1}>
              <Grid
                item
                xs={12}
                md={6}
                justifyContent='center'
                alignItems='center'
              >
                <ReactPlayer
                  url='https://www.youtube.com/watch?v=nyuMFyOzWZA'
                  width='700px'
                  height='470px'
                  className={classes.video}
                  config={{
                    youtube: {
                      playerVars: { controls: 2 },
                    },
                  }}
                />
              </Grid>

              <Grid item md={6} container justifyContent='center' spacing={2}>
                <Grid item>
                  <Typography variant='h5' align='center'>
                    Impacto positivo en el entorno
                  </Typography>
                  <Typography variant='h4' align='center' gutterBottom>
                    gracias a diferentes procesos de tratamiento
                  </Typography>
                </Grid>
                <Grid item container direction='column' justifyContent="center" alignItems="center"  md={4}>
                  <CircleArea Icon={PRIcon1} backgroundColor='#ED7422' small />
                  <Typography variant='h2' gutterBottom>
                    Gestion de Olores
                  </Typography>
                </Grid>
                <Grid item container direction='column' justifyContent="center" alignItems="center" md={4}>
                  <CircleArea Icon={PRIcon2} backgroundColor='#F96F5A' small />
                  <Typography variant='h2' gutterBottom>
                    Huella de Carbono
                  </Typography>
                </Grid>
                <Grid item container direction='column' justifyContent="center" alignItems="center" md={4}>
                  <CircleArea Icon={PRIcon3} backgroundColor='#3B65CC' small />
                  <Typography variant='h2' gutterBottom>
                    Eficiencia Energetica
                  </Typography>
                </Grid>

                <Grid item>
                  <Grid item container direction='column'>
                    <div
                      style={{
                        backgroundColor: "#BF71B850",
                        borderRadius: 130,
                        padding: 5,
                      }}
                    >
                      <CircleArea
                        Icon={PRIcon4}
                        backgroundColor='#BF71B8'
                        small
                      />
                      <Typography variant='h2' align='center' gutterBottom>
                        Mejoramiento
                      </Typography>
                      <Typography variant='h2' align='center' gutterBottom>
                        de Suelos
                      </Typography>
                      <Box
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                      >
                        <CircleArea
                          Icon={PRIcon6}
                          backgroundColor='#BF71B8'
                          extraSmall
                        />
                      </Box>
                    </div>
                    <Typography variant='h2' align='center' gutterBottom>
                      Biocarbono
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item>
                  <Grid item container direction='column'>
                    <div
                      style={{
                        backgroundColor: "#746fbd50",
                        borderRadius: 130,
                        padding: 5,
                      }}
                    >
                      <CircleArea
                        Icon={PRIcon5}
                        backgroundColor='#746FBD'
                        small
                      />
                      <Typography align='center' variant='h2' gutterBottom>
                        Reutilizacion
                      </Typography>
                      <Typography align='center' variant='h2' gutterBottom>
                        de Agua
                      </Typography>
                      <Box
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                      >
                        <CircleArea
                          Icon={PRIcon7}
                          backgroundColor='#746FBD'
                          extraSmall
                        />
                      </Box>
                    </div>
                    <Typography variant='h2' align='center' gutterBottom>
                      Limpieza y Riego
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </BorderWrapper>
    </div>
  );
};

export default ProcesosTratamiento;
