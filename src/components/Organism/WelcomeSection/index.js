import React from "react";
import { Grid, makeStyles, Typography,  Button } from "@material-ui/core";
import MapAgroSuper from "../../Molecules/MapAgroSuper";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 10,

    paddingLeft: 100,
    paddingRight: 100,
    [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  tittle: {
    color: theme.palette.text.button,
  },

  containerButtons: {
    position: "relative",
    zIndex: 2,
    transform: "translate(30px, 60px)",
  },
  button: {
    marginRight: "10px",
  },
  wrapper:{
    borderRadius:"20px"
  },
}));

const WelcomeSection = () => {
  const classes = useStyles();
  return (
    <div id="home" className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            align="center"
            variant="h3"
            className={classes.tittle}
            gutterBottom
          >
            EXPERIENCIA SKY VIEW
          </Typography>

          <Typography align="center" variant="h2" gutterBottom>
            subtitulo del sky view
          </Typography>
        </Grid>
   
        <TransformWrapper
          initialScale={1.2}
          minScale={1.2}
          initialPositionX={-2000}
          initialPositionY={-100}
          // wrapperClass={ classes.wrapper }
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <React.Fragment>
              <div className={classes.containerButtons}>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => zoomIn()}
                  className={classes.button}
                >
                  Zoom in{" "}
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => zoomOut()}
                  className={classes.button}
                >
                  Zoom out
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => resetTransform()}
                  className={classes.button}
                >
                  Reset
                </Button>
              </div>
              <TransformComponent
                contentStyle={{ transformOrigin:"0% 0% "}}
              >
                
                <MapAgroSuper />
              </TransformComponent>
            </React.Fragment>
          )}
        </TransformWrapper>

      </Grid>
    </div>
  );
};

export default WelcomeSection;
