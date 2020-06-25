import React, { Component, FormEvent} from "react";

import "../styles/name_form.module.scss";

export interface NameFormProps {
  onNameUpdate: NameUpdateHandler;
}

export interface NameFormData {
  firstName: string,
  lastName: string
}

export interface NameUpdateHandler {
  (formData: NameFormData): void;
}

export class NameForm extends Component<NameFormProps, {}> {
  static defaultProps: NameFormProps = {
    onNameUpdate: (formData) => {
      console.log(`Name was updated: ${formData}`);
    }
  }
 
  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // extract the data from the UI controls
    const $firstName = this.refs.firstName as HTMLInputElement;
    const $lastName = this.refs.lastName as HTMLInputElement;

    // update the local state
    this.props.onNameUpdate({
      firstName: $firstName.value,
      lastName: $lastName.value
    });
  }

  
  render() {
    return (
      // NOTE: we need to bind the event handler to our component
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="firstName" placeholder="First Name" />
          <br/>
          <input type="text" ref="lastName" placeholder="Last Name" />
          <br/>
          <button type="submit">Set Name</button>
        </form>
      </div>
    );
  }
}