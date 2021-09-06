import React from 'react'
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import CertificacionePicture from "../../../../assets/foto_slide-5.png";
import BorderWrapper from '../../../Atoms/BorderWrapper';
import Img1 from '../../../../assets/brc-1 (1).svg';
import Img2 from '../../../../assets/brc-2 (1).svg'


const useStyles = makeStyles((theme) => ({
  root: {

    height: "90vh",
  
},
background:{
  height: "70vh",
},

  image: {
    paddingLeft: 100,
    paddingRight: 100,
    width: 560,
    height: 'auto',
  },
  title: {
    color: theme.palette.text.button,
  },

}));



const Certificaciones = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <BorderWrapper background={CertificacionePicture}>
        <Box
        className={classes.background}
        width='100%'
        display='flex'
        justifyContent='center'
        marginTop={5}

      >
        <Box width='80%' minWidth={200}>
        
          <Grid container spacing={3} direction="row" justifyContent="flex-start">
          <Grid item xs={6}>
          <Typography variant="h5" align="center" className={classes.title}>
                Nuestras Certificaciones
            </Typography>
          </Grid>
            <Grid item container spacing={5} md={8}>
              <Grid item xs={4}>
              <img src={Img2} width="100%" />
            </Grid>
            <Grid item xs={3}>
            
            <img src={Img1} width="100%" />
            </Grid>
            </Grid>


          </Grid>
            
        </Box>
      </Box>
      </BorderWrapper>
        </div>
    )
}

export default Certificaciones
