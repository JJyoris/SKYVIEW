import React from "react";
import { makeStyles, Grid, Button, Typography, Box } from "@material-ui/core";
import FormFields from "../../Molecules/FormFIelds";
import formOptions from "../../../utils/formOptions";
import callCenterOptions from "../../../utils/callCenterOptions";
import CallCenter from "../../Molecules/LayoutCallCenter";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "auto",
    display: "flex",
    paddingTop: 70,
  },
}));

const Contact = () => {
  const classes = useStyles();

  const getcallCenterOptions = () => {
    return callCenterOptions.map(({ label, number, schedule }) => {
      return <CallCenter label={label} number={number} schedule={schedule} />;
    });
  };

  const getFormOptions = () => {
    return formOptions.map(({ label, type, id }) => {
      return label === "Mensaje" ? (
        <FormFields label={label} type={type} id={id} multiline minRows={5} />
      ) : (
        <FormFields label={label} type={type} id={id} />
      );
    });
  };

  return (
    <div id='contacto' className={classes.root}>
      <Box
        width='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Box width='80%' >
          <Grid
            container
            spacing={4}
            direction='row'
            alignItems='flex-start'
            justifyContent='center'
          >
            <Grid container spacing={2} item xs={12} md={6}>
              <Typography gutterBottom variant='h3'>
                Contacto
              </Typography>
              <Grid item xs={12}>
                {getFormOptions()}
              </Grid>

              <Grid item xs={12}>
                <Button variant='contained' color='primary'>
                  Enviar
                </Button>
              </Grid>
            </Grid>

            <Grid container spacing={2} item xs={12} md={6}>
              <Typography variant='h3'>Call Center</Typography>
              <Grid item xs={12}>
                {getcallCenterOptions()}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Contact;
