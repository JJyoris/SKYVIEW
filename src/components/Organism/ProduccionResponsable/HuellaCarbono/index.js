import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  Grid,
  Box,
  Typography,
  makeStyles,
} from "@material-ui/core";
import BorderWrapper from "../../../Atoms/BorderWrapper";
import ProduccionResponsableFooter from "../../../Molecules/ProduccionResponsableFooter";
import IlustracionCarbono from "../../../../assets/ilus-1.png";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",
  },
  background: {
    height: "70vh",
  },
  video: {
    borderRadius: 20,
    overflow: "hidden",
  },
  titleContainer: {
    marginTop:75,
    marginBottom:20,
    backgroundColor: "#66D8E350",
    width: "fit-content",
    borderRadius: 30,
  },
  icon: {
    color: "#66D8E3",
  },
  title: {
    color: "#34B29A",

  },
}));

const HuellaCarbono = () => {
  const classes = useStyles();
  return (
    <div>
      <BorderWrapper borderColor='#34b29a'>
        <Box
          width='100%'
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Box width='100%' minWidth={400}>
          <Typography className={classes.title} variant='h5'>Huella de Carbono</Typography>
            <Grid
              container
              spacing={5}
              direction='row'
              justifyContent='center'
              alignItems='center'
            >
              <Grid item container spacing={1}justifyContent='center'>
                <Grid item md={5}>
                  <Box component='img' height='60vh' src={IlustracionCarbono} />
                </Grid>
                <Grid item md={6}>
                  <List disablePadding>
                    <div className={classes.titleContainer}>
                      <ListItem>
                        <ListItemIcon>
                          <RadioButtonUncheckedIcon
                            fontSize='large'
                            className={classes.icon}
                          />
                        </ListItemIcon>
                        <Typography variant='h3'>
                          ¿Qué es la huella de carbono?
                        </Typography>
                      </ListItem>
                    </div>
                    <Box marginLeft={7}>
                    <Typography variant='h2'>
                      Es la medición de emisiones de gases efecto invernadero
                      que una organización genera y su valor se expresa en masa
                      CO2 equivalente.
                    </Typography>
                    </Box>
                    <div className={classes.titleContainer}>
                      <ListItem>
                        <ListItemIcon>
                          <RadioButtonUncheckedIcon
                            fontSize='large'
                            className={classes.icon}
                          />
                        </ListItemIcon>

                        <Typography variant='h3'>
                          ¿Dónde se emiten gases efecto invernadero?
                        </Typography>
                      </ListItem>
                    </div>
                    <Box marginLeft={7}>
                    <Typography variant='h2'>
                      Es las cadenas de proveedores, en los procesos
                      productivos, industrialización, empaque, transporte,
                      distribución y disposición final de residuos.
                    </Typography>
                    </Box>
                    <div className={classes.titleContainer}>
                      <ListItem>
                        <ListItemIcon>
                          <RadioButtonUncheckedIcon
                            fontSize='large'
                            className={classes.icon}
                          />
                        </ListItemIcon>

                        <Typography variant='h3'>
                          ¿Para qué sirve medirla?
                        </Typography>
                      </ListItem>
                    </div>
                    <Box marginLeft={7}>
                    <Typography variant='h2'>
                      Para gestionar y conocer los aumentos de emisiones e
                      identificar puntos críticos para reducir los impactos
                      ambientales. No es comparable y es opcional comunicarlo
                    </Typography>
                    </Box>
                  </List>
                </Grid>
              </Grid>
              <Grid
                item
                container
                direction='row'
                justifyContent='center'
                alignItems='center'
                md={12}
              >
                <ProduccionResponsableFooter />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </BorderWrapper>
    </div>
  );
};

export default HuellaCarbono;
