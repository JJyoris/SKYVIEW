import React from "react";
import { makeStyles, Box, Grid } from "@material-ui/core";
import Slider from "react-slick";
import processImage from "../../../utils/processImage";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    backgroundColor: "transparent",
   
  },
  img: {
    width:"100%",
    height:"60vh",

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
    marginRight: "20px",
    marginLeft: "20px",    
    height:"100%"
 
  },
  slider:{
      color:theme.palette.text.primary,
      marginTop: "10vh",
  }
}));

const ProcessSlider = () => {
  const classes = useStyles();

  const settings = {
    arrows: false,
    dots: true,
    infinity: false,
    speed: 2000,
    slidesToShow: 3,
    centerMode:true,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
  };


  return (
    
        <Slider {...settings} className={classes.slider} >
          {processImage.map(({ name, url }) => {
            return (
              <div key={name}>
                {/* <Card className={classes.root} elevation={0}> */}
                  <img src={url} alt={name} className={classes.img} />
                {/* </Card> */}
              </div>
            );
          })}
        </Slider>
 
    
  );
};

export default ProcessSlider;
