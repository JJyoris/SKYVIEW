import React from "react";
import {
  Card,
  CardActionArea,
  Grid,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 150,
    borderRadius: 30,
  },
  media: {
    padding: "56.25%",
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
      <Grid container justify="center" direction="row" alignItems="center">
        <Grid item>
          <Typography>{tittle}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default NavCard;
