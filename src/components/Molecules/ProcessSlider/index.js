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
    height:"auto"

  },

}));


const ProcessSlider = () => {
  const classes = useStyles();

  const settings = {
    arrows: true,
    color:"black",
    dots: false,
    infinity: true,
    // speed: 2000,
    slidesToShow: 2,   
    // centerMode:true,   
    initialSlide: 11,
    autoplay: false,
  };


  return (
    
        <Slider {...settings} style={{ height: "100%"  }} >
          {processImage.map(({ name, url }) => {
            return (
              <div key={name} >
           
                  <img src={url} alt={name} className={classes.img}  />
               
              </div>
            );
          })}
        </Slider>
       
 
    
  );
};

export default ProcessSlider;
