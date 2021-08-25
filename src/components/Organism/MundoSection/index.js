import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import NavCard from '../../Atoms/Card'
import farm from '../../../assets/images.jpg'
import farm1 from '../../../assets/descargar.jpg'

const useStyles = makeStyles((theme)=>({
    root:{
        height: "50vh",
        paddingLeft:100,
        paddingRight:100
        
    }

}))

const MundoSection = () => {
    const classes  = useStyles();
    return (
        <div id="mundo-as" className={classes.root}>
            <Grid
            container
            spacing={0} 
            justify="center"
           >
                <Grid container spacing={10} item xs={12}>                        
                    <Grid item lg={2} md={4} sm={6} xs={12}>
                        <NavCard image={farm1} tittle="titulo1"/>
                    </Grid>
                    <Grid item lg={2} md={4} sm={6} xs={12}>
                        <NavCard image={farm1} tittle="titulo2"/>
                    </Grid>
                    <Grid item lg={2} md={4} sm={6} xs={12}>
                        <NavCard image={farm1} tittle="titulo3"/>
                    </Grid>
                    <Grid item lg={2} md={4} sm={6} xs={12}>
                        <NavCard image={farm1} tittle="titulo4"/>
                    </Grid>
                    <Grid item lg={2} md={4} sm={6} xs={12}>
                        <NavCard image={farm1} tittle="titulo5"/>
                    </Grid>
                    <Grid item lg={2} md={4} sm={6} xs={12}>
                        <NavCard image={farm1} tittle="titulo6"/>
                    </Grid>
                        
                </Grid>

            </Grid>
          
        </div>
    )
}

export default MundoSection
