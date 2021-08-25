import React from "react";
import {
  Card,
  CardActionArea,
  Box,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    borderRadius: 30,
  },
  media: {
    height: 130,
    width: "auto",
  },
}));

const NavCard = ({ image, tittle }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root} elevation={0}>
        <CardActionArea className={classes.card}>
          <CardMedia image={image} className={classes.media} />
        </CardActionArea>
      </Card>

      <Box textAlign="center">
        <Typography>{tittle}</Typography>
      </Box>
    </>
  );
};

export default NavCard;
