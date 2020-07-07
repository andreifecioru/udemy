import React, { Component } from "react";

import { WeatherForm, WeatherFormData } from "./WeatherForm";
import { WeatherInfo } from "./WeatherInfo";
import { fetchWeatherData, IWeatherData } from "../api/openWeatherMap";
import { Main } from "./Main";

export interface WeatherState {
  location?: string;
  temp?: number
  isLoading: boolean;
}

export class Weather extends Component<{}, WeatherState> {
  constructor(props: object) {
    super(props);
    this.state = { isLoading: false };

    this.onFormUpdate = this.onFormUpdate.bind(this);
  }

  onFormUpdate(formData: WeatherFormData) {
    const location = formData.location;

    this.setState({ isLoading: true });

    fetchWeatherData(location).then(
      (data: IWeatherData) => {
        this.setState({ 
          location: location,
          temp: data.main.temp,
          isLoading: false 
        });
      },

      (error) => {
        console.log(`Failed to fetch weather data (${error})`)
        this.setState({ 
          location: location,
          temp: undefined,
          isLoading: false 
        });
      }
    );
  }

  render() {
    return (
      <Main>
        <h1 className="text-center">Get Weather Info</h1>
        <WeatherForm onUpdateFormData={this.onFormUpdate}/>
        <WeatherInfo 
          location={this.state.location}
          temp={this.state.temp}
          isLoading={this.state.isLoading}
        />
      </Main>
    );
  }
}