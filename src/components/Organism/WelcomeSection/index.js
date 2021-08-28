import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    root:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        color: "#EE7623"
        
        },



}))

const WelcomeSection = () => {
    const classes = useStyles();
    return (
        <div id="home" className={classes.root}>      
            <Box >
                <Typography variant="h3" >EXPERIENCIA SKY VIEW </Typography>  
            </Box>    
                           
            
        </div>
    )
}

export default WelcomeSection
