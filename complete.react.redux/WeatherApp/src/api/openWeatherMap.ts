import axios, { AxiosResponse } from "axios";

export interface IWeatherData {
  main: { temp: number};
}

const OPEN_WEATHER_MAP_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "3f9c86dd89c4290ecac9e542ca7cb576";

export function fetchWeatherData(location: string): Promise<IWeatherData> {
  return axios.get(OPEN_WEATHER_MAP_URL, {
    params: {
      appid: API_KEY,
      units: "metric",
      q: location
    }
  }).then((response) => {
    return response.data as IWeatherData;
  });
}