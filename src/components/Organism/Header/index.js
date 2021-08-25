import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  useMediaQuery,
  IconButton,
  Box,
} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Link as Scroll } from "react-scroll";

const headerOptions = [
  {
    label: "HOME",
    href: "header",
  },
  {
    label: "MUNDO AS",
    href: "mundo-as",
  },
  {
    label: "AGENDA",
    href: "agenda",
    
  },
  {
    label: "CONTACTO",
    href: "contacto",
    
  },

];
const useStyles = makeStyles((theme) => ({
  options: {
    display: "flex",
    marginRight: theme.spacing(10),
    cursor: "pointer",
  },
  logo:{
      flexGrow:1
  },
  appBarWrapper:{
    marginRight: theme.spacing(10),
    marginLeft: theme.spacing(10),
  }
}));
const Header = () => {
  const classes = useStyles();

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const getOptions = () => {
    return headerOptions.map(({ label, href }) => {
      return (
        <Scroll to={href} smooth={true}>
          <Typography>
            <Box ml={10}> {label}</Box>
          </Typography>
        </Scroll>
      );
    });
  };

  const displayDesktop = () => {
    return (
      <>
        <Toolbar className={classes.appBarWrapper}>
          <Scroll to="header" smooth={true} className={classes.logo} >
            LOGO          
          </Scroll>
          <div className={classes.options}>{getOptions()}</div>
          <IconButton color="inherit">
            <MoreHorizIcon />
          </IconButton>
        </Toolbar>
      </>
    );
  };

  return (
    <div id="header">
      <AppBar elevation={0} >{isMobile ? displayDesktop() : displayDesktop()}</AppBar>
    </div>
  );
};

export default Header;
