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
    zIndex:-1,
    width:"80%",
    height: "auto",
  },
  title: {
    color: theme.palette.text.button,
    fontSize: 25,
  },
  subtitle: {
    fontSize: 22,
    color: theme.palette.text.button,
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
      <BorderWrapper borderColor='#774a4b'>
      <Box
        width='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
        height="100%"
      
      >
        <Box width='90%' minWidth={200}  >
          <Grid container direction='row' spacing={5} justifyContent="center" alignItems="center">
            <Grid
              item
              xs={12}
              md={6}

            >
              <Typography variant='h3' align='start' className={classes.title}>
                SIGAS: Sistema Integrado de Gestión
              </Typography>
              <Typography variant='h4' align='start' className={classes.subtitle} gutterBottom>
                que toma las mejores prácticas de distintas normas.
              </Typography>
              
              <ReactPlayer
              // Disable download button
              config={{ file: { attributes: { controlsList: 'nodownload' } } }}

              // Disable right click
              onContextMenu={e => e.preventDefault()}
                url='http://skyviewagrosuper.com/videos/plantas_industriales/SIGAS_reduccion.mp4'
                width='100%'
                height="auto"
                
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
                  
                  <img src={SigasImg} alt='Sigas' className={classes.image} />
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
