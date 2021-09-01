import React from "react";
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import AreaPicture from "../../../../assets/foto_slide-3.png";
import AreaImg from "../../../../assets/slide-3.png";
import CircleArea from "../../../Atoms/CircleArea";
import AcUnitIcon from "@material-ui/icons/AcUnit";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",
    width: "100%",
    // backgroundImage: `url(${AreaPicture})`,
    // // paddingTop: 50,
    // display: 'block',
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center center",
    // backgroundSize: "contain",
    // backgroundAttachment: "fixed",
  },
  gridContainer: {
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    
    },
  },
}));

const Areas = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box
        width='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
        className={classes.gridContainer}
      >

        <CircleArea
          Icon={AcUnitIcon}
          backgroundColor='#ED7422'
          title='Area de Faena'
        />

        <CircleArea
          Icon={AcUnitIcon}
          backgroundColor='#F96F5A'
          title='Cadena de Frio'
        />

        <CircleArea
          Icon={AcUnitIcon}
          backgroundColor='#BF71B8'
          title='Cadena de Frio'
        />

        <CircleArea
          Icon={AcUnitIcon}
          backgroundColor='#746FBD'
          title='Cadena de Frio'
        />

        <CircleArea
          Icon={AcUnitIcon}
          backgroundColor='#3B65CC'
          title='Cadena de Frio'
        />
      </Box>
    </div>
  );
};

export default Areas;
