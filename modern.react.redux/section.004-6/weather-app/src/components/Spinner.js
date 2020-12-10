import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui text big loader">{props.text}</div>
    </div>
  );
};

// default values for props
Spinner.defaultProps = {
  text: "Loading..."
};

export default Spinner;
