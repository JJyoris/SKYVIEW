import React from "react";
import { makeStyles, Grid  } from "@material-ui/core";
import imageAgenda from "../../../assets/AgendaDeVisita.png";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "60vh",
    paddingTop:50
  },
  image: {
    maxWidth: "100%",
  },
}));
const Scheduler = () => {
  const classes = useStyles();
  return (
    <div id="agenda" className={classes.root}>
      <Grid container>
        <Grid item xs={12} >
          <img src={imageAgenda} alt="agenda" className={classes.image} />{" "}
        </Grid>
      </Grid>
    </div>
  );
};

export default Scheduler;
