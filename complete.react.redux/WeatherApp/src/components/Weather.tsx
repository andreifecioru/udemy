import React, { Component } from "react";

import { WeatherForm, WeatherFormData } from "./WeatherForm";
import { WeatherInfo } from "./WeatherInfo";
import { fetchWeatherData, IWeatherData } from "../api/openWeatherMap";

import "../styles/weather.scss";

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
      <main className="weather">
        <div className="title">Get Weather Info</div>
        <WeatherForm onUpdateFormData={this.onFormUpdate}/>
        <WeatherInfo 
          location={this.state.location}
          temp={this.state.temp}
          isLoading={this.state.isLoading}
        />
      </main>
    );
  }
}