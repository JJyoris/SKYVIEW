import React from "react";
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import SigasImg from "../../../../assets/img-2.png";
import ReactPlayer from "react-player";
import BorderWrapper from "../../../Atoms/BorderWrapper";
import SigasLogo from '../../../../assets/logo-SIGAS.png'

const useStyles = makeStyles((theme) => ({
  root: {

    height: "auto",
  },
  image: {
   
    height: "65vh",
  },
  title: {
    color: theme.palette.text.button,
    fontSize: 25,
  },
  subtitle: {
    fontSize: 28,
  },
  gridContainer: {
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  video: {
    borderRadius: 20,
    overflow: "hidden",
  },
  logo: {
    width: 200,

  }
}));

const Sigas = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BorderWrapper borderColor='#f96f5a'>
      <Box
        width='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
        marginTop={1}
      >
        <Box width='90%' minWidth={200}>
          <Grid container direction='row' spacing={0}>
            <Grid
              item
              xs={12}
              md={6}
              justifyContent='center'
              alignItems='center'
            >
              <Typography variant='h3' align='start' className={classes.title}>
                Sistema integrado propio de Agrosuper
              </Typography>
              <Typography variant='h4' align='start' className={classes.title} gutterBottom>
                que toma las mejores prácticas de distintas formas.
              </Typography>
              <ReactPlayer
                url='http://skyviewagrosuper.com/videos/plantas_industriales/SIGAS_ON2.mp4'
                width='700px'
                height='auto'
                className={classes.video}
                controls
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <Grid
                container
                direction='column'
                spacing={5}
                justifyContent='center'
                alignItems='center'
                className={classes.gridContainer}
              >
                <Grid container item justifyContent="flex-end">
                  <Box component="img" src={SigasLogo} alt="Sigas Logo" justifyContent="flex-end" width="200px" />
                  {/* <img src={SigasLogo} alt="Sigas" className={classes.logo} /> */}
                  <img src={SigasImg} alt='Sigas' className={classes.image} />
                </Grid>

                <Grid item>
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

export default Sigas;
