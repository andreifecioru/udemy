import React, { Component } from "react";

import { Navigation} from "./Navigation";


export class Main extends Component<{}, {}> {
  render() {
    return (
      <div>
        <Navigation />
        <div className="grid-container">
          <div className="grid-x">
            <div className="cell medium-3 large-4 small-0" ></div>
            <div className="cell medium-6 large-4">
              { this.props.children }
            </div>
          </div>
        </div>
      </div>
    );
  }
}