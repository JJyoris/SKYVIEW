import { useState, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  useMediaQuery,
  IconButton,
  Box,
  Drawer,
  Popper,
  MenuItem,
  Grow,
  ClickAwayListener,
  MenuList,
  Paper,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Link as Scroll } from "react-scroll";
import DrawerMenu from "../../Molecules/DrawerMenu";

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
  logo: {
    flexGrow: 1,
  },
  appBarWrapper: {
    marginRight: theme.spacing(10),
    marginLeft: theme.spacing(10),
  },
  
}));
const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    console.log("aqui");
    setOpen(!open);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const getOptions = () => {
    return headerOptions.map(({ label, href }) => {
      return (
        <Scroll to={href} smooth={true} key={label}>
          <Box ml={10}>
            <Typography>{label}</Typography>
          </Box>
        </Scroll>
      );
    });
  };

  const displayDesktop = () => {
    return (
      <>
        <Toolbar className={classes.appBarWrapper}>
          <Scroll to="header" smooth={true} className={classes.logo}>
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

  const displayMobile = () => {
    return (
      <>
        <Toolbar className={classes.appbarWrapper}>
          <Scroll to="header" smooth={true} className={classes.logo}>
            LOGO
          </Scroll>
          <IconButton color="inherit" onClick={handleToggle} ref={anchorRef}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <DrawerMenu
            headerOptions={headerOptions}
            open={open}
            onClose={handleClose}
            onClick={handleToggle} 
            
          />
      </>
    );
  };

  return (
    <div id="header">
      <AppBar elevation={0}>
        {isMobile ? displayMobile() : displayDesktop()}
      </AppBar>
    </div>
  );
};

export default Header;
