import React from "react";
import { makeStyles, Box, Card } from "@material-ui/core";
import Slider from "react-slick";
import processImage from "../../../utils/processImage";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    backgroundColor: "transparent",
   
  },
  img: {
    height: "100%",
    width: "100%",
  

    [theme.breakpoints.down("md")]: {
      width: "260px",
      height: "260px",
    },

    [theme.breakpoints.down("xs")]: {
      width: "200px",
      height: "200px",
    },
  },
  slickContainer: {
    marginRight: "35px",
    marginLeft: "35px",
    marginTop: "15px",
  },
  slider:{
      color:theme.palette.text.primary
  }
}));

const ProcessSlider = () => {
  const classes = useStyles();

  const settings = {
    arrows: true,
    dots: true,
    infinity: false,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
  };


  return (
    <Box className={classes.slickContainer}>
      <Slider {...settings} className={classes.slider} >
        {processImage.map(({ name, url }) => {
          return (
            <div key={name}>
              <Card className={classes.root} elevation={0}>
                <img src={url} alt={name} className={classes.img} />
              </Card>
            </div>
          );
        })}
      </Slider>
    </Box>
  );
};

export default ProcessSlider;
