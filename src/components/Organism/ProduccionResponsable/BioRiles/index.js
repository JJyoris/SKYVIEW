import React from "react";
import {
  makeStyles,
  Grid,
  Box,
  Typography,

} from "@material-ui/core";
import BorderWrapper from "../../../Atoms/BorderWrapper";
import { ReactComponent as IconPR8 } from "../../../../assets/PR-icn8.svg";
import { ReactComponent as IconPR9 } from "../../../../assets/PR-icn9.svg";
import { ReactComponent as IconPR10 } from "../../../../assets/PR-icn10.svg";
import ProduccionResponsableFooter from "../../../Molecules/ProduccionResponsableFooter";
import ReactPlayer from "react-player";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",
  },
  background: {
    height: "70vh",
  },
  video: {
    overflow: "hidden",
  },
  itemContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 30,
  },
  videoContainer: {
    boxShadow:
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  },
}));

const BioRiles = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BorderWrapper borderColor='#34b29a'>
        <Box
          width='100%'
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Box width='90%' minWidth={400}>
            <Grid
              container
              spacing={0}
              direction='row'
              justifyContent='center'
              alignItems='center'
            >
              <Grid
                item
                md={4}
                container
                direction='column'
                justifyContent='center'
                alignItems='center'
              >
                <div
                  className={classes.itemContainer}
                  style={{
                    width: 300,
                    height: 600,
                    backgroundColor: "#F5E8D2",
                    padding: 10,
                  }}
                >
                
                  <IconPR8 style={{ width: 80 }} />
                  <Typography variant='h3' align='center' gutterBottom>
                    Bioestabilizado
                  </Typography>
                  <div className={classes.videoContainer}>
                    {" "}
                    <ReactPlayer
                      url='https://www.youtube.com/watch?v=nyuMFyOzWZA'
                      width='350px'
                      height='190px'
                      className={classes.video}
                      config={{
                        youtube: {
                          playerVars: { controls: 2 },
                        },
                      }}
                    />
                  </div>

                  <Typography align='start' variant='h1'>
                    <Box lineHeight={2}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vitae elit ornare, mollis turpis fringilla, gravida
                      sem. Phasellus id efficitur risus, nec imperdiet ipsum.
                      Fusce aliquet sem quam.
                    </Box>
                  </Typography>
                </div>
              </Grid>
              <Grid
                item
                md={4}
                container
                direction='column'
                justifyContent='center'
                alignItems='center'
              >
                <div
                  className={classes.itemContainer}
                  style={{
                    width: 300,
                    height: 600,
                    backgroundColor: "#A2E7F7",
                    padding: 10,
                  }}
                >
                  
                  <IconPR9 style={{ width: 80 }} />
                  <Typography variant='h3' align='center' gutterBottom>
                    Riles
                  </Typography>
                  <div className={classes.videoContainer}>
                    <ReactPlayer
                      url='https://www.youtube.com/watch?v=nyuMFyOzWZA'
                      width='350px'
                      height='190px'
                      className={classes.video}
                      config={{
                        youtube: {
                          playerVars: { controls: 2 },
                        },
                      }}
                    />
                  </div>
                  <Typography align='start' variant='h1'>
                    <Box lineHeight={2}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vitae elit ornare, mollis turpis fringilla, gravida
                      sem. Phasellus id efficitur risus, nec imperdiet ipsum.
                      Fusce aliquet sem quam.
                    </Box>
                  </Typography>
                </div>
              </Grid>
              <Grid
                item
                md={4}
                container
                direction='column'
                justifyContent='center'
                alignItems='center'
              >
                <div
                  className={classes.itemContainer}
                  style={{
                    width: 300,
                    height: 600,
                    backgroundColor: "#FADCCF",
                    padding: 10,
                  }}
                >
                  
                  <IconPR10 style={{ width: 80 }} />
                  <Typography variant='h3' align='center' gutterBottom>
                    Biomasa
                  </Typography>
                  <div className={classes.videoContainer}>
                    <ReactPlayer
                      url='https://www.youtube.com/watch?v=nyuMFyOzWZA'
                      width='350px'
                      height='190px'
                      className={classes.video}
                      config={{
                        youtube: {
                          playerVars: { controls: 2 },
                        },
                      }}
                    />
                  </div>
                  <Typography align='start' variant='h1'>
                    <Box lineHeight={2}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vitae elit ornare, mollis turpis fringilla, gravida
                      sem. Phasellus id efficitur risus, nec imperdiet ipsum.
                      Fusce aliquet sem quam.
                    </Box>
                  </Typography>
                </div>
              </Grid>
              <Grid
                item
                container
                direction='row'
                justifyContent='center'
                // alignItems='center'
                md={12}
              >
                <ProduccionResponsableFooter />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </BorderWrapper>
    </div>
  );
};

export default BioRiles;
