import React from "react";
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import AreaPicture from "../../../../assets/foto_slide-3.png";
import AreaImg from "../../../../assets/slide-3.png";
import CircleArea from "../../../Atoms/CircleArea";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { ReactComponent as IcnA } from "../../../../assets/icn_a.svg";
import { ReactComponent as IcnB } from "../../../../assets/icn_b.svg";
import { ReactComponent as IcnC } from "../../../../assets/icn_c.svg";
import BorderWrapper from "../../../Atoms/BorderWrapper";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",
    paddingTop: 50,
    
  },
  background:{
    height: "70vh",
  }
  
}));

const Areas = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BorderWrapper background={AreaPicture}>
      <Box
      className={classes.background}
        width='100%'
        display='flex'
        justifyContent='flex-start'
        alignItems='center'
      >
        <Box width='70%' minWidth={400}>
          <Grid container justifyContent='center' spacing={3} item lg={10}>
            <Grid item>
              <CircleArea
                Icon={IcnA}
                backgroundColor='#ED7422'
                title='Área de Faena'
              />
            </Grid>
            <Grid item>
              <CircleArea
                Icon={IcnB}
                backgroundColor='#F96F5A'
                title='Cadena de Frío'
              />
            </Grid>
            <CircleArea
              Icon={IcnB}
              backgroundColor='#BF71B8'
              title='Cadena de Frío'
            />
            <Grid item>
              {" "}
              <CircleArea
                Icon={IcnC}
                backgroundColor='#746FBD'
                title='Cadena de Frío'
              />
            </Grid>
            <Grid item>
              <CircleArea
                Icon={IcnC}
                backgroundColor='#3B65CC'
                title='Cadena de Frío'
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      </BorderWrapper>
    </div>
  );
};

export default Areas;
