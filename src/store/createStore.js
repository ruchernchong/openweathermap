import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import rootReducer from "../reducers";

const middlewares = [thunk];

const logger = createLogger({
  collapsed: true
});

if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middlewares))
);

export default store;
