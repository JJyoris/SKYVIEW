import React from 'react'
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import CertificacionePicture from "../../../../assets/foto_slide-5.png";
import CertificacionesImg from '../../../../assets/slide-5.png'


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${CertificacionePicture})`,
    paddingTop: 50,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "90vh",
    width: "100%",

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



const Certificaciones = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box
        width='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Box width='80%' minWidth={200}>
            <Typography variant="h5" align="start" className={classes.title}>
                Nuestras Certificaciones
            </Typography>
            <img src={CertificacionesImg} className={classes.image} alt="areas"/>
        </Box>
      </Box>
        </div>
    )
}

export default Certificaciones
