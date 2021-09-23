import React from "react";
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import FaenadoImg from "../../../../assets/slide-2.png";
import ReactPlayer from "react-player";
import BorderWrapper from "../../../Atoms/BorderWrapper";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "auto",
  },
  image: {
    width: "70%",
    height: "auto",
  },
  tittle: {
    
    fontSize: 35,
  },
  subtitle: {
    fontSize: 20,
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
}));

const Faenado = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BorderWrapper borderColor='#f96f5a'>
      <Box
        width="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
       

      >
        <Box width="90%" minWidth={200}>
          <Grid container direction="row" spacing={5}>
            <Grid
              item
              xs={12}
              md={6}
              justifyContent="center"
              alignItems="center"
            
            >
              <ReactPlayer
                url="https://skyviewagrosuper.com/videos/plantas_industriales/Multimedia1%20Faena.mp4"
                width="100%"
                height="auto"
                className={classes.video}
                controls
              />
            </Grid>
            <Grid item md={1}></Grid>
            <Grid item xs={12} md={5} container                 justifyContent="center"
                alignItems="center" >
              <Grid
                container
                direction="column"
                spacing={5}

                className={classes.gridContainer}
              >
                <Grid item container justifyContent="center" >
                  <img 
                    src={FaenadoImg}
                    alt="faenado"
                    className={classes.image}
                  />
                  <Typography variant="h5" align="center" className={classes.tittle}>
                    Área de Faenado
                  </Typography>
                  <Typography variant="h4" align="center" gutterBottom  className={classes.subtitle}>
                    Explicación de nuestros procesos actuales
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

export default Faenado;
