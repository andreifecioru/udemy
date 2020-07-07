import * as React from "react";
import * as ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import $ from "jquery";

const Foundation = require("foundation-sites");

import { Navigation } from "./components/Navigation";
import { Weather } from "./components/Weather";
import { Examples } from "./components/Examples";
import { About } from "./components/About";

import "foundation-sites/dist/css/foundation.min.css";

$(document).foundation()

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={ Weather } />
      <Route path="/weather" component={ Weather } />
      <Route path="/examples" component={ Examples } />
      <Route path="/about" component={ About } />
    </Switch>
  </Router>,
  document.getElementById("app")
);