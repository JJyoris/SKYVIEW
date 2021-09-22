import React from "react";
import { makeStyles, Box} from "@material-ui/core";
import Slider from "react-slick";
import processImage from "../../../utils/processImage";
import "./index.css"

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    backgroundColor: "transparent",
   
  },
   img: {
    width:"100%",
 

    [theme.breakpoints.down("md")]: {
      width: "260px",
      height: "260px",
    },

    [theme.breakpoints.down("xs")]: {
      width: "200px",
      height: "200px",
    },
  },
  // slider:{
  //     color:theme.palette.text.primary,
    
  // }
}));


const ProcessSlider = () => {
  const classes = useStyles();

  const settings = {
    arrows: true,
    color:"black",
    dots: false,
    infinity: true,
    speed: 2000,
    slidesToShow: 2,   
    // centerMode:true,   
    initialSlide: 11,
    autoplay: false,
  };


  return (
      <Box height="100%">
        <Slider {...settings} className={classes.slider} >
          {processImage.map(({ name, url }) => {
            return (
              <div key={name}>
           
                  <img src={url} alt={name} className={classes.img} width="100%"  height="100%"/>
               
              </div>
            );
          })}
        </Slider>
        </Box>
 
    
  );
};

export default ProcessSlider;
