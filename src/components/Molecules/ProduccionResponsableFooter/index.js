import React from "react";
import { Grid, Box, Typography, IconButton } from "@material-ui/core";

import { ReactComponent as IconPR11 } from "../../../assets/PR-icn11.svg";
import { ReactComponent as IconPR12 } from "../../../assets/PR-icn12.svg";
import { ReactComponent as IconPR13 } from "../../../assets/PR-icn13.svg";
import { Link as RouterLink } from "react-router-dom";
const ProduccionResponsableFooter = () => {
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
        <RouterLink to='/produccion/carbono'>
          <IconButton component='span'>
            <IconPR11 style={{ width: 60 }} />
          </IconButton>
        </RouterLink>
        <Typography variant='h4'>. . . . . . . . . .  .</Typography>
        <RouterLink to='/produccion/eficiencia'>
          <IconButton component='span'>
            <IconPR12 style={{ width: 60 }} />
          </IconButton>
        </RouterLink>
        <Typography variant='h4'>. . . . . . . . . .  .</Typography>
        <RouterLink to='/produccion/agua'>
          <IconButton component='span'>
            <IconPR13 style={{ width: 60 }} />
          </IconButton>
        </RouterLink>
      </Grid>
    </div>
  );
};

export default ProduccionResponsableFooter;
