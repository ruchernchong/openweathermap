export const SET_WEATHER_LOADING = "SET_WEATHER_LOADING";
export const SET_WEATHER_SUCCESS = "SET_WEATHER_SUCCESS";
export const SET_WEATHER_ERROR = "SET_WEATHER_ERROR";

export interface WeatherState {
  data: object | Weather;
  error: boolean;
  loading: boolean;
}

export interface Weather {
  coord: object;
  weather: object[];
  base: string;
  main: object;
  visibility: number;
  wind: object;
  clouds: object;
  dt: number;
  sys: object;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface setWeatherLoading {
  type: typeof SET_WEATHER_LOADING;
}

interface setWeatherSuccess {
  type: typeof SET_WEATHER_SUCCESS;
  payload: object;
}

interface setWeatherError {
  type: typeof SET_WEATHER_ERROR;
}

export type WeatherActionTypes =
  | setWeatherLoading
  | setWeatherSuccess
  | setWeatherError;
