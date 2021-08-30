import React from "react";
import {
  CardActionArea,
  Box,
  CardMedia,
  CardContent,
  Card,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 30,
    height:130,
    maxWidth: 160,
    width: "100%",
  },
}));

const NavCard = ({ image, tittle, subtittle, link }) => {
  const classes = useStyles();
  return (
    <>
      <CardActionArea
        style={{ with: "100%" }}
        component={RouterLink}
        to={link}
        elevation={0}
      >
        <Box display='flex' justifyContent='center' alignItems='center'>
          <CardMedia image={image} className={classes.root} />
        </Box>
      </CardActionArea>

      <CardContent>
        <Box textAlign='center' mt={2}>
          <Typography>{tittle}</Typography>
          <Typography>{subtittle}</Typography>
        </Box>
      </CardContent>
    </>
  );
};

export default NavCard;
