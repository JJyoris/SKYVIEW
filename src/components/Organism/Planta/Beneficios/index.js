import React from "react";
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";

import BorderWrapper from '../../../Atoms/BorderWrapper'
import RectangleArea from "../../../Atoms/RectangleArea";
import {ReactComponent as Icn1} from '../../../../assets/icn1.svg'
import {ReactComponent as Icn2} from '../../../../assets/icn2.svg'
import {ReactComponent as Icn3} from '../../../../assets/icn3.svg'
import {ReactComponent as Icn4} from '../../../../assets/icn4.svg'
import Cerdo from '../../../../assets/cerdo.svg'
import Img1 from '../../../../assets/foto.png'
const useStyles = makeStyles((theme) => ({
  root: {

    height: "90vh",
    width: "100%",
  },
  tittle:{
    fontSize:30
  }
}));

const Beneficios = () => {
  const classes = useStyles();

  return (
    <div>
      <BorderWrapper background={Img1}  borderColor='#f96f5a'>
      <Box
        width='100%'
        height="100%"
        display='flex'
        justifyContent='center'
        alignItems='center'       
        
      >
        
        <Box width='100%' minWidth={250} mb={1}>
          <Typography
            variant='h5'
            align='start'
            className={classes.tittle}
            gutterBottom
          >
            Beneficios de la Carne de Cerdo
          </Typography>
          
          <Grid flexDirection="row" container spacing={3} justifyContent="center" alignItems="center">

            <Grid item lg={12} xs={12}>
            <RectangleArea
            Icon={Icn1}
            title='Carne baja en sodio'
            subtitle=''
            color='#EC8280'
          />

            </Grid>
            <Grid item  lg={12} xs={12}>
            <RectangleArea
            Icon={Icn2}
            title='Excelente fuente de fósforo'
            subtitle=''
            color='#FD7F2D'
          />
            </Grid>
            <Grid item  lg={12} xs={12}>
            <RectangleArea
            Icon={Icn3}
            title='Su perfil aminoácido revela buena fuente de proteínas'
            subtitle=''
            color='#837EE8'
          />
            </Grid>
            <Grid item lg={12} xs={12}>
            <RectangleArea
            Icon={Icn4}
            title='Cortes extra magros'
            subtitle='(Lomo centro, posta negra, posta rosada, filete, cubitos de cerdo, pulpa pierna)'
            color='#4989FA'
          />
            </Grid>
  
          </Grid>

         
        
          
          
        </Box>
        
      </Box>
      </BorderWrapper>
    </div>
  );
};

export default Beneficios;
