import React from "react";
import { Grid, Box, Typography, IconButton } from "@material-ui/core";

import { ReactComponent as IconLP1 } from "../../../assets/LP-icn1.svg";
import { ReactComponent as IconLP2 } from "../../../assets/LP-icn2.svg";
import { ReactComponent as IconLP3 } from "../../../assets/LP-icn3.svg";
import { ReactComponent as IconLP4 } from "../../../assets/LP-icn4.svg";
import { Link as RouterLink } from "react-router-dom";
const LineasDeProduccion = () => {
  return (
    <div>
      <Grid
        item
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        md={12}
        
      >
        <RouterLink to='/planta/cerdo'>
          <IconButton component='span'>
            <IconLP1 style={{ width: 60 }} />
          </IconButton>
        </RouterLink>
        <Typography variant='h4'>. . </Typography>
        <RouterLink to='/planta/pavo'>
          <IconButton component='span'>
            <IconLP2 style={{ width: 60 }} />
          </IconButton>
        </RouterLink>
        <Typography variant='h4'>. . </Typography>
        <RouterLink to='/planta/salmon'>
          <IconButton component='span'>
            <IconLP3 style={{ width: 60 }} />
          </IconButton>
        </RouterLink>
        <Typography variant='h4'>. . </Typography>
        <RouterLink to='/planta/pollo'>
          <IconButton component='span'>
            <IconLP4 style={{ width: 60 }} />
          </IconButton>
        </RouterLink>
      </Grid>
      
    </div>
  );
};

export default LineasDeProduccion;
