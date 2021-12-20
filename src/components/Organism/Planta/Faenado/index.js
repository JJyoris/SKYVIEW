import React from "react";
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import FaenadoImg from "../../../../assets/slide-2.png";
import ReactPlayer from "react-player";
import BorderWrapper from "../../../Atoms/BorderWrapper";
import LineasDeProduccion from "../../../Molecules/LineasDeProduccion";

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
  tittle2: {
    marginTop:"10px",
    fontSize: 20,
    color: "#ee7623",
  },
  subtitle: {
    fontSize: 20,
  },
  gridContainer: {
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
      display:"flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  video: {
    borderRadius: 20,
    marginTop:"40px",
    overflow: "hidden",
  },
  border: {
    padding: "10px",
    border:"1px solid",
    borderRadius: 50,
    borderColor:"#ee7623",
    overflow: "hidden",
  },
  abajo: {
    display:"wrap",
    direction:"row",
    justifyContent:"center",
    alignItems:"center",
  },
}));

const Faenado = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BorderWrapper borderColor='#774a4b'>
      <Box
        width="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
       

      >
        <Box width="100%" minWidth={200}>
          <Grid container direction="row" >
            <Grid
              item
              xs={12}
              md={7}
              display="flex"
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
                  <div className={classes.abajo}> 
                  <Typography variant="h5" align="center" className={classes.tittle}>
                    Área de Faenado
                  </Typography>
                  <Typography variant="h4" align="center" gutterBottom  className={classes.subtitle}>
                    Explicación de nuestros actuales procesos
                  </Typography>
                  </div>
                   <Grid
                    item
                    container
                    direction='row'
                    justifyContent='center'
                    
                    // alignItems='center'
                    md={12}
                    >  
                    <div className={classes.border}> 
                  <LineasDeProduccion /> </div>
                  </Grid>
                  <Typography variant="h5" align="center" className={classes.tittle2}>
                    Líneas de Producción
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
