import { makeStyles, Typography, Box, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  shape: {
    padding: 15,
    width: 700,
    height: 130,
    borderRadius: 45,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  container: {
    width: 550,
    
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
}));

const RectangleArea = ({ Icon, title, subtitle, color }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.shape}
      style={{
        backgroundImage: `linear-gradient(to right, ${color} 40%, transparent 90%)`,
      }}
    >
      <div className={classes.container}>
        <Icon style={{ width: 90, color: "#fff", padding: 10 }} />
        <Box
          flexDirection='column'
          alignItems='center'
          justifyContent='flex-start'
        >
          <Typography
            variant='h5'
            align='start'
            style={{ fontSize: 25, color: "#fff" }}
          >
            {title}
          </Typography>
          <Typography variant='h4' align='start' style={{ color: "#fff" }}>
            {subtitle}
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default RectangleArea;
