import React from 'react'
import libertades from "../../../assets/5_libertades.png"
import ReactPlayer from 'react-player'
import { Grid, Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    root: {
        paddingTop: 50,
        height: 'auto'
      },
      image: {
        maxWidth: 400,
        height: "auto",
      },
      title: {
        color: theme.palette.text.button,
      },
      subtitle: {
        fontSize: 28,
      },
      gridContainer: {
        [theme.breakpoints.down("md")]: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: 'center'
        },
      },
      video:{
        borderRadius:20,
        overflow: "hidden",    
      },
}))

const Libertades = () => {
    const classes = useStyles();
    return (
        <div id="libertades"  className={classes.root}>
   <Box
        width='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Box width='80%' minWidth={200}>
          <Grid container direction='row' spacing={5}>

          
            <Grid item xs={12} md={6} justifyContent="center" alignItems="center">
              <ReactPlayer url="https://youtu.be/MwFJN82kTUQ"  width="700px" height="470px" className={classes.video} />
            </Grid>

            <Grid item xs={12} md={5}>
              <Grid
                container
                direction='column'
                spacing={5}
                justifyContent='center'
                alignItems='center'
                className={classes.gridContainer}
              >

                <Grid item>
                  <img
                    src={libertades}
                    alt='libertades'
                    className={classes.image}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>

        </div>
    )
}

export default Libertades
