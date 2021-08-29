import React from "react";
import { makeStyles, Grid, Button, Typography } from "@material-ui/core";
import FormFields from "../../Molecules/FormFIelds";
import formOptions from "../../../utils/formOptions"
import callCenterOptions from "../../../utils/callCenterOptions";
import CallCenter from "../../Molecules/LayoutCallCenter";


const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    paddingTop: 70,
  },
}));

const Contact = () => {
  const classes = useStyles();
  
  const getcallCenterOptions=()=>{
    return callCenterOptions.map(({label, number, schedule})=>{
      return (
        <CallCenter label={label} number={number} schedule={schedule}/>

      )
    })

  }

  const getFormOptions = () => {
    return formOptions.map(({ label, type, id }) => {
      return label === "Mensaje *" ? (
        <Grid item xs={12}>
          {" "}
          <FormFields label={label} type={type} id={id} multiline minRows={5} />
        </Grid>
      ) : (
        <Grid item xs={12}>
          {" "}
          <FormFields label={label} type={type} id={id} />
        </Grid>
      );
    });
  };
  
  return (
    <div id="contacto" className={classes.root}>
      <Grid container spacing={0} direction="row" alignItems="flex-start" justifyContent="center"  >
        <Grid container direction="column" spacing={1} item xs={12} md={4}>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h3">
              {" "}
              Contacto{" "}
            </Typography>
          </Grid>
          {getFormOptions()}

          <Grid item>
            <Button variant="contained" color="primary">
              Enviar
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid container direction="row" spacing={1} item xs={12} md={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3"> Call Center </Typography>
          </Grid>
          {getcallCenterOptions()}

        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
