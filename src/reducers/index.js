import { combineReducers } from "redux";

import forecast from "./forecastReducer";
import weather from "./weatherReducer";

const appReducer = combineReducers({
  forecast,
  weather
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
