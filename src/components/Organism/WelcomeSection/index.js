import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    root:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        },
    toolbar: theme.mixins.toolbar

}))

const WelcomeSection = () => {
    const classes = useStyles();
    return (
        <div id="home" className={classes.root}>
            <div className={classes.toolbar}>
                MAPA

            </div>
           
            
        </div>
    )
}

export default WelcomeSection
