import React from 'react'
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import AreaPicture from "../../../../assets/foto_slide-3.png";
import AreaImg from '../../../../assets/slide-3.png'
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${AreaPicture})`,
    paddingTop: 50,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "90vh",
    width: "100%",

},
  image: {
    padding: 40,
    width: 930,
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



const Areas = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box
        width='100%'
        display='flex'
        justifyContent='flex-start'
        alignItems='center'
      >
        <Box width='60%' minWidth={200}>
            <img src={AreaImg} className={classes.image} alt="areas"/>
        </Box>
      </Box>
        </div>
    )
}

export default Areas
