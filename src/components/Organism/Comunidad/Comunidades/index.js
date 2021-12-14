import React from "react";
import BorderWrapper from "../../../Atoms/BorderWrapper";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import comunidades from "../../../../assets/comunidades.png"


const useStyles = makeStyles((theme) => ({
  grid: {
    width:"100%",
    height: "100%",
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    margin: "0 auto 0 auto",
  },

  tittle: {
    color: "#28396f",
    textAlign: "center",
    fontSize: 35,
  },
  subtittle: {
    color: "#d98a08",
    textAlign: "center",
    fontSize: 25,
    marginBottom: 20,
  },
  icontext: {
    
    fontSize: 13,
    marginLeft: 10,
  },
  icon: {
    width: 60,
    height: 60,
  },
  gridIcons: {
    marginBottom: 40,
  },
  video: {
    borderRadius: 20,
    overflow: "hidden",
  },
  line: {
    height: 300,
    width: "96.5%",
    background: "#728292",
    position: "absolute",
    margin: "0 auto 0 auto",
    zIndex: -1,
  },
}));

const Proposito = () => {
  const classes = useStyles();
  return (
    <BorderWrapper borderColor="#459fc7">
      <Box height="90%" width="100%" >
        
        <Grid container className={classes.grid} spacing={3} >
        <div className={classes.line} spacing={0}></div>
          <Grid className={classes.grid} item xs={4} container direction="column">
          
            <Typography variant="h1" >
              <Box lineHeight={2} textAlign="left" fontSize={15} color={"#fff"}  >
              Somos un equipo de profesionales comprometidos día a día en terreno. Para construir relaciones de confianza y transformarnos en puentes de comunicación con los vecinos y nuestras comunidades. 
              </Box>
            </Typography> 
          </Grid>

          <Grid item xs={8}>
            <img src={comunidades} atl="Comunidades" width="100%"></img>
          </Grid>
        </Grid>
      </Box>
    </BorderWrapper>
  );
};

export default Proposito;
