import React from "react";
import { makeStyles, Grid, Typography, Box } from "@material-ui/core";
import NavCard from "../../Atoms/NavCard";
import comunidad from "../../../assets/btn-comunidad.png";
import historia from "../../../assets/btn-nuestra_historia.png";
import crianza from "../../../assets/btn-nuestras_granjas.png";
import faenadora from "../../../assets//btn-plantas_industriales.png";
import produccion from "../../../assets/btn-producción_responsable.png";
import oficinaCentral from "../../../assets/btn-oficina_central.png";

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
}));

const MundoSection = () => {
  const classes = useStyles();
  return (
    <div id='mundo-as' className={classes.root}>
      <Box
        width='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Box width='80%' minWidth={300}>
          <Grid
            container
            spacing={0}
            justifyContent='center'
            direction='row'
            alignItems='center'
          >
            <Box m={3}>
              <Typography align="center" variant='h3'>
                Descubre nuestros procesos navegando en nuestro mundo
              </Typography>
            </Box>
            <Grid container spacing={4} item xs={12}>
              <Grid item lg={2} md={4} sm={6} xs={12}>
                <NavCard image={historia} tittle='Historia' link='/historia' />
              </Grid>
              <Grid item lg={2} md={4} sm={6} xs={12}>
                <NavCard
                  image={oficinaCentral}
                  tittle='Oficina '
                  subtittle='Central'
                  link='/oficina'
                />
              </Grid>
              <Grid item lg={2} md={4} sm={6} xs={12}>
                <NavCard
                  image={crianza}
                  tittle='Plantas '
                  subtittle='Crianza'
                  link='/granja'
                />
              </Grid>
              <Grid item lg={2} md={4} sm={6} xs={12}>
                <NavCard
                  image={faenadora}
                  tittle='Plantas '
                  subtittle='Faenadora'
                  link='/planta'
                />
              </Grid>
              <Grid item lg={2} md={4} sm={6} xs={12}>
                <NavCard
                  image={produccion}
                  tittle='Produccion Responsable'
                  subtittle=''
                  link='/produccion'
                />
              </Grid>
              <Grid item lg={2} md={4} sm={6} xs={12}>
                <NavCard
                  image={comunidad}
                  tittle='Comunidad'
                  link='/comunidad'
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default MundoSection;
