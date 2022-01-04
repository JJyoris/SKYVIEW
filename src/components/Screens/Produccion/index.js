import React from "react";
import ReactPlayer from "react-player";
const Produccion = () => {
  return (
    <ReactPlayer
      // Disable download button
      config={{ file: { attributes: { controlsList: 'nodownload' } } }}

      // Disable right click
      onContextMenu={e => e.preventDefault()}
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
