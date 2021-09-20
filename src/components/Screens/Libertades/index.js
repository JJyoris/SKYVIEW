import React from "react";
import libertades from "../../../assets/5_libertades.png";
import ReactPlayer from "react-player";
import { Grid, Box, makeStyles } from "@material-ui/core";
import BorderWrapper from "../../Atoms/BorderWrapper"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "auto",
  },
  image: {
    maxWidth: 400,
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
      display:"flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  video: {
    borderRadius: 20,
    overflow: "hidden",
  },
}));

const Libertades = () => {
  const classes = useStyles();
  return (
    <div id="libertades" className={classes.root}>
      <BorderWrapper  borderColor='#b8de6a'>
      <Box
        width="85%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop={15}
        marginLeft={20}
      >
        <Box width="90%" minWidth={200}>
          <Grid container direction="row" spacing={5} display="flex" justifyContent="center" alignItems="center">
            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <ReactPlayer
                url="https://skyviewagrosuper.com/videos/nuestras_granjas/Bienestar%20Animal.mp4"
                width="700px"
                height="470px"
                className={classes.video}
                controls
              />
            </Grid>

            <Grid item xs={12} md={5}>
              <Grid
                container
                direction="column"
                spacing={3}
                justifyContent="center"
                alignItems="center"
                className={classes.gridContainer}
              >
                <Grid item>
                  <img
                    src={libertades}
                    alt="libertades"
                    className={classes.image}
                  />
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

export default Libertades;
