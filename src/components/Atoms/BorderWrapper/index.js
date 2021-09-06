import React from "react";

const BorderWrapper = ({ borderColor, children, background }) => {
  return (
    <div
      style={{
        marginRight: 30,
        height: "85vh",
        marginLeft: 30,
        padding: 30,
        border: `2px solid ${borderColor ? borderColor : "black"}`,
        borderRadius: 50,
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {children}
    </div>
  );
};

export default BorderWrapper;
