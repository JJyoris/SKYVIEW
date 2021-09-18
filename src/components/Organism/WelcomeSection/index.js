import React from "react";
import { Grid, makeStyles, Typography,  Button , Box} from "@material-ui/core";
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
  block:{
    width:"100%",
    height: "60%",
    background: "linear-gradient(to bottom, #fde7d0, #e1d6e7)",
    position: "absolute",
    zIndex: -1,

  }
}));

const WelcomeSection = () => {
  const classes = useStyles();
  return (
    <>
    <div className={classes.block}></div>
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
          <Box lineHeight={1.5} >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor eget dolor morbi non arcu risus quis varius quam. Pellentesque habitant morbi tristique senectus et netus. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Nec feugiat nisl pretium fusce id velit. Est ullamcorper eget nulla facilisi. Mattis rhoncus urna neque viverra. Vel facilisis volutpat est velit egestas dui id ornare arcu.
          </Box>
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
    </>
  );
};

export default WelcomeSection;
