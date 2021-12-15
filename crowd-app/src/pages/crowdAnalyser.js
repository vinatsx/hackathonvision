import React, { useState, useEffect } from "react";

const CrowdAnalyser = () => {

  const [crowdNumber, setCrowdNumber] = useState(0);

  
  // fetches crowdNumber on page refresh or clicking into 
  // the Check Crowd button from the home page.
  // TODO: trigger effect/rerender when navbar button is clicked
  useEffect(() => {console.log("running");
    fetch('/crowd').then(res => res.json()).then(data => {
      setCrowdNumber(data.crowdCount); 
    });
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
          flexDirection: "column",
        }}
      >
        <img src={require("../TestImages/crowd.jpg")} alt="live crowd" width={400} />
        
      </div>
      
      <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>
        <h2> Number of people: {crowdNumber} </h2>
      </div>
    </>
  );
};

export default CrowdAnalyser;
