import * as React from "react";
import * as ReactDOM from "react-dom";
import $ from "jquery";

const Foundation = require("foundation-sites");

import { AppContainer } from "./components/AppContainer";


import "foundation-sites/dist/css/foundation.min.css";
import "./styles/global.scss";

const compilerName = "TypeScript";

$(document).foundation();

ReactDOM.render(
  <AppContainer />,
  document.getElementById("app")
);