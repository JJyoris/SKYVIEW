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
    
    borderRadius: 30,
  },
  media: {
    height: 120,
    width: "auto",
  
  },


}));

const NavCard = ({ image, tittle , subtittle }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root} elevation={0}>
        <CardActionArea className={classes.card}>
          <CardMedia image={image} className={classes.media} />
        </CardActionArea>
      </Card>

      <Box textAlign="center"  m={2} >
       
        <Typography >{tittle}</Typography>
        <Typography >{subtittle}</Typography>
      </Box>
       
    </>
  );
};

export default NavCard;
