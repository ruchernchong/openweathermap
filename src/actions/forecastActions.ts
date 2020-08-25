import { onecall } from "../api";

import {
  ForecastActionTypes,
  ForecastOptions,
  SET_FORECAST_LOADING,
  SET_FORECAST_SUCCESS,
  SET_FORECAST_ERROR
} from "../types/forecast.types";

export const setForecastLoading = (): ForecastActionTypes => ({
  type: SET_FORECAST_LOADING
});

export const setForecastSuccess = (data): ForecastActionTypes => ({
  type: SET_FORECAST_SUCCESS,
  payload: data
});

export const setForecastError = (): ForecastActionTypes => ({
  type: SET_FORECAST_ERROR
});

export const getForecast = (options: ForecastOptions) => {
  return dispatch => {
    dispatch(setForecastLoading());

    return onecall(options)
      .then(res => dispatch(setForecastSuccess(res)))
      .catch(() => dispatch(setForecastError()));
  };
};

export default { getForecast };
