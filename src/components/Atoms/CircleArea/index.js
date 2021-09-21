import { makeStyles, Typography, Box, Grid } from "@material-ui/core";

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
  container: {
    padding: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  containerXS: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  shapeCircleSmall: {
    display: "flex",
    width: 190,
    height: 190,
    borderRadius: "50%",
  },
  intertnalBoxSmall: {
    borderRadius: "50%",
    width: 170,
    height: 170,
    margin: "auto",
    boxShadow: "inset 0 0 0 1px  #fff",
  },
  shapeCircleExtraSmall: {
    display: "flex",
    width: 110,
    height: 110,
    borderRadius: "50%",
  },
  intertnalBoxExtraSmall: {
    borderRadius: "50%",
    width: 90,
    height: 90,
    margin: "auto",
    boxShadow: "inset 0 0 0 1px  #fff",
  },
}));

const CircleArea = ({ Icon, title, backgroundColor, small, extraSmall }) => {
  const classes = useStyles();
  return extraSmall ? (
    <div
      className={classes.shapeCircleExtraSmall}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className={classes.intertnalBoxExtraSmall}>
        <Box width='100%'  className={classes.containerXS}>
          <Icon style={{ width: 70, color: "#fff" }} />

          <Typography style={{ color: "#fff" }} variant='h2'>
            {title}
          </Typography>
        </Box>
      </div>
    </div>
  ) : small ? (
    <div
      className={classes.shapeCircleSmall}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className={classes.intertnalBoxSmall}>
        <Box width='100%' className={classes.container}>
          <Icon style={{ width: 125, color: "#fff" }} />

          <Typography style={{ color: "#fff" }} variant='h2'>
            {title}
          </Typography>
        </Box>
      </div>
    </div>
  ) : (
    <div
      className={classes.shapeCircle}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className={classes.intertnalBox}>
        <Box width='100%' className={classes.container}>
          <Icon style={{ width: 110, color: "#fff" }} />

          <Typography style={{ color: "#fff" }} variant='h2'>
            {title}
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default CircleArea;
