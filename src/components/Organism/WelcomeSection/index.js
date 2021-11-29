import { useState, useEffect } from "react";
import React from "react";
import {
  Grid,
  makeStyles,
  Typography,
  Button,
  Box,
  Modal,
  withStyles,
} from "@material-ui/core";
import ReactPlayer from "react-player";
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
  exitButton:{
    position: 'relative',
    float: "right",
    zIndex:1,
  },
  wrapper: {
    borderRadius: "20px",
  },
  block: {
    width: "100%",
    height: "80%",
    background: "linear-gradient(to bottom, #fde7d0, #e1d6e7)",
    position: "absolute",
    zIndex: -1,
  },
}));

const WelcomeSection = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
 

  const handleClose = () => {
    sessionStorage["PopupShown"] = "yes";
    setOpen(false);
  };

  const StyledButton = withStyles({
    root: {
      color: "#FFF",
      borderColor: "#FFF",
    },
    label: {
      textTransform: "capitalize",
    },
  })(Button);

  return (
    <>
      <div className={classes.block}></div>
      <div id="home" className={classes.root}>
        <Modal open={ sessionStorage["PopupShown"] === "yes" ? false : open } onClose={handleClose} className="modal">
          <div style={{ borderRadius: 10, outline: 0 , width:"80%"}}>
            <ReactPlayer
              url="https://skyviewagrosuper.com/videos/intro-skyview.mp4"
              volume={0.2}
              width="100%"
              height="100%"
              playing={true}
              loop={true}
              controls={true}
            />
            <StyledButton variant="outlined" onClick={handleClose} size="small" className={classes.exitButton}>
              {" "}
              Saltar video{" "}
            </StyledButton>
          </div>
        </Modal>

        <Grid container>
          <Grid item xs={12}>
            <Typography
              align="center"
              variant="h3"
              className={classes.tittle}
              gutterBottom
            >
              EXPERIENCIA SKYVIEW
            </Typography>
            <Box margin="0px 50px">
            <Typography align="center" variant="h2" gutterBottom>
              <Box lineHeight={1}>
              Skyview virtual es un espacio abierto para conocer en profundidad Agrosuper.
              </Box>
            </Typography>
            <Typography align="center" variant="h2" gutterBottom>
              <Box lineHeight={1} mb={2}>
              Porque somos la empresa productora de proteína más grande de Chile y tenemos mucho que contar.           </Box>
            </Typography>
            
            <Typography align="center" variant="h2" gutterBottom>
              <Box lineHeight={1} mb={2}>
              Agenda tu visita guiada con nuestras coordinadoras para conocer con mas detalle todo lo que hacemos.              </Box>
            </Typography>
         
                      
          <Typography align="center" variant="h2" gutterBottom>
              <Box lineHeight={1}>
              Te invitamos a este viaje para que conozcas lo que somos cómo trabajamos y qué nos mueve. 
                </Box>
            </Typography>
            <Typography align="center" variant="h2" gutterBottom>
              <Box lineHeight={1}>
               Porque “Alimentar lo bueno de la vida todos los días” está en nuestro ADN y queremos compartirlo contigo.
                </Box>
            </Typography>
            </Box>
          </Grid>

          <TransformWrapper
            initialScale={1.2}
            minScale={1.2}
            initialPositionX={-2000}
            initialPositionY={-100}
            wrapperStyle={{borderRadius:"50px"}}
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
