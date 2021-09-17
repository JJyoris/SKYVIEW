import React from "react";
import BorderWrapper from "../../../Atoms/BorderWrapper";
import { Box, Grid, makeStyles } from "@material-ui/core";
import ReactPlayer from "react-player";
import voluntarios from "../../../../assets/voluntarios.png";
const useStyles = makeStyles((theme) => ({
  grid: {
    height: "100%",
  },
}));

const Voluntario = () => {
  const classes = useStyles();
  return (
    <BorderWrapper borderColor="#459fc7">
      <Box height="100%">
        <Grid container className={classes.grid} spacing={3}>
          <Grid item xs={6}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=nyuMFyOzWZA"
              width="100%"
              height="100%"
              config={{
                youtube: {
                  playerVars: { controls: 2 },
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
              <img src={voluntarios} atl="voluntarios As" tittle="voluntarios AS "></img>
          </Grid>
        </Grid>
      </Box>
    </BorderWrapper>
  );
};

export default Voluntario;
