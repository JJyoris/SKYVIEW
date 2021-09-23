import React from "react";
import {
  Grid,
  Box,
  Typography,
  makeStyles,
} from "@material-ui/core";
import BorderWrapper from "../../../Atoms/BorderWrapper";
import Ilustracion2 from "../../../../assets/ilus-2.png";
import Ilustracion3 from "../../../../assets/ilus-3.png";
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
    marginTop: 75,
    marginBottom: 20,
    backgroundColor: "#66D8E350",
    width: "fit-content",
    borderRadius: 30,
  },
  title: {
    color: "#34B29A",
    fontSize:35
  },
  text:{
    fontSize:20
  },
  img:{
    left:"50%",
    position:"absolute",
    top:"35%"
  }
}));

const EficienciaEnergetica = () => {
  const classes = useStyles();

  return (
    <div>
      <BorderWrapper borderColor='#34b29a'>
        <Box
          width='100%'
          height="100%"
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Box width='100%' minWidth={400}>
          <Typography className={classes.title} variant='h5'>Eficiencia Energética</Typography>
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
                spacing={3}
                alignItems='center'
                justifyContent='center'
              >
                <Grid item md={7}>
                  <Box component='img'width="100%" src={Ilustracion2} />
                </Grid>
                <Grid item md={2}>
                  <Box component='img' height='35vh' src={Ilustracion3}  className={classes.img}/>
                </Grid>
                <Grid item md={3}>
                  <Typography variant='h3' className={classes.text}>
                    La mitad de la electricidad que ocupa Agrosuper será energía
                    limpia gracias a Noruega Statkraft.
                  </Typography>
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

export default EficienciaEnergetica;
