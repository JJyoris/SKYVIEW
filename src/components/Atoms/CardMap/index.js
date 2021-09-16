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
  Modal,
  withStyles,
} from "@material-ui/core";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    borderRadius: 10,
    outline: 0,
  },
  content: {
    color: theme.palette.primary,
  },
  button: {
    marginBottom: 4,
    color: theme.palette.text.button,
  },
}));

const StyledButton = withStyles({
  root: {
    color: "#EE7623",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

const CardMap = ({ open, handleClose, body, label, image , link}) => {
  const classes = useStyles();
  return (
    <Modal open={open} onClose={handleClose} className="modal">
      <Card className={classes.root}>
        <CardActionArea component={RouterLink} to={link}>
          <CardMedia component="img" alt={label} image={image} title={label} />
          <CardContent>
            <Typography gutterBottom variant="h3" component="h2">
              {label}
            </Typography>
            <Typography variant="h2" className={classes.content} component="p">
              <Box lineHeight={1.5}>{body}</Box>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions pt={0} className={classes.footer}>
          <Grid container alignItems="center" className={classes.button}>
            <ScheduleIcon />
            <StyledButton
              size="small"
              href="https://agendamiento.reservo.cl/makereserva/agenda/K0iTaWC0V09YBW8N2D13cda664C3UM"
              target="_blank"
              rel="noopener"
              rel="noreferrer"
            >
              Agenda tu visita
            </StyledButton>
          </Grid>
        </CardActions>
      </Card>
    </Modal>
  );
};

export default CardMap;
