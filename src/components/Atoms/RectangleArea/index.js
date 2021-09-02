import { makeStyles, Typography, Box, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    shape: {
        
        width: 300,
        height: 550,
        borderRadius: 45,
        
      },
      container:{
          marginTop: 20,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
      }
}));




const RectangleArea = ({Icon, title, subtitle, color}) => {

    const classes = useStyles();
    return (
        <div className={classes.shape} style={{backgroundImage: `linear-gradient(to bottom, ${color}, #fff)`}} >
            <div className={classes.container}>
            <Icon style={{width: 130, color: '#fff' }}/>
            <Typography variant="h5" align="center" style={{fontSize: 30,color: '#fff'}}>
                {title}
            </Typography>
            <Typography variant="h3" align="center" style={{color: '#fff'}}>
                {subtitle}
            </Typography>
            </div>
        </div>
    )
}

export default RectangleArea
