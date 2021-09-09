import React from "react";
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";

import BorderWrapper from '../../../Atoms/BorderWrapper'
import RectangleArea from "../../../Atoms/RectangleArea";
import {ReactComponent as Icn1} from '../../../../assets/icn1.svg'
import {ReactComponent as Icn2} from '../../../../assets/icn2.svg'
import {ReactComponent as Icn3} from '../../../../assets/icn3.svg'
import {ReactComponent as Icn4} from '../../../../assets/icn4.svg'
import Cerdo from '../../../../assets/cerdo.svg'
const useStyles = makeStyles((theme) => ({
  root: {

    height: "90vh",
    width: "100%",
  },
  image: {
    position: 'absolute',
    top: 580,
     height:250
  },
  

}));

const Beneficios = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BorderWrapper borderColor='#f96f5a'>
      <Box
        width='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        
        <Box width='90%' minWidth={250}>
          <Typography
            variant='h5'
            align='start'
            className={classes.title}
            gutterBottom
          >
            Beneficios de la Carne de Cerdo
          </Typography>
          
          <Grid container spacing={3} justifyContent="center" alignItems="center">

            <Grid item lg={3} md={4} sm={6} xs={12}>
            <RectangleArea
            Icon={Icn1}
            title='Carne baja en sodio'
            subtitle=''
            color='#EC8280'
          />

            </Grid>
            <Grid item  lg={3} md={4} sm={6} xs={12}>
            <RectangleArea
            Icon={Icn2}
            title='Excelente fuente de fosforo'
            subtitle=''
            color='#FD7F2D'
          />
            </Grid>
            <Grid item  lg={3} md={4} sm={6} xs={12}>
            <RectangleArea
            Icon={Icn3}
            title='Su perfil aminoacido revela buena fuente de proteinas'
            subtitle=''
            color='#837EE8'
          />
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
            <RectangleArea
            Icon={Icn4}
            title='Cortes extra magros'
            subtitle='(Lomo centro, posta negra, posta rosada, filete, cubitos de cerdo, pulpa pierna)'
            color='#4989FA'
          />
            </Grid>
            <img src={Cerdo} className={classes.image} alt="Cerdo"/>
          </Grid>

         
        
          
          
        </Box>
        
      </Box>
      </BorderWrapper>
    </div>
  );
};

export default Beneficios;
