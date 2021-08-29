import React from "react";
import { Grid, Typography, makeStyles, Box } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import IconText from "../../Atoms/IconText";
const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 10,
  },

  horario: {
    color: theme.palette.text.secondary,
    fontSize: 12,
  },
  tittle: {
    fontSize: 14,
  },
}));

const CallCenter = ({ label, number, schedule }) => {
  const classes = useStyles();
  return (
    <>
      {" "}
      <Grid container direction="row" className={classes.root}>
        <Grid item xs={12}>
          <Typography variant="h3" className={classes.tittle}>
            {label}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <IconText Icon={PhoneIcon} text={number}  />
          <Typography className={classes.horario}>
            HORARIO DE ATENCIÓN
          </Typography>
          <Typography> {schedule} </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default CallCenter;
