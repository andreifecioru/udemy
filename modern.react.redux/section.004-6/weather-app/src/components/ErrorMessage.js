import React from "react";

const ErrorMessage = (props) => {
  const { title, text } = props
  return(
    <div className="ui negative message">
      <div className="header">{title}</div>
      <p>{text}</p>
    </div>
  );
};

export default ErrorMessage;