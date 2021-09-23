import React from "react";
import { makeStyles, Grid, Box, Typography , Button, Link } from "@material-ui/core";

import IlustrationImg from "../../../assets/ilustracion.png";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 50,
    height: 'auto'
  },
  image: {
    maxWidth: "100%",
    height: "auto",
  },
  title: {
    fontSize: 30,
    color: theme.palette.text.button,
  },
  subtitle: {
    fontSize: 24,
  },
  gridContainer: {
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: 'center'
    },
  },
}));
const Scheduler = () => {
  const classes = useStyles();
  return (
    <div id='agenda' className={classes.root}>
      <Box
        width='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Box width='80%' minWidth={200}>
          <Grid container direction='row' spacing={1}
                          justifyContent="center"
                          alignItems="center">
            <Grid item xs={12} md={5}>
              <Grid
                container
                direction='column'
                spacing={5}
                className={classes.gridContainer}

              >
                <Grid item>
                  <Typography
                    align='start'
                    variant='h5'
                    className={classes.title}
                  >
                    AGENDA UNA VISITA
                  </Typography>
                  <Typography
                    align='start'
                    variant='h3'
                    className={classes.subtitle}
                    gutterBottom
                  >
                    GUIADA A NUESTRO MUNDO AS
                  </Typography>
                  <Typography align='start' variant='h1'>
                    <Box lineHeight={1.5}>
                    Disfruta la experiencia Skyview virtual.
                    </Box>
                  </Typography>
                  <Typography align='start' variant='h1' >
                    <Box lineHeight={1.5} marginTop="5px">
                    Agenda aquí tu visita y una coordinadora guía te conducirá en un recorrido personalizado, donde te acompañará y responderá todas tus preguntas.
                    </Box>
                  </Typography>
                </Grid>

                <Grid item>
                <Button

                variant='contained' 
                color='primary'
                href="https://agendamiento.reservo.cl/makereserva/agenda/K0iTaWC0V09YBW8N2D13cda664C3UM"
                target="_blank"
                rel="noopener"
                rel="noreferrer"> 
                AGENDAR
                </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={0} md={1}></Grid>
            <Grid item xs={12} md={6}>
              <img
                src={IlustrationImg}
                alt='Imagen agenda'
                className={classes.image}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Scheduler;
