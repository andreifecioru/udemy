import React, { Component, FormEvent } from "react";


export interface WeatherFormData {
  location: string;
}

export interface UpdateWeatherFormDataHandler {
  (formData: WeatherFormData): void;
}

export interface WeatherFormProps {
  onUpdateFormData: UpdateWeatherFormDataHandler; 
}

export class WeatherForm  extends Component<WeatherFormProps, {}> {
  static defaultProps: WeatherFormProps = {
    onUpdateFormData(formData) {
      console.log(`Getting weather info for ${formData.location}`);
    }
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();

    const $city = this.refs.city as HTMLInputElement;

    if ($city.value.length > 0) {
      const city = $city.value;
      this.props.onUpdateFormData({location: city});
    }
  }

  render() {
    const onSubmitHandler = this.handleSubmit.bind(this);

    return (
      <form onSubmit={onSubmitHandler}>
        <input type="text" placeholder="Enter city name" ref="city"/>
        <button type="submit" className="button expanded hollow">Fetch Weather</button>
      </form>
    );
  }
}