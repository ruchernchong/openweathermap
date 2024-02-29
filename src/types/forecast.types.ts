export const SET_FORECAST_LOADING: string = "SET_FORECAST_LOADING";
export const SET_FORECAST_SUCCESS: string = "SET_FORECAST_SUCCESS";
export const SET_FORECAST_ERROR: string = "SET_FORECAST_ERROR";

export interface ForecastState {
  data: object | Forecast;
  error: boolean;
  loading: boolean;
}

export interface Forecast {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: object;
  daily: object[];
  hourly: object[];
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
  payload: Forecast;
}

interface ForecastErrorType {
  type: typeof SET_FORECAST_ERROR;
}

export type ForecastActionTypes =
  | ForecastLoadingType
  | ForecastSuccessType
  | ForecastErrorType;
