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
import IlustracionCarbono from "../../../../assets/ilus-1.png";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",
  },
  titleContainer: {
    paddingTop: 5,
    paddingBottom:5,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#eb827f",
    borderRadius: '0px 20px 20px 0px',
  },
  background: {
    height: "70vh",
  },
  video: {
    borderRadius: 20,
    overflow: "hidden",
  },
  titleContainer2: {
    marginBottom: 20,
    backgroundColor: "#66D8E350",
    width: "fit-content",
    borderRadius: 30,
  },
  icon: {
    color: "#66D8E3",
  },
  title: {
    color: "#fff",
    fontSize: 25,
  },
  text: {
    fontSize: 14,
  },
  subtittle: {
    fontSize: 20,
  },
}));

const HuellaCarbono = () => {
  const classes = useStyles();
  return (
    <div>
      <BorderWrapper borderColor="#34b29a">
        <Box
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {/* <Box width="100%" height="100%" minWidth={400}           justifyContent="center"
          alignItems="center"> */}
            <Grid
              container
              spacing={3}
              direction="row"
              justifyContent="start"
              alignItems="center"
            > 
              <Grid item xs={9} container >
              <div className={classes.titleContainer}>
                <Typography className={classes.title} variant="h5">
                  Huella de Carbono
                </Typography>
              </div>
              </Grid>
              <Grid item
                    container
                    spacing={3}
                    alignItems="center"
                    justifyContent="center">
                <Grid item md={5}>
                  <Box
                    component="img"
                    alignItems="center"
                    justifyContent="center"
                    display="flex"
                    marginLeft={"75px"}
                    height="auto"
                    src={IlustracionCarbono}
                    width="70%"
                  />
                </Grid>
                <Grid item md={6}>
                  <Box
                    justifyContent="center"
                    alignItems="center"
                    display="flex"
                    height="100%"
                  >
                    <List disablePadding>
                      <div className={classes.titleContainer2}>
                        <ListItem>
                          <ListItemIcon>
                            <RadioButtonUncheckedIcon
                              fontSize="large"
                              className={classes.icon}
                            />
                          </ListItemIcon>
                          <Typography
                            variant="h3"
                            className={classes.subtittle}
                          >
                            ¿Qué es la huella de carbono?
                          </Typography>
                        </ListItem>
                      </div>
                      <Box marginLeft={7}>
                        <Typography variant="h2" className={classes.text}>
                          Es la medición de emisiones de gases efecto
                          invernadero que una organización genera y su valor se
                          expresa en masa CO2 equivalente.
                        </Typography>
                      </Box>
                      <div
                        className={classes.titleContainer2}
                        style={{ marginTop: 45 }}
                      >
                        <ListItem>
                          <ListItemIcon>
                            <RadioButtonUncheckedIcon
                              fontSize="large"
                              className={classes.icon}
                            />
                          </ListItemIcon>

                          <Typography
                            variant="h3"
                            className={classes.subtittle}
                          >
                            ¿Dónde se emiten gases efecto invernadero?
                          </Typography>
                        </ListItem>
                      </div>
                      <Box marginLeft={7}>
                        <Typography variant="h2" className={classes.text}>
                          Es las cadenas de proveedores, en los procesos
                          productivos, industrialización, empaque, transporte,
                          distribución y disposición final de residuos.
                        </Typography>
                      </Box>
                      <div
                        className={classes.titleContainer2}
                        style={{ marginTop: 45 }}
                      >
                        <ListItem>
                          <ListItemIcon>
                            <RadioButtonUncheckedIcon
                              fontSize="large"
                              className={classes.icon}
                            />
                          </ListItemIcon>

                          <Typography
                            variant="h3"
                            className={classes.subtittle}
                          >
                            ¿Para qué sirve medirla?
                          </Typography>
                        </ListItem>
                      </div>
                      <Box marginLeft={7}>
                        <Typography variant="h2" className={classes.text}>
                          Para gestionar y conocer los aumentos de emisiones e
                          identificar puntos críticos para reducir los impactos
                          ambientales. No es comparable y es opcional
                          comunicarlo
                        </Typography>
                      </Box>
                    </List>
                  </Box>
                </Grid>
              </Grid>
              <Grid
                item
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                md={12}
              >
                
              </Grid>
            </Grid>
          {/* </Box> */}
        </Box>
      </BorderWrapper>
    </div>
  );
};

export default HuellaCarbono;
