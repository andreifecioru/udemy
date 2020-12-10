import React from "react";

const LoadingMessage = (props) => {
  return (
    <div className="ui icon message">
      <i className="notched circle loading icon"></i>
      <div className="content">
        <div className="header">Plase wait</div>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default LoadingMessage;
