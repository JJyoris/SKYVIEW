import { makeStyles, Typography, Box, Grid } from "@material-ui/core";
import SvgIcon from '@material-ui/core/SvgIcon';
const useStyles = makeStyles((theme) => ({
  shapeCircle: {
    display: "flex",
    width: 230,
    height: 230,
    borderRadius: "50%",
  },
  intertnalBox: {
    borderRadius: "50%",
    width: 210,
    height: 210,
    margin: "auto",
    boxShadow: "inset 0 0 0 1px  #fff",
  },
  container:{
    display: 'flex',
    flexDirection:"column",
    justifyContent:"center",
     alignItems:"center"
  }
}));

const CircleArea = ({ Icon, title, backgroundColor }) => {
  const classes = useStyles();
  return (
    <div className={classes.shapeCircle} style={{backgroundColor: backgroundColor}}>
      <div className={classes.intertnalBox}>
     
            <Box width="100%" className={classes.container}>
            <Icon style={{fontSize: 170, color: '#fff'}} />
     


            <Typography style={{color: '#fff'}} variant='h2'>
              {title}
            </Typography>
            </Box>
      </div>
    </div>
  );
};

export default CircleArea;
