import React from 'react'
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";

import BeneficiosPicture from '../../../../assets/slide-4.png'


const useStyles = makeStyles((theme) => ({
  root: {
    
    paddingTop: 50,
   
    height: "90vh",
    width: "100%",

},
  image: {
 
    width: '100%',
    height: 'auto',
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
      alignItems: "center",
      justifyContent: "center",
    },
  },
  video: {
    borderRadius: 20,
    overflow: "hidden",
  },
}));



const Beneficios = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box
        width='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >

          <Box width="80%" minWidth={250}>
          <Typography variant="h5" align="start" className={classes.title}gutterBottom>
                Beneficios de la Carne de Cerdo
            </Typography>
              <img src={BeneficiosPicture} className={classes.image} alt="beneficios"/>
          </Box>
 
      </Box>
        </div>
    )
}

export default Beneficios
