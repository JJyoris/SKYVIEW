import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 150,
    borderRadius:30,
    
  },
  media: {
    height: 0,
    padding: '56.25%'
    
  },
}));

const NavCard = ({image, tittle}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={0}>
      <CardActionArea>
        <CardMedia image={image} className={classes.media} />
        
      </CardActionArea>
      <CardContent>
          <Typography>
              {tittle}
          </Typography>
      </CardContent>
    </Card>
  );
};

export default NavCard;
