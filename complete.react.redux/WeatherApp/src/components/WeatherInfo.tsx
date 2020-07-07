import React, { Component } from "react";

import { ErrorModal } from "./ErrorModal";

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
      let message = <p className="text-center">Please specify a location.</p>;
      if (isLoading) {
        message = <p className="text-center">Fetching weather data...</p>;
      } else if (location) {
        if (temp !== undefined) {
          message = <p className="text-center">It's {temp} in {location}.</p>;
        } else {
          console.log(">>> DEBUG: check 1");
          message = <ErrorModal message="{`City not found: ${location}`}"/>
        }
      }

      return message;
    };

    return <div className="weather-info">{renderMessage()}</div>;
  }
}
