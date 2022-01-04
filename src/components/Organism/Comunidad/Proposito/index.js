import React from "react";
import BorderWrapper from "../../../Atoms/BorderWrapper";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import ReactPlayer from "react-player";
import alimentacion from "../../../../assets/img-lobueno.png"
// import icn1 from "../../../../assets/icn_1.png";
// import icn2 from  "../../../../assets/icn_2.png";
// import icn3 from  "../../../../assets/icn_3.png";

const useStyles = makeStyles((theme) => ({
  grid: {
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
}));

const Proposito = () => {
  const classes = useStyles();
  return (
    <BorderWrapper borderColor="#459fc7">
      <Box height="90%" width="90%" >
        <Grid container className={classes.grid}  spacing={5}>
          <Grid className={classes.grid} item xs={5} container direction="column">
            <img src={alimentacion} alt="alimentacion" tittle="Alimentar lo bueno todos los dias" width="100%"/>
            <Typography variant="h1" >
              <Box lineHeight={2} textAlign="center" fontSize={13} margin="0px 40px" >
                Porque alimentar es mucho más que nutrirse, es hacer que las
                cosas pasen, es llenarse de buenas emociones y experiencias, es
                ver la vida de forma positiva y alegre. Y queremos que tú seas
                parte de esta filosofía donde disfrutar y aprender de cada
                detalle, es fundamental para seguir cumpliendo con nuestro
                propósito día a día.
              </Box>
            </Typography> 
          </Grid>

          <Grid item xs={7}>
            <ReactPlayer
              // Disable download button
              config={{ file: { attributes: { controlsList: 'nodownload' } } }}

              // Disable right click
              onContextMenu={e => e.preventDefault()}
              url="https://skyviewagrosuper.com/videos/comunidad/Manifiesto_ON4-B.mp4"
              width="100%"
              height="auto"
              controls
              className={classes.video}
            />
          </Grid>
        </Grid>
      </Box>
    </BorderWrapper>
  );
};

export default Proposito;
