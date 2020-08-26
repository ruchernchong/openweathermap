import apiWeather from "../api/apiWeather";

import {
  SET_WEATHER_ERROR,
  SET_WEATHER_LOADING,
  SET_WEATHER_SUCCESS,
  Weather,
  WeatherActionTypes
} from "../types/weather.types";

export const setWeatherLoading = (): WeatherActionTypes => ({
  type: SET_WEATHER_LOADING
});

export const setWeatherSuccess = (data: Weather): WeatherActionTypes => ({
  type: SET_WEATHER_SUCCESS,
  payload: data
});

export const setWeatherError = (): WeatherActionTypes => ({
  type: SET_WEATHER_ERROR
});

export const getCurrentWeather = () => {
  return dispatch => {
    dispatch(setWeatherLoading());

    return apiWeather()
      .then(res => dispatch(setWeatherSuccess(res)))
      .catch(() => dispatch(setWeatherError()));
  };
};

export default { getCurrentWeather };
