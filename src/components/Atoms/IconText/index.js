import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    color: theme.palette.text.button,
  },

}));
const IconText = ({ Icon, text }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Icon />
      <Typography>{text ? <Typography>{text}</Typography> : null}</Typography>
    </div>
  );
};
export default IconText;
