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
      <Box
        width='100%'
        display='flex'
        flexDirection='column'
        justifyContent='flex-start'
        alignItems='flex-start'
      >
        <Typography variant='h3' className={classes.tittle}>
          {label}
        </Typography>

        <IconText Icon={PhoneIcon} text={number} />
        <Typography className={classes.horario}>HORARIO DE ATENCIÓN</Typography>
        <Typography> {schedule} </Typography>
      </Box>
    </>
  );
};

export default CallCenter;
