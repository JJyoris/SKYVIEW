import React from "react";
import ReactPlayer from "react-player";
const Produccion = () => {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=mFJZ0HaYYB8"
      config={{
        youtube: {
          playerVars: {controls: 2 },
        },
      }}
    />
  );
};

export default Produccion;
