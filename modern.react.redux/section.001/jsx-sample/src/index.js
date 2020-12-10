import React from "react";
import ReactDOM from "react-dom";

// functional React component
const App = () => {
  return <div>Hi there!</div>;
};

// render to the DOM
ReactDOM.render(<App />, document.querySelector("#root"));
