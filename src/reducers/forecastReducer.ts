import {
  ForecastActionTypes,
  ForecastState,
  SET_FORECAST_ERROR,
  SET_FORECAST_LOADING,
  SET_FORECAST_SUCCESS
} from "../types/forecast.types";

const initialState: ForecastState = {
  data: {},
  error: false,
  loading: false
};

export const forecastReducer = (
  state = initialState,
  action: ForecastActionTypes
): ForecastState => {
  switch (action.type) {
    case SET_FORECAST_LOADING:
      return { ...state, error: false, loading: true };
    case SET_FORECAST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: false,
        loading: false
      };
    case SET_FORECAST_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      };
    default:
      return state;
  }
};
