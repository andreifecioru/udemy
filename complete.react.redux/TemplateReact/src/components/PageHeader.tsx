import React, { Component } from "react";

import react_img from "../images/react.jpg";
import "../styles/page_header.scss";

export interface PageHeaderProps {
  compiler: string;
  framework: string;
}


export class PageHeader extends Component<PageHeaderProps, {}> {
  static defaultProps: PageHeaderProps = {
    compiler: "Compiler",
    framework: "Framework"
  }

  render() {
    return (
      <div>
        <h1>
          Hello from {this.props.compiler} and {this.props.framework}!
        </h1>
        <img className="banner" src={react_img} />
      </div>
    );
  }
}