export const SET_CURRENT_WEATHER_LOADING = "SET_CURRENT_WEATHER_LOADING";
export const SET_CURRENT_WEATHER_SUCCESS = "SET_CURRENT_WEATHER_SUCCESS";
export const SET_CURRENT_WEATHER_ERROR = "SET_CURRENT_WEATHER_ERROR";

export interface WeatherState {
  current: object;
  error: boolean;
  loading: boolean;
}
