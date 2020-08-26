import { combineReducers } from "redux";

import chart from "./chartReducer";
import forecast from "./forecastReducer";
import weather from "./weatherReducer";

const appReducer = combineReducers({ chart, forecast, weather });

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
