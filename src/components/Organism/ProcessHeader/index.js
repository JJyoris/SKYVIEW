import React from "react";
import { AppBar, Toolbar, Box, makeStyles, Typography } from "@material-ui/core";
import headerProcessOptions from "../../../utils/headerProcessOptions";
import { Link as RouterLink , useLocation} from "react-router-dom";
import logo from "../../../assets/Logo-AGROSUPER.svg"
import logoHome from "../../../assets/icn_home.svg"
const useStyles = makeStyles((theme)=>({
    logo:{
        flexGrow:1
    },
    appbar:{
        backgroundColor:"transparent",
        color: theme.palette.text.primary
    },
    tittle:{
        fontSize:26
    }
}))

const ProcessHeader = () => {
    const location= useLocation();
    const classes = useStyles();

 

    if (location.pathname === "/") return null; 
  return (
    <AppBar elevation={0} position="sticky" className={classes.appbar}>
      <Toolbar>
        <RouterLink to="/" className={classes.logo}>
          <Box component={"img"} mt={3} ml={2} width={200} src={logo} alt=" logo" />
        </RouterLink>
        <Typography variant="h3" className={classes.tittle}>{headerProcessOptions[location.pathname]}</Typography>
        <RouterLink to="/">
          <Box component={"img"} mr={3}  ml={3} width={35} src={logoHome} alt=" logo" />
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

export default ProcessHeader;
