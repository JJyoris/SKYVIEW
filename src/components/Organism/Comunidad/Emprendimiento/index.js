import { Grid,  Typography, makeStyles } from "@material-ui/core";
import React from "react";
import ReactPlayer from "react-player";
import BorderWrapper from "../../../Atoms/BorderWrapper";
import fondoVecino from "../../../../assets/fondo_vecino.png";
import capitalEmprendedor from "../../../../assets/capital_emprendedor.png"
const useStyles = makeStyles((theme) => ({
    tittleFondo:{
        textAlign: 'center',
        fontSize: 23, 
        color:"#04baaa"
    },
    tittleCapital:{
       color: "#2e58a6",
       textAlign: 'center',
       fontSize: 23,
    }

  }));

const Emprendimiento = () => {
    const classes = useStyles();
  return (
    <BorderWrapper borderColor="#459fc7">
      <Grid container direction="column"  justifyContent="center"
      alignItems="center" spacing={3} >
      <Grid container item spacing={0}>
        <Grid item xs={12}>
          <Typography className={classes.tittleFondo} variant='h5'>Fondo Vecino </Typography>
        </Grid>
        <Grid item xs={5}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=nyuMFyOzWZA"
            width="100%"
            height="300px"
            config={{
              youtube: {
                playerVars: { controls: 2 },
              },
            }}
          />
        </Grid>
        <Grid item xs={7} container  item alignItems="center" justifyContent="center" >
          <img src={fondoVecino} alt="Fondo vecino" tittle="Fondo Vecino"  width="100%"/>
        </Grid>
         </Grid>

        <Grid container spacing={0}>
        <Grid item xs={12}>
          <Typography className={classes.tittleCapital} variant='h5' >Capital Emprendedor </Typography>
        </Grid>
        <Grid item xs={7} container alignItems="center" justifyContent="center" >
          <img src={capitalEmprendedor} alt="Capital Emprendedor" tittle="Capital Emprendedor"  width="100%"/>
        </Grid>
        <Grid item xs={5}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=nyuMFyOzWZA"
            width="100%"
            height="300px"
            config={{
              youtube: {
                playerVars: { controls: 2 },
              },
            }}
          />
        </Grid>

         </Grid>
         </Grid>  

     
    </BorderWrapper>
  );
};

export default Emprendimiento;
