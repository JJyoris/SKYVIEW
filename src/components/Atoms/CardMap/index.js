import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardActions,
  Button,
  CardContent,
  makeStyles,
  Grid,
  Box,
  Modal
} from "@material-ui/core";
import ScheduleIcon from "@material-ui/icons/Schedule";
import image from "../../../assets/img-nh.png";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    borderRadius:10
  },
  content: {
    color: theme.palette.primary,
  },
  button:{
      marginBottom:4  }
}));

const CardMap = ({open, handleClose}) => {
  const classes = useStyles();
  return (
    <Modal
    open={open}
    onClose={handleClose}
    className="modal"
   
  >
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Historia"
          image={image}
          title="Historia de Agrosuper"
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="h2">
            Historia
          </Typography>
          <Typography variant="h2" className={classes.content} component="p">
            <Box lineHeight={1.5}>
            Nuestros planteles de crianza cuentan con la más avanzada tecnología
            por que stamos 100% comprometidos con el bienestar animal, velando
            por el cumplimiento de las 5 libertades propuestas por la
            Organización Mundial de Sanidad Animal (OIE).
            </Box>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions pt={0} >
        <Grid container  alignItems="center" className={classes.button}>
        <ScheduleIcon />
        <Button size="small" color="primary">
          Agenda tu visita
        </Button>
        </Grid>
      </CardActions>
    </Card>
    </Modal>
  );
};

export default CardMap;
