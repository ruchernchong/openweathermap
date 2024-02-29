import {
  SET_WEATHER_ERROR,
  SET_WEATHER_LOADING,
  SET_WEATHER_SUCCESS,
  WeatherActionTypes,
  WeatherState
} from "../types/weather.types";

const initialState: WeatherState = {
  data: {},
  error: false,
  loading: false
};

export const weatherReducer = (
  state = initialState,
  action: WeatherActionTypes
): WeatherState => {
  switch (action.type) {
    case SET_WEATHER_LOADING:
      return { ...state, loading: true };
    case SET_WEATHER_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case SET_WEATHER_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
