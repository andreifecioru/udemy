import React, { Component } from "react";

import { PageHeader } from "./PageHeader";
import { NameForm, NameFormData } from "./NameForm";
import { FullNameStatus } from "./FullNameStatus";

export interface AppContainerState {
  firstName: string,
  lastName: string
}

export class AppContainer extends Component<{}, AppContainerState> {
  constructor(props: object) {
    super(props);

    this.state = {
      firstName: "n/a",
      lastName: "n/a",
    }
  }

  onNameUpdate(formData: NameFormData) {
    this.setState({
      firstName: formData.firstName.toUpperCase(),
      lastName: formData.lastName.toUpperCase()
    });
  }

  render() {
    return (
      <div className="main">
        <PageHeader compiler="TypeScript" framework="React" />
        <NameForm onNameUpdate={this.onNameUpdate.bind(this)} />
        <hr></hr>
        <FullNameStatus 
          firstName={this.state.firstName}
          lastName={this.state.lastName} />
      </div>
    );
  }
}