import React from "react";
import BorderWrapper from "../../../Atoms/BorderWrapper";
import { Box, Grid, makeStyles } from "@material-ui/core";
import ReactPlayer from "react-player";
import voluntarios from "../../../../assets/voluntarios.png";
const useStyles = makeStyles((theme) => ({
  grid: {
    height: "100%",
  },
  video: {
    borderRadius: 20,
    overflow: "hidden",
  },
}));

const Voluntario = () => {
  const classes = useStyles();
  return (
    <BorderWrapper borderColor="#459fc7">
      <Box height="100%" width="100%" >
        <Grid container className={classes.grid} spacing={3} justifyContent="center"  alignItems="center">
          <Grid item xs={7} container direction="column" alignItems="center" justifyContent="center">
             <ReactPlayer
             // Disable download button
             config={{ file: { attributes: { controlsList: 'nodownload' } } }}

             // Disable right click
             onContextMenu={e => e.preventDefault()}
              url="https://skyviewagrosuper.com/videos/comunidad/VoluntariadoAS.mp4"
              width="100%"
              height="auto"
              className={classes.video}
              controls
           /> 
            
          </Grid>
          <Grid item xs={5} container direction="column" alignItems="center" justifyContent="center">
            
              <img src={voluntarios} atl="voluntarios As" tittle="voluntarios AS" width="70%"></img>
             
          </Grid>
        </Grid>
      </Box>
    </BorderWrapper>
  );
};

export default Voluntario;
