import React from "react";
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import AreaPicture from "../../../../assets/foto_slide-3.png";
import AreaImg from "../../../../assets/slide-3.png";
import CircleArea from "../../../Atoms/CircleArea";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { ReactComponent as IcnA } from "../../../../assets/icn_a.svg";
import { ReactComponent as IcnB } from "../../../../assets/icn_b.svg";
import { ReactComponent as IcnC } from "../../../../assets/icn_c.svg";
import { ReactComponent as IcnD } from "../../../../assets/icn_d.svg";
import { ReactComponent as IcnE } from "../../../../assets/icn_e.svg";
import BorderWrapper from "../../../Atoms/BorderWrapper";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",

    
  },
  background:{
    height: "70vh",
  }
  
}));

const Areas = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BorderWrapper background={AreaPicture} borderColor='#f96f5a'>
      <Box
      className={classes.background}
        width='100%'
        display='flex'
        justifyContent='flex-start'
        alignItems='center'
        textAlign='center'
      >
        <Box width='70%' minWidth={400}>
          <Grid container justifyContent='center' spacing={3} item lg={9}>
            <Grid item>
              <CircleArea
                Icon={IcnA}
                backgroundColor='#ee7623'
                title='Área de Faena'
              />
            </Grid>
            <Grid item>
              <CircleArea
                Icon={IcnB}
                backgroundColor='#f96f5a'
                title='Cadena de Frío'
              />
            </Grid>
            <CircleArea
              Icon={IcnC}
              backgroundColor='#bf71b8'
              title='Área de Desposte'
            />
            <Grid item>
              {" "}
              <CircleArea
                Icon={IcnD}
                backgroundColor='#746fbd'
                title='Área de Congelado'
              />
            </Grid>
            <Grid item>
              <CircleArea
                Icon={IcnE}
                backgroundColor='#3b65cc'
                title='Distribución y Logística'
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
