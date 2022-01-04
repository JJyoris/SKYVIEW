import { Grid, makeStyles, Box } from "@material-ui/core";
import React from "react";
import ReactPlayer from "react-player";
import alimentacion from "../../../assets/Alimentacion.png";
import cuidados from "../../../assets/Cuidados.png";
import BorderWrapper from "../../Atoms/BorderWrapper"

const useStyles = makeStyles((theme) => ({
  // root: {
    
  //   height: "auto",
  // },
  image: {
    width:"80%",
    height: "auto",
  },
  title: {
    color: theme.palette.text.button,
  },
  subtitle: {
    fontSize: 28,
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

const Granja = () => {
  const classes = useStyles();
  return (
    <div id="granja" className={classes.root}>
      <BorderWrapper borderColor='#f96f5a'> 
      <Box
        width="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        
      >
        <Box width="60%" minWidth={200}>
          <Grid container direction="row" spacing={0}>
            <Grid
              item
              xs={12}
              
              justifyContent="center"
              alignItems="center"
            >
              <ReactPlayer
                // Disable download button
                config={{ file: { attributes: { controlsList: 'nodownload' } } }}

                // Disable right click
                onContextMenu={e => e.preventDefault()}              
                url="https://skyviewagrosuper.com/videos/nuestras_granjas/Testimonial%20Noelia%20AS_17082021%20(1).mp4"
                width="100%"
                height="100%"
               
                className={classes.video}
                controls
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      </BorderWrapper> 
    </div>
  );
};

export default Granja;
