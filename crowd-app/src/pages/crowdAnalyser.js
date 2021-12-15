import React from "react";

const CrowdAnalyser = () => {
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
        <img src={require("../TestImages/crowd.jpg")} width={400} />
        
      </div>
      
      <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>
        <h2> Number of people: {} </h2>
        <h2> Estimated queue time: {} </h2>
      </div>
    </>
  );
};

export default CrowdAnalyser;
