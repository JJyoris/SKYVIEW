import { Grid , makeStyles, Box} from '@material-ui/core'
import React from 'react'
import ReactPlayer from 'react-player'
import  alimentacion from '../../../assets/Alimentacion.png'
import cuidados from '../../../assets/Cuidados.png'

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
}))

const Granja = () => {
    const classes = useStyles();
    return (
        <div id="granja"  className={classes.root}>
   <Box
        width='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Box width='80%' minWidth={200}>
          <Grid container direction='row' spacing={1}>
            <Grid item xs={12} md={5}>
              <Grid
                container
                direction='column'
                spacing={5}
                className={classes.gridContainer}
              >
                <Grid item>
                 <img src={alimentacion} alt="alimentacion" className={classes.image} />
        
                </Grid>

                <Grid item>
                  <img
                    src={cuidados}
                    alt='cuidados'
                    className={classes.image}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={0} md={1}></Grid>
            <Grid item xs={12} md={6} justifyContent="center" alignItems="center">
              <ReactPlayer url="https://youtu.be/5PA4D9NyQTo"  width="700px" height="470px" />
            </Grid>
          </Grid>
        </Box>
      </Box>

        </div>
    )
}

export default Granja
