import React from 'react'
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import CertificacionePicture from "../../../../assets/foto_slide-5.png";
import BorderWrapper from '../../../Atoms/BorderWrapper';



const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 50,
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
        justifyContent='flex-start'
        alignItems='center'
        flexDirection="row"
      >
        <Box width='50%' minWidth={200}>
        <Typography variant="h5" align="center" className={classes.title}>
                Nuestras Certificaciones
            </Typography>
          <Grid container spacing={1} direction="row">
          
            <Grid item container md={7}>
              <Grid item xs={6}>
            {/* <img src={CertificacionHACCP} style={{height: 400}}/> */}
            </Grid>
            <Grid item xs={6}>
            {/* <img src={CertificacionBRCFOOD} style={{width: '100%'}}/> */}
            </Grid>
            </Grid>

          {/* <Grid item>
              
          </Grid> */}

          </Grid>
            
        </Box>
      </Box>
      </BorderWrapper>
        </div>
    )
}

export default Certificaciones
