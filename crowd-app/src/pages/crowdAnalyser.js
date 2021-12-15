import React from 'react';

const CrowdAnalyser = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >

    <img src={ require('../TestImages/crowd.jpg') } />
      <h1>Show Number</h1>
    </div>
  );
};

export default CrowdAnalyser;
