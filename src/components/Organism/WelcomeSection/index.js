import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    root:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
    }

}))

const WelcomeSection = () => {
    const classes = useStyles();
    return (
        <div id="home" className={classes.root}>
            MAPA
            
        </div>
    )
}

export default WelcomeSection
