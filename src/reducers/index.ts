import { combineReducers } from "redux";
import { chartReducer } from "./chartReducer";
import { forecastReducer } from "./forecastReducer";
import { weatherReducer } from "./weatherReducer";

const appReducer = combineReducers({
  chart: chartReducer,
  forecast: forecastReducer,
  weather: weatherReducer
});

export const rootReducer = (state, action) => appReducer(state, action);
