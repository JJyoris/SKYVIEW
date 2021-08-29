import React from "react";
import { makeStyles, Grid, Typography, Box } from "@material-ui/core";
import NavCard from "../../Atoms/Card";
import comunidad from "../../../assets/icn_comunidad.png";
import historia from "../../../assets/icn_historia.png";
import crianza from "../../../assets/icn_plantacrianza.png";
import faenadora from "../../../assets/icn_plantafaenadora.png";
import produccion from "../../../assets/icn_produccionresponsable.png";
import oficinaCentral from "../../../assets/icn_oficentral.png";

const useStyles = makeStyles((theme) => ({
  root: {
   
    paddingLeft: 100,
    paddingRight: 100,
  },
}));

const MundoSection = () => {
  const classes = useStyles();
  return (
    <div id="mundo-as" className={classes.root}>
      <Grid
        container
        spacing={0}
        justifyContent="center"
        direction="row"
        alignItems="center"
      >
        <Box m={3}>
          <Typography variant="h3">
            {" "}
            Descubre nuestros procesos navegando en nuestro mundo{" "}
          </Typography>
        </Box>
        <Grid container spacing={4} item xs={12}>
          <Grid item lg={2} md={4} sm={6} xs={6}>
            <NavCard image={historia} tittle="Historia" />
          </Grid>
          <Grid item lg={2} md={4} sm={6} xs={6}>
            <NavCard
              image={oficinaCentral}
              tittle="Oficina"
              subtittle="Central"
            />
          </Grid>
          <Grid item lg={2} md={4} sm={6} xs={6}>
            <NavCard image={crianza} tittle="Plantas" subtittle="Crianza" />
          </Grid>
          <Grid item lg={2} md={4} sm={6} xs={6}>
            <NavCard
              image={faenadora}
              tittle="Plantas "
              subtittle="Faenadora"
            />
          </Grid>
          <Grid item lg={2} md={4} sm={6} xs={6}>
            <NavCard
              image={produccion}
              tittle="Produccion"
              subtittle="Responsable"
            />
          </Grid>
          <Grid item lg={2} md={4} sm={6} xs={6}>
            <NavCard image={comunidad} tittle="Comunidad" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MundoSection;
