import { weather } from "../api";

export const setCurrentWeatherLoading = () => ({
  type: "SET_CURRENT_WEATHER_LOADING"
});

export const setCurrentWeatherSuccess = data => ({
  type: "SET_CURRENT_WEATHER_SUCCESS",
  payload: data
});

export const setCurrentWeatherError = () => ({
  type: "SET_CURRENT_WEATHER_ERROR"
});

export const getCurrentWeather = () => {
  return dispatch => {
    dispatch(setCurrentWeatherLoading());

    return weather()
      .then(res => dispatch(setCurrentWeatherSuccess(res)))
      .catch(() => dispatch(setCurrentWeatherError()));
  };
};

export default { getCurrentWeather };
