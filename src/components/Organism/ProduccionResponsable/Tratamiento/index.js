import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { ArrowLeft } from "@material-ui/icons";
import React from "react";
import ReactPlayer from "react-player";
import AreaPicture from "../../../../assets/foto_PR.png";
import BorderWrapper from "../../../Atoms/BorderWrapper";


const useStyles = makeStyles((theme) => ({

  background: {
    height: "70vh",
  },
  video: {
    borderRadius: 20,
    overflow: "hidden",

  },
  gridContainer: {
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      
    },
  },
  tittle: {
    fontSize: 24,
    color:"#728292"
  },
  subtitle: {
    fontSize: 18,
    textAlign: "left",
    color:"#728292",
    marginTop:"10px",
    lineHeight:"1.5",
  },
 
}));

const ProcesosTratamiento = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BorderWrapper background={AreaPicture} borderColor='#34b29a'>
        <Box
          className={classes.background}
          width='100%'
          display='flex'
          justifyContent='center'
          alignItems='center'
          textAlign='center'
        >
          <Box width="80%" minWidth={200}>
            
              <Grid item xs={12} md={6}>
                <Grid
                  container
                  direction="column"
                  spacing={5}
                  justifyContent="center"
                  alignItems="center"
                  className={classes.gridContainer}
                >
                  <ReactPlayer
                    url="https://skyviewagrosuper.com/videos/produccion_responsable/ProduccionResponsable.mp4"
                    width="100%"
                    height="auto"
                    
                    className={classes.video}
                    controls
                  />
                  <Typography variant="h4" align="center" gutterBottom  className={classes.subtitle}>
                    Nuestro objetico es fomentar el cuidado del medio ambiente y el usto eficiente de los recursos naturales. Incorporamos la mejor tecnología para cumplir con los más altos estándares y continuar produciendo de manera sustentable.
                  </Typography>
              </Grid>
              
              
              
            </Grid>
          </Box>
        </Box>
      </BorderWrapper>
    </div>
  );
};

export default ProcesosTratamiento;
