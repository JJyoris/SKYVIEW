import React from "react";
import { makeStyles, Grid, Box, Typography , Button } from "@material-ui/core";

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
    color: theme.palette.text.button,
  },
  subtitle: {
    fontSize: 28,
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
                  <Typography align='start' variant='h1' gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vitae elit ornare, mollis turpis fringilla, gravida
                    sem. Phasellus id efficitur risus, nec imperdiet ipsum.
                    Fusce aliquet sem quam, ac commodo ex sagittis id. Ut diam
                    diam, luctus vel sapien vitae, pulvinar lacinia ipsum. Cras
                    eu neque a lorem placerat rhoncus nec convallis nisi.
                  </Typography>
                </Grid>

                <Grid item>
                <Button variant='contained' color='primary'>
                  Agendar
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
