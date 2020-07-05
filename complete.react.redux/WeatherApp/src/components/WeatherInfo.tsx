import React, { Component } from "react";

export interface WeatherInfoProps {
  location?: string;
  temp?: number;
  isLoading: boolean;
}

export class WeatherInfo extends Component<WeatherInfoProps, {}> {
  static defaultProps: WeatherInfoProps = { isLoading: false };

  render() {
    const { isLoading, location, temp } = this.props;

    function renderMessage() {
      let message = <p>Please specify a location.</p>;
      if (isLoading) {
        message = <p>Fetching weather data...</p>;
      } else if (location) {
        if (temp !== undefined) {
          message = <p>It's {temp} in {location}.</p>;
        } else {
          message = <p>Failed to fetch weather data for location {location}</p>;
        }
      }

      return message;
    };

    return <div className="weather-info">{renderMessage()}</div>;
  }
}
