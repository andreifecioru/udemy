import React, { Component } from "react";
import $ from "jquery";

const Foundation = require("foundation-sites");

export interface ErrorModalProps {
  message: string;
}

export class ErrorModal extends Component<ErrorModalProps, {}> {
  componentDidMount() {
    const modal = new Foundation.Reveal($("#error-modal"));
    modal.open();
  }

  render() {
    const { message } = this.props;

    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal>
        <h4>Failed to fetch weather info</h4>
        <p>
          `ERROR: ${message}`
        </p>
        <button className="button hollow" data-close data-toggle="">OK</button>
      </div>
    );
  }
}