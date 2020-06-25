import React, { Component } from "react";

export interface FullNameStatusProps {
  firstName: string;
  lastName: string
}

export class FullNameStatus extends Component<FullNameStatusProps, {}> {
  static defaultProps: FullNameStatusProps = {
    firstName: "n/a",
    lastName: "n/a"
  }

  render() {
    return (
        <p>Your full name is: {`${this.props.firstName} ${this.props.lastName}`}</p>
    );
  }
}