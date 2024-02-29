export const SET_FORECAST_LOADING = "SET_FORECAST_LOADING";
export const SET_FORECAST_SUCCESS = "SET_FORECAST_SUCCESS";
export const SET_FORECAST_ERROR = "SET_FORECAST_ERROR";

export interface ForecastState {
  data: Forecast | null;
  error: boolean;
  loading: boolean;
}

export interface TempRange {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

export interface Weather {
  id: number;
  description: string;
  icon: string;
  main: string;
}

export interface Daily {
  dt: number;
  humidity: number;
  sunrise: number;
  sunset: number;
  temp: TempRange;
  weather: Weather[];
}

export interface Hourly {
  dt: number;
  humidity: number;
  temp: number;
  weather: Weather[];
}

export interface Forecast {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: object;
  daily: Daily[];
  hourly: Hourly[];
}

export interface ForecastOptions {
  lat: number;
  lon: number;
  exclude?: string[];
}

interface ForecastLoadingType {
  type: typeof SET_FORECAST_LOADING;
}

interface ForecastSuccessType {
  type: typeof SET_FORECAST_SUCCESS;
  payload: object;
}

interface ForecastErrorType {
  type: typeof SET_FORECAST_ERROR;
}

export type ForecastActionTypes =
  | ForecastLoadingType
  | ForecastSuccessType
  | ForecastErrorType;
