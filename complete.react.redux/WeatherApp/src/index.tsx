import * as React from "react";
import * as ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

import { Home } from "./components/Home";
import { About } from "./components/About";
import { Navigation } from "./components/Navigation";
import { Weather } from "./components/Weather";

import "./styles/global.scss";

ReactDOM.render(
  <Router>
    <Navigation />

    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/weather" component={ Weather } />
      <Route path="/about" component={ About } />
    </Switch>
  </Router>,
  document.getElementById("app")
);