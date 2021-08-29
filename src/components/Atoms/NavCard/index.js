import React from "react";
import {
  CardActionArea,
  Box,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 30,
    height: 120,
    width: "100%",
  },
}));

const NavCard = ({ image, tittle, subtittle, link }) => {
  const classes = useStyles();
  return (
    <>
      <CardActionArea component={RouterLink} to={link} elevation={0}>
        <CardMedia image={image} className={classes.root} />
      </CardActionArea>
      <Box textAlign="center" m={2}>
        <Typography>{tittle}</Typography>
        <Typography>{subtittle}</Typography>
      </Box>
    </>
  );
};

export default NavCard;
