import React from "react";
import Iframe from "react-iframe";
import BorderWrapper from "../../Atoms/BorderWrapper";
const OficinaCentral = () => {
    const OficinaIframe =()=>{
        return (
                 
        <Iframe
        url="https://storage.net-fs.com/hosting/6457119/60/"
        height="100%"
        width="100%"
        id="OficinaCentralVR" 
  
      />
        )
    }
  return (
    <BorderWrapper borderColor="#22d7d9" >
        < OficinaIframe />
     
    </BorderWrapper>
  );
};

export default OficinaCentral;
