import { apiForecast } from "../api/apiForecast";

import {
  Forecast,
  ForecastActionTypes,
  ForecastOptions,
  SET_FORECAST_ERROR,
  SET_FORECAST_LOADING,
  SET_FORECAST_SUCCESS
} from "../types/forecast.types";

export const setForecastLoading = (): ForecastActionTypes => ({
  type: SET_FORECAST_LOADING
});

export const setForecastSuccess = (data: Forecast): ForecastActionTypes => ({
  type: SET_FORECAST_SUCCESS,
  payload: data
});

export const setForecastError = (): ForecastActionTypes => ({
  type: SET_FORECAST_ERROR
});

export const getForecast = (options: ForecastOptions) => {
  return dispatch => {
    dispatch(setForecastLoading());

    return apiForecast(options)
      .then(res => dispatch(setForecastSuccess(res)))
      .catch(() => dispatch(setForecastError()));
  };
};

export default { getForecast };
