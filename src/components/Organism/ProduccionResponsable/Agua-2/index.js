import React from "react";
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import BorderWrapper from "../../../Atoms/BorderWrapper";
import reagua from "../../../../assets/re_agua.png";
import cifras2 from "../../../../assets/cifras_sl7.png";
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",
  },
  background: {
    height: "70vh",
  },
  video: {
    borderRadius: 20,
    overflow: "hidden",
  },
  titleContainer: {
    paddingTop: 5,
    paddingBottom:5,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#837beb",
    width: "fit-content",
    borderRadius: '0px 20px 20px 0px',
    marginBottom: 20,
  },
  title: {
    color: "#34B29A",
    fontSize:35

  },
  subtitle:{
    color: '#fff',
    fontWeight: 600,
    fontSize: 22,
    
},
}));

const Agua2 = () => {
  const classes = useStyles();
  return (
    <div>
      <BorderWrapper borderColor='#34b29a'>
        <Box
          width='100%'
          display='flex'
          height="100%"
          justifyContent='center'
          alignItems='center'
        >
          <Box width='100%' minWidth={400}>
            <div className={classes.titleContainer}>
            <Typography className={classes.subtitle} variant='h5'>Reutilización del Agua - Planteles de Crianza</Typography>
            </div>
            <Grid
              container
              spacing={0}
              direction='row'
              justifyContent='center'
              alignItems='center'
            >
              <Grid
                item
                container
                alignItems='center'
                justifyContent='center'
              >
                <Grid item md={5}>
                  <Box
                    component="img"
                    alignItems="center"
                    justifyContent="center"
                    display="flex"
                    marginLeft={"75px"}
                    height="auto"
                    src={reagua}
                    width="90%"
                  />
                </Grid>
                <Grid item md={7}>
                  <Box component='img'  width="100%" src={cifras2} />
                </Grid>
                
              </Grid>
            </Grid>

            
          </Box>
        </Box>
      </BorderWrapper>
    </div>
  );
};

export default Agua2;
