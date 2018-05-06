"use strict";

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    { id: "andrei" },
    "Andrei is really, trully the best!"
  ),
  React.createElement(
    "p",
    null,
    "This is some info"
  ),
  React.createElement(
    "p",
    null,
    "This is some other info"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item 1"
    ),
    React.createElement(
      "li",
      null,
      "Item 2"
    ),
    React.createElement(
      "li",
      null,
      "Item 3"
    )
  )
);

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Andrei Fecioru"
  ),
  React.createElement(
    "p",
    null,
    "Age: 36"
  ),
  React.createElement(
    "p",
    null,
    "Location: Bucharest"
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
