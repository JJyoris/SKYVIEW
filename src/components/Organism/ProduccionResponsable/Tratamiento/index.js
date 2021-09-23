import React from "react";
import { makeStyles, Box, Grid, Typography } from "@material-ui/core";
import ReactPlayer from "react-player";
import BorderWrapper from "../../../Atoms/BorderWrapper";
import CircleArea from "../../../Atoms/CircleArea";
import { ReactComponent as PRIcon1 } from "../../../../assets/PR-icn1.svg";
import { ReactComponent as PRIcon2 } from "../../../../assets/PR-icn2.svg";
import { ReactComponent as PRIcon3 } from "../../../../assets/PR-icn3.svg";
import { ReactComponent as PRIcon4 } from "../../../../assets/PR-icn4.svg";
import { ReactComponent as PRIcon5 } from "../../../../assets/PR-icn5.svg";
import { ReactComponent as PRIcon6 } from "../../../../assets/PR-icn6.svg";
import { ReactComponent as PRIcon7 } from "../../../../assets/PR-icn7.svg";
import produccion from "../../../../assets/produccion_responsable.jpg";
import bioabono from "../../../../assets/bioabono.png";

const useStyles = makeStyles((theme) => ({

  background: {
    height: "70vh",
  },
  video: {
    borderRadius: 20,
    overflow: "hidden",
  },
  gridContainer: {
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  tittle: {
    fontSize: 28,
    color:"#728292"
  },
  subtittle: {
    fontSize: 22,
    color:"#728292"
  },
}));

const ProcesosTratamiento = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BorderWrapper borderColor="#34b29a">
        <Box
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box width="90%" minWidth={200}>
            <Grid
              container
              direction="row"
              spacing={5}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} md={6}>
                <Grid
                  container
                  direction="column"
                  spacing={5}
                  justifyContent="center"
                  alignItems="center"
                  className={classes.gridContainer}
                >
                  <img src={produccion} alt="produccion" width="100%" />
                </Grid>
              </Grid>
              
              <Grid
                item
                container
                xs={12}
                md={6}
                justifyContent="center"
                alignItems="center"
              >
                <Typography variant="h3" className={classes.tittle}>
                  Impacto positivo en el medio ambiente
                </Typography>
                <Typography variant="h4" gutterBottom className={classes.subtittle}>
                  gracias a diferentes procesos de tratamiento
                </Typography>
                <img src={bioabono} width="80%"></img>
              </Grid>
              
            </Grid>
          </Box>
        </Box>
      </BorderWrapper>
    </div>
  );
};

export default ProcesosTratamiento;
