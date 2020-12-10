import React from "react";

const SeasonDisplay = (props) => {
  return (
    <div className="ui message">
      <div className="header">
        Current season status
      </div>
      <p>It is {props.season}.</p>
    </div>
  );
};

export default SeasonDisplay;