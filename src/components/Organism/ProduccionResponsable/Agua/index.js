import React from "react";
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import BorderWrapper from "../../../Atoms/BorderWrapper";
import Ilustracion4 from "../../../../assets/ilus-4.png";
import Ilustracion5 from "../../../../assets/ilus-5.png";
import Ilustracion6 from "../../../../assets/ilus-6.png";

import ProduccionResponsableFooter from "../../../Molecules/ProduccionResponsableFooter";
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
    backgroundColor: "#34B29A",
    width: "fit-content",
    borderRadius: '0px 10px 10px 0px',
  },
  title: {
    color: "#34B29A",
    fontSize:35

  },
  subtitle:{
      color: '#fff',
      fontWeight: 600,
      fontSize: 28
  }
}));

const Agua = () => {
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
            <Typography className={classes.title} variant='h5'>Reutilizacion del Agua</Typography>
            <div className={classes.titleContainer}>
            <Typography className={classes.subtitle} variant='h4'>Limpieza y Riego</Typography>
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
                spacing={5}
                alignItems='center'
                justifyContent='center'
              >
                <Grid item md={4}>
                  <Box component='img' height='60vh' src={Ilustracion4} />
                </Grid>
                <Grid item md={4}>
                  <Box component='img' height='60vh' src={Ilustracion5} />
                </Grid>
                <Grid item md={4}>
                  <Box component='img' height='60vh' src={Ilustracion6} />
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              container
              direction='row'
              justifyContent='center'
              alignItems='center'
              md={12}
            >
              <ProduccionResponsableFooter />
            </Grid>
          </Box>
        </Box>
      </BorderWrapper>
    </div>
  );
};

export default Agua;
