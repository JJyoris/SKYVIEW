import { useState, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  useMediaQuery,
  IconButton,
  Box,
  Popper,
  MenuItem,
  Grow,
  ClickAwayListener,
  MenuList,
  Paper
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
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
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

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

  const getOptionsMobile = () => {
    return headerOptions.map(({ label, href }) => {
      return (
        <MenuItem
          onClick={handleClose}
          component={Scroll}
          to={href}
          smooth={true}
        >
          {label}
        </MenuItem>
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

  const displayMobile = () => {
    return (
      <>
        <Toolbar className={classes.appbarWrapper}>
          <Scroll to="header" smooth={true} className={classes.logo} >
            LOGO          
          </Scroll>
          <IconButton color="inherit" onClick={handleToggle} ref={anchorRef}>
            <MenuIcon />
          </IconButton>

          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      {getOptionsMobile()}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Toolbar>
      </>
    );
  };

  return (
    <div id="header">
      <AppBar elevation={0} >{isMobile ? displayMobile() : displayDesktop()}</AppBar>
    </div>
  );
};

export default Header;
